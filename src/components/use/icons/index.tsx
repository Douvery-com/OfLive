export function IconShared({ size, color }: { size?: string; color?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? "20"}
      height={size ?? "20"}
      viewBox="0 0 256 256"
      color={color ?? "var(--color-action-arrow"}
    >
      <path
        fill="currentColor"
        d="m229.66 109.66l-48 48a8 8 0 0 1-11.32-11.32L204.69 112H165a88 88 0 0 0-85.23 66a8 8 0 0 1-15.5-4A103.94 103.94 0 0 1 165 96h39.71l-34.37-34.34a8 8 0 0 1 11.32-11.32l48 48a8 8 0 0 1 0 11.32ZM192 208H40V88a8 8 0 0 0-16 0v120a16 16 0 0 0 16 16h152a8 8 0 0 0 0-16Z"
      />
    </svg>
  );
}

export function IconVerified({ size }: { size?: string }) {
  return (
    <svg
      width={size || "24"}
      height={size || "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_1_2)">
        <path
          d="M5 5L12 2.5L19 5L21.5 12L20 15.625L19 19.75L15.5 20L12 21.5L8.5 20L5 19.75L2.5 11.5L4.5 8.5L5 5Z"
          fill="#0071FF"
        />
      </g>
      <g filter="url(#filter1_b_1_2)">
        <path
          d="M10.7905 15.17C10.5905 15.17 10.4005 15.09 10.2605 14.95L7.84055 12.53C7.55055 12.24 7.55055 11.76 7.84055 11.47C8.13055 11.18 8.61055 11.18 8.90055 11.47L10.7905 13.36L15.0905 9.06003C15.3805 8.77003 15.8605 8.77003 16.1505 9.06003C16.4405 9.35003 16.4405 9.83003 16.1505 10.12L11.3205 14.95C11.1805 15.09 10.9905 15.17 10.7905 15.17Z"
          fill="white"
        />
      </g>
      <g filter="url(#filter2_b_1_2)">
        <path
          d="M12.0009 22.75C11.3709 22.75 10.7409 22.54 10.2509 22.12L8.67086 20.76C8.51086 20.62 8.11086 20.48 7.90086 20.48H6.18086C4.70086 20.48 3.50086 19.28 3.50086 17.8V16.09C3.50086 15.88 3.36086 15.49 3.22086 15.33L1.87086 13.74C1.05086 12.77 1.05086 11.24 1.87086 10.27L3.22086 8.68C3.36086 8.52 3.50086 8.13 3.50086 7.92V6.2C3.50086 4.72 4.70086 3.52 6.18086 3.52H7.91086C8.12086 3.52 8.52086 3.37 8.68086 3.24L10.2609 1.88C11.2409 1.04 12.7709 1.04 13.7509 1.88L15.3309 3.24C15.4909 3.38 15.8909 3.52 16.1009 3.52H17.8009C19.2809 3.52 20.4809 4.72 20.4809 6.2V7.9C20.4809 8.11 20.6309 8.51 20.7709 8.67L22.1309 10.25C22.9709 11.23 22.9709 12.76 22.1309 13.74L20.7709 15.32C20.6309 15.48 20.4809 15.88 20.4809 16.09V17.79C20.4809 19.27 19.2809 20.47 17.8009 20.47H16.1009C15.8909 20.47 15.4909 20.62 15.3309 20.75L13.7509 22.11C13.2609 22.54 12.6309 22.75 12.0009 22.75ZM6.18086 5.02C5.53086 5.02 5.00086 5.55 5.00086 6.2V7.91C5.00086 8.48 4.73086 9.21 4.36086 9.64L3.01086 11.23C2.66086 11.64 2.66086 12.35 3.01086 12.76L4.36086 14.35C4.73086 14.79 5.00086 15.51 5.00086 16.08V17.79C5.00086 18.44 5.53086 18.97 6.18086 18.97H7.91086C8.49086 18.97 9.22086 19.24 9.66086 19.62L11.2409 20.98C11.6509 21.33 12.3709 21.33 12.7809 20.98L14.3609 19.62C14.8009 19.25 15.5309 18.97 16.1109 18.97H17.8109C18.4609 18.97 18.9909 18.44 18.9909 17.79V16.09C18.9909 15.51 19.2609 14.78 19.6409 14.34L21.0009 12.76C21.3509 12.35 21.3509 11.63 21.0009 11.22L19.6409 9.64C19.2609 9.2 18.9909 8.47 18.9909 7.89V6.2C18.9909 5.55 18.4609 5.02 17.8109 5.02H16.1109C15.5309 5.02 14.8009 4.75 14.3609 4.37L12.7809 3.01C12.3709 2.66 11.6509 2.66 11.2409 3.01L9.66086 4.38C9.22086 4.75 8.48086 5.02 7.91086 5.02H6.18086Z"
          fill="#0071FF"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_1_2"
          x="-1.5"
          y="-1.5"
          width="27"
          height="27"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_1_2"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_1_2"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_b_1_2"
          x="3.62305"
          y="4.84253"
          width="16.745"
          height="14.3275"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_1_2"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_1_2"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_b_1_2"
          x="-2.74414"
          y="-2.75"
          width="29.505"
          height="29.5"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_1_2"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_1_2"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export function IconArrowDown({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? "20"}
      height={size ?? "20"}
      viewBox="0 0 24 24"
      color={color ?? "var(--color-action-arrow"}
    >
      <path
        fill="currentColor"
        d="M16.59 8.59L12 13.17L7.41 8.59L6 10l6 6l6-6l-1.41-1.41z"
      />
    </svg>
  );
}
export function IconArrowUp({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? "20"}
      height={size ?? "20"}
      viewBox="0 0 24 24"
      color={color ?? "var(--color-action-arrow"}
    >
      <path
        fill="currentColor"
        d="m12 10.8l-4.6 4.6L6 14l6-6l6 6l-1.4 1.4l-4.6-4.6Z"
      />
    </svg>
  );
}
export function IconArrowLeft({ size }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? "20"}
      height={size ?? "20"}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M16 22L6 12L16 2l1.775 1.775L9.55 12l8.225 8.225L16 22Z"
      />
    </svg>
  );
}
export function IconToday({ size }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? 32}
      height={size ?? 32}
      viewBox="0 0 24 24"
    >
      <g fill="currentColor">
        <rect width="10" height="10" x="7" y="9" opacity=".5" rx="1" />
        <path
          fill-rule="evenodd"
          d="M18 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1ZM6 1a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H6Z"
          clip-rule="evenodd"
        />
        <path d="M7 6a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Z" />
      </g>
    </svg>
  );
}

