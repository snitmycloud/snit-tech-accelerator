
import { Calendar, Users, Briefcase, GraduationCap, Monitor } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Regular Batches",
      description: "Next starting June 3, 2025"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Trainers",
      description: "10+ Years Experience"
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Placement Support",
      description: "Dedicated career assistance"
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Career Guidance",
      description: "Resume help & interview prep"
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Flexible Learning",
      description: "Online + Offline Modes"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">🌟 Why Choose Us?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're committed to your success with comprehensive support and proven methodologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group hover:scale-105 transition-transform p-6">
              <div className="mx-auto mb-4 p-4 bg-gradient-to-r from-snit-teal to-snit-orange rounded-full w-fit text-white">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
