import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const Preloader = () => {
  const container = useRef(null);
  const counter = useRef(null);

  useLayoutEffect(() => {
    let context = gsap.context(() => {
      const timeline = gsap.timeline();

      timeline.to("#character", {
        background: "red",
        duration: 2,
        delay: 1,
      });
    }, container);

    return () => context.revert();
  }, []);

  useEffect(() => {
    const startLoader = () => {
      let currentValue = 0;

      const updateCounter = () => {
        if (currentValue === 100) return;

        currentValue += Math.floor(Math.random() * 10) + 1;

        if (currentValue > 100) {
          currentValue = 100;
        }

        console.log(currentValue + "%");

        counter.current.textContent = currentValue + "%";

        let delay = Math.floor(Math.random() * 200) + 250;
        setTimeout(updateCounter, delay);
      };

      updateCounter();
    };

    startLoader();
  }, []);

  return (
    <div
      ref={container}
      className="absolute flex h-screen w-screen items-center justify-center bg-red-950 bg-opacity-80 font-spaceMono"
    >
      <p
        id="sample"
        className="font-honk border px-2 py-2 text-5xl font-black uppercase text-white"
      >
        {"Preloader".split("").map((character, index) => (
          <span key={index} id="character" className="">
            {character}
          </span>
        ))}
      </p>
      <p
        ref={counter}
        className="absolute bottom-20 right-20 text-9xl font-black uppercase text-white"
      >
        0
      </p>
    </div>
  );
};

export default Preloader;
