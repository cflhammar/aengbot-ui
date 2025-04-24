import React from "react";

const Subscribe: React.FC = () => {
  return (
    <div>
      <h1>Subscribe</h1>
      <p>Subscribe to our newsletter</p>
      <form>
        <input type="email" placeholder="Enter your email" />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );

}

export default Subscribe;