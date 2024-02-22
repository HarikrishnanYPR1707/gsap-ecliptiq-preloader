import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const Preloader = () => {
  const container = useRef(null);

  useLayoutEffect(() => {
    let context = gsap.context(() => {
      const timeline = gsap.timeline();

      //   timeline.to("#sample", {
      //     background: "red",
      //     duration: 2,
      //     delay: 1,
      //   });
    }, container);

    return () => context.revert();
  }, []);

  return (
    <div
      ref={container}
      className="absolute flex h-screen w-screen items-center justify-center border-2 bg-black bg-opacity-80 font-spaceMono text-5xl font-black uppercase text-white"
    >
      <p
        id="sample"
        className="bg-purple-500"
        onMouseEnter={() => {
          gsap.to("#sample", {
            background: "red",
          });
        }}
        onMouseLeave={() => {
          gsap.to("#sample", {
            background: "#a855f7",
          });
        }}
      >
        Preloader
      </p>
    </div>
  );
};

export default Preloader;
