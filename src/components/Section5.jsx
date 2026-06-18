import { Field, Formik } from "formik";
import { useForm } from "@formspree/react";
import { useState } from "react";
import Modal from "./Modal";

// Particle positions shared by both inputs
const PARTICLES = [
  { x: "0.2", y: "-0.4", delay: "0.1s" },
  { x: "0.5", y: "-0.2", delay: "0.3s" },
  { x: "0.3", y: "0.3", delay: "0.5s" },
  { x: "0.7", y: "0.1", delay: "0.2s" },
  { x: "0.1", y: "-0.7", delay: "0.4s" },
  { x: "0.6", y: "0.4", delay: "0.6s" },
];

const NebulaParticles = () =>
  PARTICLES.map((p, i) => (
    <div
      key={i}
      className="nebula-particle absolute w-1.5 h-1.5 rounded-full pointer-events-none opacity-0 top-1/2 left-10"
      style={{ "--x": p.x, "--y": p.y, "--delay": p.delay }}
    />
  ));

// Accepts any real-looking email, not just Gmail
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Section5 = () => {
  const [state, formspreeSubmit] = useForm("xldoqyjw");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({ title: "", message: "" });

  return (
    <section className="w-full py-24 flex justify-center items-center">
      <div className="w-[90%] sm:w-[65%] flex flex-col items-center gap-y-4">
        {/* Header Text */}
        <div className="flex flex-col w-full h-fit gap-y-4">
          <h2 className={`text-2xl font-bold text-black/70`}>
            Let's Build Something Great
          </h2>
          <p
            className={`max-w-[800px] text-black/70 text-[14px] sm:text-[16px] leading-6`}
          >
            Got an idea, a project, or a vision that needs a frontend touch? I'd
            love to bring it to life. Saim, Gamified HabitXP, and a Spelling
            Game — my projects speak for themselves. If you're looking for
            someone who codes with purpose and passion — let's connect.
          </p>
        </div>

        {/* Contact Form */}
        <div className="flex flex-col w-full">
          <Formik
            initialValues={{ fullname: "", email: "", message: "" }}
            onSubmit={async (values, { resetForm }) => {
              const trimmedName = values.fullname.trim();
              const trimmedEmail = values.email.trim();
              const trimmedMessage = values.message.trim();

              if (!trimmedName) {
                setModalData({
                  title: "Hold on! 👀",
                  message:
                    "You forgot your name — I can't reply to 'Hey you'. Drop it in and let's talk.",
                });
                setModalOpen(true);
                return;
              }
              if (trimmedName.length < 3) {
                setModalData({
                  title: "That's a short name 🤔",
                  message:
                    "Give me at least 3 characters so I know what to call you.",
                });
                setModalOpen(true);
                return;
              }
              if (!trimmedEmail) {
                setModalData({
                  title: "No email? Really? 😄",
                  message:
                    "How am I supposed to reach you — telepathy? Toss in your email and we're good.",
                });
                setModalOpen(true);
                return;
              }
              if (!EMAIL_REGEX.test(trimmedEmail)) {
                setModalData({
                  title: "That email looks off 📭",
                  message:
                    "Double-check the format — something like name@domain.com works.",
                });
                setModalOpen(true);
                return;
              }
              if (!trimmedMessage) {
                setModalData({
                  title: "Say something! 🗣️",
                  message:
                    "You opened the form, you filled your details — don't go quiet now. What's on your mind?",
                });
                setModalOpen(true);
                return;
              }

              await formspreeSubmit(values);
              if (!state.errors) resetForm();
            }}
          >
            {({ values, touched, handleChange, handleBlur, handleSubmit }) => {
              const isValidName = values.fullname.trim().length >= 3;
              const isValidEmail = EMAIL_REGEX.test(values.email.trim());
              const isValidMessage = values.message.trim().length > 0;

              return (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-y-3 relative"
                  noValidate
                >
                  <div className="w-full flex flex-col md:flex-row gap-3 py-4">
                    {/* Name Field */}
                    <div className="nebula-input relative w-full overflow-hidden">
                      <Field
                        type="text"
                        name="fullname"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.fullname}
                        placeholder="Full Name"
                        aria-label="Full name"
                        className={`input w-full rounded-2xl outline-none pl-8 py-4 bg-black/5 backdrop-blur-2xl text-black/90 border transition-all duration-200 ${
                          touched.fullname
                            ? isValidName
                              ? "border-green-500"
                              : "border-red-500"
                            : "border-black/20"
                        }`}
                      />
                      <NebulaParticles />
                    </div>

                    {/* Email Field */}
                    <div className="nebula-input relative w-full">
                      <Field
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        aria-label="Email address"
                        className={`input w-full rounded-2xl outline-none pl-8 py-4 bg-black/5 backdrop-blur-2xl text-black/90 border-black/20 border transition-all duration-200 ${
                          touched.email
                            ? isValidEmail
                              ? "border-green-500"
                              : "border-red-500"
                            : "border-black/20"
                        }`}
                      />
                      <NebulaParticles />
                    </div>
                  </div>

                  {/* Message Field */}
                  <Field
                    as="textarea"
                    name="message"
                    placeholder="Write your Message"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                    aria-label="Message"
                    className={`w-full h-[10em] resize-none outline-none text-black/90 border-black/20 rounded-2xl pl-6 py-3 bg-black/5 backdrop-blur-2xl border transition-all duration-200 ${
                      touched.message
                        ? isValidMessage
                          ? "border-green-500"
                          : "border-red-500"
                        : "border-black/20"
                    }`}
                  />

                  {/* Submit Button */}
                  <button
                    className="btn1Class"
                    type="submit"
                    disabled={state.submitting}
                  >
                    {state.submitting ? "Sending..." : "Send Message"}
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>

                  {/* Success / Error feedback */}
                  {state.succeeded && (
                    <p
                      className="text-green-500 font-semibold text-center mt-4"
                      role="status"
                    >
                      Message sent successfully — I'll get back to you soon!
                    </p>
                  )}
                  {state.errors && state.errors.length > 0 && (
                    <p
                      className="text-red-500 font-semibold text-center mt-4"
                      role="alert"
                    >
                      Something went wrong sending that. Try again in a moment.
                    </p>
                  )}
                </form>
              );
            }}
          </Formik>
        </div>
      </div>

      {/* Validation Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalData.title}
        footer={
          <button
            onClick={() => setModalOpen(false)}
            className="relative px-5 py-2 rounded-lg bg-green-600 text-white font-medium overflow-hidden group hover:shadow-lg hover:shadow-green-500/40 transition-all duration-300"
          >
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <span className="relative z-10">Got it</span>
          </button>
        }
      >
        <p className="text-white/80 leading-relaxed">{modalData.message}</p>
      </Modal>
    </section>
  );
};

export default Section5;
