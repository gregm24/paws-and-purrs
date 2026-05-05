"use client";

import { useState } from "react";

const SERVICES = [
  "Dog Walking",
  "Cat Feeding",
  "Pet Sitting",
  "Errand Running",
  "Organization",
  "Computer Help",
  "Moving Help",
  "Tutoring",
  "Childcare",
  "Other",
];

type FormState = {
  name: string;
  email: string;
  service: string;
  date: string;
  notes: string;
};

type SubmitStatus = "idle" | "loading" | "success" | "error";

const EMPTY: FormState = { name: "", email: "", service: "", date: "", notes: "" };

export default function BookingForm() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const set = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
        setForm(EMPTY);
      } else {
        setStatus("error");
        setErrorMsg(data.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again or call 917-900-8924.");
    }
  };

  const inputClass =
    "w-full rounded-xl px-5 py-4 bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-orange focus:bg-white/15 transition text-base";

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-xl font-bold text-white mb-2">Request sent!</h3>
        <p className="text-white/70 text-sm">
          I&apos;ll follow up by email within 24 hours to confirm the details.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-orange text-sm underline underline-offset-2"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm text-white/60 mb-2 font-medium">
            Name <span className="text-orange">*</span>
          </label>
          <input
            type="text"
            required
            value={form.name}
            onChange={set("name")}
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-sm text-white/60 mb-2 font-medium">
            Email <span className="text-orange">*</span>
          </label>
          <input
            type="email"
            required
            value={form.email}
            onChange={set("email")}
            placeholder="your@email.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm text-white/60 mb-2 font-medium">
            Service <span className="text-orange">*</span>
          </label>
          <select
            required
            value={form.service}
            onChange={set("service")}
            className={`${inputClass} cursor-pointer`}
          >
            <option value="" disabled>
              Select a service
            </option>
            {SERVICES.map((s) => (
              <option key={s} value={s} className="bg-navy text-white">
                {s}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm text-white/60 mb-2 font-medium">
            Date <span className="text-orange">*</span>
          </label>
          <input
            type="date"
            required
            value={form.date}
            onChange={set("date")}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm text-white/60 mb-2 font-medium">
          Notes
        </label>
        <textarea
          rows={4}
          value={form.notes}
          onChange={set("notes")}
          placeholder="Pet names, address, anything helpful..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === "error" && (
        <p className="text-red-400 text-sm">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="flex items-center justify-center gap-2 w-full sm:w-auto sm:self-start px-10 py-4 text-lg bg-orange text-white font-semibold rounded-full hover:bg-orange-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <>
            <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
            Sending…
          </>
        ) : (
          "Send Request"
        )}
      </button>
    </form>
  );
}
