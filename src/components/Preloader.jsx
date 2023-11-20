import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const Preloader = () => {
  // referecen variables
  const container = useRef(null);
  const counter = useRef(null);

  useLayoutEffect(() => {
    let context = gsap.context(() => {
      const timeline = gsap.timeline();

      timeline
        .from("#character", {
          opacity: 0,
          top: "100%",
          duration: 0.8,
          stagger: 0.25,
          ease: "power1.out",
        })
        .from("#progressBar", {
          width: 0,
          duration: 2,
        })
        .to("#parentContainer", {
          right: "100%",
          duration: 1.2,
        });
    }, container);

    return () => context.revert();
  }, []);

  // counter logic
  // useEffect(() => {
  //   const startLoader = () => {
  //     let currentValue = 0;

  //     const updateCounter = () => {
  //       if (currentValue == 100) return;

  //       currentValue += Math.floor(Math.random() * 10) + 1;

  //       if (currentValue > 100) {
  //         currentValue = 100;
  //       }

  //       console.log(currentValue + "%");

  //       counter.current.textContent = currentValue + "%";

  //       let delay = Math.floor(Math.random() * 200) + 250;
  //       setTimeout(updateCounter, delay);
  //     };

  //     updateCounter();
  //   };

  //   startLoader();
  // }, []);

  return (
    <div
      ref={container}
      id="parentContainer"
      className="absolute flex h-screen w-screen flex-col items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center">
        <p
          id="sample"
          className="font-honk relative h-[143px] w-[600px] overflow-hidden text-9xl font-black uppercase text-white [&>*:nth-child(1)]:left-0 [&>*:nth-child(2)]:left-[68px] [&>*:nth-child(3)]:left-[136px] [&>*:nth-child(4)]:left-[199px] [&>*:nth-child(5)]:left-[262px] [&>*:nth-child(6)]:left-[330px] [&>*:nth-child(7)]:left-[398px] [&>*:nth-child(8)]:left-[466px] [&>*:nth-child(9)]:left-[529px]"
        >
          {"Preloader".split("").map((character, index) => (
            <span key={index} id="character" className="absolute">
              {character}
            </span>
          ))}
        </p>
        <div id="progressBar" className="h-[2px] w-full bg-purple-500"></div>
      </div>
      {/* counter part */}
      {/* <p
        ref={counter}
        className="absolute bottom-20 right-20 text-7xl font-black uppercase text-white"
      >
        0
      </p> */}
    </div>
  );
};

export default Preloader;
