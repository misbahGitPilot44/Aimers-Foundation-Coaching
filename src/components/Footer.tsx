import React from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const quickLinks = [
    { label: 'About Us', path: '/about' },
    { label: 'Events', path: '/events' },
    { label: 'Membership', path: '/membership' },
    { label: 'Resources', path: '/resources' },
    { label: 'Blog', path: '/blog' },
  ];

  const contactInfo = [
    { icon: <Mail className="h-4 w-4" />, text: 'acmstudentchapter@sau.int' },
    { icon: <Phone className="h-4 w-4" />, text: '+91 8595251673' },
    { icon: <MapPin className="h-4 w-4" />, text: 'South Asian University, New Delhi' },
  ];

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, url: 'https://github.com/SAU-ACM-Student-Chapter', label: 'GitHub' },
    { icon: <Linkedin className="h-5 w-5" />, url: 'https://in.linkedin.com/in/sau-acm-student-chapter-382812356', label: 'LinkedIn' },
    { icon: <Instagram className="h-5 w-5" />, url: 'https://www.instagram.com/sau_acmchapter/', label: 'Instagram' },
    { 
      icon: <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor">
              <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239s23.409-59.241,52.844-59.241c29.665,0,53.306,26.82,52.843,59.241C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239s23.409-59.241,52.843-59.241c29.667,0,53.307,26.82,52.844,59.241C470.918,310.993,447.538,337.58,417.871,337.58Z"/>
            </svg>, 
      url: 'https://discord.gg/sau-acm', 
      label: 'Discord' 
    },
  ];

  return (
    <footer className="bg-[#1F2937] text-[#F9FAFB] border-t-2 border-[#374151] rounded-t-xl">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center group mb-4">
              <img 
                src={import.meta.env.BASE_URL + "sau-acm-logo.png"} 
                alt="SAU ACM Student Chapter" 
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-gray-300 mb-6">
              The South Asian University ACM Student Chapter is dedicated to advancing computing 
              innovation across South Asia through workshops, events, and collaborative learning.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#1e6cff] transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-[#1e6cff] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-center text-gray-300 text-sm">
                  <span className="mr-2">{info.icon}</span>
                  {info.text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t-2 border-[#374151] text-center text-sm text-gray-300">
          <p>© 2025 SAU ACM Student Chapter. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
