

// import React, { useState } from 'react';

// const BookOnline: React.FC = () => {
//   // Using specific high-quality images for the services
//   const manicureImg = "https://images.unsplash.com/photo-1610992015768-e4d0d3c01579?q=80&w=2070&auto=format&fit=crop";
//   // Updated Coloring image: Woman with foils/hair dye application
//   const coloringImg = "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=2070&auto=format&fit=crop";

//   const categories = [
//     { name: "Hair Styling", img: "https://res.cloudinary.com/dkivpkaaj/image/upload/v1764849455/Screenshot_2025-12-04_172623_g6je1v.jpg" },
//     { name: " Hair Coloring", img:"https://res.cloudinary.com/dkivpkaaj/image/upload/v1765180804/dye_pt7hs6.jpg" },
//     { name: "Manicure", img: "https://res.cloudinary.com/dkivpkaaj/image/upload/v1764847323/1_wqnggv.jpg" },
//     { name: "Bridal", img: "https://res.cloudinary.com/dkivpkaaj/image/upload/v1764849848/Screenshot_2025-12-04_173337_r3m0xu.jpg" },
//     { name: "Mens Grooming", img: "https://res.cloudinary.com/dkivpkaaj/image/upload/v1765180975/mens_pxjfkt.jpg" },
//   ];

//   const handleBookNow = (serviceName: string) => {
//     // Updated phone number as requested
//     const phoneNumber = '919553673711';
//     // Dynamically insert the service name into the message
//     const message = `I want to reach out to you regarding ${serviceName}. Can you provide this service?`;
//     const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
//     window.open(url, '_blank');
//   };

//   // --- Form state & validation ---
//   const [date, setDate] = useState<string>('');
//   const [time, setTime] = useState<string>('');
//   const [service, setService] = useState<string>('');
//   const [name, setName] = useState<string>('');
//   const [phone, setPhone] = useState<string>('');
//   const [email, setEmail] = useState<string>('');
//   const [message, setMessage] = useState<string>('');

//   const [errors, setErrors] = useState<{
//     date?: string;
//     service?: string;
//     name?: string;
//     phone?: string;
//     message?: string;
//   }>({});

//   const validate = () => {
//     const newErrors: typeof errors = {};

//     if (!name.trim()) newErrors.name = 'Please enter your name.';
//     // Basic phone validation: digits, allow leading +, length 7-15
//     const phoneDigits = phone.replace(/\s+/g, '');
//     if (!phoneDigits) newErrors.phone = 'Please enter your phone number.';
//     else if (!/^\+?\d{7,15}$/.test(phoneDigits)) newErrors.phone = 'Enter a valid phone number (digits only).';

