"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout252() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <div>
            <h2 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">
              Explore my key services designed to elevate your digital presence.
            </h2>
          </div>
          <div>
            <p className="md:text-md">
              I specialize in creating stunning websites that not only look
              great but also perform seamlessly. My services encompass web
              development, content creation, and tailored Fiverr offerings.
              Let’s transform your ideas into reality with innovative solutions.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12">
          <div className="w-full">
            <div className="mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Web Development: Crafting responsive and engaging websites for
              your business needs.
            </h3>
            <p>
              Utilizing the latest technologies to deliver exceptional user
              experiences.
            </p>
            <div className="mt-6 flex items-center gap-4 md:mt-8">
              <Button iconRight={<RxChevronRight />} variant="link" size="link">
                Learn More
              </Button>
            </div>
          </div>
          <div className="w-full">
            <div className="mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Content Creation: Engaging narratives that resonate with your
              audience.
            </h3>
            <p>
              Let’s tell your story through captivating content that drives
              engagement.
            </p>
            <div className="mt-6 flex items-center gap-4 md:mt-8">
              <Button iconRight={<RxChevronRight />} variant="link" size="link">
                Discover
              </Button>
            </div>
          </div>
          <div className="w-full">
            <div className="mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Fiverr Services: Professional solutions tailored to your specific
              needs.
            </h3>
            <p>
              Offering a range of services to help you succeed in the digital
              space.
            </p>
            <div className="mt-6 flex items-center gap-4 md:mt-8">
              <Button iconRight={<RxChevronRight />} variant="link" size="link">
                Hire Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
