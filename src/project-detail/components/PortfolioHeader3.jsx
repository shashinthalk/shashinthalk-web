"use client";

import React from "react";

export function PortfolioHeader3() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
            Dynamic Portfolio Site
          </h1>
          <p className="md:text-md">
            A comprehensive showcase of my web development skills and innovative
            content creation projects.
          </p>
          <ul className="mt-5 flex flex-wrap justify-center gap-2 md:mt-6">
            <li className="flex">
              <a
                href="#"
                className="bg-background-secondary px-2 py-1 text-sm font-semibold"
              >
                Web Development
              </a>
            </li>
            <li className="flex">
              <a
                href="#"
                className="bg-background-secondary px-2 py-1 text-sm font-semibold"
              >
                Content Creation
              </a>
            </li>
            <li className="flex">
              <a
                href="#"
                className="bg-background-secondary px-2 py-1 text-sm font-semibold"
              >
                Responsive Design
              </a>
            </li>
          </ul>
        </div>
        <div>
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
            alt="Relume placeholder image 1"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
