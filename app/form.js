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
    <form className="" action={formAction}>
      <table className="text-2xl">
        <tbody>
          <tr>
            <td>
              <p className="text-primary mr-2.5">01.</p>
            </td>
            <td>
              <p className="text-white  mr-6">Name</p>
            </td>
            <td>
              <input
                type="text"
                name="name"
                className="bg-transparent outline-none  min-w-64  text-offBlack"
                placeholder="Enter your name..."
              />
            </td>
          </tr>

          <tr>
            <td>
              <p className="text-primary mr-2.5">02.</p>
            </td>
            <td>
              <p className="text-white  mr-6">Email</p>
            </td>
            <td>
            <input
            type="email"
            name="email"
            className="bg-transparent outline-none min-w-64  text-offBlack"
            placeholder="Enter your email..."
          />
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        {/* <div className="flex ml-2  text-2xl"></div> */}
        {/* <div className="h-0 md:h-[1px] min-w-[75vw] bg-white"></div> */}
      </div>
      <div>
        <div className="flex ml-2  text-2xl">
          <p className="text-primary mr-2.5">02.</p>
          <p className="text-white  mr-6">Email</p>
         
        </div>
        {/* <div className="h-0 md:h-[1px]  min-w-[75vw] bg-white"></div> */}
      </div>
      <div>
        <div className="flex ml-2  text-2xl">
          <p className="text-primary mr-2.5">03.</p>
          <p className="text-white whitespace-nowrap  mr-6">Phone Number</p>
          <input
            type="tel"
            name="number"
            className="bg-transparent min-w-64 w-3/4 outline-none  text-offBlack"
            placeholder="Enter your phone number..."
          />
        </div>
        {/* <div className="h-0 md:h-[1px] min-w-[75vw]    bg-white"></div> */}
      </div>
      <div>
        <div className="flex ml-2   text-2xl">
          <p className="text-primary mr-2.5">04.</p>
          <p className="text-white  mr-6">Your Message to me</p>
          <input
            type="text"
            name="message"
            className="bg-transparent  min-w-64 outline-none  text-offBlack"
            placeholder="Write your mind..."
          />
        </div>
        {/* <div className="h-0 md:h-[1px]   min-w-[75vw] w-full bg-white"></div> */}
      </div>
      <button
        type="submit"
        className="bg-primary text-lg mt-4 rounded-sm px-10 py-3"
      >
        Send Message
      </button>
    </form>
  );
};

export default Form;
