import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { isEmailJsConfigured, sendContactEmail } from '../lib/emailjs';

const initialForm = {
  from_name: '',
  from_email: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage('');

    if (!form.from_name.trim() || !form.from_email.trim() || !form.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in your name, email, and message.');
      return;
    }

    if (!isEmailJsConfigured()) {
      setStatus('error');
      setErrorMessage('Email service is not configured. Add your EmailJS keys to a .env file.');
      return;
    }

    setStatus('sending');

    try {
      await sendContactEmail(form);
      setStatus('success');
      setForm(initialForm);
    } catch (error) {
      setStatus('error');
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Something went wrong while sending your message. Please try again.'
      );
    }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen section-muted">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow eyebrow-accent mb-4">Contact</p>
            <h1 className="display-section mb-6">
              Let&apos;s build<br /><span className="text-accent">something real.</span>
            </h1>
            <p className="body-lead mb-12 max-w-md">
              Have a project in mind? Reach out and we&apos;ll respond within one business day.
            </p>

            <div className="space-y-8">
              <div>
                <p className="eyebrow mb-2">Email</p>
                <a
                  href="mailto:hello@veriencestudio.com"
                  className="text-lg font-medium hover:text-accent transition-colors"
                >
                  hello@veriencestudio.com
                </a>
              </div>
              <div>
                <p className="eyebrow mb-2">Phone</p>
                <p className="text-lg font-medium">+91 9599454313</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card-light"
          >
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="from_name" className="mb-2 block text-sm text-[color:var(--text-muted)]">
                  Name
                </label>
                <input
                  id="from_name"
                  name="from_name"
                  type="text"
                  value={form.from_name}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="Your name"
                  autoComplete="name"
                  disabled={status === 'sending'}
                  required
                />
              </div>

              <div>
                <label htmlFor="from_email" className="mb-2 block text-sm text-[color:var(--text-muted)]">
                  Email
                </label>
                <input
                  id="from_email"
                  name="from_email"
                  type="email"
                  value={form.from_email}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="you@company.com"
                  autoComplete="email"
                  disabled={status === 'sending'}
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm text-[color:var(--text-muted)]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  className="input-field resize-none"
                  placeholder="Tell us about your project..."
                  disabled={status === 'sending'}
                  required
                />
              </div>

              {status === 'success' ? (
                <p className="rounded-xl border border-[rgba(47,107,255,0.15)] bg-[var(--color-accent-soft)] px-4 py-3 text-sm text-[var(--color-accent)]">
                  Message sent. We&apos;ll get back to you within one business day.
                </p>
              ) : null}

              {status === 'error' && errorMessage ? (
                <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {errorMessage}
                </p>
              ) : null}

              <Button
                type="submit"
                variant="accent"
                className="w-full disabled:cursor-not-allowed disabled:opacity-60"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : 'Send message'}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
