"use client";
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
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
        // Hide success message after 5 seconds
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
    <section id="contact" className="relative pt-2 px-24 min-h-screen flex items-center">
      
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
        <h2 className="font-serif text-5xl md:text-6xl font-bold text-brand text-center mb-16">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Form Card */}
          {/* Form Card */}
          <div className="bg-white/70 backdrop-blur-md p-8 md:p-10 rounded-[2rem] shadow-xl border border-white/50">
            <h3 className="text-2xl font-bold text-navy mb-8">Send me a Message</h3>
            
            {/* Added ref and name attributes (important for EmailJS) */}
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-navy mb-2">Name</label>
                <input 
                  name="from_name" 
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-brand/20 bg-white/50 focus:border-brand outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-navy mb-2">Email</label>
                <input 
                  name="from_email" 
                  type="email"
                  placeholder="email@example.com"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-brand/20 bg-white/50 focus:border-brand outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-navy mb-2">Message</label>
                <textarea 
                  name="message"
                  placeholder="What's on your mind..."
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-brand/20 bg-white/50 focus:border-brand outline-none transition-all resize-none"
                ></textarea>
              </div>

              {/* Dynamic Status Message */}
              {status === 'success' && (
                <div className="p-4 bg-green-100/80 text-green-800 rounded-xl border border-green-200 text-sm font-bold animate-in fade-in duration-300">
                  ✓ Message sent! I'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="p-4 bg-red-100/80 text-red-800 rounded-xl border border-red-200 text-sm font-bold">
                  ✕ Something went wrong. Please try again.
                </div>
              )}

              <button 
                type="submit"
                disabled={isSending}
                className="w-full py-4 bg-brand text-white font-bold rounded-xl hover:bg-brand/90 transition-all shadow-lg disabled:opacity-50"
              >
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
              
            </form>
          </div>

          {/* Right Column: Links */}
          <div className="space-y-6">
            {/* LinkedIn Card */}
            <a 
              href="https://linkedin.com/in/matthewshapiro25/" 
              target="_blank" 
              className="flex items-center gap-6 p-6 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-white/50 hover:-translate-y-1 transition-all group"
            >
              <div className="relative w-14 h-14">
                <Image src="/contact/linkedin.png" alt="LinkedIn" fill className="object-contain" />
              </div>
              <div>
                <h4 className="font-bold text-navy text-xl">LinkedIn</h4>
                <p className="text-sm text-navy/70">linkedin.com/in/matthewshapiro25/</p>
              </div>
            </a>

            {/* Email Card */}
            <a 
              href="mailto:mattshaprio55@gmail.com"
              className="flex items-center gap-6 p-6 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-white/50 hover:-translate-y-1 transition-all group"
            >
              <div className="relative w-14 h-14">
                <Image src="/contact/email.png" alt="Email" fill className="object-contain" />
              </div>
              <div>
                <h4 className="font-bold text-navy text-xl">Email</h4>
                <p className="text-sm text-navy/70">mattshaprio55@gmail.com</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;