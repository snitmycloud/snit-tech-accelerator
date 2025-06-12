
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-snit-teal/5 to-snit-orange/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">💬 Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to start your tech journey? Contact us for a free consultation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-snit-teal">Register for Free Demo</CardTitle>
              <CardDescription>Fill out the form and we'll get back to you within 24 hours</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Enter your first name" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Enter your last name" />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" placeholder="Enter your phone number" />
              </div>
              <div>
                <Label htmlFor="course">Interested Course</Label>
                <Input id="course" placeholder="AWS DevOps, Azure, Digital Marketing, CCNA" />
              </div>
              <Button className="w-full bg-snit-orange hover:bg-snit-orange/90 text-white py-3 text-lg">
                Register Now
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-snit-teal rounded-full text-white">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600">+91 9876543210</p>
                  <p className="text-gray-600">+91 8765432109</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-snit-orange rounded-full text-white">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">info@snitsolutions.com</p>
                  <p className="text-gray-600">admissions@snitsolutions.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-snit-teal rounded-full text-white">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                  <p className="text-gray-600">Tech Hub, Hyderabad</p>
                  <p className="text-gray-600">India & Global Locations</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-snit-orange rounded-full text-white">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Office Hours</h3>
                  <p className="text-gray-600">Mon - Fri: 9:00 AM - 7:00 PM</p>
                  <p className="text-gray-600">Sat: 9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>

            <Card className="bg-gradient-to-r from-snit-teal to-snit-orange text-white border-0">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">🎯 Special Offer!</h3>
                <p className="mb-4">Early bird discount of 20% for June batch</p>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-snit-teal">
                  Claim Offer
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
