import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-900 pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-gold-500 mb-6 uppercase tracking-widest">
          DR Makeovers
        </h2>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12 text-gray-400 font-light">
          <p className="text-lg">+91 95536 73711</p>
          <p className="text-lg">Divyareddy.bodanapu@gmail.com</p>
        </div>

        <p className="max-w-xl mx-auto text-gray-400 text-sm mb-12 leading-relaxed">
             Lb ngr Chintalkunta check post
        </p>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>© {new Date().getFullYear()} DR Makeovers. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
             <span className="hover:text-gold-500 cursor-pointer transition">Privacy Policy</span>
             <span className="hover:text-gold-500 cursor-pointer transition">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;