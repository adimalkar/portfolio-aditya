import { personalData } from "@/utils/data/personal-data";
import ContactForm from "./contact-form";

export default function ContactSection() {
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-heading">
      <div className="wrap split">
        <div className="section-intro">
          <h2 id="contact-heading">Get in <em>touch.</em></h2>
          <p>Have an AI engineering role or an open-source project in mind? I’d like to hear about it.</p>
          <div className="contact-links">
            <a href={"mailto:" + personalData.email}>{personalData.email}</a>
            <a href={"tel:" + personalData.phone.replace(/[^+\d]/g, "")}>{personalData.phone}</a>
            <a href={personalData.linkedIn}>LinkedIn</a>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
