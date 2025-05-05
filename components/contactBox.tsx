import Link from 'next/link';
import React from 'react';

const ContactBox = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-10xl mx-auto text-center bg-gradient-to-r from-[#002f4b] to-[#005f6b] rounded-2xl p-8 sm:p-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white leading-snug mb-4">
          Ready to Transform Your Business?
        </h2>
        <p className="text-lg sm:text-xl text-white leading-relaxed mb-8">
          Let&apos;s discuss how our software solutions can help you achieve your business goals and<br />
          drive innovation.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            href="/get-in-touch"
            className="inline-block bg-white text-[#0371BC] font-medium text-lg px-6 py-3 rounded-md hover:opacity-90 transition"
          >
            Contact Us
          </Link>
          <Link
            href="/our-services"
            className="inline-block border border-white text-white font-medium text-lg px-6 py-3 rounded-md hover:bg-white hover:text-[#0371BC] transition"
          >
            View Our Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactBox;


