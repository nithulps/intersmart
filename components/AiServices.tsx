'use client';

import { useState } from 'react';
import Container from './ui/Container';
import SectionHeader from './ui/SectionHeader';
import Button from './ui/Button';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
}

const servicesData: ServiceItem[] = [
  {
    id: 'hyperparameter',
    title: 'Hyperparameter model tuning',
    description:
      'Our AI experts handle your hyperparameter tuning, optimizing your unique machine-learning model optimization requirements. We identify the hyperparameters relevant to your algorithm and tune the values to yield the best performance of the machine learning model.',
  },
  {
    id: 'consultation',
    title: 'AI Consultation',
    description:
      'We offer end-to-end AI consulting services to help you identify high-value AI opportunities, align technology strategy with your business goals, and build scalable AI roadmaps tailored to your industry.',
  },
  {
    id: 'nlp',
    title: 'NLP Solutions',
    description:
      'Transform unstructured textual data into actionable intelligence. Our Natural Language Processing solutions cover sentiment analysis, language translation, text summarization, and intelligent conversational agents.',
  },
  {
    id: 'custom-model',
    title: 'Custom AI Model Development',
    description:
      'Build bespoke artificial intelligence and deep learning models designed specifically for your unique business workflows, proprietary data pipelines, and specialized performance metrics.',
  },
];

export default function AiServices() {
  const [activeId, setActiveId] = useState<string>('hyperparameter');

  const toggleAccordion = (id: string) => {
    setActiveId((prev) => (prev === id ? '' : id));
  };

  return (
    <section className="w-full py-20 md:py-28 bg-white text-gray-900">
      <Container>

        {/* Section Header */}
        <SectionHeader
          title="Our Artificial Intelligence Services"
          description="As one of India's leading AI development companies, SysAlly offers the following services to businesses."
          maxWidth="max-w-xl"
        />

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Column: Concentric Circles Graphic Image */}
          <div className="flex justify-center items-center w-full">
            <div className="relative w-full max-w-[540px] aspect-square">
              <img
                src="/images/Artificial_Intelligence.png"
                alt="Our Artificial Intelligence Services Diagram"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right Column: Interactive Accordion Services */}
          <div className="flex flex-col gap-4 w-full">
            {servicesData.map((service) => {
              const isOpen = activeId === service.id;
              return (
                <div
                  key={service.id}
                  className="bg-[#F8F9FA] rounded-2xl transition-all duration-300 overflow-hidden border border-transparent hover:border-gray-200"
                >
                  <button
                    onClick={() => toggleAccordion(service.id)}
                    className="w-full px-6 py-5 md:px-8 md:py-6 flex items-center justify-between text-left focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-base sm:text-lg md:text-xl text-[#1E293B]">
                      {service.title}
                    </span>
                    <span className="text-gray-500 ml-4 flex-shrink-0">
                      {isOpen ? (
                        <svg
                          className="w-5 h-5 transition-transform duration-200 transform rotate-180"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7-7 7-7"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-5 h-5 transition-transform duration-200"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 md:px-8 md:pb-8 text-gray-600 text-sm sm:text-base leading-relaxed animate-fadeIn">
                      {service.description}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-16 text-center">
          <Button variant="primary" className="px-10 py-3">
            View all services
          </Button>
        </div>

      </Container>
    </section>
  );
}
