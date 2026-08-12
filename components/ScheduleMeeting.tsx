'use client';

import { useState } from 'react';
import Container from './ui/Container';
import Button from './ui/Button';

export default function ScheduleMeeting() {
  const [form, setForm] = useState({ email: '', name: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="w-full py-20 md:py-24 bg-[#B4C5C5]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left: Heading & subtext */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-[48px] font-semibold text-[#1E293B] leading-tight mb-5">
              Let&apos;s talk about how digital initiatives can transform your business
            </h2>
            <p className="text-[#4A5568] text-sm sm:text-base leading-relaxed max-w-sm">
              We&apos;ll happily assist in exploring what will work best for you. Like, really best.
            </p>
          </div>

          {/* Right: Form */}
          <div>
            <h3 className="text-xl font-semibold text-[#1E293B] mb-6">Schedule Meeting</h3>

            {submitted ? (
              <div className="bg-white rounded-2xl px-8 py-10 text-center shadow-sm">
                <p className="text-[#00A896] text-lg font-semibold mb-2">Thank you!</p>
                <p className="text-gray-500 text-sm">We&apos;ll be in touch shortly to schedule your meeting.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  id="schedule-email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-white rounded-xl px-5 py-4 text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#00A896] transition-all"
                />
                <input
                  id="schedule-name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-white rounded-xl px-5 py-4 text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#00A896] transition-all"
                />
                <textarea
                  id="schedule-message"
                  name="message"
                  placeholder="Message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-white rounded-xl px-5 py-4 text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#00A896] transition-all resize-none"
                />
                <div>
                  <Button type="submit" variant="primary">
                    Submit
                  </Button>
                </div>
              </form>
            )}
          </div>

        </div>
      </Container>
    </section>
  );
}
