import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
  const socialLinks = [
    { href: "https://facebook.com", icon: "fa-facebook-f", bgColor: "bg-blue-700 hover:bg-blue-800" },
    { href: "https://twitter.com", icon: "fa-twitter", bgColor: "bg-blue-600 hover:bg-blue-700" },
    { href: "https://instagram.com", icon: "fa-instagram", bgColor: "bg-pink-700 hover:bg-pink-800" },
    { href: "https://linkedin.com", icon: "fa-linkedin-in", bgColor: "bg-blue-900 hover:bg-blue-950" },
  ];

  const contactInfo = [
    { label: "Phone", value: "(123) 456-7890" },
    { label: "Email", value: "support@BashBarn.com" },
    { label: "Address", value: "1234 Insurance Lane, Suite 100, City, State, 12345" },
  ];

  return (
    <footer className="bg-[#000225] py-8 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-4">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`p-2 rounded-full ${link.bgColor} transition-colors duration-300`}
              >
                <i className={`fab ${link.icon} text-white text-lg`}></i>
              </a>
            ))}
          </div>
          
          {/* Contact Info */}
          <div className="text-center space-y-2">
            {contactInfo.map((info, index) => (
              <p key={index} className="text-sm">
                <span className="font-semibold">{info.label}:</span> {info.value}
              </p>
            ))}
          </div>
          
          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm">© 2024 BashBarn. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;