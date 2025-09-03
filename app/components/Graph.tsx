'use client';

import React, { useRef } from 'react';
import { useGraphAnimation } from '../hooks/useGraphAnimation';

const Graph = () => {
  const withNoviPathRef = useRef<SVGPathElement>(null);
  const withoutNoviPathRef = useRef<SVGPathElement>(null);
  const withNoviDotRef = useRef<SVGCircleElement>(null);
  const withoutNoviDotRef = useRef<SVGCircleElement>(null);
  const currentWeightDotRef = useRef<SVGCircleElement>(null);
  const withNoviTextRef = useRef<SVGTextElement>(null);
  const withoutNoviTextRef = useRef<SVGTextElement>(null);
  const currentWeightTextRef = useRef<SVGTextElement>(null);

  const withNoviSvgPath = "M4 2 C45.2741 147.65 181.677 246.607 332.893 246.607 H479.267";
  const withoutNoviSvgPath = "M4 2 C71.7855 69.4227 164.928 107.967 262.37 109.904 L480.001 114.231";

  const animationOptions = {
    withNoviSvgPath,
    withoutNoviSvgPath,
    speed: 150,
    shorteningFactor: 0.9,
  };

  useGraphAnimation(
    withNoviPathRef,
    withoutNoviPathRef,
    withNoviDotRef,
    withoutNoviDotRef,
    currentWeightDotRef,
    withNoviTextRef,
    withoutNoviTextRef,
    currentWeightTextRef,
    animationOptions
  );

  const svgWidth = 490;
  const svgHeight = 265;

  return (
    <svg
      className="w-full h-full overflow-visible"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
      fill="none"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <filter id="filter0_f_65_3418" x="-3.57468" y="-3.57468" width="488.714" height="258.255" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_65_3418" />
        </filter>

        <radialGradient id="paint0_radial_65_3418" cx="0" cy="0" r="1" gradientTransform="matrix(200.174 190.6972 -290.211 94.0961 213.579 69.4604)" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="paint1_radial_65_3423" cx="0" cy="0" r="1" gradientTransform="matrix(289.174 180.6972 -290.211 94.0961 213.579 20.4604)" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="paint0_linear_65_3419" x1="260" y1="-5.19851" x2="260" y2="243.923" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>

      <path opacity="0.4" d="M0.404297 243.923V0.9375C41.1168 146.463 174.352 246.612 325.459 245.272L477.469 243.923V307.838H0.404297V243.923Z" fill="url(#paint0_linear_65_3419)" />

      <g filter="url(#filter0_f_65_3418)">
        <path
          ref={withNoviPathRef}
          d={withNoviSvgPath}
          stroke="url(#paint0_radial_65_3418)"
          strokeWidth="4.40367"
          strokeLinecap="round"
        />
      </g>
      <path
        ref={withoutNoviPathRef}
        d={withoutNoviSvgPath}
        stroke="url(#paint1_radial_65_3423)"
        strokeWidth="5.40367"
        strokeLinecap="round"
        opacity="0.25"
      />

      <circle ref={currentWeightDotRef} cx="4" cy="2" r="6" fill="white" style={{ transition: 'opacity 0.5s ease-in-out' }} />
      <text ref={currentWeightTextRef} x="20" y="5" fontSize="14" fill="white" style={{ transition: 'opacity 0.5s ease-in-out' }}>Current weight</text>

      <circle ref={withNoviDotRef} cx="4" cy="2" r="6" fill="white" style={{ opacity: 0, transition: 'opacity 0.5s ease-in-out' }} />
      <circle ref={withoutNoviDotRef} cx="4" cy="2" r="6" fill="white" opacity="0.5" style={{ opacity: 0, transition: 'opacity 0.5s ease-in-out' }} />

      <text ref={withNoviTextRef} x="440" y="246.607" fontSize="14" fill="white" dominantBaseline="middle" textAnchor="middle" style={{ opacity: 0, transition: 'opacity 0.5s ease-in-out' }}>
        with Novi
      </text>
      <text ref={withoutNoviTextRef} x="440" y="114.231" fontSize="14" fill="white" dominantBaseline="middle" textAnchor="middle" opacity="0.5" style={{ opacity: 0, transition: 'opacity 0.5s ease-in-out' }}>
        without Novi
      </text>
    </svg>
  );
};

export default Graph;
