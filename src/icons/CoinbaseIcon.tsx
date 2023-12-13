import React from "react";

const CoinbaseIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
                                                                   width,
                                                                   height,
                                                                   ...props
                                                               }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        id="Layer_1"
        x={0}
        y={0}
        viewBox="0 0 2500 2500"
        width={width || 24}
        height={height || 24}
        {...props}
    >
        <style>{".st1{fill-rule:evenodd;clip-rule:evenodd;fill:#0052ff}"}</style>
        <g id="Layer_x0020_1">
            <path
                d="M0 0h2500v2500H0z"
                style={{
                    fill: "none",
                }}
            />
            <path
                d="M520.7 0h1458.5C2266.9 0 2500 250.8 2500 560.2v1379.6c0 309.4-233.1 560.2-520.7 560.2H520.7C233.1 2500 0 2249.2 0 1939.8V560.2C0 250.8 233.1 0 520.7 0z"
                className="st1"
            />
            <path
                d="M1250 362.1c490.4 0 887.9 397.5 887.9 887.9s-397.5 887.9-887.9 887.9-887.9-397.5-887.9-887.9S759.6 362.1 1250 362.1z"
                style={{
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    fill: "#fff",
                }}
            />
            <path
                d="M1031.3 966.2h437.3c36 0 65.1 31.4 65.1 70v427.5c0 38.7-29.2 70-65.1 70h-437.3c-36 0-65.1-31.4-65.1-70v-427.5c0-38.6 29.2-70 65.1-70z"
                className="st1"
            />
        </g>
    </svg>
)
export default CoinbaseIcon