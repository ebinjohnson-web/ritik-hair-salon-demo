import Link from "next/link";
export default function SiteFooter() {
  return (
    <footer className="quiet-footer">
      <div className="quiet-footer-top">
        <strong>Ritik Hair Salon</strong>
        <nav aria-label="Footer">
          <Link href="/studio#story">The studio</Link>
          <Link href="/studio#services">Services</Link>
          <Link href="/studio#contact">Inquire</Link>
        </nav>
      </div>
      <p className="quiet-footer-note">
        © 2026 · Fictional concept. Stock photography for illustration.
      </p>
      <details className="photo-credits">
        <summary>Photo credits</summary>
        <ul>
          <li>
            <a
              href="https://www.pexels.com/photo/woman-getting-a-haircut-3992876/"
              target="_blank"
              rel="noopener noreferrer"
            >
              cottonbro studio · salon cut
            </a>
          </li>
          <li>
            <a
              href="https://www.pexels.com/photo/woman-getting-a-haircut-3992873/"
              target="_blank"
              rel="noopener noreferrer"
            >
              cottonbro studio · salon portrait
            </a>
          </li>
          <li>
            <a
              href="https://www.pexels.com/photo/a-woman-getting-her-hair-done-in-the-salon-7755651/"
              target="_blank"
              rel="noopener noreferrer"
            >
              RDNE Stock project · salon curls
            </a>
          </li>
        </ul>
        <p>
          Photography from{" "}
          <a
            href="https://www.pexels.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pexels
          </a>
          , used under the{" "}
          <a
            href="https://www.pexels.com/license/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pexels License
          </a>
          . The people pictured are not presented as this fictional
          organisation’s staff or members.
        </p>
      </details>
    </footer>
  );
}
