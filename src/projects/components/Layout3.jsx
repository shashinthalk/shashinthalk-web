"use client";

import React from "react";

export function Layout3() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="rb-5 mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl">
              Showcasing My Innovative Web Development Project: A Seamless User
              Experience
            </h1>
            <p className="md:text-md">
              This project exemplifies my ability to create responsive and
              engaging websites. With a focus on user experience, I implemented
              cutting-edge technologies to deliver a product that stands out.
            </p>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
