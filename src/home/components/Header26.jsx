"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import KOPER from "../../../src/img/KOPER.png";
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';

export function Header26() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
                Hello, world! Dive into my portfolio and let's create something amazing!
              </h1>
              <p className="md:text-md">
                I'm a passionate Web Developer & Content Creator dedicated to
                crafting seamless digital experiences.
              </p>
              <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                <Button title="Learn More">Learn More</Button>
                <Button title="Contact" variant="secondary">
                  Contact
                </Button>
              </div>
            </div>
          </div>
          <div>
            <img
              style={{cursor:'pointer'}}
              onClick={() => navigateYoutube('https://youtu.be/7IllJ1CO-lk?si=0g-A4gFGGjbGnDNN')}
              src={KOPER}
              className="size-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function navigateYoutube(url){
  Confirm.show(
    'Confirmation',
    'Do you want to open youtube?',
    'Yes',
    'No',
    () => {
      window.open(url, '_blank');
    },
    () => {
      
    },
    {
    },
  )
}