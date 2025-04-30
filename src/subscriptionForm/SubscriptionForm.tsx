"use client";
import { FC, useState } from "react";

const SubscriptionForm: FC = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribed with email:", email);
  };

  return (
    <div className="subscription-form">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  )
}

export default SubscriptionForm;