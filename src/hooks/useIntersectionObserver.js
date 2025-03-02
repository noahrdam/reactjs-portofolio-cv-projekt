import { useEffect } from "react";

const useIntersectionObserver = (
  selector,
  className,
  options = { threshold: 0.1 }
) => {
  useEffect(() => {
    const element = document.querySelector(selector);

    if (!element) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          element.classList.add(className);
        } else {
          element.classList.remove(className);
        }
      });
    }, options);

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [selector, className, options]);
};

export default useIntersectionObserver;
