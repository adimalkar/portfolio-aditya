"use client";

import emailjs from "@emailjs/browser";
import { useState } from "react";
import { personalData } from "@/utils/data/personal-data";

const service = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const template = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const key = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export default function ContactForm() {
  const [state, setState] = useState("idle");
  async function send(event) {
    event.preventDefault();
    if (state === "sending") return;
    const form = event.currentTarget;
    const data = new FormData(form);
    setState("sending");
    try {
      await emailjs.send(service, template, {
        from_name: data.get("name"), from_email: data.get("email"),
        message: data.get("message"), to_name: personalData.name,
      }, key);
      form.reset();
      setState("sent");
    } catch {
      setState("failed");
    }
  }
  if (!service || !template || !key) {
    return <div className="email-action"><a className="button primary" href={"mailto:" + personalData.email}>Email Aditya</a></div>;
  }
  return (
    <form onSubmit={send}>
      <div className="fields">
        <label>Your name<input name="name" autoComplete="name" maxLength={100} required /></label>
        <label>Email address<input name="email" type="email" autoComplete="email" maxLength={100} required /></label>
      </div>
      <label>Message<textarea name="message" rows={4} maxLength={500} required /></label>
      <button className="button primary" type="submit" disabled={state === "sending"}>{state === "sending" ? "Sending…" : "Send message"}</button>
      <span role="status">{state === "sent" && "Your message was sent."}{state === "failed" && <>Your message couldn’t be sent. <a href={"mailto:" + personalData.email}>Email me directly.</a></>}</span>
    </form>
  );
}
