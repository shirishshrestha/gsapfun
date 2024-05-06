import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import ContextSafe from "./ContextSafe";

const App = () => {
  const [circle, setCircle] = useState(0);
  const [rotate, setRotate] = useState(0);

  const random = gsap.utils.random(-500, 500, 100);
  const rotateX = gsap.utils.random(-360, 360, 30);
  const boxRef = useRef();

  useGSAP(() => {
    // gsap.from(".box", {
    //   rotate: 720,
    //   duration: 1,
    //   opacity: 0,
    //   delay: 1,
    //   ease: "power2.inOut",
    // });
    gsap.to(boxRef.current, {
      x: circle,
      duration: 1,
      rotate: rotate,
      ease: "power2.inOut",
    });
  }, [circle, rotate]);
  return (
    <>
      <main>
        {/* <div ref={boxRef} className="container">
        <div className="circle"></div>
        <div className="box"></div>
      </div> */}
        <div className="conatinerSecond">
          <div className="circle"></div>
        </div>

        <button
          onClick={() => {
            setCircle(random);
            setRotate(rotateX);
          }}
        >
          GSAP & REACT
        </button>

        <div ref={boxRef} className="box"></div>
      </main>
      <ContextSafe />
    </>
  );
};

export default App;
