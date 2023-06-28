import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

// function getMatrixForRotation(deg: number, cx: number, cy: number) {
//   const ca = Math.cos((deg * Math.PI) / 180);
//   const sa = Math.sin((deg * Math.PI) / 180);

//   const a: any = ca.toFixed(4);
//   const b = sa.toFixed(4);
//   const c = (-sa).toFixed(4);
//   const d = ca.toFixed(4);
//   const e = (-ca * cx + sa * cy + cx).toFixed(4);
//   const f = (-sa * cx - ca * cy + cy).toFixed(4);

//   return "matrix(" + [a, b, c, d, e, f].join(", ") + ")";
// }

// let result = [];

// for (let index = -2; index <= 0; index++) {
//   if (index) {
//     result.push(getMatrixForRotation(index, 91.76, 144.5));
//   }
// }

type AnimationMainProps = {};

const AnimationMain: React.FC<AnimationMainProps> = () => {
  return (
    // <StyledAnimationMain
    //   width="562"
    //   height="516"
    //   viewBox="0 0 562 516"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <path
    //     d="M289.121 301.273V210.131H374.403L382.866 301.273H289.121Z"
    //     fill="#EEA986"
    //     stroke="black"
    //   />
    //   <path
    //     d="M116.604 322.105L122.463 334.474L71.6845 346.843C71.2505 347.928 70.122 347.624 69.0804 337.729C67.7784 325.36 11.7918 268.722 3.32867 256.353C-3.44181 245.416 6.1497 247.022 11.7918 249.192L32.624 262.212C27.633 255.485 16.0884 239.036 9.83874 227.058C5.67229 215.079 14.6128 215.774 19.6038 217.944L48.2482 249.192C43.0401 239.21 31.4522 217.032 26.765 208.178C24.6817 196.2 32.841 198.847 37.1811 201.668L66.4764 242.031C61.7024 232.917 51.8938 212.475 50.8522 203.621C49.5502 192.554 58.0133 193.856 62.5704 197.762C93.2979 263.905 106.188 266.552 108.792 259.608L119.208 227.058C120.944 227.275 124.025 226.407 127.671 231.615C132.228 238.125 124.416 277.836 119.208 295.413C112.958 306.871 114.868 317.982 116.604 322.105Z"
    //     fill="#EEA986"
    //     stroke="black"
    //   />
    //   <path
    //     d="M53.4563 284.997L84.0536 258.957M99.0268 266.769C92.0827 272.628 82.361 288.643 99.0268 305.83"
    //     stroke="black"
    //   />
    //   <path
    //     d="M114 514.152C126.499 319.371 233.785 266.335 285.866 264.165C337.947 327.313 371.799 276.534 380.262 264.165C512.026 270.936 555.383 433.644 560.591 514.152H114Z"
    //     fill="#568ED5"
    //     stroke="black"
    //   />
    //   <path
    //     d="M68.4294 339.031C60.6173 341.635 65.1744 457.297 68.4294 514.803H184.96L129.624 326.011C112.481 329.266 76.2415 336.427 68.4294 339.031Z"
    //     fill="#568ED5"
    //     stroke="black"
    //   />
    //   <path
    //     d="M192.772 315.595L197.329 346.843M199.933 365.071C203.405 403.481 210.349 487.07 210.349 514.152M473.356 312.991C470.318 325.36 463.07 370.8 458.383 453.608M455.128 499.179L457.081 467.28"
    //     stroke="black"
    //   />
    //   <path
    //     d="M289.772 260.259V225.756C304.745 230.747 339.77 241.901 360.081 246.588C335.343 284.346 305.396 263.731 289.772 260.259Z"
    //     fill="black"
    //     stroke="black"
    //   />
    //   <path
    //     d="M397.188 191.903C368.544 253.358 342.287 261.778 332.739 258.306C304.094 261.561 276.101 219.246 264.383 196.46C255.269 162.608 255.269 145.682 264.383 86.44C293.027 8.31904 337.296 25.2452 369.195 32.4063C422.578 51.2856 406.898 171.071 397.188 191.903Z"
    //     fill="#EEA986"
    //     stroke="black"
    //   />
    //   <path
    //     d="M363.987 165.478C365.289 156.364 378.96 145.948 393.282 158.968C391.329 166.78 378.309 177.847 363.987 165.478Z"
    //     fill="#E48578"
    //   />
    //   <path
    //     d="M267.804 158.583C273.483 151.336 290.528 149.136 296.438 167.567C290.846 173.361 274.039 176.45 267.804 158.583Z"
    //     fill="#E48578"
    //   />
    //   <path
    //     d="M348.363 126.802C353.137 120.509 366.591 111.178 382.215 124.198C371.148 126.802 375.705 130.709 348.363 126.802Z"
    //     fill="white"
    //     stroke="black"
    //   />
    //   <path
    //     d="M363.987 128.105C357.217 124.459 359.864 120.075 362.034 118.339C363.987 117.037 369.195 117.688 371.799 118.339C374.924 122.506 371.365 126.585 369.195 128.105H363.987Z"
    //     fill="#568ED5"
    //     stroke="black"
    //   />
    //   <path
    //     d="M260.477 176.279C257.873 175.411 252.274 173.024 250.712 170.42C248.759 167.165 246.155 156.098 240.947 154.145C238.343 148.937 235.955 140.691 235.087 137.219L230.53 129.407L232.483 124.198H228.577L230.53 104.017C229.276 104.54 227.327 105.495 225.469 106.695C221.915 110.682 219.537 113.636 220.765 111.178C221.575 109.558 223.47 107.985 225.469 106.695C227.565 104.344 230.069 101.633 232.483 99.4601C235.087 89.044 246.806 57.7956 248.759 55.8426C250.321 54.2802 238.56 62.1357 232.483 66.2587C236.823 62.5697 246.545 54.4104 250.712 51.2856C254.878 48.1607 257.656 42.1715 258.524 39.5674L232.483 59.7487C240.079 52.1536 256.31 36.5728 260.477 35.0104C265.685 33.0573 276.101 21.3392 280.007 18.7352C283.913 16.1311 291.725 11.5741 297.584 10.2721C303.443 8.97005 316.463 5.71502 321.02 3.76199C325.578 1.80897 335.994 -0.144055 340.551 1.80897C345.108 3.76199 356.175 3.762 362.685 7.01703C369.195 10.2721 384.168 15.4801 391.329 23.2922C397.058 29.5419 410.643 46.2945 416.719 53.8896L425.182 69.1883L433.645 84.487L425.182 74.0708L436.9 91.6481L427.135 81.8829C425.572 80.3205 434.73 92.9501 439.504 99.4601L431.041 91.6481L442.759 113.782L431.041 99.4601L439.504 113.782L431.041 107.923L442.759 127.453L433.645 116.386C432.56 121.16 431.041 132.531 433.645 139.823C436.249 147.114 436.9 154.579 436.9 157.4L427.135 137.219C426.267 141.559 423.75 151.671 420.625 157.4C417.5 163.129 411.511 175.845 408.907 181.487C409.124 178.015 409.948 170.29 411.511 167.165C413.073 164.04 403.481 175.411 398.49 181.487L401.094 157.4C401.962 148.937 403.178 130.448 401.094 124.198C399.011 117.949 398.49 95.1201 398.49 84.487C398.056 77.3259 395.496 60.6601 388.725 51.2856C380.262 39.5674 367.242 29.1513 362.685 29.8023C359.039 30.3231 341.202 42.6055 332.739 48.6815L280.007 84.487C273.931 88.827 261.128 102.845 258.524 124.198C255.92 145.551 258.741 167.816 260.477 176.279Z"
    //     fill="#2F0C08"
    //     stroke="black"
    //   />
    //   <path
    //     d="M309.953 111.829C292.767 103.496 272.412 111.395 264.383 116.386V111.829C275.45 100.111 287.168 102.064 294.329 101.413C300.058 100.892 308.868 103.8 312.557 105.319C312.34 106.621 311.516 109.746 309.953 111.829Z"
    //     fill="#1F0B00"
    //   />
    //   <path
    //     d="M348.363 109.876C340.551 108.835 345.976 103.8 349.665 101.413C400.444 96.2051 396.537 115.084 394.584 115.084C382.9 103.4 358.918 107.897 348.454 109.859L348.363 109.876Z"
    //     fill="#1F0B00"
    //   />
    //   <path
    //     d="M276.101 126.151C280.441 120.075 293.418 111.569 310.604 126.151C298.886 128.105 296.933 133.313 276.101 126.151Z"
    //     fill="white"
    //     stroke="black"
    //   />
    //   <path
    //     d="M290.423 129.406C284.173 124.719 286.517 120.726 288.47 118.99C291.074 118.99 296.933 118.6 299.537 119.641C303.183 122.766 299.32 127.453 296.933 129.406H290.423Z"
    //     fill="#4073B5"
    //     stroke="black"
    //   />
    //   <circle cx="293.027" cy="123.547" r="1.95302" fill="black" />
    //   <circle cx="365.94" cy="122.245" r="1.95302" fill="black" />
    //   <path
    //     d="M367.893 186.044C340.29 194.377 307.783 189.516 294.98 186.044L304.745 190.601C327.661 228.099 350.316 206.225 358.779 190.601C360.298 189.95 364.247 188.127 367.893 186.044Z"
    //     fill="black"
    //     stroke="black"
    //   />
    //   <path
    //     d="M317.115 205.574C322.54 202.102 335.603 197.242 347.061 205.574C343.155 208.178 328.833 216.642 317.115 205.574Z"
    //     fill="#E48578"
    //   />
    //   <path
    //     d="M308 193.856V188.648C336.645 192.294 351.618 189.299 356.826 188.648C356.609 189.733 356.435 191.773 354.873 193.856C338.207 198.023 316.68 195.592 308 193.856Z"
    //     fill="#EAEAEA"
    //   />
    //   <path
    //     d="M309.302 152.843C305.83 155.013 301.23 160.915 310.604 167.165M310.604 163.91C312.991 163.693 320.369 163.259 327.531 170.42C334.041 171.722 338.598 162.608 349.014 163.91C352.269 163.476 357.217 160.655 350.967 152.843"
    //     stroke="black"
    //   />
    // </StyledAnimationMain>
    <motion.svg
      width="514"
      height="476"
      viewBox="0 0 514 476"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* _____________________________neck */}
      <motion.g
        animate={{
          transform: [
            "matrix(0.9998, 0.0175, -0.0175, 0.9998, 2.5358, -1.5794)",
            "matrix(0.9994, 0.0349, -0.0349, 0.9994, 5.0989, -3.1144)",
            "matrix(0.9994, 0.0349, -0.0349, 0.9994, 5.0989, -3.1144)",
            "matrix(0.9998, 0.0175, -0.0175, 0.9998, 2.5358, -1.5794)",
            "matrix(0.9998, -0.0175, 0.0175, 0.9998, -2.5079, 1.6234)",
            "matrix(0.9994, -0.0349, 0.0349, 0.9994, -4.9871, 3.2904)",
            "matrix(0.9998, -0.0175, 0.0175, 0.9998, -2.5079, 1.6234)",
            "matrix(0.9998, 0.0175, -0.0175, 0.9998, 2.5358, -1.5794)",
          ],
        }}
        transition={{ repeat: Infinity, duration: 10 }}
      >
        <path
          d="M263.5 272V202H329L335.5 272H263.5Z"
          fill="#EEA986"
          stroke="black"
        />
        <path
          d="M264 240.5V214C275.5 217.833 302.4 226.4 318 230C299 259 276 243.167 264 240.5Z"
          fill="black"
          stroke="black"
        />
      </motion.g>

      {/* _____________________________hand */}
      <motion.g
        animate={{
          transform: [
            "matrix(0.9998, 0.0175, -0.0175, 0.9998, 2.0569, -1.6984)",
            "matrix(0.9986, 0.0523, -0.0523, 0.9986, 6.2581, -4.9864)",
            "matrix(0.9962, 0.0872, -0.0872, 0.9962, 10.5714, -8.1257)",
            "matrix(0.9925, 0.1219, -0.1219, 0.9925, 14.9917, -11.1125)",
            "matrix(0.9877, 0.1564, -0.1564, 0.9877, 19.5136, -13.9433)",
            "matrix(0.9925, 0.1219, -0.1219, 0.9925, 14.9917, -11.1125)",
            "matrix(0.9962, 0.0872, -0.0872, 0.9962, 10.5714, -8.1257)",
            "matrix(0.9986, 0.0523, -0.0523, 0.9986, 6.2581, -4.9864)",
            "matrix(0.9998, 0.0175, -0.0175, 0.9998, 2.0569, -1.6984)",
            "matrix(0.9998, -0.0175, 0.0175, 0.9998, -2.0270, 1.7341)",
            "matrix(0.9986, -0.0523, 0.0523, 0.9986, -5.9885, 5.3071)",
            "matrix(0.9962, -0.0872, 0.0872, 0.9962, -9.8230, 9.0161)",
            "matrix(0.9986, -0.0523, 0.0523, 0.9986, -5.9885, 5.3071)",
            "matrix(0.9998, -0.0175, 0.0175, 0.9998, -2.0270, 1.6984)",
            "matrix(0.9998, 0.0175, -0.0175, 0.9998, 2.0569, -1.6984)",
          ],
        }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        <path
          d="M131 288L135.5 297.5L96.5 307C96.1667 307.833 95.3 307.6 94.5 300C93.5 290.5 50.5 247 44 237.5C38.8 229.1 46.1667 230.333 50.5 232L66.5 242C62.6667 236.833 53.8 224.2 49 215C45.8 205.8 52.6667 206.333 56.5 208L78.5 232C74.5 224.333 65.6 207.3 62 200.5C60.4 191.3 66.6667 193.333 70 195.5L92.5 226.5C88.8333 219.5 81.3 203.8 80.5 197C79.5 188.5 86 189.5 89.5 192.5C113.1 243.3 123 245.333 125 240L133 215C134.333 215.167 136.7 214.5 139.5 218.5C143 223.5 137 254 133 267.5C128.2 276.3 129.667 284.833 131 288Z"
          fill="#EEA986"
          stroke="black"
        />
        <path
          d="M82.5 259.5L106 239.5M117.5 245.5C112.167 250 104.7 262.3 117.5 275.5"
          stroke="black"
        />
      </motion.g>

      {/* _____________________________body */}
      <motion.g>
        <path
          d="M129 435.5C138.6 285.9 221 245.167 261 243.5C301 292 327 253 333.5 243.5C434.7 248.7 468 373.667 472 435.5H129Z"
          fill="#568ED5"
          stroke="black"
        />
        <path
          d="M189.5 283L193 307M195 321C197.667 350.5 203 414.7 203 435.5M405 281C402.667 290.5 397.1 325.4 393.5 389M391 424L392.5 399.5"
          stroke="black"
        />
      </motion.g>

      {/* _____________________________arm */}
      <motion.path
        animate={{
          transform: [
            "matrix(0.9998, 0.0175, -0.0175, 0.9998, 2.5358, -1.5794)",
            "matrix(0.9994, 0.0349, -0.0349, 0.9994, 5.0989, -3.1144)",
            "matrix(0.9986, 0.0523, -0.0523, 0.9986, 7.6883, -4.6043)",
            "matrix(0.9994, 0.0349, -0.0349, 0.9994, 5.0989, -3.1144)",
            "matrix(0.9998, 0.0175, -0.0175, 0.9998, 2.5358, -1.5794)",
            "matrix(0.9998, -0.0175, 0.0175, 0.9998, -2.5079, 1.6234)",
            "matrix(0.9994, -0.0349, 0.0349, 0.9994, -4.9871, 3.2904)",
            "matrix(0.9998, -0.0175, 0.0175, 0.9998, -2.5079, 1.6234)",
            "matrix(0.9998, 0.0175, -0.0175, 0.9998, 2.5358, -1.5794)",
          ],
        }}
        transition={{ repeat: Infinity, duration: 3 }}
        d="M94.2839 303.724C88.3364 305.669 92.5219 395.552 95 438.5L183 435L140.872 294C127.821 296.431 100.231 301.779 94.2839 303.724Z"
        fill="#568ED5"
        stroke="black"
      />
      {/* _____________________________HADE */}
      <motion.g
        animate={{
          transform: [
            "matrix(0.9998, 0.0175, -0.0175, 0.9998, 2.5358, -1.5794)",
            "matrix(0.9994, 0.0349, -0.0349, 0.9994, 5.0989, -3.1144)",
            "matrix(0.9994, 0.0349, -0.0349, 0.9994, 5.0989, -3.1144)",
            "matrix(0.9998, 0.0175, -0.0175, 0.9998, 2.5358, -1.5794)",
            "matrix(0.9998, -0.0175, 0.0175, 0.9998, -2.5079, 1.6234)",
            "matrix(0.9994, -0.0349, 0.0349, 0.9994, -4.9871, 3.2904)",
            "matrix(0.9998, -0.0175, 0.0175, 0.9998, -2.5079, 1.6234)",
            "matrix(0.9998, 0.0175, -0.0175, 0.9998, 2.5358, -1.5794)",
          ],
        }}
        transition={{ repeat: Infinity, duration: 10 }}
      >
        {/* _____________________________face */}
        <path
          d="M346.5 188C324.5 235.2 304.333 241.667 297 239C275 241.5 253.5 209 244.5 191.5C237.5 165.5 237.5 152.5 244.5 107C266.5 47 300.5 60 325 65.5C366 80 353.958 172 346.5 188Z"
          fill="#EEA986"
          stroke="black"
        />
        <path
          d="M321 167.705C322 160.704 332.5 152.704 343.5 162.705C342 168.704 332 177.204 321 167.705Z"
          fill="#E48578"
        />
        <path
          d="M247.128 162.409C251.489 156.843 264.581 155.153 269.12 169.309C264.825 173.759 251.916 176.132 247.128 162.409Z"
          fill="#E48578"
        />
        {/* ______eyes */}
        <path
          d="M309 138C312.667 133.167 323 126 335 136C326.5 138 330 141 309 138Z"
          fill="white"
          stroke="black"
        />
        <motion.path
          animate={{ x: [0, -0.3, -0.4, -0.6, -0.6, -0.6, -0.4, -0.3, 0, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
          d="M321 139C315.8 136.2 317.833 132.833 319.5 131.5C321 130.5 325 131 327 131.5C329.4 134.7 326.667 137.833 325 139H321Z"
          fill="#568ED5"
          stroke="black"
        />
        <path
          d="M253.5 137.5C256.833 132.833 266.8 126.3 280 137.5C271 139 269.5 143 253.5 137.5Z"
          fill="white"
          stroke="black"
        />
        <motion.path
          animate={{ x: [0, -0.3, -0.4, -0.6, -0.6, -0.6, -0.4, -0.3, 0, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
          d="M264.5 140C259.7 136.4 261.5 133.333 263 132C265 132 269.5 131.7 271.5 132.5C274.3 134.9 271.333 138.5 269.5 140H264.5Z"
          fill="#4073B5"
          stroke="black"
        />
        <motion.circle
          animate={{
            x: [0, -0.3, -0.4, -0.6, -0.6, -0.6, -0.4, -0.3, 0, 0],
            y: [0, 0.3, 0.4, 0.6, 0.6, 0.6, 0.4, 0.3, 0, 0],
          }}
          transition={{ repeat: Infinity, duration: 8 }}
          cx="266.5"
          cy="135.5"
          r="1.5"
          fill="black"
        />
        <motion.circle
          animate={{
            x: [0, -0.3, -0.4, -0.6, -0.6, -0.6, -0.4, -0.3, 0, 0],
            y: [0, 0.3, 0.4, 0.6, 0.6, 0.6, 0.4, 0.3, 0, 0],
          }}
          transition={{ repeat: Infinity, duration: 8 }}
          cx="322.5"
          cy="134.5"
          r="1.5"
          fill="black"
        />
        {/* ______hair */}
        <path
          d="M241.5 176C239.5 175.333 235.2 173.5 234 171.5C232.5 169 230.5 160.5 226.5 159C224.5 155 222.667 148.667 222 146L218.5 140L220 136H217L218.5 120.5C217.537 120.901 216.04 121.635 214.613 122.556C211.883 125.619 210.056 127.887 211 126C211.622 124.756 213.077 123.548 214.613 122.556C216.222 120.751 218.146 118.669 220 117C222 109 231 85 232.5 83.5C233.7 82.3 224.667 88.3333 220 91.5C223.333 88.6667 230.8 82.4 234 80C237.2 77.6 239.333 73 240 71L220 86.5C225.833 80.6667 238.3 68.7 241.5 67.5C245.5 66 253.5 57 256.5 55C259.5 53 265.5 49.5 270 48.5C274.5 47.5 284.5 45 288 43.5C291.5 42 299.5 40.5 303 42C306.5 43.5 315 43.5 320 46C325 48.5 336.5 52.5 342 58.5C346.4 63.3 356.833 76.1667 361.5 82L368 93.75L374.5 105.5L368 97.5L377 111L369.5 103.5C368.3 102.3 375.333 112 379 117L372.5 111L381.5 128L372.5 117L379 128L372.5 123.5L381.5 138.5L374.5 130C373.667 133.667 372.5 142.4 374.5 148C376.5 153.6 377 159.333 377 161.5L369.5 146C368.833 149.333 366.9 157.1 364.5 161.5C362.1 165.9 357.5 175.667 355.5 180C355.667 177.333 356.3 171.4 357.5 169C358.7 166.6 351.333 175.333 347.5 180L349.5 161.5C350.167 155 351.1 140.8 349.5 136C347.9 131.2 347.5 113.667 347.5 105.5C347.167 100 345.2 87.2 340 80C333.5 71 323.5 63 320 63.5C317.2 63.9 303.5 73.3333 297 78L256.5 105.5C251.833 108.833 242 119.6 240 136C238 152.4 240.167 169.5 241.5 176Z"
          fill="#2F0C08"
        />
        <path
          d="M241.5 176C239.5 175.333 235.2 173.5 234 171.5C232.5 169 230.5 160.5 226.5 159C224.5 155 222.667 148.667 222 146L218.5 140L220 136H217L218.5 120.5C216.5 121.333 212.2 123.6 211 126C209.5 129 215 121.5 220 117C222 109 231 85 232.5 83.5C233.7 82.3 224.667 88.3333 220 91.5C223.333 88.6667 230.8 82.4 234 80C237.2 77.6 239.333 73 240 71L220 86.5C225.833 80.6667 238.3 68.7 241.5 67.5C245.5 66 253.5 57 256.5 55C259.5 53 265.5 49.5 270 48.5C274.5 47.5 284.5 45 288 43.5C291.5 42 299.5 40.5 303 42C306.5 43.5 315 43.5 320 46C325 48.5 336.5 52.5 342 58.5C346.4 63.3 356.833 76.1667 361.5 82L368 93.75L374.5 105.5L368 97.5L377 111C375 109 370.7 104.7 369.5 103.5C368.3 102.3 375.333 112 379 117L372.5 111L381.5 128L372.5 117L379 128L372.5 123.5L381.5 138.5L374.5 130C373.667 133.667 372.5 142.4 374.5 148C376.5 153.6 377 159.333 377 161.5L369.5 146C368.833 149.333 366.9 157.1 364.5 161.5C362.1 165.9 357.5 175.667 355.5 180C355.667 177.333 356.3 171.4 357.5 169C358.7 166.6 351.333 175.333 347.5 180L349.5 161.5C350.167 155 351.1 140.8 349.5 136C347.9 131.2 347.5 113.667 347.5 105.5C347.167 100 345.2 87.2 340 80C333.5 71 323.5 63 320 63.5C317.2 63.9 303.5 73.3333 297 78L256.5 105.5C251.833 108.833 242 119.6 240 136C238 152.4 240.167 169.5 241.5 176Z"
          stroke="black"
        />
        {/* ______eyebrow */}
        <path
          d="M279.5 126.5C266.3 120.1 250.667 126.167 244.5 130V126.5C253 117.5 262 119 267.5 118.5C271.9 118.1 278.667 120.333 281.5 121.5C281.333 122.5 280.7 124.9 279.5 126.5Z"
          fill="#2F0C08"
        />
        <path
          d="M309 125C303 124.2 307.167 120.333 310 118.5C349 114.5 346 129 344.5 129C335.526 120.026 317.107 123.48 309.07 124.987L309 125Z"
          fill="#2F0C08"
        />
        {/* ______mouth */}
        <path
          d="M324 183.5C302.8 189.9 277.833 186.167 268 183.5L275.5 187C293.1 215.8 310.5 199 317 187C318.167 186.5 321.2 185.1 324 183.5Z"
          fill="black"
          stroke="black"
        />
        <path
          d="M285 198.5C289.167 195.833 299.2 192.1 308 198.5C305 200.5 294 207 285 198.5Z"
          fill="#E48578"
        />
        <path
          d="M278 189.5V185.5C300 188.3 311.5 186 315.5 185.5C315.333 186.333 315.2 187.9 314 189.5C301.2 192.7 284.667 190.833 278 189.5Z"
          fill="#EAEAEA"
        />
        {/* ______nose */}
        <path
          d="M279 158C276.333 159.667 272.8 164.2 280 169M280 166.5C281.833 166.333 287.5 166 293 171.5C298 172.5 301.5 165.5 309.5 166.5C312 166.167 315.8 164 311 158"
          stroke="black"
        />
      </motion.g>
      {/* <path d="M95 424V435L468 433.625V424H95Z" fill="#568ED5" /> */}
    </motion.svg>
  );
};

export default AnimationMain;
