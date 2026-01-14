import Svg, { Circle } from "react-native-svg";

type Props = {
  progress: number; // من 0 لحد 1
  size?: number;
  color?: string;
};

export default function SpinnerLoading({
  progress,
  size = 36,
  color = "#3b82f6",
}: Props) {
  const radius = 18;
  const circumference = 2 * Math.PI * radius;

  const dashOffset = circumference * (1 - progress);

  return (
    <Svg width={size} height={size} viewBox="25 25 50 50">
      <Circle
        cx="50"
        cy="50"
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={2}
        strokeDasharray={circumference}
        strokeDashoffset={dashOffset}
        strokeLinecap="round"
      />
    </Svg>
  );
}
