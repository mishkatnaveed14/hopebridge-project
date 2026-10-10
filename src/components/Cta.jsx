import { useState } from "react";
import { cta } from "../data/siteData.js";

/**
 * Donation call-to-action banner with a simple demo form.
 * NOTE: this is a visual demonstration only — no payment is processed.
 */
export default function Cta() {
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const value = Number(amount);
    if (!value || value <= 0) {
      setMessage("Please enter a valid donation amount.");
      return;
    }
    setMessage(
      `Thank you for your $${value} pledge! This is a demo — no payment was processed.`
    );
    setAmount("");
  };

  return (
    <section className="cta" id="donate">
      <div className="container cta-inner">
        <div className="cta-text">
          <h2>{cta.title}</h2>
          <p>{cta.text}</p>
        </div>
        <form className="cta-form" onSubmit={onSubmit} noValidate>
          <label htmlFor="donation-amount" className="sr-only">
            Donation amount in dollars
          </label>
          <input
            id="donation-amount"
            type="number"
            min="1"
            placeholder="Enter amount ($)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button type="submit" className="btn btn-light">
            {cta.button.label}
          </button>
          {message && <p className="cta-message" role="status">{message}</p>}
        </form>
      </div>
    </section>
  );
}
