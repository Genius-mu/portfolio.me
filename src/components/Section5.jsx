import { Field, Formik } from "formik";
import { useForm } from "@formspree/react";
import { useContext } from "react";
import { ThemeTog } from "../App";

const Section5 = () => {
  const [state, formspreeSubmit] = useForm("xldoqyjw");
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
            Got an idea, a project, or a vision that needs a frontend touch? I’d
            love to bring it to life. I build clean, fast, and interactive
            interfaces that turn ideas into real user experiences. If you’re
            looking for someone who codes with purpose and passion — let’s
            connect.
          </p>
        </div>

        {/* Contact Form */}
        <div className="flex flex-col w-full">
          <Formik
            initialValues={{ fullname: "", email: "", message: "" }}
            onSubmit={async (values, { resetForm }) => {
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
                  <div className="w-full flex flex-col md:flex-row gap-3">
                    {/* Fullname Field */}
                    <Field
                      type="text"
                      name="fullname"
                      placeholder="Fullname"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.fullname}
                      className={`w-full rounded-2xl outline-none pl-8 py-4 bg-black/5 ${
                        dark
                          ? "text-[#f1f1f1] border-white/40"
                          : "text-black/90 "
                      } border transition-all duration-200 ${
                        touched.fullname
                          ? isValidName
                            ? "border-green-500"
                            : "border-red-500"
                          : "border-black/20"
                      }`}
                    />

                    {/* Email Field */}
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      className={`w-full rounded-2xl outline-none pl-8 py-4 ${
                        dark
                          ? "text-white border-white/40"
                          : "text-black/90 border-black/20"
                      } bg-black/5 border transition-all duration-200 ${
                        touched.email
                          ? isValidEmail
                            ? "border-green-500"
                            : "border-red-500"
                          : "border-black/20"
                      }`}
                    />
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
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200"
                  >
                    {state.submitting ? "Sending..." : "Send Message"}
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
    </section>
  );
};

export default Section5;
