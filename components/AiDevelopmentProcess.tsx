'use client';

import { useState } from 'react';
import Container from './ui/Container';
import SectionHeader from './ui/SectionHeader';
import CarouselControls from './ui/CarouselControls';

const steps = [
  {
    id: 1,
    label: 'Identifying The Problem',
    title: '01',
    description:
      'The first step of building your custom AI solutions begins with identifying the problems or opportunities that the system can solve. Our team runs a thorough analysis to examine the pain points of the project and create a business case. Analyzing the current practices and data sets is necessary to identify areas for implementing automation and development.',
  },
  {
    id: 2,
    label: 'Preparing The Data',
    title: '02',
    description:
      'Data is the foundation of any successful AI model. We collect, clean, and organize the raw data relevant to your business problem. This includes feature engineering, normalization, and creating training, validation, and test splits to ensure the model learns from accurate, unbiased information.',
  },
  {
    id: 3,
    label: 'The Suited AI Model',
    title: '03',
    description:
      'Not all AI models are created equal. Our engineers evaluate and select the most suitable machine learning or deep learning architecture based on your data type, complexity, and desired outcomes - from decision trees to transformer-based neural networks.',
  },
  {
    id: 4,
    label: 'Training The Model',
    title: '04',
    description:
      'We train the selected model on your prepared dataset using state-of-the-art compute infrastructure. This includes iterative training cycles, monitoring metrics like accuracy and loss, and applying regularization techniques to prevent overfitting and ensure robust performance.',
  },
  {
    id: 5,
    label: 'Model Evaluation',
    title: '05',
    description:
      'Post-training, we rigorously evaluate the model using test datasets and industry-standard metrics. This step ensures the model performs as expected across diverse scenarios and edge cases before any real-world deployment.',
  },
  {
    id: 6,
    label: 'Deployment',
    title: '06',
    description:
      'We deploy the finalized AI model to your target environment - cloud, on-premise, or edge devices - using scalable MLOps pipelines, container orchestration, and CI/CD workflows to ensure a smooth, zero-downtime launch.',
  },
  {
    id: 7,
    label: 'Monitoring & Maintenance',
    title: '07',
    description:
      'AI models require ongoing attention. We provide continuous monitoring for model drift, performance degradation, and data pipeline issues. Regular retraining schedules and alerts ensure your AI stays accurate and reliable over time.',
  },
];

export default function AiDevelopmentProcess() {
  const [activeStep, setActiveStep] = useState(0);

  const goToPrev = () => setActiveStep((p) => Math.max(0, p - 1));
  const goToNext = () => setActiveStep((p) => Math.min(steps.length - 1, p + 1));

  const step = steps[activeStep];

  /* Compute the 4-tab sliding window start index */
  const windowStart = Math.min(
    Math.max(0, activeStep - 3),
    Math.max(0, steps.length - 4)
  );
  const visibleSteps = steps.slice(windowStart, windowStart + 4);

  return (
    <section className="w-full py-16 sm:py-20 md:py-28 bg-[#0D1B2A] text-white">
      <Container>

        {/* Section Header */}
        <SectionHeader
          title="Our AI Development Process"
          description="Developing an AI solution according to your needs involves a structured approach to assure its success and effectiveness. Our expert AI developers ensure the project's success by following a systematic process in building your artificial intelligence solution."
          titleColor="text-white"
          descriptionColor="text-gray-400"
          className="mb-10 sm:mb-14"
        />

        {/* Step Navigator */}
        <div className="flex items-center justify-between mb-2">
          {/* Mobile Step Header with controls */}
          <div className="flex md:hidden items-center justify-between w-full mb-4">
            <span className="text-sm font-semibold text-white">{step.label}</span>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={goToPrev}
                disabled={activeStep === 0}
                className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center hover:border-white transition-colors duration-200 disabled:opacity-30"
                aria-label="Previous step"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <span className="text-xs text-gray-400 font-medium">
                {activeStep + 1}/{steps.length}
              </span>
              <button
                onClick={goToNext}
                disabled={activeStep === steps.length - 1}
                className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center hover:border-white transition-colors duration-200 disabled:opacity-30"
                aria-label="Next step"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Desktop Arrow controls + counter */}
          <div className="hidden md:flex items-center gap-3 ml-auto shrink-0 mb-1">
            <button
              onClick={goToPrev}
              disabled={activeStep === 0}
              className="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center hover:border-white transition-colors duration-200 disabled:opacity-30"
              aria-label="Previous step"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="text-sm text-gray-400 font-medium">
              {activeStep + 1}/{steps.length}
            </span>
            <button
              onClick={goToNext}
              disabled={activeStep === steps.length - 1}
              className="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center hover:border-white transition-colors duration-200 disabled:opacity-30"
              aria-label="Next step"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Step Tabs - Desktop */}
        <div className="hidden md:flex border-t border-gray-700">
          {visibleSteps.map((s) => {
            const i = steps.indexOf(s);
            const isActive = i === activeStep;
            return (
              <button
                key={s.id}
                onClick={() => setActiveStep(i)}
                className="relative flex-1 pt-4 pb-3 text-sm font-medium whitespace-nowrap transition-colors duration-200 text-left cursor-pointer"
              >
                {isActive && (
                  <span className="absolute top-0 left-0 right-0 h-[2px] w-1/2 bg-white rounded-b-sm" />
                )}
                <span className={isActive ? 'text-white' : 'text-gray-500 hover:text-gray-300'}>
                  {s.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Content: description card + image */}
        <div className="mt-4 md:mt-8 grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-6 items-stretch">
          {/* Left: Step Description Card */}
          <div className="flex flex-col justify-start">
            <div className="w-full bg-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm">
              <span className="text-3xl font-bold text-[#1E293B] mb-4 sm:mb-5 block">{step.title}</span>
              <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
            </div>
          </div>

          {/* Right: Process Image */}
          <div className="rounded-2xl overflow-hidden min-h-[240px] sm:min-h-[300px]">
            <img
              src="/images/Process.png"
              alt="AI Development Process"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </Container>
    </section>
  );
}
