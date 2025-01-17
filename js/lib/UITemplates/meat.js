const meatSVG = document.createElement('template');
meatSVG.innerHTML = `
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
  -webkit-transform: rotate(15deg) translateY(-5px);
          transform: rotate(15deg) translateY(-5px);
}
</style>
<svg id="draggable" width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.3118 50.4356C17.6923 50.2756 16.0725 49.9186 14.5481 49.3936C4.41425 45.8704 -0.355128 35.1142 2.92797 23.2227C6.45199 10.4881 19.0292 1.44579 31.5796 2.64637C41.6481 3.64113 49.7822 10.4542 51.4198 19.2065C52.48 24.8281 50.735 30.7242 46.8473 34.5762C44.881 36.5296 42.5705 37.779 40.533 38.8584C39.0765 39.6406 37.7039 40.3719 36.6514 41.253C35.8152 41.9388 35.0944 42.8528 34.3288 43.8214C32.7509 45.8328 30.7716 48.3169 27.1793 49.5776C24.7727 50.4038 22.0436 50.7055 19.2923 50.4337L19.3118 50.4356Z" fill="#E3976E"/>
<path d="M19.4718 48.8161C18.0279 48.6734 16.6209 48.3571 15.2682 47.8885C4.92356 44.3051 2.79561 33.337 5.18897 24.6677C8.34775 13.2368 20.038 4.79643 31.2616 5.86591C38.6373 6.59464 47.2588 11.4659 48.9337 20.4386C49.835 25.276 48.3504 30.3309 45.0493 33.6301C43.3441 35.3335 41.2852 36.4304 39.3081 37.4961C37.7483 38.3271 36.2703 39.1269 35.0054 40.1643C33.9762 41.0084 33.1853 42.0336 32.332 43.0921C30.8008 45.0293 29.2229 47.0408 26.3054 48.0529C24.244 48.7753 21.8738 49.0337 19.4543 48.7946L19.4718 48.8161Z" fill="#ECF0F1"/>
<path d="M6.84106 24.2989C9.6929 13.9805 20.2888 5.64874 31.1806 6.68544C38.6168 7.40044 45.976 12.2848 47.4074 19.9331C48.1829 24.0488 46.9769 28.6781 43.9622 31.6707C41.1424 34.4854 37.0758 35.5614 34.0274 38.0974C30.9576 40.6511 29.8069 44.3204 25.8285 45.7006C22.6652 46.8066 18.9815 46.6003 15.8566 45.5231C6.78841 42.3811 4.4612 32.8316 6.82348 24.2775L6.84106 24.2989Z" fill="#C0392B"/>
<path d="M27.1556 16.5136C25.2812 16.9392 24.2534 18.9656 23.7542 20.8275C23.2746 22.6913 23.0117 24.7538 21.6905 26.1601C20.6091 27.334 19.0021 27.8451 17.5866 28.6116C16.1729 29.3586 14.8049 30.642 14.8633 32.2437C18.5197 30.7332 23.0589 31.6545 25.8327 34.49C26.4949 35.1662 27.087 35.9537 27.8817 36.4854C29.5843 37.5993 32.0841 36.4277 30.6224 34.4706C29.28 32.7026 27.8484 31.4381 26.9562 29.3009C25.2657 25.2721 25.2073 20.4785 27.1361 16.5117L27.1556 16.5136Z" fill="#ECF0F1"/>
<path d="M38.4704 12.2723C42.8552 12.9617 46.4227 17.1365 46.4163 21.5888C46.4032 25.3113 44.2181 28.6814 41.7729 31.4938C40.1071 33.398 38.0295 35.2813 35.503 35.3272C32.719 35.3871 30.379 33.1462 29.0454 30.6895C25.1075 23.4832 28.0734 10.6146 38.4704 12.2723Z" fill="#E74C3C"/>
<path d="M28.8907 12.114C29.5869 11.8478 30.2987 11.6226 30.8933 11.1887C31.4878 10.7549 31.9357 10.0111 31.7709 9.28547C31.4845 7.99618 29.7089 7.82074 28.4059 8.04665C23.2933 8.94044 18.4753 11.4396 14.8391 15.1391C11.2029 18.8387 8.73474 23.6782 7.91359 28.7987C7.7936 29.6143 7.69119 30.4515 7.92628 31.2628C8.16136 32.0742 8.76117 32.7836 9.57299 32.9426C10.9663 33.1985 12.0299 31.8062 12.9085 30.6911C14.3539 28.8242 16.2759 27.3196 18.4033 26.3279C20.7783 25.2228 21.6682 25.3895 21.8034 22.6247C22.0302 18.1352 24.6219 13.8398 28.8887 12.1335L28.8907 12.114Z" fill="#E74C3C"/>
<path d="M20.1804 32.6705C23.6637 33.3102 26.8018 35.6497 28.4015 38.8026C28.9295 39.8399 29.284 41.0374 28.901 42.1226C28.3837 43.5689 26.7418 44.2342 25.2516 44.5599C20.8219 45.5211 16.0703 44.7561 12.1539 42.5171C10.9044 41.8026 9.69558 40.8753 9.13603 39.5591C6.78844 34.2043 16.8336 32.0443 20.2194 32.6744L20.1804 32.6705Z" fill="#E74C3C"/>
<path d="M34.1249 31.5263C34.0979 31.7994 33.8407 32.0105 33.5675 31.9835C33.2943 31.9565 33.0833 31.6992 33.1103 31.426C33.1373 31.1528 33.3946 30.9418 33.6677 30.9688C33.9409 30.9958 34.1519 31.2531 34.1249 31.5263Z" fill="#C0392B"/>
<path d="M37.7796 30.2323C37.7179 30.8567 37.1605 31.3139 36.5361 31.2522C35.9117 31.1905 35.4545 30.6331 35.5162 30.0087C35.5779 29.3843 36.1353 28.9271 36.7597 28.9888C37.3841 29.0505 37.8413 29.6079 37.7796 30.2323Z" fill="#C0392B"/>
<path d="M39.8803 29.7108C39.859 29.9255 39.6642 30.1032 39.43 30.0801C39.1959 30.057 39.0376 29.864 39.0607 29.6299C39.0839 29.3957 39.2768 29.2375 39.511 29.2606C39.7451 29.2837 39.9034 29.4767 39.8803 29.7108Z" fill="#C0392B"/>
<path d="M33.9955 27.6517C33.9376 28.2371 33.4231 28.6591 32.8377 28.6013C32.2523 28.5434 31.8303 28.0289 31.8881 27.4435C31.946 26.8581 32.4605 26.4361 33.0459 26.4939C33.6313 26.5517 34.0533 27.0663 33.9955 27.6517Z" fill="#C0392B"/>
<path d="M17.5166 23.9351C17.4819 24.2863 17.1603 24.5501 16.7896 24.5134C16.4188 24.4768 16.155 24.1552 16.1897 23.804C16.2245 23.4527 16.548 23.1695 16.9187 23.2061C17.2895 23.2427 17.5532 23.5643 17.5166 23.9351Z" fill="#C0392B"/>
<path d="M18.4952 21.6083C18.4759 21.8034 18.3025 21.9636 18.0878 21.9424C17.8732 21.9212 17.7325 21.7497 17.7537 21.535C17.7749 21.3204 17.9465 21.1797 18.1611 21.2009C18.3757 21.2221 18.5164 21.3936 18.4952 21.6083Z" fill="#C0392B"/>
<path d="M20.4992 23.4613C20.4567 23.8906 20.0727 24.1876 19.663 24.1471C19.2532 24.1066 18.9367 23.7207 18.9772 23.3109C19.0177 22.9012 19.4036 22.5847 19.8133 22.6251C20.2231 22.6656 20.5396 23.0516 20.4992 23.4613Z" fill="#C0392B"/>
<path d="M14.0171 37.6178C13.9863 37.93 13.7076 38.1586 13.3954 38.1278C13.0832 38.097 12.8546 37.8182 12.8854 37.506C12.9163 37.1938 13.195 36.9652 13.5072 36.9961C13.8194 37.0269 14.048 37.3056 14.0171 37.6178Z" fill="#C0392B"/>
<path d="M16.8518 35.8488C16.7882 36.4927 16.2093 36.9675 15.5654 36.9039C14.9215 36.8403 14.4467 36.2614 14.5103 35.6175C14.5739 34.9735 15.1528 34.4988 15.7967 34.5624C16.4406 34.626 16.9154 35.2049 16.8518 35.8488Z" fill="#C0392B"/>
<path d="M18.4677 36.2449C18.4465 36.4595 18.2536 36.6178 18.0389 36.5966C17.8243 36.5754 17.666 36.3824 17.6872 36.1678C17.7084 35.9531 17.9014 35.7949 18.116 35.8161C18.3307 35.8373 18.4889 36.0303 18.4677 36.2449Z" fill="#C0392B"/>
<path d="M36.1456 16.2591C36.1032 16.6883 35.7192 16.9854 35.3094 16.9449C34.8997 16.9044 34.5831 16.5185 34.6236 16.1087C34.6641 15.6989 35.05 15.3824 35.4598 15.4229C35.8696 15.4634 36.1861 15.8493 36.1456 16.2591Z" fill="#C0392B"/>
<path d="M44.0297 21.215C43.9989 21.5272 43.7221 21.7363 43.4294 21.7074C43.1367 21.6785 42.9062 21.4193 42.937 21.1071C42.9679 20.7949 43.2251 20.5839 43.5373 20.6147C43.8495 20.6456 44.0606 20.9028 44.0297 21.215Z" fill="#C0392B"/>
</svg>
`;
export default meatSVG;
