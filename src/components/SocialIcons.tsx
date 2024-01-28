import React from "react";
import styled from "styled-components";

const StyledSocialIcons = styled.div`
  display: flex;
  & a {
    &:not(:last-child) {
      margin-right: 19px;
    }
    &:hover {
      &:first-child,
      &:last-child {
        & path {
          fill: black;
        }
      }
    }
  }

  & svg {
    cursor: pointer;

    &:hover {
      & circle {
        &:first-child {
          fill: black;
        }
      }
    }
  }
`;

type SocialIconsProps = {};

const SocialIcons: React.FC<SocialIconsProps> = () => {
  return (
    <StyledSocialIcons>
      <a href="https://github.com/alexey-sevastynov/" target="blank">
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="25" cy="25" r="25" fill="#333333" />
          <circle cx="24.5" cy="24.5" r="12.5" fill="white" />
          <path
            d="M17.5694 28.1427C19.1341 33.0821 21.8648 31.7332 23 30.3446V32.5465C18.1216 34.4508 17.5694 29.809 17.0631 28.7378C16.8422 27.8809 17.2472 27.9047 17.5694 28.1427Z"
            fill="#333333"
          />
          <path
            d="M21.4525 31.2713V38H27.1351V31.2713C26.8802 30.0124 26.4978 29.77 26.3385 29.8062C25.9986 29.2419 26.8696 29.0284 27.3475 28.9922C33.3807 27.9504 32.3397 23.1318 30.8527 21.1783L30.4809 17.1628C29.8259 17.6512 28.3247 18.769 27.56 19.3333C25.0639 18.2481 22.5501 18.7907 20.8152 19.1705L18.0004 17V21.0155C15.2813 26.1814 18.7439 28.4134 20.8152 28.8837C22.4615 28.7752 22.4438 29.3902 22.4615 29.6434C21.4525 30.0775 21.5941 30.7649 21.4525 31.2713Z"
            fill="#333333"
          />
        </svg>
      </a>

      <a href="https://telegram.me/alexseva_94" target="blank">
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="25" cy="25" r="25" fill="#039BE5" />
          <path
            d="M34.9661 15.2017L10.9187 24.7305C9.25486 25.3898 10.2254 26.1727 10.9187 26.4818L17.311 28.3875C21.4542 25.6748 30.0551 20.064 31.3133 19.3223C32.6932 18.7866 32.328 19.3738 31.9728 19.7344L20.5579 30.0358L20.3043 36.5257C20.9131 36.5257 21.2005 36.2853 21.2682 36.1651L24.5151 33.0747C26.0371 34.225 29.4057 36.7523 30.7045 37.6588C32.0033 38.5653 32.7 37.4528 32.886 36.7832C34.0867 31.0316 36.5794 18.9927 36.9447 16.85C37.3099 14.7073 35.7778 14.8584 34.9661 15.2017Z"
            fill="white"
          />
        </svg>
      </a>

      <a href="viber://chat?number=%2B380974211929" target="blank">
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="25" cy="25" r="25" fill="#6F3FAA" />
          <path
            d="M18.0294 16.7997C19.3801 15.3188 20.413 16.1827 20.7606 16.7997C21.4062 17.453 23.1939 19.9879 21.8531 20.7078C20.5123 21.4277 21.0586 22.1475 21.2076 22.6618C21.3565 23.176 22.5483 25.1814 23.7898 25.9527C25.0313 26.724 25.8755 27.4439 26.819 25.9527C27.7625 24.4615 29.2523 26.0556 30.5434 27.1354C31.8346 28.2153 31.6856 27.8039 30.8911 29.6036C30.2554 31.0434 28.8716 31.0948 28.2591 30.9406C24.0381 30.015 19.7178 25.13 18.3273 22.1475C16.9369 19.1651 16.341 18.6509 18.0294 16.7997Z"
            fill="white"
          />
          <path
            d="M27.3653 21.839C27.3255 20.1524 26.0576 19.8336 25.4286 19.885C24.9121 19.5971 25.2134 19.2165 25.4286 19.0623C27.693 18.8566 28.2591 20.8277 28.2591 21.839C27.8619 22.4561 27.4977 22.0961 27.3653 21.839Z"
            fill="white"
          />
          <path
            d="M29.2523 22.6618C29.292 18.836 26.2893 17.8453 24.783 17.8282C24.2665 17.1288 24.7996 16.9883 25.1306 17.0054C29.6198 17.5402 30.2786 20.862 30.0469 22.4561C29.8482 22.9497 29.4344 22.7989 29.2523 22.6618Z"
            fill="white"
          />
          <path
            d="M31.1393 23.3817C30.9804 17.3345 26.6038 15.9256 24.4354 15.977C23.6408 15.6479 24.1043 15.1885 24.4354 15C30.9109 15.3291 32.1656 20.7249 31.9836 23.3817C31.5863 23.9576 31.2552 23.6216 31.1393 23.3817Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.2933 39.4231C17.5145 39.7667 18.2632 40.3166 19.4884 39.7667L22.8575 36.3794C27.4519 36.9685 37.1816 36.4285 39.3461 29.5556C39.8395 27.1337 40.5304 21.2786 39.3461 17.2334C38.8186 15.4497 36.7222 11.6664 32.5567 10.8023C29.9702 10.1969 23.2965 9.34922 17.2933 10.8023C14.911 11.3751 10.1261 14.0326 10.0445 20.0808C10.0393 20.4659 10.033 20.845 10.0268 21.2179C9.91207 28.1651 9.83238 32.9898 17.2933 35.6921V39.4231ZM12.6479 23.1736C12.0353 30.2429 16.2043 32.8938 18.3653 33.3357V38.3922C18.3653 39.2169 18.8077 38.8994 19.0289 38.6376L23.9295 33.7775C26.7066 33.8168 29.2386 33.7775 31.4336 33.3357C37.3552 30.9084 37.3234 27.8154 37.262 21.8622C37.2589 21.5544 37.2556 21.2388 37.2531 20.9153C37.2123 15.6527 33.6287 13.5388 31.1784 13.2079C22.6695 12.0586 19.7436 12.9133 18.2477 13.247C17.9474 13.314 17.634 13.4119 17.2933 13.5024C13.6178 15.3188 12.6243 20.0506 12.6453 22.6841C12.6466 22.8532 12.6479 23.0166 12.6479 23.1736Z"
            fill="white"
          />
        </svg>
      </a>
      <a
        href="https://www.linkedin.com/in/alexey-sevastynov-662041274/"
        target="blank"
      >
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="25" cy="25" r="25" fill="#0E76AB" />
          <path d="M20 19H15V33H20V19Z" fill="white" />
          <circle cx="17.5" cy="14.5" r="2.5" fill="white" />
          <path
            d="M22 33V19.1069H26.5985V20.7434C29.4599 17.5334 35.438 19.1069 36 22.6178V33H31.3504V24.4234C30.1752 21.7651 26.5985 22.9689 26.5985 24.4234V33H22Z"
            fill="white"
          />
        </svg>
      </a>
      <a href="mailto:alexseva94@gmail.com" target="blank">
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="25" cy="25" r="25" fill="#E6462D" />
          <rect x="13" y="16" width="24" height="18" rx="2" fill="white" />
          <path
            d="M28.2879 26.0072L38 19V20.717L28.2879 27.9563C25.5058 29.6733 23.6342 28.9308 22.2685 28.1419L12 21.0882V19C14.3774 20.5623 19.5875 24.1046 22.2685 26.0072C24.393 27.817 26.5681 27.2602 28.2879 26.0072Z"
            fill="#E6462D"
          />
        </svg>
      </a>
    </StyledSocialIcons>
  );
};

export default SocialIcons;