//     if (!service || service === 'Select Service...') newErrors.service = 'Please select a service.';
//     if (!date) newErrors.date = 'Please pick a date.';
//     if (!message.trim()) newErrors.message = 'Please add a message or details.';

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit: React.FormEventHandler = (e) => {
//     e.preventDefault();

//     if (!validate()) {
//       // focus first invalid field logic could be added if desired
//       return;
//     }

//     const phoneForMsg = phone.startsWith('+') ? phone : phoneDigitsFrom(phone);
//     const formattedMessage = [
//       'Appointment Request',
//       `Name: ${name}`,
//       `Phone: ${phoneForMsg}`,
//       `Service: ${service}`,
//       `Date: ${date}${time ? ` at ${time}` : ''}`,
//       `Message: ${message}`,
//       email ? `Email: ${email}` : undefined,
//     ].filter(Boolean).join('\n');

//     // Replace with your WhatsApp phone number (international format, no +). Current: 919553673711
//     const myNumber = '919553673711';
//     const url = `https://wa.me/${myNumber}?text=${encodeURIComponent(formattedMessage)}`;
//     window.open(url, '_blank');
//   };

//   const phoneDigitsFrom = (raw: string) => {
//     const d = raw.replace(/[^\d+]/g, '');
//     return d;
//   };

//   return (
//     <div className="pt-20 min-h-screen bg-dark-900">
//       <div className="bg-dark-800 py-16 text-center border-b border-gray-800">
//         <h1 className="text-4xl md:text-6xl font-serif text-gold-500 mb-4">Book Online</h1>
//         <p className="text-gray-400 font-light">Select a service to schedule your appointment</p>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {categories.map((cat, idx) => (
//             <div key={idx} className="group relative h-80 overflow-hidden cursor-pointer border border-gray-800">
//               <img 
//                 src={cat.img} 
//                 alt={cat.name}
//                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" 
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
//               <div className="absolute bottom-0 left-0 p-6 w-full">
//                 <h3 className="text-2xl font-serif text-white mb-3">{cat.name}</h3>
//                 <div className="flex justify-start">
//                   <button 
//                     onClick={() => handleBookNow(cat.name)}
//                     className="px-6 py-2 border border-white/30 text-sm uppercase hover:bg-gold-600 hover:text-white hover:border-gold-600 transition tracking-wider bg-black/40 backdrop-blur-sm"
//                   >
//                     Book Now
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
        
//         {/* Calendar Mockup */}
//         <div className="mt-20 max-w-2xl mx-auto bg-dark-800 p-8 border border-gray-700">
//           <h3 className="text-2xl font-serif text-white mb-6 text-center">Request an Appointment</h3>
//           <form className="space-y-4" onSubmit={handleSubmit} noValidate>
//             <div className="grid grid-cols-2 gap-4">
//               <input
//                 type="date"
//                 className="w-full bg-dark-900 border border-gray-600 p-3 text-white focus:border-gold-500 focus:outline-none"
//                 value={date}
//                 onChange={(e) => setDate(e.target.value)}
//                 aria-invalid={!!errors.date}
//               />
//               <input
//                 type="time"
//                 className="w-full bg-dark-900 border border-gray-600 p-3 text-white focus:border-gold-500 focus:outline-none"
//                 value={time}
//                 onChange={(e) => setTime(e.target.value)}
//               />
//             </div>
//             <div>
//               <select
//                 className="w-full bg-dark-900 border border-gray-600 p-3 text-white focus:border-gold-500 focus:outline-none"
//                 value={service}
//                 onChange={(e) => setService(e.target.value)}
//                 aria-invalid={!!errors.service}
//               >
//                 <option>Select Service...</option>
//                 <option>Hair Cut</option>
//                 <option>Coloring</option>
//                 <option>Facial</option>
//               </select>
//               {errors.service && <p className="text-red-400 text-sm mt-1">{errors.service}</p>}
//             </div>

//             <div>
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 className="w-full bg-dark-900 border border-gray-600 p-3 text-white focus:border-gold-500 focus:outline-none"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 aria-invalid={!!errors.name}
//               />
//               {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
//             </div>

//             <div>
//               <input
//                 type="tel"
//                 placeholder="Your Phone"
//                 className="w-full bg-dark-900 border border-gray-600 p-3 text-white focus:border-gold-500 focus:outline-none"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 aria-invalid={!!errors.phone}
//               />
//               {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
//             </div>

//             <div>
//               <input
//                 type="email"
//                 placeholder="Your Email"
//                 className="w-full bg-dark-900 border border-gray-600 p-3 text-white focus:border-gold-500 focus:outline-none"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>

//             <div>
//               <textarea
//                 placeholder="Message"
//                 className="w-full bg-dark-900 border border-gray-600 p-3 text-white focus:border-gold-500 focus:outline-none min-h-[120px]"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 aria-invalid={!!errors.message}
//               />
//               {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
//             </div>

//             <button
//               type="submit"
//               className="w-full py-3 bg-gold-600 text-white font-bold hover:bg-gold-500 transition"
//             >
//               REQUEST BOOKING
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookOnline;

import React, { useState } from 'react';

const BookOnline: React.FC = () => {
  // Using specific high-quality images for the services
  const manicureImg = "https://images.unsplash.com/photo-1610992015768-e4d0d3c01579?q=80&w=2070&auto=format&fit=crop";
  // Updated Coloring image: Woman with foils/hair dye application
  const coloringImg = "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=2070&auto=format&fit=crop";

  const categories = [
    { name: "Hair Styling", img: "https://res.cloudinary.com/dkivpkaaj/image/upload/v1764849455/Screenshot_2025-12-04_172623_g6je1v.jpg" },
    { name: " Hair Coloring", img:"https://res.cloudinary.com/dkivpkaaj/image/upload/v1765180804/dye_pt7hs6.jpg" },
    { name: "Manicure", img: "https://res.cloudinary.com/dkivpkaaj/image/upload/v1764847323/1_wqnggv.jpg" },
    { name: "Bridal", img: "https://res.cloudinary.com/dkivpkaaj/image/upload/v1764849848/Screenshot_2025-12-04_173337_r3m0xu.jpg" },
    { name: "Mens Grooming", img: "https://res.cloudinary.com/dkivpkaaj/image/upload/v1765180975/mens_pxjfkt.jpg" },
  ];

  const handleBookNow = (serviceName: string) => {
    // Updated phone number as requested
    const phoneNumber = '919553673711';
    // Dynamically insert the service name into the message
    const message = `I want to reach out to you regarding ${serviceName}. Can you provide this service?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

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
      'Hello!',
      'Here are my booking details:',
      `• Name: ${name}`,
      `• Phone: ${phoneForMsg}`,
      `• Service: ${service}`,
      `• Preferred Date: ${date}${time ? ` ${time}` : ''}`,
      `• Message: ${message}`,
      '',
      
    ].join('\n');

    // Replace with your WhatsApp phone number (international format, no +). Current: 919553673711
    const myNumber = '919553673711';
    const url = `https://wa.me/${myNumber}?text=${encodeURIComponent(formattedMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="pt-20 min-h-screen bg-dark-900">
      <div className="bg-dark-800 py-16 text-center border-b border-gray-800">
        <h1 className="text-4xl md:text-6xl font-serif text-gold-500 mb-4">Book Online</h1>
        <p className="text-gray-400 font-light">Select a service to schedule your appointment</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="group relative h-80 overflow-hidden cursor-pointer border border-gray-800">
              <img 
                src={cat.img} 
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="text-2xl font-serif text-white mb-3">{cat.name}</h3>
                <div className="flex justify-start">
                  <button 
                    onClick={() => handleBookNow(cat.name)}
                    className="px-6 py-2 border border-white/30 text-sm uppercase hover:bg-gold-600 hover:text-white hover:border-gold-600 transition tracking-wider bg-black/40 backdrop-blur-sm"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Calendar Mockup */}
        <div className="mt-20 max-w-2xl mx-auto bg-dark-800 p-8 border border-gray-700">
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

export default BookOnline;