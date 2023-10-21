import React from "react";
import styled from "styled-components";

const Logo = styled.svg`
  & path {
    fill: ${({ theme }) => theme.colors.text};
  }

  @media (max-width: 480px) {
    width: 80%;
  }
`;

type LogotypeProps = {};

const Logotype: React.FC<LogotypeProps> = () => {
  return (
    <Logo
      style={{ display: "block" }}
      width="380"
      height="70"
      viewBox="0 0 380 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M362 18.5C358 22.1 347 42 342 51.5C342.5 44 356 25 358 21C360 17 360 15.5 363 13.5C366 11.5 367 14 362 18.5Z"
        fill="black"
      />
      <path
        d="M377 35L368 30.5C363 27.5 368 29 369.5 29.5C371 30 374.5 32 377 33.5C379.5 35 381 35 378 36.5C375 38 369 41.5 365.5 43C362 44.5 359 45.5 362.5 43C365.3 41 373.333 36.8333 377 35Z"
        fill="black"
      />
      <path
        d="M300 43.5C299.6 41.5 303.833 36 306 33.5C304 30 311 31 308 33.5L303 40.5L309 36C310.5 35.1667 313.4 34.2 313 37C312.6 39.8 313.833 39.8333 314.5 39.5C314.833 39.5 315.7 39 316.5 37C317.5 34.5 317 34.5 320.5 32C324 33 322.5 33.5 320 34.5C318 35.3 316.833 38.8333 316.5 40.5C316 41.5 314.5 46.5 320.5 41.5C322.5 39.5 322 40.5 320.5 37.5C321.3 34.3 322.833 36.1667 323.5 37.5C323.333 38 323.2 39.1 324 39.5C324.8 39.9 326.333 39.6667 327 39.5L326 40.5C325.5 40.6667 324.2 40.8 323 40C323 41 322.5 41.5 320 43.5C317.5 45.5 315 45 314.5 43.5C314 42 315 40 314 41C312 41.8 311.5 40.6667 311.5 40C311.833 38.5 311.9 35.9 309.5 37.5C306.5 39.5 300.5 46 300 43.5Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M253.5 62.5L268.5 39C269.167 38.5 271.1 36.9 273.5 34.5C276.5 31.5 289.5 12.5 290 11C290.167 10.5 290.222 10.2778 290.278 10.0556C290.389 9.61111 290.5 9.16667 291.5 6.5C293 2.5 294.5 -4 285.5 8C283.413 10.783 281.331 13.8574 279.362 16.9503C279.014 17.4966 278.67 18.0435 278.33 18.5895C273.953 25.6145 270.257 32.4859 268.5 36L252.5 61.5C252 61.8333 251.2 62.8 252 64C253 65.5 254.5 63 253.5 62.5ZM271.5 33.5C276.167 25.6667 286.2 9.2 289 6C287 13 285 17.5 271.5 33.5Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M278.33 18.5895C286.135 17.4808 294.769 16.4499 300.447 16.2738C302.436 16.3262 304.151 16.408 305.5 16.5C304.407 16.2659 302.65 16.2056 300.447 16.2738C294.878 16.1271 287.166 16.2114 279.362 16.9503C279.014 17.4966 278.67 18.0435 278.33 18.5895Z"
        fill="black"
      />
      <path
        d="M266 19C261.5 20.5 265 21.5 266 20.5C269.268 19.9469 273.65 19.2542 278.33 18.5895C278.67 18.0435 279.014 17.4966 279.362 16.9503C274.803 17.382 270.213 18.037 266 19Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M254.5 34.5C254.667 35.1667 255.2 36.3 256 35.5C257 34.5 255.5 32.5 254 32.5C252.5 32.5 249.5 33 243.5 38C237.5 43 243 43.5 243.5 43C243.9 42.6 249.333 39.5 252 38C251.333 40.1667 251.9 43.5 259.5 39.5C258.656 41.7512 259.079 41.9436 259.075 42.1271C259.072 42.2697 258.812 42.407 257.5 43.5C255.1 45.5 250.833 48.3333 249 49.5C246.833 50.8333 244.4 53.1 252 51.5C257.2 48.3 259.167 45.1667 259.5 44L262 43C262.091 42.5 261.919 41.6 260.5 42C261 39.5 262.5 37.5 263.5 36.5C264.5 35.5 267 33 262 35.5C260.5 38 257.5 39.5 256 39.5C252.796 39.5 252.944 39.081 253.376 37.8594C253.415 37.7466 253.458 37.6269 253.5 37.5C253.9 34.7 252.333 35.6667 251.5 36.5C249.167 38.1667 244.1 41.5 242.5 41.5C240.5 41.5 253 31.5 254.5 34.5ZM250 50.5C251.667 49.1667 255.3 46.3 256.5 45.5C258 44.5 254 50.5 250 50.5Z"
        fill="black"
      />
      <path
        d="M243.5 38C239.527 40.5284 237.973 39.7136 237.586 38.7954C237.544 38.6968 237.516 38.597 237.5 38.5C237 38.6667 236.1 39.2 236.5 40C236.502 40.0039 236.504 40.0078 236.506 40.0117C237.023 41 240.008 40.9961 242 40C244 39 249 34.5 243.5 38Z"
        fill="black"
      />
      <path
        d="M232 32.5C229.833 34.8333 225.8 40.4 227 44C228.134 47.4022 233.525 43.0341 236.506 40.0117C236.504 40.0078 236.502 40.0039 236.5 40C236.1 39.2 237 38.6667 237.5 38.5C237.516 38.597 237.544 38.6968 237.586 38.7954C239.516 36.4369 242.5 32.4434 242.5 31C242.5 29 238 31 237 34C236 37 237.5 37 233.5 40.5C225.5 47.3 228.5 40.6667 231 36.5C232.833 35.3333 235.6 32.9 232 32.5Z"
        fill="black"
      />
      <path
        d="M342.719 37.8051C338.745 40.3335 337.191 39.5187 336.804 38.6005C336.763 38.5019 336.735 38.4021 336.719 38.3051C336.219 38.4717 335.319 39.0051 335.719 39.8051C335.72 39.809 335.722 39.8129 335.725 39.8167C336.242 40.805 339.226 40.8012 341.219 39.8051C343.219 38.8051 348.219 34.3051 342.719 37.8051Z"
        fill="black"
      />
      <path
        d="M331.219 32.3051C329.052 34.6384 325.019 40.2051 326.219 43.8051C327.353 47.2073 332.744 42.8392 335.725 39.8167C335.722 39.8129 335.72 39.809 335.719 39.8051C335.319 39.0051 336.219 38.4717 336.719 38.3051C336.735 38.4021 336.763 38.5019 336.804 38.6005C338.734 36.2419 341.719 32.2485 341.719 30.8051C341.719 28.8051 337.219 30.8051 336.219 33.8051C335.219 36.8051 336.719 36.8051 332.719 40.3051C324.719 47.1051 327.719 40.4717 330.219 36.3051C332.052 35.1384 334.819 32.7051 331.219 32.3051Z"
        fill="black"
      />
      <path
        d="M193 47.5C184.047 52.3833 174.833 58 171.5 60.5C170.667 60.8333 169.5 60.9 171.5 58.5C174 55.5 196 43.5 204 38.5C210 35.5 206.5 35.5 203 35.5C199.5 35.5 193 37 180 38.5C167 40 167.5 35.5 168 33C168.5 30.5 172.5 26.5 176.5 23.5C180.5 20.5 193.5 11.5 211 7.5C228 6 225 11 222.5 16C220 21 211 24.5 208 25C205 25.5 204.5 23.5 205 22C205.5 20.5 207.5 19.5 208.5 22.5C211.7 22.5 215.167 20.1667 216.5 19C230.9 6.49237 216.5 8.16216 206 11C187.5 16 171.375 28.5 170 34C169 38 177 36.5 180 36.5C183 36.5 202.5 34 206 34C209.5 34 210 35.5 208 37.5C205.5 40 204 41.5 193 47.5Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M140 32.5C138.167 34.6667 134.6 39.7 135 42.5C135.4 45.3 138.5 43 140 41.5C142.833 39 149.5 33.3 153.5 30.5C157.5 27.7 157.167 31.6667 156.5 34L139 62C139.167 61.8333 138.7 62.5 135.5 66.5C131.99 70.8878 131.945 68.2182 131.99 65.0694C131.995 64.7144 131.888 64.3364 132 64C133 61 141 51.5 145.5 47C147.732 43.8333 152.657 36.8 154.5 34C156.343 31.2 153.268 33.1667 151.5 34.5C149.167 36.5 143.7 41.1 140.5 43.5C136.5 46.5 133 44.5 133.5 42.5C133.62 42.0208 133.733 41.5607 133.842 41.1183C135.099 36.0208 136 34.5 139 30.5C140.2 27.7 141.833 29.3333 142.5 30.5C142.333 31.1667 141.6 32.5 140 32.5ZM133.5 65.5C134 62 137.1 57.8 141.5 53C147 47 135.016 65.5 133.5 65.5Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M283.051 33.546C281.218 35.7127 277.651 40.746 278.051 43.546C278.451 46.346 281.551 44.046 283.051 42.546C285.885 40.046 292.551 34.346 296.551 31.546C300.551 28.746 300.218 32.7127 299.551 35.046L282.051 63.046C282.218 62.8794 281.751 63.546 278.551 67.546C275.041 71.9338 274.996 69.2642 275.041 66.1154C275.046 65.7604 274.939 65.3824 275.051 65.046C276.051 62.046 284.051 52.546 288.551 48.046C290.783 44.8794 295.708 37.846 297.551 35.046C299.395 32.246 296.319 34.2127 294.551 35.546C292.218 37.546 286.751 42.146 283.551 44.546C279.551 47.546 276.051 45.546 276.551 43.546C276.671 43.0668 276.785 42.6068 276.894 42.1643C278.15 37.0668 279.051 35.546 282.051 31.546C283.251 28.746 284.885 30.3794 285.551 31.546C285.385 32.2127 284.651 33.546 283.051 33.546ZM276.551 66.546C277.051 63.046 280.151 58.846 284.551 54.046C290.051 48.046 278.067 66.546 276.551 66.546Z"
        fill="black"
      />
      <path
        d="M110.366 41.9529C107.971 45.1969 107.089 47.9835 107 49.5C106.948 50 107 51.5 106 49.5C106.148 46.5346 107.616 43.6131 109.633 40.9834C108.578 38.6576 110.119 34.5234 110.5 33C111 31 110 31 112 31C113.6 31 112.667 32.6667 112 33.5C110.622 36.4862 110.387 38.5161 110.594 39.7978C115.404 34.1728 122.342 30.171 123 30.5C124 31 124.5 31.5 120.5 33C116.172 35.6636 113.137 38.4774 111.056 41.0591C111.198 41.2666 111.352 41.4115 111.5 41.5C112.5 42 115.2 42.5 118 40.5C120.8 38.5 121.833 38.6667 122 39L120.5 40C118.833 41.1667 114.7 43.3 111.5 42.5C111.041 42.3851 110.667 42.1977 110.366 41.9529Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M98 38.5C100 38.5 104.3 37.7 105.5 34.5C106.7 31.3 103.333 32.1667 101.5 33C98 35.6667 91.8 41.6 95 44C98.2 46.4 106 41.6667 109.5 39C106.333 40.5 99.6 43.4 98 43C96 42.5 96 39.5 98 38.5ZM99.5 37C100.167 36.1667 101.9 34.4 103.5 34C105.5 33.5 100.5 37.5 99.5 37Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M217.889 38.2721C219.889 38.2721 224.189 37.4721 225.389 34.2721C226.589 31.0721 223.223 31.9388 221.389 32.7721C217.889 35.4388 211.689 41.3721 214.889 43.7721C218.089 46.1721 225.889 41.4388 229.389 38.7721C226.223 40.2721 219.489 43.1721 217.889 42.7721C215.889 42.2721 215.889 39.2721 217.889 38.2721ZM219.389 36.7721C220.056 35.9388 221.789 34.1721 223.389 33.7721C225.389 33.2721 220.389 37.2721 219.389 36.7721Z"
        fill="black"
      />
      <path
        d="M54 27C55.2 28.2 53.5 28.8333 52.5 29C44 21 39 30 33.5 34.5C25.9 41.7 23.3333 50.5 23 54C22.8333 55.6667 23.6 58.4 28 56C37.6 50.8 45 45.1667 47.5 43C52.3333 39 63.1 30.1 67.5 26.5C73 22 94 5.00001 97.5 4.00001C100.3 3.20001 100.333 4.66667 100 5.50001C90.5 20.5 71.3 50.8 70.5 52C69.5 53.5 69.5 54.5 69 54.5C68.6 54.5 68.8333 52.5 69 51.5L97 6.5C94.6 6.1 76.3333 21.3333 67.5 29C62 33.6667 50.6 43.3 49 44.5C47 46 34.5 55 29 57.5C23.5 60 22 57.5 21.5 56C21 54.5 21.5 52.5 22.5 48C23.5 43.5 33 31.5 37 28C41 24.5 46 24 47.5 24C49 24 52.5 25.5 54 27Z"
        fill="black"
      />
      <path
        d="M81 21L57.5 26C56.3 26.4 57 26.8333 57.5 27L81 22L94 20C96.8333 19.8333 102.1 19.3 100.5 18.5C98.9 17.7 86.8333 19.8333 81 21Z"
        fill="black"
      />
      <path
        d="M1 38L18 29C20 30 19 31 18 32.5C17.2 33.7 15.6667 32.6667 15 32L3 39L12.5 45C9.33333 43.6667 2.6 40.8 1 40C-0.599995 39.2 0.333338 38.3333 1 38Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M73 60C72.5 61.8333 72.1 64.6 74.5 61C76.9 57.4 84.8333 44.5 88.5 38.5L97 29.5C99.6667 25.8333 105.4 17.8 107 15C109 11.5 111.5 6.5 113 3.5C114.2 1.1 112.5 0.5 111.5 0.5C107.5 4 100.3 14.1 89.5 32.5L73 60ZM91.5 33C97.1667 23.3333 108.9 3.9 110.5 3.5C109 9 102.3 20.2 91.5 33Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M123.5 38C124.5 38.1667 126.9 38.2 128.5 37C130.5 35.5 133 32 129 32C125 32 121 38.5 120 40.5C119 42.5 120.5 45 123.5 44.5C125.9 44.1 132.167 41 135 39.5C135 39.1667 133.4 39.2 127 42C119 45.5 121.5 40 123.5 38ZM124.5 37C125.167 36.1667 126.9 34.4 128.5 34C130.5 33.5 129 36 124.5 37Z"
        fill="black"
      />
    </Logo>
  );
};

export default Logotype;