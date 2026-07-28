import { useEffect } from "react";

const useIntersectionObserver = (
  selector,
  className,
  options = { threshold: 0.1 }
) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(className);
        } else {
          entry.target.classList.remove(className);
        }
      });
    }, options);

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [selector, className, options]);
};

export default useIntersectionObserver;
