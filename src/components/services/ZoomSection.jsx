import { gsap } from "gsap";
import style from "./style.module.css";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ZoomSection = () => {
  const animation = useRef(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#zoom_sec",
        start: "center 90%",
        end: "center 30%",
        scrub: true,
      },
    });

    tl.to("#zoom_sec", {
      borderRadius: 0,
      height: "100vh",
      width: "100vw",
    });

    return () => tl.kill();
  }, []);

  return <div ref={animation} id="zoom_sec" className={style.zoom_sec}></div>;
};
