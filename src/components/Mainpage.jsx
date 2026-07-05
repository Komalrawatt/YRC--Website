import React, { useRef, useEffect } from "react";
import main from "../../public/main.jpg";
import { gsap } from "gsap";

const Mainpage = () => {
  const textRef = useRef(null);
  const redCrossRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // GSAP animations
    gsap.fromTo(
      textRef.current,
      { x: window.innerWidth < 768 ? 300 : 700, opacity: 0 },
      { x: 0, opacity: 1, duration: 2, ease: "power3.out" }
    );
    gsap.fromTo(
      redCrossRef.current,
      { x: window.innerWidth < 768 ? 200 : 600, opacity: 0 },
      { x: 0, opacity: 1, duration: 2, delay: 0.2 }
    );
    gsap.fromTo(
      imageRef.current,
      { y: 200, opacity: 0 },
      { y: 0, opacity: 1, duration: 3, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="mb-3 px-4 md:px-6 lg:px-8 overflow-hidden">
      {/* Title Section */}
      <div className="flex flex-col leading-tight md:leading-[100px] lg:leading-[140px] text-[#A7101F] p-3 hover:text-[#E4002A] transition-transform duration-500 ease-in-out">
        <p
          className="font-bold text-6xl sm:text-9xl md:text-[120px] lg:text-[180px] tracking-tighter md:tracking-[-8px] lg:tracking-[-10.4412px]"
          ref={textRef}
        >
          YOUTH
        </p>
        <p
          className="font-bold text-6xl sm:text-9xl md:text-[120px] lg:text-[180px] tracking-tighter md:tracking-[-8px] lg:tracking-[-10.4412px]"
          ref={redCrossRef}
        >
          RED CROSS
        </p>
      </div>

      {/* Image Section */}
      <div className="-mx-4 sm:-mx-6 md:-mx-8 mt-0 sm:mt-1 md:mt-2">
        <div className="relative w-screen aspect-[16/9] sm:aspect-[16/8] md:aspect-[16/7]">
          <img
            ref={imageRef}
            src={main}
            alt="Youth Red Cross"
            className="w-full h-full object-cover shadow-[0_0_50px_rgba(12,34,34,0.6)] 
                     hover:shadow-[0_0_70px_rgba(12,34,34,0.8)] transition-shadow duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Mainpage;