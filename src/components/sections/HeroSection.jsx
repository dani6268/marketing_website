
    import React from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';

    const sectionVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const itemVariants = {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
    };

    const HeroSection = () => {
      return (
        <motion.section 
          className="py-20 md:py-32 text-center bg-cover bg-center relative"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          style={{ backgroundImage: "linear-gradient(rgba(17, 24, 39, 0.8), rgba(17, 24, 39, 0.8))" }}
        >
          <div className="absolute inset-0 z-0">
            <img  className="object-cover w-full h-full opacity-30" alt="Abstract software code background" src="https://images.unsplash.com/photo-1520509414578-d9cbf09933a1" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.h2 
              className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
              variants={itemVariants}
            >
              Unlock Value from Your Unused Software Licenses
            </motion.h2>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              SoftSell makes it easy to securely sell your surplus software licenses and recoup your investment. Fast, transparent, and reliable.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Button size="lg" className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white text-lg px-10 py-6 rounded-full shadow-lg transform hover:scale-105 transition-transform">
                Sell My Licenses
              </Button>
            </motion.div>
          </div>
        </motion.section>
      );
    };

    export default HeroSection;
  