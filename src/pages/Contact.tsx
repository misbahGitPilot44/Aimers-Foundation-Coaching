import React, { useState } from 'react';
import { Instagram, Linkedin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/xqevvloz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again later.');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="section-title">Contact</h1>
        <p className="text-lg mb-8">
          Reach out to us directly or use the form below to get in touch.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="card space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border-2 border-[var(--accent)] bg-[var(--secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border-2 border-[var(--accent)] bg-[var(--secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 rounded-lg border-2 border-[var(--accent)] bg-[var(--secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
              placeholder="Your message"
            />
          </div>

          <button
            type="submit"
            className="btn-primary inline-flex items-center w-full justify-center"
            disabled={status === 'success'}
          >
            <Send className="w-5 h-5 mr-2" />
            Send Message
          </button>

          {status === 'success' && (
            <p className="text-green-600 text-center">
              Thank you! Your message has been sent successfully.
            </p>
          )}
          {status === 'error' && (
            <p className="text-red-600 text-center">{errorMessage}</p>
          )}
        </form>

        <div className="mt-8 text-center">
          <p className="text-lg mb-4">Or contact us directly:</p>
          <p className="text-lg mb-8">Email: aimersfoundationcoaching19@gmail.com</p>

          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://www.linkedin.com/company/sau-acm-student-chapter"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] hover:text-[#0D9488]"
            >
              <Linkedin className="h-5 w-5 text-black" />
            </a>
            <a
              href="https://www.instagram.com/sau_acmchapter?igsh=MThkeXliYm1taHkxZQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] hover:text-[#0D9488]"
            >
              <Instagram className="h-5 w-5 text-black" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
