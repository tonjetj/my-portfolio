import { useEffect } from "react";

export const useCursorGrowOnHover = (selector: string) => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const elements = document.querySelectorAll(selector);

    const onEnter = () => cursor?.classList.add("big");
    const onLeave = () => cursor?.classList.remove("big");

    elements.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, [selector]);
};