export function IconRecently({ size }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? 32}
      height={size ?? 32}
      viewBox="0 0 32 32"
    >
      <path
        fill="currentColor"
        d="M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z"
      />
      <path
        fill="currentColor"
        d="M16 2A13.94 13.94 0 0 0 6 6.23V2H4v8h8V8H7.08A12 12 0 1 1 4 16H2A14 14 0 1 0 16 2Z"
      />
    </svg>
  );
}

export function IconBorbleFollow({ size }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? 32}
      height={size ?? 32}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M13 14.062V22H4a8 8 0 0 1 9-7.938ZM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6Zm5.793 6.914l3.535-3.535l1.415 1.414l-4.95 4.95l-3.536-3.536l1.415-1.414l2.12 2.121Z"
      />
    </svg>
  );
}

export function IconHomeInit({ size }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? 32}
      height={size ?? 32}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M4 19v-9q0-.475.213-.9t.587-.7l6-4.5q.525-.4 1.2-.4t1.2.4l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21h-3q-.425 0-.713-.288T14 20v-5q0-.425-.288-.713T13 14h-2q-.425 0-.713.288T10 15v5q0 .425-.288.713T9 21H6q-.825 0-1.413-.588T4 19Z"
      />
    </svg>
  );
}

export function IconGroupCommunity({ size }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M1 17.577v-.864q0-.92.985-1.528q.984-.608 2.534-.608q.23 0 .49.022q.262.022.556.072q-.234.41-.342.84q-.108.431-.108.864v1.202H1Zm6 0v-1.125q0-.605.351-1.105q.35-.5 1.036-.866q.684-.366 1.595-.548q.91-.183 2.01-.183q1.121 0 2.032.183q.91.182 1.595.548q.685.365 1.033.866q.348.5.348 1.105v1.125H7Zm11.885 0V16.38q0-.479-.105-.902q-.105-.423-.315-.808q.314-.05.563-.072q.249-.022.472-.022q1.55 0 2.525.605T23 16.713v.864h-4.115Zm-10.856-1h7.948v-.212q-.058-.711-1.166-1.163Q13.7 14.75 12 14.75t-2.81.452q-1.11.452-1.161 1.163v.212Zm-3.515-2.942q-.589 0-1.003-.418t-.415-1.005q0-.581.418-.993q.418-.411 1.005-.411q.581 0 1.002.411q.421.412.421.998q0 .57-.41.994q-.41.424-1.018.424Zm14.986 0q-.575 0-1-.424q-.423-.424-.423-.994q0-.586.424-.998q.424-.411 1.003-.411q.596 0 1.008.411q.411.412.411.993q0 .587-.409 1.005q-.41.418-1.014.418ZM12.007 13q-.91 0-1.555-.64q-.644-.639-.644-1.552q0-.932.64-1.562q.639-.63 1.552-.63q.932 0 1.562.628t.63 1.557q0 .91-.628 1.555q-.628.644-1.557.644Zm.003-1q.492 0 .837-.355t.345-.847q0-.492-.342-.837q-.343-.346-.85-.346q-.483 0-.837.343q-.355.343-.355.85q0 .482.355.837q.354.355.847.355Zm-.004 4.577ZM12 10.807Z"
      />
    </svg>
  );
}

