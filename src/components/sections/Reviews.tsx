/*
Reviews Section

Displays testimonials from customers.
Currently uses placeholder reviews.
*/

export default function Reviews() {

  const reviews = [
    {
      name: "Sarah L.",
      text: "Greg has been amazing with our dog Pookah. Always reliable and great with pets."
    },
    {
      name: "Michael R.",
      text: "Super helpful when we were away. Took great care of our cat and kept us updated."
    },
    {
      name: "Emily T.",
      text: "Greg helped us with errands and tech help as well. Very dependable!"
    }
  ];

  return (

    <section id="reviews" className="py-24 bg-slate-100">

      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">
          What People Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((review, index) => (

            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition"
            >

              <div className="text-yellow-400 text-xl mb-4">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="text-slate-700 mb-6">
                "{review.text}"
              </p>

              <p className="font-semibold text-slate-900">
                {review.name}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}