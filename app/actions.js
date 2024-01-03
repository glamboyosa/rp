"use server";

import { Resend } from "resend";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import Email from "./email";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(prevState, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const number = formData.get("number");
  const message = formData.get("message");
  const phoneNumber = parsePhoneNumberFromString(number, "ZZ");

  if (phoneNumber) {
    // Get the country code
    const countryCode = phoneNumber.country;

    // Get the national number
    const nationalNumber = phoneNumber.nationalNumber;

    // Construct the result
    const result = `${countryCode} ${nationalNumber}`;
    const whatsappLink = `https://wa.me/${result}`;
    const { data, error } = await resend.emails.send({
      from: "Me <work@tomisinodukoya.com>",
      to: ["majortomiodukoya@gmail.com"],
      subject: "I want to work with you!",
      react: Email({ senderName: name, email, message, whatsappLink }),
    });

    return {
      message: "We will be in contact 🚀",
      success: true,
    };
  } else {
    return {
      message: "Please enter a valid number",
      success: false,
    };
  }
}
