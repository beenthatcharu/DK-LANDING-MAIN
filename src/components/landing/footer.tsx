import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer id="contact" className="bg-background py-16 sm:py-24">
      <div className="container mx-auto px-4 text-center space-y-6">
        
        {/* Heading */}
        <h3 className="text-3xl md:text-4xl font-headline font-bold">
          Ready to Build Your Premium{' '}
          <span className="text-primary">Modular Kitchen?</span>
        </h3>

        {/* Description */}
        <p className="text-base sm:text-lg text-foreground/80 max-w-2xl mx-auto">
          Let’s plan a beautiful, functional, long-lasting kitchen—designed smartly
          to fit your budget.
          <br />
          <span className="font-semibold text-primary">
            Call Now for Free 3D Design + Smart Budget Planning
          </span>
          <br />

          {/* CLICKABLE PHONE */}
          <span className="text-foreground/70">
            Call / WhatsApp:{' '}
            <a
              href="tel:+919403893424"
              className="font-semibold text-primary underline"
            >
              +91 9403893424
            </a>
          </span>
        </p>

        {/* WHATSAPP BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">

          {/* Button 1 */}
          <a
            href="https://wa.me/919403893424"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-6 py-3 rounded-lg font-medium shadow-lg text-center"
          >
            REQUEST A PERSONALIZED QUOTE
          </a>

          {/* Button 2 */}
          <a
            href="https://wa.me/919403893424"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-primary text-primary px-6 py-3 rounded-lg font-medium shadow-lg text-center"
          >
            SCHEDULE A SITE VISIT
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="w-full mt-16 flex justify-center">
        <p className="text-sm text-foreground/50 text-center">
          © 2025 Dream Kitchen. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
