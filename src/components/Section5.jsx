import { Field, Formik } from "formik";
import { useForm } from "@formspree/react";
import { useContext, useState } from "react";
import { ThemeTog } from "../App";
import Modal from "./Modal";

const Section5 = () => {
  const [state, formspreeSubmit] = useForm("xldoqyjw");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({
    title: "",
    message: "",
  });
  const { dark } = useContext(ThemeTog);

  return (
    <section className="w-full py-24 flex justify-center items-center">
      <div className="w-[90%] sm:w-[65%] flex flex-col items-center gap-y-4">
        {/* Header Text */}
        <div className="flex flex-col w-full h-fit gap-y-4">
          <h2
            className={`text-2xl font-bold ${
              dark
                ? "text-[#f1f1f1] [text-shadow:1px_1px_1px_#111]"
                : "text-black/70"
            }`}
          >
            Let’s Build Something Great
          </h2>
          <p
            className={`max-w-[800px] ${
              dark
                ? "text-[#f1f1f1] [text-shadow:1px_1px_1px_#111]"
                : "text-black/70"
            } text-[14px] sm:text-[16px] leading-6`}
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
              if (!values.fullname.trim()) {
                setModalData({
                  title: "Hold on! 👀",
                  message:
                    "You forgot your name — I can't reply to 'Hey you'. Drop it in and let's talk.",
                });
                setModalOpen(true);
                return;
              }

              if (!values.email.trim()) {
                setModalData({
                  title: "No email? Really? 😄",
                  message:
                    "How am I supposed to reach you — telepathy? Toss in your email and we're good.",
                });
                setModalOpen(true);
                return;
              }

              if (!values.message.trim()) {
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
              // Validation rules
              const isValidName = values.fullname.trim().length >= 3;
              const isValidEmail =
                values.email.includes("@gmail.com") && values.email.length > 10;
              const isValidMessage = values.message.trim().length > 0;

              return (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-y-3 relative"
                >
                  <div className="w-full flex flex-col md:flex-row gap-3 py-4">
                    <div className="nebula-input relative w-full overflow-hidden">
                      <Field
                        type="text"
                        name="fullname"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.fullname}
                        placeholder="Full Name"
                        className={`input w-full rounded-2xl outline-none pl-8 py-4 bg-black/5 ${
                          dark
                            ? "text-[#f1f1f1] border-white/40"
                            : "text-black/90"
                        } border transition-all duration-200 ${
                          touched.fullname
                            ? isValidName
                              ? "border-green-500"
                              : "border-red-500"
                            : "border-black/20"
                        }`}
                      />

                      <div
                        className="nebula-particle absolute w-1.5 h-1.5 rounded-full pointer-events-none opacity-0 top-1/2 left-10"
                        style={{
                          "--x": "0.2",
                          "--y": "-0.4",
                          "--delay": "0.1s",
                        }}
                      />
                      <div
                        className="nebula-particle absolute w-1.5 h-1.5 rounded-full pointer-events-none opacity-0 top-1/2 left-10"
                        style={{
                          "--x": "0.5",
                          "--y": "-0.2",
                          "--delay": "0.3s",
                        }}
                      />
                      <div
                        className="nebula-particle absolute w-1.5 h-1.5 rounded-full pointer-events-none opacity-0 top-1/2 left-10"
                        style={{
                          "--x": "0.3",
                          "--y": "0.3",
                          "--delay": "0.5s",
                        }}
                      />
                      <div
                        className="nebula-particle absolute w-1.5 h-1.5 rounded-full pointer-events-none opacity-0 top-1/2 left-10"
                        style={{
                          "--x": "0.7",
                          "--y": "0.1",
                          "--delay": "0.2s",
                        }}
                      />
                      <div
                        className="nebula-particle absolute w-1.5 h-1.5 rounded-full pointer-events-none opacity-0 top-1/2 left-10"
                        style={{
                          "--x": "0.1",
                          "--y": "-0.7",
                          "--delay": "0.4s",
                        }}
                      />
                      <div
                        className="nebula-particle absolute w-1.5 h-1.5 rounded-full pointer-events-none opacity-0 top-1/2 left-10"
                        style={{
                          "--x": "0.6",
                          "--y": "0.4",
                          "--delay": "0.6s",
                        }}
                      />
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
                        className={`input w-full rounded-2xl outline-none pl-8 py-4 bg-black/5 ${
                          dark
                            ? "text-white border-white/40"
                            : "text-black/90 border-black/20"
                        } border transition-all duration-200 ${
                          touched.email
                            ? isValidEmail
                              ? "border-green-500"
                              : "border-red-500"
                            : "border-black/20"
                        }`}
                      />

                      {/* <label
                        className={`user-label absolute left-8 top-4 pointer-events-none transition-all duration-300 ease-out px-1 text-sm ${
                          dark
                            ? "bg-[#00000f] text-[#6a6a8a]"
                            : "bg-white text-gray-400"
                        }`}
                      >
                        Email Address
                      </label> */}

                      <div
                        className="nebula-particle absolute w-1.5 h-1.5 rounded-full pointer-events-none opacity-0 top-1/2 left-10"
                        style={{
                          "--x": "0.2",
                          "--y": "-0.4",
                          "--delay": "0.1s",
                        }}
                      />
                      <div
                        className="nebula-particle absolute w-1.5 h-1.5 rounded-full pointer-events-none opacity-0 top-1/2 left-10"
                        style={{
                          "--x": "0.5",
                          "--y": "-0.2",
                          "--delay": "0.3s",
                        }}
                      />
                      <div
                        className="nebula-particle absolute w-1.5 h-1.5 rounded-full pointer-events-none opacity-0 top-1/2 left-10"
                        style={{
                          "--x": "0.3",
                          "--y": "0.3",
                          "--delay": "0.5s",
                        }}
                      />
                      <div
                        className="nebula-particle absolute w-1.5 h-1.5 rounded-full pointer-events-none opacity-0 top-1/2 left-10"
                        style={{
                          "--x": "0.7",
                          "--y": "0.1",
                          "--delay": "0.2s",
                        }}
                      />
                      <div
                        className="nebula-particle absolute w-1.5 h-1.5 rounded-full pointer-events-none opacity-0 top-1/2 left-10"
                        style={{
                          "--x": "0.1",
                          "--y": "-0.7",
                          "--delay": "0.4s",
                        }}
                      />
                      <div
                        className="nebula-particle absolute w-1.5 h-1.5 rounded-full pointer-events-none opacity-0 top-1/2 left-10"
                        style={{
                          "--x": "0.6",
                          "--y": "0.4",
                          "--delay": "0.6s",
                        }}
                      />
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
                    className={`w-full h-[10em] resize-none outline-none ${
                      dark
                        ? "text-white [text-shadow:1px_1px_1px_#111] border-white/40"
                        : "text-black/90 border-black/20"
                    } rounded-2xl pl-6 py-3 bg-black/5 border transition-all duration-200 ${
                      touched.message
                        ? isValidMessage
                          ? "border-green-500"
                          : "border-red-500"
                        : "border-black/20"
                    }`}
                  />

                  {/* Submit Button */}
                  {/* <button
                    type="submit"
                    disabled={state.submitting}
                    className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200"
                  >
                    {state.submitting ? "Sending..." : "Send Message"}
                  </button> */}
                  <button
                    class="btn1Class"
                    type="submit"
                    disabled={state.submitting}
                  >
                    {state.submitting ? "Sending..." : "Send Message"}
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>

                  {/* Success Message */}
                  {state.succeeded && (
                    <p className="text-green-600 font-semibold text-center mt-4">
                      Message Sent Successfully!
                    </p>
                  )}
                </form>
              );
            }}
          </Formik>
        </div>
      </div>
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalData.title}
      >
        <p className="text-green-500 mb-6">{modalData.message}</p>
        <button
          onClick={() => setModalOpen(false)}
          className="relative bg-green-600 text-white px-4 py-1 rounded-lg font-medium overflow-hidden group hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50 flex justify-center items-center"
        >
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          <div className="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <span className="relative z-10 group-hover:scale-110 inline-block transition-transform duration-300">
            Close
          </span>
        </button>
      </Modal>
    </section>
  );
};

export default Section5;
