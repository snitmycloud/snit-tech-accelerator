
const Stats = () => {
  const stats = [
    { number: "5000+", label: "Happy Learners", icon: "👥" },
    { number: "300+", label: "5-Star Reviews", icon: "⭐" },
    { number: "95%", label: "Placement Rate", icon: "🎯" },
    { number: "50+", label: "Partner Companies", icon: "🏢" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group hover:scale-105 transition-transform">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl lg:text-4xl font-bold text-snit-teal mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
