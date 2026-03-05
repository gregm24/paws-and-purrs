/*
About Section

Explains Greg's story and how Paws & Purrs started.
This helps build trust with customers.
*/

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">

        <h2 className="text-3xl font-bold mb-6 text-gray-900">
          About Paws & Purrs
        </h2>

        <p className="text-gray-700 mb-4">
          Hi, I'm Greg Myers. I started walking dogs and caring for pets
          in my apartment building before leaving for college.
          What began as a simple flyer turned into a trusted neighborhood
          service helping residents with their pets and everyday tasks.
        </p>

        <p className="text-gray-700 mb-4">
          Today I'm a computer science student at the University of Florida,
          but when I'm home I continue helping residents with dog walking,
          cat sitting, errands, computer help, and other services.
        </p>

        <p className="text-gray-700">
          My goal is simple: make life easier for people while making sure
          their pets are happy, safe, and well cared for.
        </p>

      </div>
    </section>
  );
}