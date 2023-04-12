import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="ed-grid s-pr-4 s-pt-4 nav">
      <ul className="navlist ed-grid s-grid-1 m-grid-6 lg-grid-8 from-m">
        <li className="m-x-3 lg-x-5">
          <a href="#Categorías">Categorías</a>
        </li>

        <li>
          <a href="#Calendario">Calendario</a>
        </li>

        <li>
          <a href="#Premio">Premio</a>
        </li>

        <svg
          width="141"
          height="48"
          viewBox="0 0 141 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_36_2)">
            <path
              d="M84.3087 7.34779L79.131 11.1765V14.8364L84.3087 11.0076L89.1386 14.9114V11.2422L84.3087 7.34779Z"
              fill="white"
            />
            <path
              d="M84.3087 0L79.131 3.82874V7.49795L84.3087 3.66921L89.1386 7.56364V3.90381L84.3087 0Z"
              fill="white"
            />
            <path
              d="M84.3087 14.6581L79.131 18.4868V22.156L84.3087 18.3179L89.1386 22.2217V18.5525L84.3087 14.6581Z"
              fill="white"
            />
            <path
              d="M13.6537 23.8827H10.1956L19.7334 1.68915H19.9308L29.5062 23.8827H25.8883L24.6386 20.8422H14.9034L13.6537 23.8827ZM19.7992 9.19648L16.1814 17.8018H23.3606L19.7992 9.19648Z"
              fill="white"
            />
            <path
              d="M33.0958 13.0065C33.0627 11.5377 33.3268 10.0774 33.8725 8.71308C34.4181 7.34874 35.234 6.10846 36.2711 5.06657C37.3083 4.02469 38.5454 3.20265 39.9083 2.64971C41.2713 2.09677 42.7319 1.82433 44.2028 1.8487C48.2341 1.8487 51.025 3.41585 52.9137 6.06218L50.2826 7.93901C49.5953 6.95617 48.6664 6.16633 47.5853 5.64538C46.5041 5.12443 45.307 4.88989 44.1089 4.96425C39.7863 4.96425 36.6478 8.41762 36.6478 13.0252C36.6478 17.6329 39.8521 21.0862 44.2311 21.0862C45.5043 21.1397 46.771 20.8781 47.9186 20.3247C49.0661 19.7714 50.059 18.9434 50.8089 17.9144L53.4588 19.7443C51.2223 22.7097 48.375 24.183 44.1465 24.183C42.6757 24.2104 41.2148 23.939 39.8523 23.3853C38.4899 22.8315 37.2544 22.0069 36.2208 20.9616C35.1873 19.9163 34.3773 18.6721 33.8401 17.3046C33.3029 15.937 33.0497 14.4747 33.0958 13.0065Z"
              fill="white"
            />
            <path
              d="M64.9511 5.17066H58.4861V2.1302H74.8836V5.17066H68.4186V23.8827H64.9887L64.9511 5.17066Z"
              fill="white"
            />
            <path
              d="M93.1605 2.1302H96.7783L102.99 16.7507L109.013 2.1302H112.471L103.074 24.2018H102.886L93.1605 2.1302Z"
              fill="white"
            />
            <path
              d="M116.634 23.8827H113.176L122.714 1.68915H122.911L132.487 23.8827H128.869L127.619 20.8422H117.884L116.634 23.8827ZM122.779 9.19648L119.162 17.8018H126.332L122.808 9.19648H122.779Z"
              fill="white"
            />
            <path
              d="M2.28343 29.5789V35.2094C2.28343 35.7349 2.28342 36.2323 2.20824 36.7109C2.13307 37.1894 2.07668 37.6493 1.97332 38.1748C2.05789 38.6628 2.13311 39.1601 2.18949 39.6481C2.25259 40.1178 2.28396 40.5912 2.28343 41.0651V47.634H0V29.5226L2.28343 29.5789ZM4.96157 37.3208V39.1977H1.47532V37.3208H4.96157ZM12.3757 29.5789L7.09462 37.0862C6.95202 37.2915 6.79832 37.4889 6.63419 37.6774C6.48384 37.8463 6.30529 38.034 6.09856 38.2405V38.2968C6.32408 38.5032 6.5308 38.7097 6.72813 38.9255C6.91063 39.1215 7.0772 39.3318 7.22619 39.5543L12.7422 47.6903H10.1392L3.70237 38.2123L9.85731 29.5789H12.3757Z"
              fill="white"
            />
            <path
              d="M26.5649 29.5789C26.7629 29.5754 26.9569 29.6345 27.1193 29.7478C27.2726 29.8608 27.3822 30.0232 27.4294 30.2076L33.2649 47.6903H30.878L26.1796 32.8352C26.1138 32.5912 26.0387 32.3378 25.9541 32.0845C25.8695 31.8311 25.8038 31.5965 25.7286 31.3619H24.9956C24.9298 31.5965 24.8547 31.8311 24.7889 32.0845C24.7231 32.3378 24.6385 32.5912 24.554 32.8352L19.8555 47.6903H17.4688L23.2948 30.2076C23.3458 30.0225 23.4585 29.8603 23.6143 29.7478C23.7766 29.6345 23.9707 29.5754 24.1687 29.5789H26.5649ZM29.9289 40.0235V42.0223H20.7294V40.0235H29.9289Z"
              fill="white"
            />
            <path
              d="M50.5551 29.5789V31.6246H36.5538V29.5789H50.5551ZM44.6915 29.5789V47.6903H42.3798V29.5789H44.6915Z"
              fill="white"
            />
            <path
              d="M62.959 29.5789C63.157 29.5754 63.351 29.6345 63.5134 29.7478C63.6636 29.8638 63.7723 30.0251 63.8235 30.2076L69.6589 47.6903H67.2627L62.5643 32.8352L62.3388 32.0845C62.2636 31.8311 62.1884 31.5965 62.1132 31.3619H61.3803C61.3145 31.5965 61.2393 31.8311 61.1735 32.0845C61.1078 32.3378 61.0232 32.5912 60.9386 32.8352L56.2402 47.6903H53.8534L59.6795 30.2076C59.7305 30.0225 59.8432 29.8603 59.9989 29.7478C60.1613 29.6345 60.3554 29.5754 60.5534 29.5789H62.959ZM66.3231 40.0235V42.0223H57.1235V40.0235H66.3231Z"
              fill="white"
            />
            <path
              d="M78.3792 29.5789V44.0117C78.3611 44.2484 78.39 44.4862 78.4641 44.7117C78.5383 44.9371 78.6563 45.1457 78.8115 45.3255C79.1852 45.6326 79.6632 45.7839 80.1458 45.7478H86.7236L86.827 47.5308C85.69 47.6153 84.5248 47.6716 83.3408 47.6903H79.8075C79.2978 47.7434 78.7827 47.6871 78.2965 47.5252C77.8103 47.3634 77.3644 47.0998 76.9885 46.7519C76.4202 46.0682 76.1226 45.2001 76.1521 44.312V29.5789H78.3792Z"
              fill="white"
            />
            <path
              d="M103.525 29.5789L97.4361 41.5437H95.3594L89.2045 29.5789H91.6758L95.491 37.2176C95.6507 37.5461 95.7917 37.8933 95.9233 38.2405C96.0548 38.5877 96.1769 38.9349 96.2991 39.2634H96.487C96.6092 38.9349 96.7407 38.5877 96.8817 38.2405C97.0226 37.8933 97.1636 37.5554 97.3046 37.2458L101.063 29.5789H103.525ZM97.5113 39.9015V47.6716H95.1997V39.9015H97.5113Z"
              fill="white"
            />
            <path
              d="M115.008 29.2692C115.863 29.2692 116.756 29.3255 117.668 29.4006C118.584 29.4674 119.495 29.5992 120.393 29.7947L120.242 31.4651C119.481 31.4651 118.654 31.3994 117.743 31.3806C116.831 31.3619 115.957 31.3337 115.112 31.3337C114.463 31.3337 113.909 31.3337 113.448 31.3994C113.048 31.4256 112.658 31.5342 112.302 31.7185C111.994 31.901 111.766 32.1924 111.663 32.5349C111.513 33.0401 111.447 33.5662 111.466 34.0927C111.392 34.8285 111.581 35.5667 112.001 36.1759C112.482 36.6385 113.091 36.9458 113.749 37.0581L117.423 37.9965C117.996 38.081 118.547 38.2789 119.042 38.5787C119.537 38.8784 119.968 39.2739 120.308 39.7419C120.871 40.7624 121.138 41.9192 121.079 43.0827C121.11 43.9478 120.989 44.8117 120.722 45.6352C120.525 46.2323 120.143 46.7515 119.631 47.1179C119.063 47.4849 118.422 47.725 117.752 47.8217C116.848 47.9631 115.933 48.0291 115.018 48.0188C114.426 48.0188 113.646 48.0188 112.697 47.9437C111.59 47.8687 110.488 47.7277 109.398 47.5214L109.558 45.8135L112.048 45.9073C112.678 45.9073 113.223 45.9073 113.683 45.9073H115.102C115.838 45.9279 116.573 45.8586 117.292 45.7009C117.53 45.6511 117.755 45.5497 117.95 45.4038C118.144 45.2578 118.305 45.0709 118.419 44.8563C118.678 44.2661 118.791 43.6224 118.748 42.9795C118.772 42.4253 118.693 41.8716 118.513 41.3466C118.371 40.978 118.105 40.6698 117.762 40.4739C117.358 40.2438 116.92 40.0791 116.465 39.9859L112.706 39.0475C111.578 38.8573 110.568 38.2385 109.887 37.3208C109.306 36.3168 109.029 35.1663 109.088 34.0082C109.057 33.1523 109.178 32.2976 109.445 31.4839C109.635 30.8982 110.011 30.3905 110.517 30.0387C111.071 29.6876 111.697 29.4663 112.349 29.3912C113.231 29.2891 114.12 29.2483 115.008 29.2692Z"
              fill="white"
            />
            <path
              d="M141 29.5789V31.6246H126.989V29.5789H141ZM135.136 29.5789V47.6903H132.825V29.5789H135.136Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_36_2">
              <rect width="141" height="48" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </ul>
    </nav>
  );
};

export default Nav;
