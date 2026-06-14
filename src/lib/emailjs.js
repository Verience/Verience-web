import emailjs from '@emailjs/browser';

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const adminTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const autoReplyTemplateId = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export function isEmailJsConfigured() {
  return Boolean(serviceId && adminTemplateId && publicKey);
}

export async function sendContactEmail({ from_name, from_email, message }) {
  if (!isEmailJsConfigured()) {
    throw new Error('Email service is not configured yet.');
  }

  const templateParams = {
    from_name: from_name.trim(),
    from_email: from_email.trim(),
    message: message.trim(),
  };

  await emailjs.send(serviceId, adminTemplateId, templateParams, { publicKey });

  if (autoReplyTemplateId) {
    await emailjs.send(serviceId, autoReplyTemplateId, templateParams, { publicKey });
  }
}
