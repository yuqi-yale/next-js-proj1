import React from "react"

export function icon2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" x="0" y="10" width="32" height="32">
      <g stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="21" cy="57" r="4" />
        <circle cx="47" cy="57" r="4" />
        <path d="M2 6h10l10 40h32l8-24H16" />
      </g>
    </svg>
  );
}

