import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Twitter, 
  Linkedin, 
  Github, 
  Mail, 
  Heart,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    Product: [
      { name: 'Features', href: '/features' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Templates', href: '/templates' },
      { name: 'Integrations', href: '/integrations' },
      { name: 'API', href: '/api' }
    ],
    Company: [
      { name: 'About', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press', href: '/press' },
      { name: 'Contact', href: '/contact' }
    ],
    Resources: [
      { name: 'Help Center', href: '/help' },
      { name: 'Documentation', href: '/docs' },
      { name: 'Community', href: '/community' },
      { name: 'Tutorials', href: '/tutorials' },
      { name: 'Status', href: '/status' }
    ],
    Legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'GDPR', href: '/gdpr' },
      { name: 'Security', href: '/security' }
    ]
  };

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/thinkspace' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/thinkspace' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/thinkspace' },
    { name: 'Email', icon: Mail, href: 'mailto:hello@thinkspace.com' }
  ];

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img className="w-10" src="./globe.svg" alt="logo" />
              <h3 className="text-2xl font-bold text-orange-500">
                Think<span className="text-white">Space</span>
              </h3>
            </Link>
            
            <p className="text-neutral-400 leading-relaxed mb-8 max-w-md">
              The modern platform for writers who want to share their thoughts, 
              build their audience, and monetize their content. Join thousands of 
              creators who are already making their mark.
            </p>

            {/* Newsletter Signup */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4">Stay updated</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-neutral-400 focus:outline-none focus:border-orange-500 transition-colors"
                />
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow us</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-neutral-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors group"
                    >
                      <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-lg font-semibold mb-6">{category}</h4>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-neutral-400 hover:text-orange-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-neutral-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-orange-500 fill-current" />
              <span>by the ThinkSpace team</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-neutral-400">
              <span>© 2024 ThinkSpace. All rights reserved.</span>
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 hover:text-orange-400 transition-colors"
              >
                <ArrowUp className="w-4 h-4" />
                Back to top
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
