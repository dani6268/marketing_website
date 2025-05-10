
    import React from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Textarea } from '@/components/ui/textarea';
    import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
    import { Mail, User, Building, Type, MessageSquare } from 'lucide-react';

    const sectionVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const ContactFormSection = ({ onSubmit }) => {
      return (
        <motion.section 
          id="contact" 
          className="py-16 md:py-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <div className="container mx-auto px-4">
            <h3 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">Get a Quote or Ask a Question</h3>
            <Card className="max-w-2xl mx-auto bg-slate-800/60 border-slate-700 shadow-2xl backdrop-blur-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-gray-100">Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={onSubmit} className="space-y-6">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <Input name="name" type="text" placeholder="Your Name" className="pl-10 bg-slate-700 border-slate-600 text-gray-100 placeholder-gray-400 focus:ring-pink-500 focus:border-pink-500" />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <Input name="email" type="email" placeholder="Your Email" className="pl-10 bg-slate-700 border-slate-600 text-gray-100 placeholder-gray-400 focus:ring-pink-500 focus:border-pink-500" />
                  </div>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <Input name="company" type="text" placeholder="Company Name" className="pl-10 bg-slate-700 border-slate-600 text-gray-100 placeholder-gray-400 focus:ring-pink-500 focus:border-pink-500" />
                  </div>
                  <div className="relative">
                     <Type className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 z-10" />
                     <Select name="licenseType">
                      <SelectTrigger className="w-full pl-10 bg-slate-700 border-slate-600 text-gray-100 data-[placeholder]:text-gray-400 focus:ring-pink-500 focus:border-pink-500">
                        <SelectValue placeholder="Select License Type" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-700 border-slate-600 text-gray-100">
                        <SelectItem value="microsoft" className="hover:bg-slate-600 focus:bg-slate-600">Microsoft Licenses</SelectItem>
                        <SelectItem value="adobe" className="hover:bg-slate-600 focus:bg-slate-600">Adobe Creative Cloud</SelectItem>
                        <SelectItem value="autodesk" className="hover:bg-slate-600 focus:bg-slate-600">Autodesk Software</SelectItem>
                        <SelectItem value="saas" className="hover:bg-slate-600 focus:bg-slate-600">SaaS Subscriptions</SelectItem>
                        <SelectItem value="other" className="hover:bg-slate-600 focus:bg-slate-600">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 text-gray-400" />
                    <Textarea name="message" placeholder="Your Message" className="pl-10 bg-slate-700 border-slate-600 text-gray-100 placeholder-gray-400 focus:ring-pink-500 focus:border-pink-500" rows={4} />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white text-lg py-3 rounded-lg shadow-md transform hover:scale-105 transition-transform">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </motion.section>
      );
    };

    export default ContactFormSection;
  