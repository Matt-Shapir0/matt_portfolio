"use client";
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);
    setStatus('idle');

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, 
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, 
      formRef.current, 
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    )
    .then(() => {
        setStatus('success');
        formRef.current?.reset();
        setTimeout(() => setStatus('idle'), 5000);
    }, (error) => {
        console.error(error);
        setStatus('error');
    })
    .finally(() => {
        setIsSending(false);
    });
  };

  return (
    <section id="contact" className="relative py-12 md:py-20 px-4 sm:px-8 md:px-16 lg:px-24 min-h-screen flex items-center">
      
      {/* 1. Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/contact/west-bank.png" 
          alt="Contact Background" 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-navy text-center mb-12 md:mb-16">
          Contact Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          
          {/* Left Column: Form Card */}
          <div className="bg-white/70 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-3xl shadow-xl border border-white/50">
            <h3 className="text-xl sm:text-2xl font-bold text-navy mb-6 md:mb-8">
              Send me a Message
            </h3>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs sm:text-sm font-bold text-navy mb-1.5">Name</label>
                <input 
                  name="from_name" 
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-brand/20 bg-white/50 text-navy placeholder:text-navy/40 focus:border-brand outline-none transition-all text-sm sm:text-base"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-bold text-navy mb-1.5">Email</label>
                <input 
                  name="from_email" 
                  type="email"
                  placeholder="email@example.com"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-brand/20 bg-white/50 text-navy placeholder:text-navy/40 focus:border-brand outline-none transition-all text-sm sm:text-base"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-bold text-navy mb-1.5">Message</label>
                <textarea 
                  name="message"
                  placeholder="What's on your mind..."
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-brand/20 bg-white/50 text-navy placeholder:text-navy/40 focus:border-brand outline-none transition-all resize-none text-sm sm:text-base"
                ></textarea>
              </div>

              {/* Dynamic Status Message */}
              {status === 'success' && (
                <div className="p-3.5 bg-green-100/90 text-green-800 rounded-xl border border-green-200 text-xs sm:text-sm font-bold animate-in fade-in duration-300">
                  ✓ Message sent! I'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="p-3.5 bg-red-100/90 text-red-800 rounded-xl border border-red-200 text-xs sm:text-sm font-bold">
                  ✕ Something went wrong. Please try again.
                </div>
              )}

              <button 
                type="submit"
                disabled={isSending}
                className="w-full py-3.5 sm:py-4 bg-brand text-white font-bold rounded-xl hover:bg-brand/90 transition-all shadow-lg active:scale-[0.99] disabled:opacity-50 text-sm sm:text-base"
              >
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Right Column: Links */}
          <div className="space-y-4 sm:space-y-6">
            {/* LinkedIn Card */}
            <a 
              href="https://linkedin.com/in/matthewshapiro25/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 sm:gap-6 p-5 sm:p-6 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-white/50 hover:-translate-y-1 transition-all group"
            >
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 shrink-0">
                <Image src="/contact/linkedin.png" alt="LinkedIn" fill className="object-contain" />
              </div>
              <div className="min-w-0">
                <h4 className="font-bold text-navy text-lg sm:text-xl">LinkedIn</h4>
                <p className="text-xs sm:text-sm text-navy/70 truncate">linkedin.com/in/matthewshapiro25/</p>
              </div>
            </a>

            {/* Email Card */}
            <a 
              href="mailto:mattshaprio55@gmail.com"
              className="flex items-center gap-4 sm:gap-6 p-5 sm:p-6 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-white/50 hover:-translate-y-1 transition-all group"
            >
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 shrink-0">
                <Image src="/contact/email.png" alt="Email" fill className="object-contain" />
              </div>
              <div className="min-w-0">
                <h4 className="font-bold text-navy text-lg sm:text-xl">Email</h4>
                <p className="text-xs sm:text-sm text-navy/70 break-all">mattshaprio55@gmail.com</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

// "use client";
// import React, { useState, useRef } from 'react';
// import Image from 'next/image';
// import emailjs from '@emailjs/browser';
// import Footer from './Footer';

// const Contact = () => {
//   const formRef = useRef<HTMLFormElement>(null);
//   const [isSending, setIsSending] = useState(false);

//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//   const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

// const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!formRef.current) return;

//     setIsSending(true);
//     setStatus('idle');

