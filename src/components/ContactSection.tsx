import { useState } from 'react';
import { motion } from 'framer-motion';
import './ContactSection.css';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    setStatus('loading');
    setStatusMessage('');

    try {
      // Option 1: Using your own backend API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Option 2: Using Formspree (uncomment to use)
      // const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });

      // Option 3: Using EmailJS (uncomment to use)
      // const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     service_id: 'YOUR_SERVICE_ID',
      //     template_id: 'YOUR_TEMPLATE_ID',
      //     user_id: 'YOUR_PUBLIC_KEY',
      //     template_params: formData
      //   }),
      // });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      setStatus('success');
      setStatusMessage('Message sent successfully! I\'ll get back to you soon. 🎉');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setStatusMessage('');
      }, 5000);

    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
      setStatusMessage('Failed to send message. Please try again or contact me directly at vivek@example.com');
      
      // Clear error message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setStatusMessage('');
      }, 5000);
    }
  };

  const isFormValid = formData.name.trim() && formData.email.trim() && formData.message.trim();

  return (
    <>
      <section className="contact" id="contact">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">{'// contact'}</span>
          <h2 className="contact-title">Get In Touch</h2>
        </motion.div>

        <motion.p
          className="contact-desc"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          I'm currently looking for new opportunities. Whether you have a question
          or just want to say hi, my inbox is always open!
        </motion.p>

        <motion.div
          className="contact-form"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className={`form-input ${errors.name ? 'error' : ''}`}
              disabled={status === 'loading'}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className={`form-input ${errors.email ? 'error' : ''}`}
              disabled={status === 'loading'}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className={`form-textarea ${errors.message ? 'error' : ''}`}
              rows={6}
              disabled={status === 'loading'}
            />
            {errors.message && <span className="error-message">{errors.message}</span>}
          </div>

          <motion.button
            onClick={handleSubmit}
            className={`contact-btn ${status === 'loading' ? 'loading' : ''}`}
            disabled={!isFormValid || status === 'loading'}
            whileHover={isFormValid && status !== 'loading' ? { scale: 1.05 } : {}}
            whileTap={isFormValid && status !== 'loading' ? { scale: 0.97 } : {}}
          >
            {status === 'loading' ? 'Sending...' : 'Say Hello →'}
          </motion.button>

          {statusMessage && (
            <motion.p
              className={`status ${status}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {statusMessage}
            </motion.p>
          )}
        </motion.div>
      </section>

      <footer className="footer">
        <p>Built by Vivek Pant · {new Date().getFullYear()}</p>
      </footer>
    </>
  );
};

export default ContactSection;