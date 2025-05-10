
    import React from 'react';
    import { Toaster } from '@/components/ui/toaster';
    import { useToast } from '@/components/ui/use-toast';
    import Header from '@/components/sections/Header';
    import HeroSection from '@/components/sections/HeroSection';
    import HowItWorksSection from '@/components/sections/HowItWorksSection';
    import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
    import TestimonialsSection from '@/components/sections/TestimonialsSection';
    import ContactFormSection from '@/components/sections/ContactFormSection';
    import Footer from '@/components/sections/Footer';

    const App = () => {
      const { toast } = useToast();

      const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        
        let isValid = true;
        if (!data.name || !data.email || !data.company || !data.licenseType || !data.message) {
          isValid = false;
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: "Please fill in all fields.",
          });
        }
        
        if (isValid) {
          console.log("Form data:", data);
          toast({
            title: "Message Sent!",
            description: "We've received your message and will get back to you shortly.",
          });
          e.target.reset();
        }
      };

      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-gray-100 font-sans">
          <Header />
          <main>
            <HeroSection />
            <HowItWorksSection />
            <WhyChooseUsSection />
            <TestimonialsSection />
            <ContactFormSection onSubmit={handleSubmit} />
          </main>
          <Footer />
          <Toaster />
        </div>
      );
    };

    export default App;
  