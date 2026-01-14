import Svg, { Path } from "react-native-svg";

export function SearchIcon({ size = 20, className }: { size?: `${number}` | number; className?: string }) {
    return (
        <Svg className={className} width={size} height={size} viewBox="0 0 13 13" fill="none">
            <Path
                d="M5.83333 2.5C7.67427 2.5 9.16667 3.99239 9.16667 5.83333M9.60587 9.60327L12.5 12.5M11.1667 5.83333C11.1667 8.77887 8.77887 11.1667 5.83333 11.1667C2.88781 11.1667 0.5 8.77887 0.5 5.83333C0.5 2.88781 2.88781 0.5 5.83333 0.5C8.77887 0.5 11.1667 2.88781 11.1667 5.83333Z"
                stroke="#888888"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
}
