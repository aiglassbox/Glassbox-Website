"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (email) setJoined(true);
      }}
      className="mt-5 flex items-center gap-3 border-b border-white/20 pb-2"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="w-full bg-transparent text-[15px] text-white placeholder:text-white/40 focus:outline-none"
      />
      <button
        type="submit"
        className="shrink-0 text-[15px] font-medium text-white transition-opacity hover:opacity-70"
      >
        {joined ? "Joined" : "Join"}
      </button>
    </form>
  );
}
