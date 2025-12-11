import React, { useState } from 'react';

const Contact: React.FC = () => {
  // --- Form state & validation ---
  const [date, setDate] = useState<string>('');
  const [time, setTime] = useState<string>('');
  const [service, setService] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [errors, setErrors] = useState<{
    date?: string;
    service?: string;
    name?: string;
    phone?: string;
    message?: string;
  }>({});

  const validate = () => {
    const newErrors: typeof errors = {};

    if (!name.trim()) newErrors.name = 'Please enter your name.';
    // Basic phone validation: digits, allow leading +, length 7-15
    const phoneValue = phone.replace(/\s+/g, '');
    if (!phoneValue) newErrors.phone = 'Please enter your phone number.';
    else if (!/^\+?\d{7,15}$/.test(phoneValue)) newErrors.phone = 'Enter a valid phone number (digits only).';

    if (!service || service === 'Select Service...') newErrors.service = 'Please select a service.';
    if (!date) newErrors.date = 'Please pick a date.';
    if (!message.trim()) newErrors.message = 'Please add a message or details.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const phoneDigitsFrom = (raw: string) => {
    // keep leading + if present, otherwise digits only
    const plus = raw.trim().startsWith('+') ? '+' : '';
    const digits = raw.replace(/[^\d]/g, '');
    return plus + digits;
  };

  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const phoneForMsg = phone.startsWith('+') ? phone : phoneDigitsFrom(phone);
    const formattedMessage = [
      'Hello! Thank you for contacting DR Makeovers 😊',
      'Here are the booking details:',
      `• Name: ${name}`,
      `• Phone: ${phoneForMsg}`,
      `• Service: ${service}`,
      `• Preferred Date: ${date}${time ? ` ${time}` : ''}`,
      `• Message: ${message}`,
      '',
      'Please confirm, and we'll get back to you shortly ❤️'
    ].join('\n');

    // Replace with your WhatsApp phone number (international format, no +). Current: 919553673711
    const myNumber = '919553673711';
    const url = `https://wa.me/${myNumber}?text=${encodeURIComponent(formattedMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="pt-20 min-h-screen bg-dark-900">
       <div className="bg-dark-800 py-16 text-center border-b border-gray-800">
        <h1 className="text-4xl md:text-6xl font-serif text-gold-500 mb-4">Get In Touch</h1>
        <p className="text-gray-400 font-light">We'd love to hear from you</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Info */}
        <div className="space-y-12">
            <div>
                <h3 className="text-2xl font-serif text-white mb-6">Visit Us</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                    1st Floor, Stone Ridge Center,<br/>
                    Bikanervala opp street, above ICICI Bank,<br/>
                    Kondapur, Whitefields,<br/>
                    Hyderabad, Telangana 500084
                </p>
            </div>

            <div>
                <h3 className="text-2xl font-serif text-white mb-4">Direct Contact</h3>
                <p className="text-gold-500 text-xl mb-2">+91 95536 73711</p>
                <p className="text-gray-400">contact@drmakeovers.com</p>
            </div>
        </div>

        {/* Booking Form */}
        <div className="bg-dark-800 p-8 border border-gray-700">
          <h3 className="text-2xl font-serif text-white mb-6 text-center">Request an Appointment</h3>
          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="date"
                className="w-full bg-dark-900 border border-gray-600 p-3 text-white focus:border-gold-500 focus:outline-none"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                aria-invalid={!!errors.date}
              />
              <input
                type="time"
                className="w-full bg-dark-900 border border-gray-600 p-3 text-white focus:border-gold-500 focus:outline-none"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>

            <div>
              <select
                className="w-full bg-dark-900 border border-gray-600 p-3 text-white focus:border-gold-500 focus:outline-none"
                value={service}
                onChange={(e) => setService(e.target.value)}
                aria-invalid={!!errors.service}
              >
                <option>Select Service...</option>
                <option>Hair Cut</option>
                <option>Coloring</option>
                <option>Facial</option>
              </select>
              {errors.service && <p className="text-red-400 text-sm mt-1">{errors.service}</p>}
            </div>

            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-dark-900 border border-gray-600 p-3 text-white focus:border-gold-500 focus:outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
                aria-invalid={!!errors.name}
              />
              {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <input
                type="tel"
                placeholder="Your Phone"
                className="w-full bg-dark-900 border border-gray-600 p-3 text-white focus:border-gold-500 focus:outline-none"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                aria-invalid={!!errors.phone}
              />
              {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
            </div>

            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-dark-900 border border-gray-600 p-3 text-white focus:border-gold-500 focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <textarea
                placeholder="Message"
                className="w-full bg-dark-900 border border-gray-600 p-3 text-white focus:border-gold-500 focus:outline-none min-h-[120px]"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                aria-invalid={!!errors.message}
              />
              {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gold-600 text-white font-bold hover:bg-gold-500 transition"
            >
              REQUEST BOOKING
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;