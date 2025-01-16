import React, { useRef, useState } from "react";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setform] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = ({name, value}) => {
    setform({...form, [name]:value})
  };
  const handleSubmit = () => {};
  return (
    <section className="c-space my-20" id="contact">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal background"
          className="absolute min-h-screen"
        />
        <div className="contact-container">
          <h3 className="head-text">Let's Talk</h3>
          <p className="text-lg text-white-600 mt-3">
            I’m enthusiastic about joining your team and using my skills to
            create innovative web solutions that drive success for your
            business.
          </p>

          <form
            action=""
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col mt-12 space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Akash Kumar"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="akashkumar8862825283@gmail.com"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Your Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Hi, I wanna offer you a job ...."
              />
            </label>
            <button
              className="field-btn"
              type="submit"
              disabled={loading}
            >
                {loading ? 'Sending....' : 'Send Message'}
                <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow"/>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
