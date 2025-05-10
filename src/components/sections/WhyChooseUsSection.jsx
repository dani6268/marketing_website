
    import React from 'react';
    import { motion } from 'framer-motion';
    import { ShieldCheck, Users, Award, Zap } from 'lucide-react';

    const sectionVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const itemVariants = {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
    };

    const features = [
      {
        icon: <ShieldCheck size={48} className="mb-4 text-green-400" />,
        title: "Secure & Compliant",
        description: "We ensure all transactions are fully compliant and your data is protected."
      },
      {
        icon: <Zap size={48} className="mb-4 text-yellow-400" />,
        title: "Fast Turnaround",
        description: "Get quick valuations and prompt payments for your licenses."
      },
      {
        icon: <Award size={48} className="mb-4 text-pink-400" />,
        title: "Best Market Value",
        description: "We strive to offer the most competitive prices for your software assets."
      },
      {
        icon: <Users size={48} className="mb-4 text-sky-400" />,
        title: "Expert Support",
        description: "Our knowledgeable team is here to guide you through every step."
      }
    ];

    const WhyChooseUsSection = () => {
      return (
        <motion.section 
          className="py-16 md:py-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <div className="container mx-auto px-4">
            <h3 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-300">Why Choose SoftSell?</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="p-8 bg-slate-800 rounded-lg shadow-lg hover:shadow-purple-500/30 transition-shadow" 
                  variants={itemVariants} 
                  transition={{ delay: index * 0.1 }}
                >
                  {feature.icon}
                  <h4 className="text-xl font-semibold mb-2 text-gray-100">{feature.title}</h4>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      );
    };

    export default WhyChooseUsSection;
  