export function IconGroup({ size }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? 32}
      height={size ?? 32}
      viewBox="0 0 32 32"
    >
      <path
        fill="currentColor"
        d="M11 21H9v-2a3.003 3.003 0 0 1 3-3h6v2h-6a1.001 1.001 0 0 0-1 1zm4-6a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4zm0-6a2 2 0 1 0 2 2a2.002 2.002 0 0 0-2-2zm9 13a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4zm0-6a2 2 0 1 0 2 2a2.002 2.002 0 0 0-2-2zm6 12h-2v-2a1.001 1.001 0 0 0-1-1h-6a1.001 1.001 0 0 0-1 1v2h-2v-2a3.003 3.003 0 0 1 3-3h6a3.003 3.003 0 0 1 3 3z"
      />
      <path
        fill="currentColor"
        d="m14 27.733l-5.234-2.79A8.986 8.986 0 0 1 4 17V4h20v6h2V4a2.002 2.002 0 0 0-2-2H4a2.002 2.002 0 0 0-2 2v13a10.981 10.981 0 0 0 5.824 9.707L14 30Z"
      />
    </svg>
  );
}

export function IconNotification({ size }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? 32}
      height={size ?? 32}
      viewBox="0 0 512 512"
    >
      <path
        d="M289.7 403c-6.1 0-11.4 4.2-12.7 10.2-1 4.5-2.7 8.2-5 10.9-1.3 1.5-5.1 5.9-16.1 5.9-11 0-14.8-4.5-16.1-5.9-2.3-2.7-4-6.4-5-10.9-1.3-6-6.6-10.2-12.7-10.2-8.4 0-14.5 7.8-12.7 15.9 5 22.3 21 37.1 46.5 37.1s41.5-14.7 46.5-37.1c1.8-8.1-4.4-15.9-12.7-15.9z"
        fill="currentColor"
      />
      <path
        d="M412 352.2c-15.4-20.3-45.7-32.2-45.7-123.1 0-93.3-41.2-130.8-79.6-139.8-3.6-.9-6.2-2.1-6.2-5.9v-2.9c0-13.3-10.8-24.6-24-24.6h-.6c-13.2 0-24 11.3-24 24.6v2.9c0 3.7-2.6 5-6.2 5.9-38.5 9.1-79.6 46.5-79.6 139.8 0 90.9-30.3 102.7-45.7 123.1-9.9 13.1-.5 31.8 15.9 31.8h280.1c16.1 0 25.4-18.8 15.6-31.8zm-39 5.8H139.8c-3.8 0-5.8-4.4-3.3-7.3 7-8 14.7-18.5 21-33.4 9.6-22.6 14.3-51.5 14.3-88.2 0-37.3 7-66.5 20.9-86.8 12.4-18.2 27.9-25.1 38.7-27.6 8.4-2 14.4-5.8 18.6-10.5 3.2-3.6 8.7-3.8 11.9-.2 5.1 5.7 12 9.1 18.8 10.7 10.8 2.5 26.3 9.4 38.7 27.6 13.9 20.3 20.9 49.5 20.9 86.8 0 36.7 4.7 65.6 14.3 88.2 6.5 15.2 14.4 25.9 21.5 33.9 2.2 2.7.4 6.8-3.1 6.8z"
        fill="currentColor"
      />
    </svg>
  );
}
export function IconMessage({ size }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? 32}
      height={size ?? 32}
      viewBox="0 0 24 24"
    >
      <g fill="none" stroke="currentColor" stroke-width="1.5">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M7 12h10M7 8h6"
        />
        <path d="M3 20.29V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7.961a2 2 0 0 0-1.561.75l-2.331 2.914A.6.6 0 0 1 3 20.29Z" />
      </g>
    </svg>
  );
}

