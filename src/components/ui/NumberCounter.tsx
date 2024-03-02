import React, { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "react-spring";

interface INumberCounterProps {
  endValue: number;
}

const NumberCounter: React.FC<INumberCounterProps> = ({ endValue }) => {
  const [animatedValue, setAnimatedValue] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false); // Explicitly define the type of isVisible as boolean
  const numberRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const rect = numberRef.current?.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      setIsVisible(rect! && rect.top <= windowHeight! && rect.bottom >= 0);
    };

    window.addEventListener("scroll", onScroll);

    // Return a cleanup function that removes the scroll event listener
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isVisible) {
      setAnimatedValue(endValue);
    }
  }, [isVisible, endValue]);

  const { number } = useSpring({
    number: isVisible ? animatedValue : 0,
    from: { number: 0 },
    config: { duration: 1000 },
  });

  return (
    <animated.span ref={numberRef}>
      {number.interpolate((val: number) => Math.floor(val))}
    </animated.span>
  );
};

export default NumberCounter;