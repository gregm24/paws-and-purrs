"use client";

import { useState } from "react";

/*
Booking Section

Allows users to request a service appointment.
Currently logs the form data and displays a success message.
*/

export default function Booking() {

  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {

    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      service: formData.get("service"),
      date: formData.get("date"),
      notes: formData.get("notes")
    };

    console.log("Booking Request:", data);

    setSubmitted(true);
  }

  return (
    <section id="booking" className="py-24 bg-white">

      <div className="max-w-3xl mx-auto px-4">

        <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
          Book a Service
        </h2>

        {submitted ? (

          <div className="text-center text-green-600 text-lg font-medium">
            Thank you! Your request has been submitted.
          </div>

        ) : (

          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-slate-50 p-10 rounded-xl shadow-lg border border-gray-200"
          >

            {/* Name */}

            <div>

              <label className="block text-sm font-semibold text-slate-800 mb-2">
                Name
              </label>

              <input
                name="name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none"
              />

            </div>

            {/* Email */}

            <div>

              <label className="block text-sm font-semibold text-slate-800 mb-2">
                Email
              </label>

              <input
                name="email"
                type="email"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none"
              />

            </div>

            {/* Service */}

            <div>

              <label className="block text-sm font-semibold text-slate-800 mb-2">
                Service
              </label>

              <select
                name="service"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none"
              >

                <option value="">Select a service</option>
                <option>Dog Walking</option>
                <option>Cat Feeding</option>
                <option>Pet Sitting</option>
                <option>Errand Running</option>
                <option>Computer Help</option>
                <option>Moving Help</option>
                <option>Tutoring</option>
                <option>Childcare</option>

              </select>

            </div>

            {/* Date */}

            <div>

              <label className="block text-sm font-semibold text-slate-800 mb-2">
                Preferred Date
              </label>

              <input
                name="date"
                type="date"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none"
              />

            </div>

            {/* Notes */}

            <div>

              <label className="block text-sm font-semibold text-slate-800 mb-2">
                Notes
              </label>

              <textarea
                name="notes"
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none"
              />

            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition"
            >
              Submit Request
            </button>

          </form>

        )}

      </div>

    </section>
  );
}