export function IconHeartFavorite({ size }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? 32}
      height={size ?? 32}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M5.624 4.424C3.965 5.182 2.75 6.986 2.75 9.137c0 2.197.9 3.891 2.188 5.343c1.063 1.196 2.349 2.188 3.603 3.154c.298.23.594.459.885.688c.526.415.995.778 1.448 1.043c.452.264.816.385 1.126.385c.31 0 .674-.12 1.126-.385c.453-.265.922-.628 1.448-1.043c.29-.23.587-.458.885-.688c1.254-.966 2.54-1.958 3.603-3.154c1.289-1.452 2.188-3.146 2.188-5.343c0-2.15-1.215-3.955-2.874-4.713c-1.612-.737-3.778-.542-5.836 1.597a.75.75 0 0 1-1.08 0C9.402 3.882 7.236 3.687 5.624 4.424ZM12 4.46C9.688 2.39 7.099 2.1 5 3.059C2.786 4.074 1.25 6.426 1.25 9.138c0 2.665 1.11 4.699 2.567 6.339c1.166 1.313 2.593 2.412 3.854 3.382c.286.22.563.434.826.642c.513.404 1.063.834 1.62 1.16c.557.325 1.193.59 1.883.59s1.326-.265 1.883-.59c.558-.326 1.107-.756 1.62-1.16a78.6 78.6 0 0 1 .826-.642c1.26-.97 2.688-2.07 3.854-3.382c1.457-1.64 2.567-3.674 2.567-6.339c0-2.712-1.535-5.064-3.75-6.077c-2.099-.96-4.688-.67-7 1.399Z"
        clip-rule="evenodd"
      />
    </svg>
  );
}

export function IconProfile({ size }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? 32}
      height={size ?? 32}
      viewBox="0 0 24 24"
    >
      <g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      >
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2Z" />
        <path d="M4.271 18.346S6.5 15.5 12 15.5s7.73 2.846 7.73 2.846M12 12a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z" />
      </g>
    </svg>
  );
}
