'use client';

import { useState } from 'react';
import Container from './ui/Container';
import SectionHeader from './ui/SectionHeader';
import Button from './ui/Button';
import CarouselControls from './ui/CarouselControls';

const projects = [
  {
    id: 1,
    image: '/images/Project-1 (1).png',
    alt: 'AI-Powered Warehouse Automation',
  },
  {
    id: 2,
    image: '/images/Project-1 (2).png',
    alt: 'Worker PPE Detection AI',
  },
  {
    id: 3,
    image: '/images/Project-1 (3).png',
    alt: 'AI Data Science Dashboard',
  },
  {
    id: 4,
    image: '/images/Project-1 (4).png',
    alt: 'Industrial Robotics AI Vision',
  },
];

export default function RecentProjects() {
  const [current, setCurrent] = useState(0);
  const maxIndex = projects.length - 1;

  const goPrev = () => setCurrent((c) => Math.max(0, c - 1));
  const goNext = () => setCurrent((c) => Math.min(maxIndex, c + 1));

  return (
    <section className="w-full py-16 sm:py-20 md:py-28 bg-white text-gray-900 overflow-hidden">
      <Container>
        {/* Section Header */}
        <SectionHeader
          title="Our Recent AI Projects"
          description="As one of India's leading AI development companies, SysAlly offers the following services to businesses."
          maxWidth="max-w-xl"
          className="mb-10 sm:mb-14"
        />
      </Container>

      {/* ── Carousel: active card is centered in viewport ── */}
      <div className="overflow-hidden w-full">
        <div className={`flex carousel-track carousel-slide-${current}`}>
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative group cursor-pointer overflow-hidden rounded-2xl carousel-card aspect-[16/10] sm:aspect-[16/8] md:aspect-[16/7]"
            >
              <img
                src={project.image}
                alt={project.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Controls & CTA */}
      <Container>
        <CarouselControls
          current={current}
          total={projects.length}
          onPrev={goPrev}
          onNext={goNext}
          onSelect={(idx) => setCurrent(idx)}
          canPrev={current > 0}
          canNext={current < maxIndex}
          theme="light"
          className="mt-8"
        />

        {/* CTA */}
        <div className="mt-10 text-center">
          <Button variant="primary">
            View all projects
          </Button>
        </div>
      </Container>
    </section>
  );
}
