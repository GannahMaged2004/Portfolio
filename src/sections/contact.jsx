import { useState } from "react";

export default function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  function validate() {
    const e = {};
    if (!values.name.trim()) e.name = "Name is required.";
    if (!/^\S+@\S+\.\S+$/.test(values.email)) e.email = "Valid email is required.";
    if (values.message.trim().length < 10) e.message = "Message should be at least 10 characters.";
    return e;
  }

  function onChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  function onSubmit(e) {
    e.preventDefault();
    const eObj = validate();
    setErrors(eObj);
    if (Object.keys(eObj).length === 0) {
      setSent(true);
      setValues({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 3000);
    }
  }

  const input =
    "w-full rounded-lg border border-gray-700 bg-gray-900 px-3 sm:px-4 py-2 sm:py-2.5 text-gray-200 placeholder-gray-500 focus:border-yellow-400 outline-none text-sm sm:text-base";

  return (
    <section id="contact" className="scroll-mt-20 bg-black text-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20 lg:py-24">
        <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400">Contact</h2>
        <p className="mt-2 text-sm sm:text-base text-gray-400">
          Have a project or just wanna chat?
        </p>

        <form className="mt-6 space-y-4 w-full max-w-xl mx-auto" onSubmit={onSubmit}>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={values.name}
              onChange={onChange}
              className={input}
            />
            {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={values.email}
              onChange={onChange}
              className={input}
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Your message"
              value={values.message}
              onChange={onChange}
              rows={5}
              className={`${input} min-h-[140px]`}
            />
            {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-yellow-400 text-black font-semibold py-2 sm:py-2.5 hover:bg-yellow-300 transition"
          >
            Send Message
          </button>
          {sent && <p className="text-green-400 text-sm mt-2">✅ Message sent!</p>}
        </form>
      </div>
    </section>
  );
}
