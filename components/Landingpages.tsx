import Container from './ui/Container';
import Button from './ui/Button';

export default function Landingpages() {
  return (
    <div className="relative w-full min-h-screen md:h-screen flex items-center overflow-hidden hero-radial-bg py-28 md:py-0">
      {/* LAYER 1: Background Radial Gradient (applied via hero-radial-bg class) */}

      {/* LAYER 2: Image Layer (placed on the right, under the 61% opacity layer) */}
      <div className="absolute right-0 sm:right-10 md:right-16 lg:right-24 top-1/2 -translate-y-1/2 flex justify-end items-center z-10 pointer-events-none w-full sm:w-3/4 md:w-auto opacity-25 md:opacity-100">
        <div className="w-full max-w-[320px] sm:max-w-[480px] md:max-w-none aspect-square md:aspect-auto">
          <img
            src="/images/home-human.svg"
            alt="AI Development Circuitry Face"
            className="w-full h-auto object-contain pointer-events-auto svg-blue-glow"
          />
        </div>
      </div>

      {/* LAYER 3: 61% Black Opacity Overlay Layer (Figma #000000 at 61%) */}
      <div className="absolute inset-0 z-20 pointer-events-none overlay-layer-61" />

      {/* LAYER 4 (TOP): Text Content Layer */}
      <Container className="w-full relative z-30">
        {/* Left Side Content */}
        <div className="flex flex-col items-center mt-8 md:items-start text-center md:text-left max-w-5xl">
          <h1 className="text-white text-5xl sm:text-5xl md:text-6xl font-bold leading-[1.15] md:leading-[1.25] mb-4 md:mb-6">
            AI development company <br />
            In India
          </h1>
          <p className="text-gray-300 text-sm sm:text-base font-light leading-relaxed mb-6 md:mb-8 max-w-xl">
            One of the leading AI development companies in India with remarkable expertise
            in artificial intelligence solutions. Our forte in AI technologies spans
            diverse verticals like machine learning (ML).....
          </p>
          <Button variant="white" className="w-full md:w-auto px-8 py-3">
            Reach us
          </Button>
        </div>
      </Container>

      {/* Slider indicators (z-30) */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-2 z-30">
        <span className="w-1.5 h-1.5 rounded-full bg-white opacity-40"></span>
        <span className="w-1.5 h-1.5 rounded-full bg-white opacity-40"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-white shadow-glow"></span>
      </div>
    </div>
  );
}
