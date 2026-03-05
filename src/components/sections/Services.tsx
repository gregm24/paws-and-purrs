/*
Services Section

Displays the services offered through Paws & Purrs.
Split into Pet Services and Neighborhood Help.
*/

export default function Services() {
  const petServices = [
    {
      title: "Dog Walking",
      description: "Reliable dog walks to keep your pet active and happy."
    },
    {
      title: "Cat Feeding",
      description: "Feeding and checking in on your cat while you're away."
    },
    {
      title: "Pet Sitting",
      description: "30-minute visits to care for your pets at home."
    }
  ];

  const otherServices = [
    {
      title: "Errand Running",
      description: "Need something picked up or delivered? I can help."
    },
    {
      title: "Organization",
      description: "Help organizing rooms, closets, or storage."
    },
    {
      title: "Computer Help",
      description: "Tech troubleshooting and computer assistance."
    },
    {
      title: "Moving Help",
      description: "Help carrying or moving items within your building."
    },
    {
      title: "Tutoring",
      description: "Academic help for students when needed."
    },
    {
      title: "Childcare",
      description: "Occasional help supervising children."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">

        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center mb-12">
          Services
        </h2>

        {/* Pet Services */}
        <h3 className="text-xl font-semibold mb-6">
          Pet Services
        </h3>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {petServices.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <h4 className="text-lg font-semibold mb-2">
                {service.title}
              </h4>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Other Services */}
        <h3 className="text-xl font-semibold mb-6">
          Neighborhood Help
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {otherServices.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <h4 className="text-lg font-semibold mb-2">
                {service.title}
              </h4>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}