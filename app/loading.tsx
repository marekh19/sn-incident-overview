import type { FC } from 'react'

const Loader: FC = () => {
  return (
    <div className="flex items-center justify-center text-blue">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={55}
        height={80}
        fill="currentColor"
      >
        <g transform="matrix(1 0 0 -1 0 80)">
          <rect
            width="10"
            height="20"
            rx="3"
          >
            <animate
              attributeName="height"
              begin="0s"
              calcMode="linear"
              dur="4.3s"
              repeatCount="indefinite"
              values="20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20"
            />
          </rect>
          <rect
            width="10"
            height="80"
            x="15"
            rx="3"
          >
            <animate
              attributeName="height"
              begin="0s"
              calcMode="linear"
              dur="2s"
              repeatCount="indefinite"
              values="80;55;33;5;75;23;73;33;12;14;60;80"
            />
          </rect>
          <rect
            width="10"
            height="50"
            x="30"
            rx="3"
          >
            <animate
              attributeName="height"
              begin="0s"
              calcMode="linear"
              dur="1.4s"
              repeatCount="indefinite"
              values="50;34;78;23;56;23;34;76;80;54;21;50"
            />
          </rect>
          <rect
            width="10"
            height="30"
            x="45"
            rx="3"
          >
            <animate
              attributeName="height"
              begin="0s"
              calcMode="linear"
              dur="2s"
              repeatCount="indefinite"
              values="30;45;13;80;56;72;45;76;34;23;67;30"
            />
          </rect>
        </g>
      </svg>
    </div>
  )
}

export default Loader
