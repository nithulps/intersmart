import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter, 
} from "lucide-react";
import Container from "../ui/Container";

const services = [
  "Hyperparameter model tuning",
  "PoC of AI Solutions",
  "AI Model Optimization",
  "AI Consultation",
];

const pages = [
  "Services",
  "Technology",
  "Portfolio",
  "Virtual team",
  "Contact us",
];

export default function Footer() {
  return (
    <footer className="w-full text-center md:text-left bg-[#182434] text-white">
      <Container className="py-12 sm:py-16 md:py-20">
        {/* Main Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12">
          {/* Services */}
          <div>
            <h3 className="mb-4 sm:mb-5 text-xl sm:text-2xl font-medium text-white">
              Services
            </h3>

            <ul className="space-y-3 sm:space-y-4">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-sm sm:text-base font-normal text-[#D0D5DB]"
                >
                  <Link
                    href="#"
                    className="transition-colors hover:text-white"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h3 className="mb-4 sm:mb-5 text-xl sm:text-2xl font-medium text-white">
              Pages
            </h3>

            <ul className="space-y-3 sm:space-y-4">
              {pages.map((page) => (
                <li
                  key={page}
                  className="text-sm sm:text-base font-normal text-[#D0D5DB]"
                >
                  <Link
                    href="#"
                    className="transition-colors hover:text-white"
                  >
                    {page}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="flex flex-col items-center  md:items-end sm:col-span-2 md:col-span-1">
            <h3 className="mb-4 sm:mb-5 text-xl sm:text-2xl font-medium text-white">
              Stay connected
            </h3>

            <div className="flex items-center gap-3">
              <Link
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#D0D5DB] text-[#D0D5DB] transition-colors hover:border-white hover:text-white"
              >
                <Facebook className="h-4 w-4" strokeWidth={1.8} />
              </Link>

              <Link
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#D0D5DB] text-[#D0D5DB] transition-colors hover:border-white hover:text-white"
              >
                <Instagram className="h-4 w-4" strokeWidth={1.8} />
              </Link>

              <Link
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#D0D5DB] text-[#D0D5DB] transition-colors hover:border-white hover:text-white"
              >
                <Linkedin className="h-4 w-4" strokeWidth={1.8} />
              </Link>

              <Link
                href="#"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#D0D5DB] text-[#D0D5DB] transition-colors hover:border-white hover:text-white"
              >
                <Twitter className="h-4 w-4" strokeWidth={1.8} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Footer Separator */}
        <div className="mt-10 sm:mt-12 md:mt-16 pt-6 border-t border-white/10 flex flex-col gap-4 text-xs sm:text-sm text-[#D0D5DB] md:flex-row md:items-center md:justify-between">
          <p>
            © 2023 Intersmart Ltd. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3 text-xs sm:text-sm">
            <Link href="#" className="hover:text-white">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="#" className="hover:text-white">
              GDPR Policy
            </Link>
            <span>|</span>
            <Link href="#" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}