//     emailjs.sendForm(
//       process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, 
//       process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, 
//       formRef.current, 
//       process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
//     )
//     .then(() => {
//         setStatus('success');
//         formRef.current?.reset();
//         // Hide success message after 5 seconds
//         setTimeout(() => setStatus('idle'), 5000);
//     }, (error) => {
//         console.error(error);
//         setStatus('error');
//     })
//     .finally(() => {
//         setIsSending(false);
//     });
//   };

//   return (
//     <section id="contact" className="relative py-12 px-24 min-h-screen flex items-center">
      
//       {/* 1. Background Image with Overlay */}
//       <div className="absolute inset-0 z-0">
//         <Image 
//           src="/contact/west-bank.png" 
//           alt="Contact Background" 
//           fill 
//           className="object-cover"
//           priority
//         />
//         <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"></div>
//       </div>

//       <div className="relative z-10 max-w-6xl mx-auto w-full">
//         <h2 className="font-serif text-5xl md:text-6xl font-bold text-navy text-center mb-16">
//           Contact Me
//         </h2>

//         <div className="grid md:grid-cols-2 gap-12 items-start">
          
//           {/* Left Column: Form Card */}
//           <div className="bg-white/70 backdrop-blur-md p-8 md:p-10 rounded-4xl shadow-xl border border-white/50">
//             <h3 className="text-2xl font-bold text-navy mb-8">Send me a Message</h3>
            
//             <form ref={formRef} onSubmit={handleSubmit} className="space-y-3">
//               <div>
//                 <label className="block text-sm font-bold text-navy mb-2">Name</label>
//                 <input 
//                   name="from_name" 
//                   type="text"
//                   placeholder="Your name"
//                   required
//                   className="w-full px-4 py-3 rounded-xl border border-brand/20 bg-white/50 focus:border-brand outline-none transition-all"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-bold text-navy mb-2">Email</label>
//                 <input 
//                   name="from_email" 
//                   type="email"
//                   placeholder="email@example.com"
//                   required
//                   className="w-full px-4 py-3 rounded-xl border border-brand/20 bg-white/50 focus:border-brand outline-none transition-all"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-bold text-navy mb-2">Message</label>
//                 <textarea 
//                   name="message"
//                   placeholder="What's on your mind..."
//                   rows={4}
//                   required
//                   className="w-full px-4 py-3 rounded-xl border border-brand/20 bg-white/50 focus:border-brand outline-none transition-all resize-none"
//                 ></textarea>
//               </div>

//               {/* Dynamic Status Message */}
//               {status === 'success' && (
//                 <div className="p-4 bg-green-100/80 text-green-800 rounded-xl border border-green-200 text-sm font-bold animate-in fade-in duration-300">
//                   ✓ Message sent! I'll get back to you soon.
//                 </div>
//               )}
//               {status === 'error' && (
//                 <div className="p-4 bg-red-100/80 text-red-800 rounded-xl border border-red-200 text-sm font-bold">
//                   ✕ Something went wrong. Please try again.
//                 </div>
//               )}

//               <button 
//                 type="submit"
//                 disabled={isSending}
//                 className="w-full py-4 bg-brand text-white font-bold rounded-xl hover:bg-brand/90 transition-all shadow-lg disabled:opacity-50"
//               >
//                 {isSending ? 'Sending...' : 'Send Message'}
//               </button>
              
//             </form>
//           </div>

//           {/* Right Column: Links */}
//           <div className="space-y-6">
//             {/* LinkedIn Card */}
//             <a 
//               href="https://linkedin.com/in/matthewshapiro25/" 
//               target="_blank" 
//               className="flex items-center gap-6 p-6 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-white/50 hover:-translate-y-1 transition-all group"
//             >
//               <div className="relative w-14 h-14">
//                 <Image src="/contact/linkedin.png" alt="LinkedIn" fill className="object-contain" />
//               </div>
//               <div>
//                 <h4 className="font-bold text-navy text-xl">LinkedIn</h4>
//                 <p className="text-sm text-navy/70">linkedin.com/in/matthewshapiro25/</p>
//               </div>
//             </a>

//             {/* Email Card */}
//             <a 
//               href="mailto:mattshaprio55@gmail.com"
//               className="flex items-center gap-6 p-6 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-white/50 hover:-translate-y-1 transition-all group"
//             >
//               <div className="relative w-14 h-14">
//                 <Image src="/contact/email.png" alt="Email" fill className="object-contain" />
//               </div>
//               <div>
//                 <h4 className="font-bold text-navy text-xl">Email</h4>
//                 <p className="text-sm text-navy/70">mattshaprio55@gmail.com</p>
//               </div>
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;