"use client";
// @flow strict
import { isValidEmail } from "@/utils/check-email";
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";
import { toast } from "react-toastify";

function ContactForm() {
  const [error, setError] = useState({ email: false, required: false });
  const [configError, setConfigError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const checkRequired = () => {
    if (userInput.email && userInput.message && userInput.name) {
      setError({ ...error, required: false });
    }
  };

  const handleSendMail = async (e) => {
    e.preventDefault();

    if (!userInput.email || !userInput.message || !userInput.name) {
      setError({ ...error, required: true });
      return;
    } else if (error.email) {
      return;
    } else {
      setError({ ...error, required: false });
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setConfigError("Email not configured. Add SERVICE_ID, TEMPLATE_ID, and PUBLIC_KEY in Vercel env.");
      toast.error("Email not configured. Add env vars in Vercel and redeploy.");
      return;
    }
    setConfigError(null);

    try {
      setIsLoading(true);

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: userInput.name,
          from_email: userInput.email,
          message: userInput.message,
          to_name: "Aditya Malkar",
        },
        publicKey
      );

      toast.success("Signal sent successfully!");
      setUserInput({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      const msg = (err?.text || err?.message || String(err)).slice(0, 80);
      setConfigError("Send failed. " + (msg || "Check Vercel env: PUBLIC_KEY."));
      toast.error("Failed to send. See message below.");
      console.error("EmailJS error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form ref={formRef} className="signal-form rv" onSubmit={handleSendMail}>
      <label htmlFor="f-name">YOUR NAME</label>
      <input
        id="f-name"
        type="text"
        maxLength="100"
        placeholder="Cpt. Jane Doe"
        required
        value={userInput.name}
        onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}
        onBlur={checkRequired}
      />

      <label htmlFor="f-email">RETURN COORDINATES</label>
      <input
        id="f-email"
        type="email"
        maxLength="100"
        placeholder="you@example.com"
        required
        value={userInput.email}
        onChange={(e) => setUserInput({ ...userInput, email: e.target.value })}
        onBlur={() => {
          checkRequired();
          setError({ ...error, email: !isValidEmail(userInput.email) });
        }}
      />
      {error.email && (
        <p className="form-note err">// Error: invalid email format</p>
      )}

      <label htmlFor="f-msg">MESSAGE IN A BOTTLE</label>
      <textarea
        id="f-msg"
        maxLength="500"
        name="message"
        placeholder="What are we building?"
        required
        value={userInput.message}
        onChange={(e) => setUserInput({ ...userInput, message: e.target.value })}
        onBlur={checkRequired}
      />

      {configError && <p className="form-note warn">{configError}</p>}
      {error.required && <p className="form-note err">// Error: all fields are required</p>}

      <button className="btn btn-primary" type="submit" disabled={isLoading}>
        {isLoading ? "SENDING…" : "LAUNCH THE BOTTLE →"}
      </button>
    </form>
  );
}

export default ContactForm;
