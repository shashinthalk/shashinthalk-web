"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Cta45() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="App">
      </div>
      <div className="container">
        <div className="grid grid-cols-1 items-start justify-start gap-6 border border-border-primary p-8 md:grid-cols-[1fr_max-content] md:items-center md:justify-between md:gap-x-12 md:gap-y-8 lg:gap-x-20 lg:p-12">
          <div className="md:mr-12 lg:mr-0">
            <div className="w-full max-w-lg">
              <h3 className="mb-3 text-4xl font-bold leading-[1.2] md:mb-4 md:text-5xl lg:text-6xl">
                Explore My Work and Collaborate
              </h3>
              <p className="md:text-md">
                Discover innovative projects and partnership opportunities
                today.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-wrap items-center justify-start gap-4 md:w-auto md:justify-end">
            <Button title="View">View</Button>
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
