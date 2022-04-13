import React from "react";

const cleanPercentage = (percentage: number): number => {
  const tooLow: boolean = !Number.isFinite(+percentage) || percentage < 0;
  const tooHigh: boolean = percentage > 100;
  return tooLow ? 0 : tooHigh ? 100 : +percentage;
};

const Circle = ({ colour, pct }: any) => {
  const r = 80;
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - pct) * circ) / 100;
  
  return (
    <circle
      r={r}
      cx={100}
      cy={100}
      fill="transparent"
      stroke={strokePct !== circ ? colour : ""}
      strokeWidth={"15px"}
      strokeDasharray={circ}
      strokeDashoffset={pct ? strokePct : 0}
      strokeLinecap="round"
    ></circle>
  );
};

const Text = ({ percentage }: any) => {
  return (
    <text
      x="50%"
      y="50%"
      dominantBaseline="central"
      textAnchor="middle"
      fontSize={"1.5em"}
    >
      {percentage.toFixed(0)}%
    </text>
  );
};

const Para = () => {
    return (
      <text
        x="50%"
        y="65%"
        dominantBaseline="central"
        textAnchor="middle"
        fontSize={"14px"}
      >
        de votre objectif
      </text>
    );
  };

const Pie = ({ percentage, colour }: any) => {
  const pct = cleanPercentage(percentage);
  return (
    <svg width={200} height={200}>
      <g transform={`rotate(-135 ${"100 100"})`}>
        <Circle colour="transparent" />
        <Circle colour={colour} pct={pct} />
      </g>
      <Text percentage={pct} />
      <Para />
    </svg>
  );
};

export default Pie;
