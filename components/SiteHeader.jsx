"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { asset } from "../lib/site";
function NavLink({ href, className = "", children, ...props }) {
  const pathname = usePathname();
  const active =
    !href.includes("#") &&
    pathname.replace(/\/$/, "") === href.replace(/\/$/, "");
  return (
    <Link
      href={href}
      className={className + (active ? " active is-active" : "")}
      aria-current={active ? "page" : undefined}
      {...props}
    >
      {children}
    </Link>
  );
}
export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const ref = useRef(null);
  const pathname = usePathname();
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 12);
    const key = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        document.getElementById("menuToggle")?.focus();
      }
    };
    const outside = (e) => {
      if (!ref.current?.contains(e.target)) setOpen(false);
    };
    const resize = () => {
      if (innerWidth > 860) setOpen(false);
    };
    scroll();
    window.addEventListener("scroll", scroll, { passive: true });
    window.addEventListener("resize", resize);
    document.addEventListener("keydown", key);
    document.addEventListener("click", outside);
    return () => {
      window.removeEventListener("scroll", scroll);
      window.removeEventListener("resize", resize);
      document.removeEventListener("keydown", key);
      document.removeEventListener("click", outside);
    };
  }, []);
  return (
    <div ref={ref} className="header-mount">
      <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
        <div className="container nav-wrap">
          <Link className="brand" href="/" aria-label="Ritik Hair Salon home">
            <span className="brand-mark">R</span>
            <span className="brand-text">
              <strong>RITIK</strong>
              <small>Hair Salon</small>
            </span>
          </Link>
          <button
            className="menu-toggle"
            id="menuToggle"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-controls="siteNav"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
            <span />
          </button>
          <nav
            className={`site-nav${open ? " open" : ""}`}
            onClick={() => setOpen(false)}
            id="siteNav"
          >
            <NavLink href="/" className="">
              Home
            </NavLink>
            <NavLink href="/studio#story">Story</NavLink>
            <NavLink href="/studio#services">Services</NavLink>
            <NavLink href="/studio#contact">Contact</NavLink>
            <NavLink className="nav-cta" href="/studio">
              Enter Studio
            </NavLink>
          </nav>
        </div>
      </header>
    </div>
  );
}
