"use client";
import { useFormState } from "react-dom";
import { sendEmail } from "./actions";
import { useEffect } from "react";
import { toast } from "sonner";
const initialState = {
  message: null,
  success: false,
};
const Form = () => {
  const [state, formAction] = useFormState(sendEmail, initialState);
  useEffect(() => {
    if (state.message) {
      if (state.success === false) {
        toast.error(state.message);
      } else if (state.success) {
        toast.message("Message sent!", {
          description: state.message,
        });
      }
    }
  }, [state]);
  return (
    <form className="flex flex-col" action={formAction}>
      <table className="text-5xl w-full">
        <tbody>
          <tr className="border-b">
            <td>
              <p className="text-primary py-20 px-4">01.</p>
            </td>
            <td>
              <p className="text-white  pr-6">Name<span className="text-primary">*</span> </p>
            </td>
            <td>
              <input
                type="text"
                name="name"
                className="bg-transparent outline-none w-full  text-primary "
                placeholder="Enter your name..."
              />
            </td>
          </tr>

          <tr className="border-b">
            <td>
              <p className="text-primary py-20 px-4">02.</p>
            </td>
            <td>
              <p className="text-white  pr-6">Email<span className="text-primary">*</span></p>
            </td>
            <td>
              <input
                type="email"
                name="email"
                className="bg-transparent outline-none w-full text-primary"
                placeholder="Enter your email..."
              />
            </td>
          </tr>

          <tr className="border-b">
            <td>
              <p className="text-primary py-20 px-4">03.</p>
            </td>
            <td>
              <p className="text-white  pr-6">Phone Number<span className="text-primary">*</span></p>
            </td>
            <td>
              <input
                type="tel"
                name="number"
                className="bg-transparent  outline-none w-full text-primary"
                placeholder="Enter your phone number..."
              />
            </td>
          </tr>

          <tr className="border-b">
            <td>
              <p className="text-primary py-20 px-4">04.</p>
            </td>
            <td>
              <p className="text-white  pr-6">Your Message to me<span className="text-primary">*</span></p>
            </td>
            <td>
              <input
                type="text"
                name="message"
                className="bg-transparent  outline-none w-full  text-primary "
                placeholder="Write your mind..."
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div className=" py-20 grid place-content-center">

      <button
        type="submit"
        className="bg-primary text-5xl mt-4 px-16 py-6 border rounded-lg"
      >
        Send Message
      </button>
      </div>
    </form>
  );
};

export default Form;
