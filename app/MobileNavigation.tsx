"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowIcon } from "./ArrowIcon";

export function MobileNavigation() {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const [open, setOpen] = useState(false);

  const closeMenu = useCallback(() => {
    const details = detailsRef.current;
    if (details) details.open = false;
    setOpen(false);
  }, []);

  useEffect(() => {
    if (!open) return;

    const closeOnScroll = () => closeMenu();
    const closeOnOutsideTap = (event: PointerEvent) => {
      if (!detailsRef.current?.contains(event.target as Node)) closeMenu();
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    window.addEventListener("scroll", closeOnScroll, { passive: true });
    document.addEventListener("pointerdown", closeOnOutsideTap);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      window.removeEventListener("scroll", closeOnScroll);
      document.removeEventListener("pointerdown", closeOnOutsideTap);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [closeMenu, open]);

  return (
    <details ref={detailsRef} className="mobile-menu" onToggle={(event) => setOpen(event.currentTarget.open)}>
      <summary aria-label={open ? "Menü schließen" : "Menü öffnen"} aria-expanded={open}><span /><span /></summary>
      <button type="button" className="mobile-menu-backdrop" aria-label="Navigation schließen" onClick={closeMenu} />
      <nav aria-label="Mobile Navigation">
        <a href="#story" onClick={closeMenu}>Our story</a>
        <a href="#together" onClick={closeMenu}>Why two</a>
        <a href="#work" onClick={closeMenu}>Work</a>
        <a href="mailto:wetworldwanderlust@gmail.com?subject=Tell%20us%20about%20your%20project" onClick={closeMenu}>Tell us about your project <ArrowIcon /></a>
      </nav>
    </details>
  );
}
