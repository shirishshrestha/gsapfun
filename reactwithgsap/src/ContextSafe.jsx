import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const ContextSafe = () => {
  const box1Ref = useRef();

  const { contextSafe } = useGSAP();
  const rotateBox = contextSafe(() => {
    gsap.from(box1Ref.current, {
      rotate: 720,
      duration: 1,
      opacity: 0,
      delay: 1,
      ease: "power2.inOut",
    });
  });
  return (
    <div className="context">
      <button onClick={rotateBox}>Animate</button>
      <div ref={box1Ref} className="box">
        BOX
      </div>
    </div>
  );
};

export default ContextSafe;
