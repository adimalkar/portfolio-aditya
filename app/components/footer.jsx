import { personalData } from "@/utils/data/personal-data";

export default function Footer() {
  return (
    <footer><div className="wrap footer-inner">
      <span>© {new Date().getFullYear()} Aditya Malkar</span>
      <div><a href={personalData.github}>GitHub</a><a href={personalData.linkedIn}>LinkedIn</a><a href="/#hero">Back to top</a></div>
    </div></footer>
  );
}
