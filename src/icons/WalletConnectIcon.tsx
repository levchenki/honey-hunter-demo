import * as React from "react"

const WalletConnectIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
                                                                        width,
                                                                        height,
                                                                        ...props
                                                                    }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        width={width || 24}
        height={height || 24}
        viewBox="0 0 2500 2500"
        {...props}
    >
        <circle
            cx={1249}
            cy={1249}
            r={1247}
            style={{
                fill: "#3396ff",
                stroke: "#66b1ff",
                strokeWidth: 3,
                strokeMiterlimit: 22.9256,
            }}
        />
        <path
            d="M764 930c267-261 701-261 969 0l32 31c13 13 13 34 0 47l-110 107c-7 7-18 7-24 0l-44-43c-187-182-489-182-676 0l-47 46c-7 7-18 7-24 0l-110-107c-13-13-13-34 0-47l35-34h-1zm1196 222 98 96c13 13 13 34 0 47l-442 431c-13 13-35 13-48 0l-314-306c-3-3-9-3-12 0l-314 306c-13 13-35 13-48 0l-442-431c-13-13-13-34 0-47l98-96c13-13 35-13 48 0l314 306c3 3 9 3 12 0l314-306c13-13 35-13 48 0l314 306c3 3 9 3 12 0l314-306c13-13 35-13 48 0z"
            style={{
                fill: "#fff",
            }}
        />
    </svg>
)
export default WalletConnectIcon
