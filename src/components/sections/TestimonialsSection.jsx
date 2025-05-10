
    import React from 'react';
    import { motion } from 'framer-motion';

    const sectionVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const itemVariants = {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
    };

    const testimonials = [
      {
        name: "Jane Doe",
        role: "IT Manager, TechSolutions Inc.",
        image: "https://images.unsplash.com/photo-1573496130141-209d200cebd8",
        borderColor: "border-pink-500",
        textColor: "text-pink-400",
        quote: "SoftSell provided an incredibly smooth and profitable way to offload our unused licenses. Their team was professional and efficient. Highly recommended!"
      },
      {
        name: "John Smith",
        role: "CFO, Innovate Corp",
        image: "https://images.unsplash.com/photo-1592878863518-0357779ebc6a",
        borderColor: "border-sky-500",
        textColor: "text-sky-400",
        quote: "We were surprised by how much value we recovered through SoftSell. The process was transparent, and payment was quick. A fantastic service!"
      }
    ];

    const TestimonialsSection = () => {
      return (
        <motion.section 
          className="py-16 md:py-24 bg-slate-800"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <div className="container mx-auto px-4">
            <h3 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">What Our Clients Say</h3>
            <div className="grid md:grid-cols-2 gap-10">
              {testimonials.map((testimonial, index) => (
                <motion.div 
                  key={index}
                  className="bg-slate-700/70 p-8 rounded-xl shadow-xl backdrop-blur-md" 
                  variants={itemVariants} 
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="flex items-center mb-4">
                    <img  className={`w-16 h-16 rounded-full mr-4 border-2 ${testimonial.borderColor}`} alt={testimonial.name} src={testimonial.image} />
                    <div>
                      <h5 className="text-xl font-semibold text-gray-100">{testimonial.name}</h5>
                      <p className={testimonial.textColor}>{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.quote}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      );
    };

    export default TestimonialsSection;
  