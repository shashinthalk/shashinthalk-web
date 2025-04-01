"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Cta13() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-rows-1 items-start gap-y-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20 lg:gap-y-16">
        <div>
          <h1 className="text-5xl font-bold md:text-7xl lg:text-8xl">
            Get in Touch Today!
          </h1>
        </div>
        <div>
          <p className="md:text-md">
            I’d love to hear from you! Whether you have questions or just want
            to connect, feel free to reach out via email or through my social
            media channels.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <Button title="Email">Email</Button>
            <Button title="Follow" variant="secondary">
              Follow
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
