import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const StockChart = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Generate smooth upward trending path
  const generatePath = () => {
    const points = [
      { x: 0, y: 150 },
      { x: 50, y: 130 },
      { x: 100, y: 140 },
      { x: 150, y: 110 },
      { x: 200, y: 120 },
      { x: 250, y: 80 },
      { x: 300, y: 95 },
      { x: 350, y: 60 },
      { x: 400, y: 75 },
      { x: 450, y: 40 },
      { x: 500, y: 55 },
      { x: 550, y: 30 },
      { x: 600, y: 20 },
    ];

    return points.map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`)).join(" ");
  };

  const path = generatePath();

  // Generate candlesticks
  const candles = [
    { x: 40, open: 140, close: 120, high: 145, low: 115, isGreen: true },
    { x: 90, open: 125, close: 135, high: 140, low: 120, isGreen: false },
    { x: 140, open: 130, close: 105, high: 135, low: 100, isGreen: true },
    { x: 190, open: 110, close: 115, high: 125, low: 105, isGreen: false },
    { x: 240, open: 118, close: 85, high: 120, low: 80, isGreen: true },
    { x: 290, open: 88, close: 92, high: 100, low: 85, isGreen: false },
    { x: 340, open: 95, close: 65, high: 98, low: 60, isGreen: true },
    { x: 390, open: 68, close: 75, high: 80, low: 65, isGreen: false },
    { x: 440, open: 78, close: 45, high: 82, low: 40, isGreen: true },
    { x: 490, open: 48, close: 55, high: 60, low: 45, isGreen: false },
    { x: 540, open: 50, close: 28, high: 55, low: 25, isGreen: true },
  ];

  return (
    <div className="relative h-48 md:h-64 w-full">
      <svg viewBox="0 0 600 180" className="w-full h-full" preserveAspectRatio="none">
        {/* Grid lines */}
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(145, 100%, 39%)" stopOpacity="0.3" />
            <stop offset="50%" stopColor="hsl(145, 100%, 50%)" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(38, 95%, 55%)" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(145, 100%, 39%)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(145, 100%, 39%)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Horizontal grid lines */}
        {[30, 70, 110, 150].map((y, i) => (
          <line
            key={i}
            x1="0"
            y1={y}
            x2="600"
            y2={y}
            stroke="hsl(222, 30%, 18%)"
            strokeWidth="1"
            strokeDasharray="5,5"
          />
        ))}

        {/* Candlesticks */}
        {candles.map((candle, i) => (
          <motion.g
            key={i}
            initial={{ opacity: 0, scaleY: 0 }}
            animate={mounted ? { opacity: 1, scaleY: 1 } : {}}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            style={{ transformOrigin: `${candle.x}px ${candle.high}px` }}
          >
            {/* Wick */}
            <line
              x1={candle.x}
              y1={candle.high}
              x2={candle.x}
              y2={candle.low}
              stroke={candle.isGreen ? "hsl(145, 100%, 39%)" : "hsl(0, 84%, 55%)"}
              strokeWidth="2"
            />
            {/* Body */}
            <rect
              x={candle.x - 8}
              y={Math.min(candle.open, candle.close)}
              width="16"
              height={Math.abs(candle.close - candle.open)}
              fill={candle.isGreen ? "hsl(145, 100%, 39%)" : "hsl(0, 84%, 55%)"}
              rx="2"
              className={candle.isGreen ? "animate-candle" : ""}
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          </motion.g>
        ))}

        {/* Trend line */}
        <motion.path
          d={path}
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={mounted ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Glow effect */}
        <motion.path
          d={path}
          fill="none"
          stroke="hsl(145, 100%, 50%)"
          strokeWidth="6"
          strokeLinecap="round"
          filter="blur(8px)"
          opacity="0.4"
          initial={{ pathLength: 0 }}
          animate={mounted ? { pathLength: 1 } : {}}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Current price indicator */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={mounted ? { opacity: 1 } : {}}
          transition={{ delay: 2 }}
        >
          <circle cx="600" cy="20" r="6" fill="hsl(145, 100%, 39%)" className="animate-pulse" />
          <circle cx="600" cy="20" r="10" fill="hsl(145, 100%, 39%)" opacity="0.3" className="animate-ping" />
        </motion.g>
      </svg>
    </div>
  );
};

export default StockChart;
