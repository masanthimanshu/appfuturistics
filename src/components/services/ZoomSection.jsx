import { gsap } from "gsap";
import PropTypes from "prop-types";
import style from "./style.module.css";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ZoomSection = ({ image }) => {
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
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });

    return () => tl.kill();
  }, []);

  return (
    <div
      ref={animation}
      id="zoom_sec"
      className={style.zoom_sec}
      style={{ backgroundImage: `url(${image})` }}
    ></div>
  );
};

ZoomSection.propTypes = { image: PropTypes.string.isRequired };
