/*
Animal Charity Section

Displays links to animal charities that visitors
can donate to.
*/

export default function Charities() {

  const charities = [
    {
      name: "The Animal Project",
      description: "An organization dedicated to protecting and supporting animals.",
      link: "https://animalprojectnyc.squarespace.com/"
    },
    {
      name: "ASPCA",
      description: "One of the largest organizations working to prevent animal cruelty.",
      link: "https://www.aspca.org"
    },
    {
      name: "Humane Society",
      description: "Advocating for animal welfare and rescue programs.",
      link: "https://www.humanesociety.org"
    }
  ];

  return (

    <section id="charities" className="py-24 bg-slate-100">

      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">
          Support Animal Charities
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {charities.map((charity, index) => (

            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition"
            >

              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {charity.name}
              </h3>

              <p className="text-slate-700 mb-6">
                {charity.description}
              </p>

              <a
                href={charity.link}
                target="_blank"
                className="text-blue-600 font-semibold hover:underline"
              >
                Visit Website →
              </a>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}