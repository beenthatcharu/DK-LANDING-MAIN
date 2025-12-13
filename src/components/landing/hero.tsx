import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const PHONE_NUMBER = '+91 9403893424';
const WHATSAPP_NUMBER = '919403893424';

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-image');

  return (
    <section
      id="home"
      className="relative w-full flex items-center justify-center text-center text-white overflow-hidden py-20 sm:py-24 md:py-32"
    >
      
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
          priority
        />
      )}

      
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 container max-w-6xl grid md:grid-cols-2 gap-8 md:gap-16 items-center px-4">
        
        
        <div className="text-left space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline font-bold tracking-tight text-shadow-lg">
            Premium Modular Designs
            <br />
            Smart-Budget Planning
          </h1>

          <p className="font-body text-white/80 text-base sm:text-lg">
            <span className="text-primary">
              German Quality • Made to Order • Designer Finish
            </span>{' '}
            Perfect for clients who want a premium home without overspending.
            <br />
            Contact us at{' '}
            <a
              href="tel:+919403893424"
              className="underline font-semibold text-primary"
            >
              {PHONE_NUMBER}
            </a>
          </p>

          
          <div className="flex flex-wrap gap-4 pt-4">
            
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium shadow-lg"
            >
              Chat on WhatsApp
            </a>

            
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-lg font-medium shadow-lg"
            >
              Get Free Consultation
            </a>
          </div>
        </div>

        
        <div className="hidden md:block"></div>
      </div>
    </section>
  );
}
