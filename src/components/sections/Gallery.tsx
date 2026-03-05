/*
Gallery Section

Displays photos of pets cared for through Paws & Purrs.
Currently uses placeholders until real photos are added.
*/

export default function Gallery() {

  const pets = [
    {
      name: "Pookah"
    },
    {
      name: "Bobo"
    },
    {
      name: "Oliver"
    },
    {
      name: "Future Pet"
    },
    {
      name: "Future Pet"
    },
    {
      name: "Future Pet"
    }
  ];

  return (

    <section id="gallery" className="py-24 bg-white">

      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">
          The Paws & Purrs Crew
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {pets.map((pet, index) => (

            <div
              key={index}
              className="bg-slate-200 h-56 rounded-xl flex items-center justify-center text-slate-600 font-medium"
            >

              {pet.name}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}