
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/lovable-uploads/79aa00d8-4665-4151-8b0b-aa476fd446b3.png" 
                alt="SNIT Solutions Logo" 
                className="w-10 h-10"
              />
              <h3 className="text-xl font-bold">SNIT Solutions</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering careers through cutting-edge technology training and global placement opportunities.
            </p>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-snit-teal rounded-full flex items-center justify-center">
                <span className="text-sm">f</span>
              </div>
              <div className="w-8 h-8 bg-snit-orange rounded-full flex items-center justify-center">
                <span className="text-sm">t</span>
              </div>
              <div className="w-8 h-8 bg-snit-teal rounded-full flex items-center justify-center">
                <span className="text-sm">in</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-snit-orange">Courses</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">AWS DevOps</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Microsoft Azure</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">CCNA</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-snit-orange">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Placements</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-snit-orange">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📞 +91 9876543210</li>
              <li>✉️ info@snitsolutions.com</li>
              <li>📍 Tech Hub, Hyderabad</li>
              <li>🕒 Mon-Fri: 9AM-7PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 SNIT Solutions. All rights reserved. | Your Gateway to Global Tech Careers 🚀</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
