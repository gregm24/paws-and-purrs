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
      notes: formData.get("notes"),
    };

    console.log("Booking Request:", data);

    setSubmitted(true);
  }

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">

        <h2 className="text-3xl font-bold text-center mb-10">
          Book a Service
        </h2>

        {submitted ? (
          <div className="text-center text-green-600 font-medium">
            Thank you! Your request has been submitted.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-gray-50 p-8 rounded-lg shadow"
          >
            {/* Name */}
            <div>
              <label className="block mb-1 font-medium">
                Name
              </label>
              <input
                name="name"
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 font-medium">
                Email
              </label>
              <input
                name="email"
                type="email"
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              />
            </div>

            {/* Service Type */}
            <div>
              <label className="block mb-1 font-medium">
                Service
              </label>
              <select
                name="service"
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              >
                <option value="">Select a service</option>
                <option>Dog Walking</option>
                <option>Cat Feeding</option>
                <option>Pet Sitting</option>
                <option>Errands</option>
                <option>Computer Help</option>
                <option>Moving Help</option>
                <option>Tutoring</option>
                <option>Childcare</option>
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="block mb-1 font-medium">
                Preferred Date
              </label>
              <input
                name="date"
                type="date"
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              />
            </div>

            {/* Notes */}
            <div>
              <label className="block mb-1 font-medium">
                Notes (Pet info, instructions, etc.)
              </label>
              <textarea
                name="notes"
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700"
            >
              Submit Request
            </button>
          </form>
        )}

      </div>
    </section>
  );
}