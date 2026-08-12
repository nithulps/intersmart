interface SectionHeaderProps {
  title: string;
  description?: string;
  titleColor?: string;
  descriptionColor?: string;
  underlineColor?: string;
  className?: string;
  maxWidth?: string;
}

export default function SectionHeader({
  title,
  description,
  titleColor = 'text-[#1E293B]',
  descriptionColor = 'text-gray-500',
  underlineColor = 'bg-[#00A896]',
  className = '',
  maxWidth = 'max-w-3xl',
}: SectionHeaderProps) {
  return (
    <div className={`text-center ${maxWidth} mx-auto mb-12 sm:mb-16 ${className}`}>
      <h2 className={`text-3xl sm:text-4xl md:text-[40px] font-medium tracking-tight mb-4 ${titleColor}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-sm sm:text-base leading-relaxed mb-5 ${descriptionColor}`}>
          {description}
        </p>
      )}
      <div className={`w-16 h-[2px] ${underlineColor} mx-auto rounded-full`} />
    </div>
  );
}
