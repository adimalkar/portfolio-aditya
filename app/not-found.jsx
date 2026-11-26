import Link from "next/link";
export const metadata = { title: "Page not found | Aditya Malkar" };
export default function NotFound() {
  return <section className="wrap section missing"><p className="role">404</p><h1>Page not found.</h1><p>Explore my projects or head back to the homepage.</p><Link className="button primary" href="/">Back to portfolio</Link></section>;
}
