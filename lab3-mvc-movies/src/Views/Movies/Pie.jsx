const cleanPercentage = (percentage) => {
    const tooLow = !Number.isFinite(+percentage) || percentage < 0;
    const tooHigh = percentage > 10;
    return tooLow ? 0 : tooHigh ? 10 : +percentage;
};

const Circle = ({ color, pct }) => {
    const r = 25;
    const circ = 2 * Math.PI * r;
    const strokePct = ((10 - pct) * circ) / 10;
    return (
        <circle
            r={r}
            cx={100}
            cy={100}
            fill="transparent"
            stroke={strokePct !== circ ? color : ""} // remove color as 0% sets full circumference
            strokeWidth={"0.7rem"}
            strokeDasharray={circ}
            strokeDashoffset={pct ? strokePct : 0}
            strokeLinecap="round"
        ></circle>
    );
};

const Text = ({ percentage }) => {
    return (
        <text
            x="50%"
            y="50%"
            dominantBaseline="central"
            textAnchor="middle"
            fontSize={"0.6rem"}
        >
            {percentage.toFixed(2)}%
        </text>
    );
};

const Pie = ({ percentage, color }) => {
    const pct = cleanPercentage(percentage);
    return (
        <svg width={50} height={50}>
            <g transform={`rotate(-90 ${"25 100"})`}>
                <Circle color="lightgrey" />
                <Circle color={color} pct={pct} />
            </g>
            <Text percentage={pct} />
        </svg>
    );
};

export default Pie