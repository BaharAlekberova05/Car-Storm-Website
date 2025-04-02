import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import WCUCard from "./WCUCard";

const stats = [
  { id: 1, name: "Exported countries", value: 110 },
  { id: 2, name: "Co-distributor", value: 119 },
  { id: 3, name: "Hot sale brands", value: 96 },
];

const Counter = ({ value }) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ opacity: 1, y: 0 });

          let start = 0;
          const end = value;
          const duration = 2000;
          const increment = end / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.round(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [value, controls]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="order-first text-3xl font-semibold tracking-tight text-black dark:text-white sm:text-5xl"
    >
      {count.toLocaleString()}
    </motion.span>
  );
};

const WhyChoose = () => {
  return (
    <div className="container">
      <h1 className="text-center text-4xl font-bold py-10 dark:text-white">
        Why Choose Us?
      </h1>

      <div className="dark:bg-[#121212] py-8 md:py-10 xl:py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3 md:gap-x-36 justify-items-center">
            {stats.map((stat, i) => (
              <WCUCard
                key={i}
                className="flex flex-col items-center justify-center"
              >
                <motion.div
                  key={stat.id}
                  className="mx-auto flex max-w-xs flex-col gap-y-4"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <dt className="text-base/7 text-black dark:text-white">
                    {stat.name}
                  </dt>

                  <Counter value={stat.value} />
                </motion.div>
              </WCUCard>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
