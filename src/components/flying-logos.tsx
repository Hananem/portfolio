"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const logos = [
  {
    name: "react",
    color: "#F97316",
    size: 40,
    svg: `<svg width="30px" height="30px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z" fill="#53C1DE"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759Z" fill="#53C1DE"/>
    </svg>`,
  },
  // Add other logos similarly...
];

const FlyingLogos = () => {
  const [positions, setPositions] = useState(
    logos.map(() => ({
      x: 0,
      y: 0,
      dx: (Math.random() - 0.5) * 2,
      dy: (Math.random() - 0.5) * 2,
    }))
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Initialize positions with window dimensions
      setPositions((prev) =>
        prev.map((pos) => ({
          ...pos,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        }))
      );

      const interval = setInterval(() => {
        setPositions((prev) =>
          prev.map((pos) => {
            const newX = pos.x + pos.dx;
            const newY = pos.y + pos.dy;

            if (newX < 0 || newX > window.innerWidth) pos.dx *= -1;
            if (newY < 0 || newY > window.innerHeight) pos.dy *= -1;

            return { ...pos, x: newX, y: newY };
          })
        );
      }, 20);

      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {logos.map((logo, index) => (
        <motion.div
          key={index}
          initial={{ x: positions[index].x, y: positions[index].y }}
          animate={{ x: positions[index].x, y: positions[index].y }}
          transition={{ duration: 0.1, ease: "linear" }}
          className="absolute"
        >
          <div
            dangerouslySetInnerHTML={{ __html: logo.svg }} // Render SVG as HTML
            style={{ width: logo.size, height: logo.size }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FlyingLogos;