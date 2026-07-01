import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
} from 'lucide-react';
import Button from '../components/ui/Button';
import WhatsAppIcon from '../components/ui/WhatsAppIcon';
import { isEmailJsConfigured, sendContactEmail } from '../lib/emailjs';
import { SITE } from '../lib/seo';

const initialForm = {
  from_name: '',
  from_email: '',
  message: '',
};

const contactChannels = [
  {
    icon: Mail,
    label: 'Email',
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    hint: 'Best for project briefs and proposals',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 8368759792',
    href: 'tel:+918368759792',
    hint: 'Weekdays, 10am to 7pm IST',
  },
  {
    icon: WhatsAppIcon,
    label: 'WhatsApp',
    value: '+91 8368759792',
    href: SITE.social.whatsapp,
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@veriencestudio',
    href: SITE.social.instagram,
    hint: 'Behind-the-scenes and recent work',
  },
  {
    icon: Facebook,
    label: 'Facebook',
    value: 'Verience Studio',
    href: SITE.social.facebook,
    hint: 'Updates, reels, and studio news',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Verience',
    href: SITE.social.linkedin,
    hint: 'Company updates and case studies',
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

function ContactChannelCard({ channel, index }) {
  const Icon = channel.icon;

  return (
    <motion.a
      href={channel.href}
      target={channel.href.startsWith('http') ? '_blank' : undefined}
      rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.12 + index * 0.06 }}
      className="group card-light !p-5 flex items-start gap-4 transition-all hover:-translate-y-0.5"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-accent-soft)] text-[var(--color-accent)] transition-colors group-hover:bg-[var(--color-accent)] group-hover:text-white">
        <Icon size={18} {...(Icon === WhatsAppIcon ? {} : { strokeWidth: 1.75 })} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="eyebrow mb-1">{channel.label}</p>
        <p className="truncate font-medium text-[color:var(--text-color)]">{channel.value}</p>
        <p className="mt-1 text-sm text-[color:var(--text-muted)]">{channel.hint}</p>
      </div>
      <ArrowUpRight
        size={16}
        className="mt-1 shrink-0 text-[color:var(--text-muted)] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--color-accent)]"
      />
    </motion.a>
  );
}

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
    <div className="relative min-h-screen overflow-hidden bg-grid section-muted">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-[var(--color-accent)]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[var(--color-accent)]/8 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1400px] px-6 pb-24 pt-32 md:px-12">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-3xl"
        >
          <p className="eyebrow eyebrow-accent mb-4">Contact</p>
          <h1 className="display-section mb-6">
            Let&apos;s build<br />
            <span className="text-accent">something real.</span>
          </h1>
          <p className="body-lead max-w-2xl">
            Share your idea, timeline, and goals. We&apos;ll reply within one business day with next
            steps, not a generic pitch deck.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="space-y-4 lg:col-span-5">
            {contactChannels.map((channel, index) => (
              <ContactChannelCard key={channel.label} channel={channel} index={index} />
            ))}

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.48 }}
              className="card-dark !p-6"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[var(--color-accent)]">
                  <Clock3 size={18} strokeWidth={1.75} />
                </div>
                <div>
                  <p className="font-display text-lg font-medium">Fast response</p>
                  <p className="text-sm text-white/55">Usually within 24 hours on business days</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <div className="font-display text-2xl font-medium text-[var(--color-accent)]">1 day</div>
                  <div className="text-xs uppercase tracking-wider text-white/45">Avg. reply time</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <div className="font-display text-2xl font-medium text-[var(--color-accent)]">{SITE.founded}</div>
                  <div className="text-xs uppercase tracking-wider text-white/45">Studio founded</div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="relative overflow-hidden rounded-[20px] border border-[var(--color-hairline)] bg-[var(--color-canvas-light)] p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] md:p-9">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[var(--color-accent-soft)] to-transparent"
              />

              <div className="relative mb-8">
                <p className="eyebrow eyebrow-accent mb-3">Project inquiry</p>
                <h2 className="font-display text-2xl font-medium tracking-tight md:text-3xl">
                  Tell us what you&apos;re building
                </h2>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-[color:var(--text-muted)]">
                  A few lines about your product, audience, and timeline is enough to get started.
                </p>
              </div>

              <form className="relative space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm text-[color:var(--text-muted)]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={form.message}
                    onChange={handleChange}
                    className="input-field resize-none"
                    placeholder="What are you building? Who is it for? Any launch date or budget range?"
                    disabled={status === 'sending'}
                    required
                  />
                </div>

                {status === 'success' ? (
                  <div className="flex items-start gap-3 rounded-xl border border-[rgba(47,107,255,0.15)] bg-[var(--color-accent-soft)] px-4 py-4 text-sm text-[var(--color-accent)]">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium">Message sent successfully</p>
                      <p className="mt-1 text-[color:var(--color-accent)]/80">
                        We&apos;ll get back to you within one business day.
                      </p>
                    </div>
                  </div>
                ) : null}

                {status === 'error' && errorMessage ? (
                  <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    {errorMessage}
                  </p>
                ) : null}

                <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-[color:var(--text-muted)]">
                    By sending this form, you agree we may contact you about your inquiry.
                  </p>
                  <Button
                    type="submit"
                    variant="accent"
                    className="w-full shrink-0 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:min-w-[180px]"
                    disabled={status === 'sending'}
                  >
                    {status === 'sending' ? 'Sending...' : 'Send message'}
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
