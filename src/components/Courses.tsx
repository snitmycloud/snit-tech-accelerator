
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Code, Globe, Network } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      title: "AWS DevOps",
      icon: <Cloud className="h-8 w-8" />,
      description: "Real-world deployment & automation skills",
      features: ["Git, Jenkins, Docker, Terraform", "Hands-on labs", "Certification prep"],
      color: "from-snit-teal to-snit-teal/80"
    },
    {
      title: "Microsoft Azure",
      icon: <Code className="h-8 w-8" />,
      description: "Portal, CLI, ARM Templates",
      features: ["AZ-104 preparation", "Advanced exam prep", "Cloud architecture"],
      color: "from-snit-orange to-snit-orange/80"
    },
    {
      title: "Digital Marketing",
      icon: <Globe className="h-8 w-8" />,
      description: "SEO, SMM, Google Ads, Analytics",
      features: ["100% Practical", "Project-Based Learning", "Real campaigns"],
      color: "from-snit-teal to-snit-orange"
    },
    {
      title: "CCNA",
      icon: <Network className="h-8 w-8" />,
      description: "Networking basics, IP addressing",
      features: ["Cisco routers", "CCNA 200-301 prep", "Network troubleshooting"],
      color: "from-snit-orange to-snit-teal"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">📚 Popular Courses</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Industry-recognized training programs designed to launch your tech career
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${course.color}`}></div>
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-snit-teal/10 to-snit-orange/10 rounded-full w-fit text-snit-teal">
                  {course.icon}
                </div>
                <CardTitle className="text-xl text-gray-900">{course.title}</CardTitle>
                <CardDescription className="text-gray-600">{course.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 mb-6">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <span className="text-snit-orange mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-snit-teal hover:bg-snit-teal/90 text-white">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
