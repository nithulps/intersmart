interface CarouselControlsProps {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  onSelect?: (index: number) => void;
  canPrev?: boolean;
  canNext?: boolean;
  theme?: 'dark' | 'light';
  className?: string;
}

export default function CarouselControls({
  current,
  total,
  onPrev,
  onNext,
  onSelect,
  canPrev = true,
  canNext = true,
  theme = 'light',
  className = '',
}: CarouselControlsProps) {
  const isDark = theme === 'dark';

  const btnBorder = isDark
    ? 'border-gray-500 hover:border-white text-white'
    : 'border-gray-300 hover:border-[#1E293B] text-gray-700';

  const activeDot = isDark ? 'bg-white' : 'bg-[#1E293B]';
  const inactiveDot = isDark ? 'bg-gray-500 hover:bg-gray-300' : 'bg-gray-300 hover:bg-gray-400';

  return (
    <div className={`flex items-center justify-center gap-5 ${className}`}>
      <button
        onClick={onPrev}
        disabled={!canPrev}
        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center transition-colors duration-200 disabled:opacity-30 ${btnBorder}`}
        aria-label="Previous"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <div className="flex gap-2 items-center">
        {Array.from({ length: total }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => onSelect && onSelect(idx)}
            className={`rounded-full transition-all duration-300 ${
              current === idx ? `w-5 h-2 ${activeDot}` : `w-2 h-2 ${inactiveDot}`
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      <button
        onClick={onNext}
        disabled={!canNext}
        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center transition-colors duration-200 disabled:opacity-30 ${btnBorder}`}
        aria-label="Next"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
