import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import bgVideo from '../assets/AM_video.mp4';

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <section 
      aria-label="AM Autodesigners Hero Section" 
      className="relative min-h-screen"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      <meta itemProp="name" content="AM Autodesigners" />
      <meta itemProp="description" content="Premium vehicle customization specialists with 14 years of expertise in tempo traveller interior and exterior design. Serving over 100,000 satisfied customers across India." />
      <meta itemProp="foundingDate" content="2009" />
      <meta itemProp="areaServed" content="India" />

      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 md:hidden bg-gradient-radial from-[#000B29]/100 via-[#001242]/90 to-blue-800/85" />
        <div className="relative h-full flex items-center justify-center">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
            title="AM Autodesigners - Luxury Vehicle Customization Showcase"
            className="w-full md:h-full h-[60vh] md:object-cover object-contain md:scale-100"
            poster="../assets/fallback.jpg"
          >
            <source src={bgVideo} type="video/mp4" />
            <track 
              kind="captions" 
              label="Vehicle Customization Showcase"
              src="../assets/captions.vtt"
              srcLang="en"
            />
          </video>
        </div>
        <div className="absolute inset-0 hidden md:block bg-gradient-to-b from-blue-600/50 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 h-screen flex flex-col px-4">
        <header className="text-center max-w-4xl mx-auto mt-[15vh] md:mt-32">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white"
            itemProp="slogan"
          >
            Redefining Luxury on Wheels
          </motion.h1>
        </header>

        <div className="text-center max-w-4xl mx-auto mt-auto mb-[6vh] md:mb-24 space-y-8 md:space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90"
            itemProp="description"
          >
            Crafting masterpieces in vehicle customization
          </motion.p>

          <motion.div
            role="group"
            aria-label="Vehicle Customization Services"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col md:flex-row gap-6 md:gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              aria-label="View our luxury vehicle customization portfolio"
              className="px-6 py-2 md:px-8 md:py-3 text-sm md:text-base bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              Explore Our Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              aria-label="Request a custom vehicle modification quote"
              className="px-6 py-2 md:px-8 md:py-3 text-sm md:text-base border-2 border-white text-white rounded-full hover:bg-white/10 transition-colors"
            >
              Get a Quote
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;