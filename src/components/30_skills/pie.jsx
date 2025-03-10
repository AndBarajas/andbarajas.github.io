import React from "react";

const cleanPercentage = (percentage) => {
  const tooLow = !Number.isFinite(+percentage) || percentage < 0;
  const tooHigh = percentage > 100;
  return tooLow ? 0 : tooHigh ? 100 : +percentage;
};

const Title = ({ title }) => {
  return (
    <text
      x="50%"
      y="10%"
      className="text title"
    >
      {title}
    </text>
  );
};

const Circle = ({ pct, className }) => {
  const r = 40;
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - pct) * circ) / 100;
  return (
    <circle
      r={r}
      cx="50%"
      cy="50%"
      fill="transparent"
      className={strokePct !== circ ? className : ""} // Apply the class only if the circle is not full
      strokeWidth={"1.5rem"}
      strokeDasharray={circ}
      strokeDashoffset={pct ? strokePct : 0}
      strokeLinecap="round"
    />
  );
};

const Text = ({ percentage }) => {
  return (
    <text
      x="50%"
      y="50%"
      className="text percentage"
    >
      {percentage.toFixed(0)}%
    </text>
  );
};

const Pie = ({ percentage, title }) => {
  const pct = cleanPercentage(percentage);
  return (
    <div id="pie">
      <svg width={180} height={180} viewBox="0 0 180 180">
        <Title title={title} />
        <g transform={`rotate(-90 90 90)`}>
          {/* Background circle (unfilled) */}
          <Circle pct={100} className="circle-background" /> 
          {/* Foreground circle (filled segment) */}
          <Circle pct={pct} className="circle-foreground" /> 
        </g>
        <Text percentage={pct} />
      </svg>
    </div>
  );
};
export default Pie;
