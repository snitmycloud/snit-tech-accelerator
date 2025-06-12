
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-snit-teal via-snit-teal/90 to-snit-orange/20 min-h-screen flex items-center">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-white">
            <div className="flex items-center gap-4 mb-8">
              <img 
                src="/lovable-uploads/79aa00d8-4665-4151-8b0b-aa476fd446b3.png" 
                alt="SNIT Solutions Logo" 
                className="w-20 h-20"
              />
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold">SNIT Solutions</h1>
                <p className="text-xl opacity-90">Your Gateway to Global Tech Careers 🚀</p>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl lg:text-3xl font-semibold mb-4">
                Industry-Recognized Training
              </h2>
              <p className="text-lg mb-6 opacity-90">
                Master AWS DevOps, Azure, Digital Marketing, CCNA, and more with hands-on experience
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <span className="text-snit-orange">✅</span>
                  <span>5000+ learners</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-snit-orange">🌟</span>
                  <span>300+ 5-star reviews</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-snit-orange">🌍</span>
                  <span>Global placements</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-snit-orange hover:bg-snit-orange/90 text-white px-8 py-3 text-lg">
                Register for Free Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-snit-teal px-8 py-3 text-lg">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
            
            <div className="mt-8 p-4 bg-snit-orange/20 rounded-lg border border-snit-orange/30">
              <p className="font-semibold">🎯 Upcoming Webinar: June 7, 2025</p>
              <p className="text-sm opacity-90">Next Batch Starting: June 3, 2025</p>
            </div>
          </div>

          <div className="flex-1 hidden lg:block">
            <div className="relative">
              <div className="w-96 h-96 bg-white/10 rounded-full backdrop-blur-sm border border-white/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎓</div>
                  <div className="text-2xl font-bold">Tech Excellence</div>
                  <div className="text-lg opacity-90">Awaits You</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
