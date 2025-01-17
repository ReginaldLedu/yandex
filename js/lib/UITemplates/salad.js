const saladSVG = document.createElement('template');
saladSVG.innerHTML = `
<style>
svg {
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.9));
  -webkit-filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.9));
  -webkit-transition: all 0.5s ease-out;
  transition: all 0.5s ease-out;
}

svg:hover {
  filter: drop-shadow(4px 14px 24px rgba(255, 255, 255, 0.8));
  -webkit-filter: drop-shadow(4px 14px 24px rgba(255, 255, 255, 0.8));
  -webkit-transform: translateY(-5px);
          transform: translateY(-5px);
}
</style>
<svg id="draggable" width="62" height="51" viewBox="0 0 62 51" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.7652 28.2231C9.72439 27.2436 9.72439 26.2028 10.0101 25.2641C10.1938 24.6519 10.6427 23.8356 11.3162 23.6315C12.1528 23.3866 12.7855 24.1621 12.9079 24.9172C12.663 23.2642 12.8263 20.9786 13.2956 19.3664C13.5609 18.4889 14.0507 17.591 14.6425 16.9176C15.4588 16.0197 16.1527 15.9993 16.8261 17.0196C16.6424 16.7339 17.071 15.5707 17.1526 15.2646C17.3363 14.632 17.5812 13.9993 17.8873 13.4075C18.3566 12.5096 21.1116 8.61184 22.2136 10.877C21.9687 10.3873 23.6217 8.7547 23.9278 8.469C24.642 7.81597 25.6828 7.367 26.6828 7.53026C27.7031 7.71392 28.6418 8.65264 28.4378 9.75463C29.5398 8.97916 31.1723 9.99954 31.4785 11.3056C31.7846 12.6117 31.2336 13.9585 30.6826 15.183C29.3153 18.2644 27.9684 21.3051 26.8868 24.4682C26.0093 26.9783 23.0503 29.0394 21.03 30.6516C18.5199 32.6515 15.7853 34.3861 12.9283 35.835C11.459 36.5697 9.94887 37.2431 8.39792 37.8349C7.17349 38.3043 5.25521 38.488 4.19404 39.2022C6.70412 37.5696 8.49996 34.9575 9.31625 32.0801C9.66317 30.8557 9.86724 29.5292 9.80602 28.2231H9.7652Z" fill="#12826C"/>
<path d="M17.3567 42.6714C18.1934 43.1816 19.1117 43.6714 20.0708 43.8551C20.7034 43.9775 21.6218 43.9775 22.1115 43.4673C22.7238 42.8551 22.336 41.9164 21.7238 41.4674C23.0707 42.4674 25.1522 43.4061 26.7848 43.753C27.6827 43.9367 28.7031 43.9367 29.5806 43.7326C30.7642 43.4469 31.1111 42.8347 30.5397 41.7735C30.703 42.0592 31.9274 42.2429 32.2335 42.3245C32.8865 42.4674 33.5396 42.549 34.213 42.549C35.2334 42.549 39.9678 41.9776 38.4985 39.9369C38.8046 40.3654 41.029 39.7124 41.4372 39.5695C42.3555 39.243 43.233 38.5492 43.5595 37.5696C43.886 36.5901 43.4983 35.3044 42.4167 34.9779C43.6207 34.3861 43.4779 32.4678 42.4779 31.5699C41.478 30.672 40.0291 30.5292 38.7026 30.4271C35.3354 30.1618 32.0295 29.9169 28.7235 29.3659C26.091 28.9374 22.887 30.57 20.4994 31.5904C17.5403 32.8556 14.7241 34.4269 12.0916 36.2636C10.7447 37.2023 9.43868 38.2227 8.19384 39.3043C7.19389 40.1614 6.13272 41.7531 4.98991 42.3653C7.62244 40.9368 10.7856 40.5899 13.6834 41.2429C14.9282 41.5286 16.1935 41.9776 17.2955 42.651L17.3567 42.6714Z" fill="#12826C"/>
<path d="M25.642 37.6105C24.5604 38.3451 23.3156 38.8145 22.0299 38.9981C20.9483 39.1614 19.928 39.0186 18.8464 38.8553C17.8056 38.692 16.7853 38.1819 15.7241 38.2839C14.5405 38.4064 13.4181 38.9777 12.3161 39.3859C9.11217 40.5491 5.17358 40.794 1.8064 41.447C3.07164 41.2021 4.88788 39.2838 5.90824 38.488C7.96936 36.8554 10.1529 35.2024 11.6018 32.9372C12.3977 31.6924 13.1324 30.3455 13.7446 28.9986C14.2956 27.7946 15.0507 26.7946 16.4792 26.6518C16.2547 24.4682 17.0914 22.1826 18.6627 20.6521C19.2545 20.0603 20.1525 19.5501 20.9075 19.9174C20.4178 19.6726 22.0707 17.0196 22.2748 16.7747C23.0095 15.8972 23.5809 14.9993 24.4788 14.2442C24.9482 13.8565 25.4991 13.4688 26.1114 13.5096C26.7236 13.5504 27.2542 14.3054 26.9072 14.7952C27.8664 12.9586 29.3153 11.3872 31.0703 10.2852C31.8458 9.79547 32.7437 9.38731 33.6416 9.57098C34.5395 9.73423 35.315 10.7138 34.9681 11.5505C35.2946 10.7138 36.9476 9.97914 37.7026 9.65262C38.8046 9.20366 39.9883 8.95877 41.1719 8.97918C43.7432 8.97918 45.9676 10.1832 47.7226 12.0403C49.2327 13.6524 49.8245 15.9584 48.396 17.8563C48.9062 19.3256 48.6613 21.0398 47.743 22.3051C46.8247 23.5703 45.2533 24.3254 43.7024 24.2641C44.1309 26.0804 43.5187 28.0803 42.1922 29.3659C40.8454 30.6516 38.825 31.1618 37.0292 30.672C36.519 32.6107 35.1721 34.3249 33.3967 35.284C31.6417 36.2636 29.4785 36.4677 27.5603 35.8758C27.0297 36.5697 26.3971 37.1411 25.7032 37.6309L25.642 37.6105Z" fill="#16A085"/>
<path d="M6.84696 49.3038C9.84681 46.0182 13.1324 43.1612 16.6424 40.4266C18.1934 39.2226 23.8462 35.3861 22.6829 33.2433C21.2953 30.7128 11.4182 38.3859 9.96926 39.3247C8.33669 40.3654 6.72452 41.5287 4.9695 42.3245C3.47977 42.998 1.68394 43.3857 0.602361 44.6918C-0.683292 46.2631 0.479913 49.0589 1.88801 50.1609C2.68389 50.7935 3.74507 51.1608 4.72462 50.8955C5.60212 50.6507 6.25515 49.9568 6.86737 49.2834L6.84696 49.3038Z" fill="#E8F1C6"/>
<path d="M2.78594 46.6917C2.13291 45.8958 1.2554 45.4468 0.479927 46.1407C-0.356768 46.9161 0.0717831 48.1406 0.479927 49.0181C0.74522 49.5895 1.21459 50.1201 1.8064 50.365C2.47983 50.6507 3.41856 50.467 3.72467 49.7119C4.01037 48.9977 3.5206 47.61 2.76553 46.6917H2.78594Z" fill="#F1C40F"/>
<path d="M34.5191 21.1011C34.8456 20.4684 35.1109 19.8154 35.4579 19.2032C36.9068 16.5502 38.621 14.0401 40.5801 11.7341C42.58 9.38731 44.7227 7.38742 47.2736 5.69362C48.4368 4.91815 49.8245 4.14266 51.1714 3.57126C52.5183 2.97945 54.0284 2.83659 55.3345 2.16316C51.8652 3.95899 48.845 6.50989 46.2941 9.46893C43.4371 12.7953 40.5597 16.1217 37.7026 19.448C41.2127 18.4685 44.437 16.5706 47.0083 13.9993C42.4983 19.3052 36.6619 22.8765 30.6622 26.2233C31.5193 25.0192 32.356 23.9376 33.3559 22.8765C33.8253 22.3663 34.1926 21.7337 34.4987 21.1011H34.5191Z" fill="#2ECC71"/>
<path d="M37.2129 7.10172C36.6007 13.6728 33.8661 20.0195 29.499 24.9784C27.3154 27.4681 24.7441 29.6108 22.0095 31.5087C19.377 33.3454 16.3363 34.6922 13.7854 36.6105C20.3157 29.2639 26.6011 21.7337 32.4172 13.8157C33.2539 12.6729 34.0702 11.5301 34.8864 10.3873C35.417 9.65262 37.1108 7.97923 37.1925 7.10172H37.2129Z" fill="#2ECC71"/>
<path d="M32.3355 28.366C34.3763 27.1416 36.3762 25.8967 38.2536 24.4478C43.3962 20.4888 47.5797 15.4686 50.9877 9.97911C50.3959 10.9178 50.2531 12.5096 49.8653 13.5708C49.4164 14.8156 48.9266 16.04 48.3552 17.2441C46.1104 22.101 42.9473 26.6926 38.8046 30.223C34.2334 34.1004 28.3357 36.6309 22.6625 38.4472C21.0504 38.9573 19.4382 39.4063 17.7852 39.7736C16.9281 39.9573 16.071 40.141 15.2139 40.2838C14.6221 40.3858 13.5201 40.345 13.0099 40.6307C14.8466 39.5491 16.7649 38.59 18.5811 37.488C21.2544 35.8555 23.7033 33.7943 26.3154 32.0597C28.2745 30.7741 30.2948 29.5904 32.2947 28.3864L32.3355 28.366Z" fill="#2ECC71"/>
<path d="M22.5401 29.3864C27.8868 24.1825 33.2539 18.9787 39.1516 14.3871C46.1104 8.97917 54.2121 4.65284 61.7423 0C57.2119 2.65293 53.0693 5.99971 49.4164 9.75463C45.6819 13.6116 42.6208 17.9787 39.172 22.0602C35.213 26.7334 30.4173 30.7128 25.0298 33.6719C22.8054 34.8963 20.479 35.9575 18.0709 36.835C16.071 37.5696 13.214 37.9166 11.561 39.3043C15.3976 36.1207 18.9689 32.8556 22.5401 29.3864Z" fill="#35EB82"/>
</svg>

`;

export default saladSVG;