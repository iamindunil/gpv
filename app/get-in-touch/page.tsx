"use client";
import Head from 'next/head';
import { useState } from 'react';
import Link from "next/link";
import { Button } from '@/components/ui/button';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNo: '',
    organization: '',
    message: ''
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    const mailtoLink = `mailto:info@globalpearlventures.com?subject=Contact%20Form%20Submission&body=Name:%20${encodeURIComponent(formData.name)}%0AEmail:%20${encodeURIComponent(formData.email)}%0AContact%20No:%20${encodeURIComponent(formData.contactNo)}%0AOrganization:%20${encodeURIComponent(formData.organization)}%0AMessage:%20${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Transform Your Business | Contact Us</title>
        <meta name="description" content="Contact us to transform your business" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-blue-100 py-12 px-6 text-center">
        <h1 className="text-4xl font-bold text-gray-700 mb-4">Ready to Transform Your Business?</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Let's discuss how our software solutions can help you achieve your business goals and drive innovation.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="py-8 px-6 flex-grow">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow border p-8">
          <h2 className="text-2xl font-bold text-blue-700 text-center mb-2">Send Us a Message</h2>
          <p className="text-gray-600 text-center mb-6">Fill out the form below, and we'll get back to you as soon as possible</p>
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-blue-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-black placeholder-gray-500 placeholder-opacity-100 font-normal"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-blue-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-black placeholder-gray-500 placeholder-opacity-100 font-normal"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="contactNo" className="block text-blue-700 mb-2">Contact No</label>
                <input
                  type="text"
                  id="contactNo"
                  name="contactNo"
                  placeholder="Enter Contact Number"
                  value={formData.contactNo}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-black placeholder-gray-500 placeholder-opacity-100 font-normal"
                />
              </div>
              
              <div>
                <label htmlFor="organization" className="block text-blue-700 mb-2">Organization (optional)</label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  placeholder="Write your organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-black placeholder-gray-500 placeholder-opacity-100 font-normal"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-blue-700 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell us about your project........"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded text-black placeholder-gray-500 placeholder-opacity-100 font-normal"
              ></textarea>
            </div>
            
            <div className="text-center">
            <Link href="/get-in-touch">
              <Button className="bg-blue-600 hover:bg-blue-700 w-24 h-10" onClick={handleSubmit}>
                Send
              </Button>
            </Link>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
