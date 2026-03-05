/*
Services Section

Displays the services offered through Paws & Purrs.
Split into Pet Services and Neighborhood Help.
*/

export default function Services() {

  const petServices = [
    {
      title: "Dog Walking",
      description: "Reliable walks to keep your dog active and happy.",
      icon: "🐕"
    },
    {
      title: "Cat Feeding",
      description: "Feeding and check-ins while you're away.",
      icon: "🐈"
    },
    {
      title: "Pet Sitting",
      description: "30-minute visits to care for pets at home.",
      icon: "🏠"
    }
  ];

  const otherServices = [
    {
      title: "Errand Running",
      description: "Need something picked up or delivered?",
      icon: "🛒"
    },
    {
      title: "Organization",
      description: "Closets, rooms, and storage help.",
      icon: "📦"
    },
    {
      title: "Computer Help",
      description: "Tech troubleshooting and assistance.",
      icon: "💻"
    },
    {
      title: "Moving Help",
      description: "Help carrying or moving items.",
      icon: "📦"
    },
    {
      title: "Tutoring",
      description: "Academic help for students.",
      icon: "📚"
    },
    {
      title: "Childcare",
      description: "Occasional supervision help.",
      icon: "👶"
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-100">

      <div className="max-w-6xl mx-auto px-4">

        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">
          Services
        </h2>

        {/* PET SERVICES */}

        <h3 className="text-2xl font-semibold text-slate-900 mb-8">
          Pet Services
        </h3>

        <div className="grid md:grid-cols-3 gap-8 mb-16">

          {petServices.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition duration-300 border border-gray-100"
            >

              <div className="text-4xl mb-4">
                {service.icon}
              </div>

              <h4 className="text-xl font-bold text-slate-900 mb-2">
                {service.title}
              </h4>

              <p className="text-slate-700">
                {service.description}
              </p>

            </div>
          ))}

        </div>

        {/* OTHER SERVICES */}

        <h3 className="text-2xl font-semibold text-slate-900 mb-8">
          Neighborhood Help
        </h3>

        <div className="grid md:grid-cols-3 gap-8">

          {otherServices.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition duration-300 border border-gray-100"
            >

              <div className="text-4xl mb-4">
                {service.icon}
              </div>

              <h4 className="text-xl font-bold text-slate-900 mb-2">
                {service.title}
              </h4>

              <p className="text-slate-700">
                {service.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}