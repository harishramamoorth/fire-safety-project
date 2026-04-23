import React from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const Counter = ({ end, duration = 2.5, suffix = '', prefix = '' }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  return (
    <div ref={ref}>
      {inView && (
        <CountUp end={end} duration={duration} suffix={suffix} prefix={prefix} />
      )}
    </div>
  );
};

export default Counter;