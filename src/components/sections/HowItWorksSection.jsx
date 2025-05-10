
    import React from 'react';
    import { motion } from 'framer-motion';
    import { UploadCloud, BarChart2, DollarSign } from 'lucide-react';

    const sectionVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const itemVariants = {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
    };
    
    const steps = [
      {
        icon: <UploadCloud size={64} className="mb-6 text-pink-400" />,
        title: "1. Upload License Info",
        description: "Securely submit details of the software licenses you wish to sell through our easy-to-use platform."
      },
      {
        icon: <BarChart2 size={64} className="mb-6 text-red-400" />,
        title: "2. Get Valuation",
        description: "Our experts assess your licenses and provide a competitive, transparent valuation quickly."
      },
      {
        icon: <DollarSign size={64} className="mb-6 text-yellow-400" />,
        title: "3. Get Paid",
        description: "Once you accept the offer, we handle the transfer and you receive prompt payment."
      }
    ];

    const HowItWorksSection = () => {
      return (
        <motion.section 
          className="py-16 md:py-24 bg-slate-800"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <div className="container mx-auto px-4">
            <h3 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">How It Works</h3>
            <div className="grid md:grid-cols-3 gap-10 text-center">
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  className="flex flex-col items-center p-6 bg-slate-700/50 rounded-xl shadow-xl backdrop-blur-sm" 
                  variants={itemVariants} 
                  transition={{ delay: index * 0.2 }}
                >
                  {step.icon}
                  <h4 className="text-2xl font-semibold mb-3 text-gray-100">{step.title}</h4>
                  <p className="text-gray-300">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      );
    };

    export default HowItWorksSection;
  