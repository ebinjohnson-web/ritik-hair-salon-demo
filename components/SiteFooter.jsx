import Link from "next/link";
import { asset } from "../lib/site";
export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-wrap">
        <div>
          <strong>Ritik Hair Salon</strong>
          <p>Fictional salon website concept for demo use only.</p>
        </div>
        <div className="footer-links">
          <Link href="/">Home</Link>
          <Link href="/studio">Studio</Link>
          <Link href="/studio#services">Services</Link>
          <Link href="/studio#contact">Contact</Link>
        </div>
        <div className="footer-meta">
          <span>
            © <span>2026</span> Ritik Hair Salon
          </span>
          <span>Concept demo</span>
        </div>
      </div>
    </footer>
  );
}
