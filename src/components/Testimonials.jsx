import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";
import { testimonials } from "../data/siteData.js";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = testimonials.items.length;
  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);
  const item = testimonials.items[index];

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (isPaused || reduceMotion || total < 2) return undefined;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % total);
    }, 5200);

    return () => window.clearInterval(timer);
  }, [isPaused, total]);

  return (
    <section
      className="section testimonials"
      id="testimonials"
      aria-label="Volunteer testimonials"
    >
      <div className="container">
        <div className="section-head center">
          <p className="kicker">{testimonials.kicker}</p>
          <h2>{testimonials.title}</h2>
        </div>
        <div
          className="testimonial-card"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget))
              setIsPaused(false);
          }}
        >
          <div
            className="testimonial-copy"
            key={index}
            aria-live="polite"
            aria-atomic="true"
          >
            <FaQuoteLeft
              className="testimonial-quote-icon"
              aria-hidden="true"
            />
            <p className="testimonial-text">{item.quote}</p>
            <div className="testimonial-person">
              <img
                src={item.image}
                alt={`Portrait of ${item.name}`}
                width="768"
                height="768"
                loading="lazy"
              />
              <div>
                <h3>{item.name}</h3>
                <p>{item.role}</p>
              </div>
            </div>
          </div>
          <div className="testimonial-controls">
            <div className="testimonial-nav">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous testimonial"
              >
                <FaChevronLeft />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
              >
                <FaChevronRight />
              </button>
            </div>
            <div
              className="testimonial-pagination"
              aria-label="Choose a testimonial"
            >
              {testimonials.items.map((testimonial, slideIndex) => (
                <button
                  type="button"
                  key={testimonial.name}
                  className={slideIndex === index ? "is-active" : ""}
                  aria-label={`Show testimonial ${slideIndex + 1}`}
                  aria-pressed={slideIndex === index}
                  onClick={() => setIndex(slideIndex)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
