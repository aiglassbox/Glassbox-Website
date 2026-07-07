"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { A, team } from "@/data/site";
import { Reveal } from "../ui/Reveal";

const avatars = team.slice(0, 3);

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <div className="container-x mt-10">
      <div className="grid items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
        {/* Left, visual */}
        <Reveal>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[20px] bg-ink-800 lg:aspect-auto lg:h-full lg:min-h-[620px]">
            <Image
              src={A("gcCOK3eBfHG7P5Zcxtv9TwUq5A.jpg")}
              alt=""
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        {/* Right, form */}
        <Reveal delay={0.1}>
          <div className="flex h-full flex-col">
            <div className="mb-6 flex items-center justify-between gap-4">
              <h2 className="text-[22px] font-medium tracking-tight text-white">
                Send a message
              </h2>
              {/* Avatar group */}
              <div className="flex items-center gap-1 rounded-xl border border-white/[0.08] bg-white/[0.04] p-1">
                {avatars.map((a) => (
                  <span
                    key={a.name}
                    title={a.name}
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.08] text-[11px] font-medium text-white/80"
                  >
                    {a.name
                      .split(" ")
                      .map((w) => w[0])
                      .slice(0, 2)
                      .join("")}
                  </span>
                ))}
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="flex flex-1 flex-col"
            >
              <div className="space-y-5">
                <Field label="Name" placeholder="Bruce Lee" />
                <Field label="Email" type="email" placeholder="example@theglassbox.co" />
                <label className="block">
                  <span className="mb-2 block text-[15px] text-white/90">
                    Message
                  </span>
                  <textarea
                    rows={5}
                    placeholder="Project details"
                    className="w-full resize-y rounded-xl border border-white/[0.07] bg-white/[0.04] px-4 py-3.5 text-[15px] text-white placeholder:text-white/40 transition-colors focus:border-white/25 focus:outline-none"
                  />
                </label>
              </div>

              <motion.button
                type="submit"
                whileTap={{ scale: 0.99 }}
                className="mt-7 w-full rounded-xl bg-white py-4 text-[15px] font-medium text-black transition-opacity hover:opacity-90"
              >
                {sent ? "Message sent" : "Send"}
              </motion.button>
            </form>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[15px] text-white/90">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/[0.07] bg-white/[0.04] px-4 py-3.5 text-[15px] text-white placeholder:text-white/40 transition-colors focus:border-white/25 focus:outline-none"
      />
    </label>
  );
}
