const jamSVG = document.createElement('template');
jamSVG.innerHTML = `
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
<svg id="draggable" width="46" height="42" viewBox="0 0 46 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M41.0733 12.3774H4.5726C2.23605 19.7028 6.65656 35.1535 6.65656 35.1535C6.65656 38.5846 13.8977 41.3421 22.8019 41.3421C31.706 41.3421 38.9472 38.5635 38.9472 35.1535C38.9472 35.1535 43.3677 19.7028 41.0522 12.3774H41.0733Z" fill="#8E44AD"/>
<path d="M31.7902 13.9982C26.4646 13.9772 21.16 14.0824 15.8554 14.314C14.424 14.3771 13.0136 14.4403 11.5823 14.5245C10.1509 14.6508 8.61421 14.5034 7.16176 14.5034C7.03546 14.5034 6.8881 14.5034 6.7618 14.5455C6.5092 14.6297 6.34081 14.8402 6.17241 15.0297C5.54091 15.7454 4.78311 16.3137 3.94112 16.7558C3.89902 17.7241 3.94111 18.7555 3.98321 19.787C4.10951 19.8291 4.23582 19.8922 4.34107 19.9764C4.90942 20.4816 4.57262 21.4289 4.86732 22.1235C5.26727 23.0708 6.57236 23.176 7.56171 22.9234C8.55106 22.6919 9.64566 22.2919 10.5508 22.755C11.4139 23.1971 11.7506 24.2285 12.0874 25.1337C12.4242 26.0388 13.0136 27.0492 13.9819 27.1334C14.9081 27.2176 15.687 26.4177 16.5711 26.1441C18.1077 25.6599 19.6654 26.7124 20.8653 27.7649C22.0862 28.8174 23.4544 30.0173 25.0542 29.8278C27.6223 29.5331 28.8432 25.8704 31.4324 25.702C33.79 25.5336 35.8739 29.1963 38.1473 26.9019C38.8209 26.2283 39.1577 25.281 39.5577 24.3969C39.9576 23.5128 40.5049 22.6287 41.4101 22.2709C41.4311 22.2709 41.4732 22.2709 41.5153 22.2498C41.81 19.4502 41.8942 16.6295 41.5153 14.2929C41.0101 14.1877 40.5049 14.1035 39.9787 14.0824C37.2422 14.0193 34.5267 13.9772 31.7902 13.9772V13.9982Z" fill="#64307A"/>
<path d="M44.5886 16.5032C45.0728 16.5663 45.5359 17.0294 45.8727 16.2927C46.02 15.998 45.999 15.6401 45.999 15.3244C45.9779 14.5245 45.9569 13.7246 45.9148 12.9247C43.1572 13.5351 41.0943 11.8722 38.421 11.8301C35.6845 11.7669 32.969 11.7248 30.2325 11.7248C24.9069 11.7038 19.6023 11.809 14.2977 12.0406C12.8663 12.1037 11.456 12.1669 10.0246 12.2511C8.59316 12.3774 7.05652 12.23 5.60407 12.23C5.47777 12.23 5.33042 12.23 5.20412 12.2721C4.95152 12.3563 4.78312 12.5668 4.61472 12.7563C3.43592 14.0824 1.79403 15.0086 0.0468801 15.3244C-0.0583698 16.0611 -0.0373179 16.9452 0.657331 17.3031C1.30988 17.6609 2.21502 17.1768 2.80442 17.703C3.37277 18.2082 3.03597 19.1555 3.33067 19.8501C3.73062 20.7974 5.03572 20.9026 6.02506 20.65C7.01441 20.4185 8.10901 20.0185 9.01416 20.4816C9.87721 20.9237 10.214 21.9551 10.5508 22.8603C10.8876 23.7654 11.477 24.7758 12.4453 24.86C13.3715 24.9653 14.1504 24.1654 15.0345 23.8707C16.5711 23.3865 18.1288 24.439 19.3286 25.4915C20.5285 26.544 21.9178 27.7439 23.5176 27.5544C26.0857 27.2597 27.3066 23.597 29.8957 23.4286C32.2533 23.2602 34.3373 26.9229 36.6107 24.6285C37.2843 23.9549 37.6211 23.0076 38.021 22.1235C38.421 21.2394 38.9683 20.3553 39.8734 19.9975C41.1996 19.4502 43.2204 20.1659 43.7045 18.3766C43.8519 17.8083 43.5361 16.861 44.315 16.5453C44.4202 16.5032 44.5255 16.5032 44.6097 16.5032H44.5886Z" fill="#F1DF98"/>
<path d="M0.467861 17.1557C0.573111 17.0505 0.699416 16.9663 0.867815 16.9242C3.01491 16.1664 4.67785 14.335 6.53025 13.051C6.8881 12.7984 7.24596 12.5247 7.62486 12.2511C6.95126 12.23 6.27765 12.209 5.6251 12.209C5.4988 12.209 5.35146 12.209 5.22516 12.2511C4.97256 12.3353 4.80416 12.5458 4.63576 12.7352C3.45696 14.0614 1.81505 14.9876 0.0679061 15.3033C-0.0373438 15.9769 -0.0162842 16.7347 0.488915 17.1557H0.467861Z" fill="#D1AB6D"/>
<path d="M8.1511 16.7137C8.951 15.7033 9.8772 14.8192 10.7192 13.8719C11.1192 13.2615 11.5612 12.6931 12.0243 12.1248C11.5612 12.1458 11.077 12.1669 10.6139 12.1879C10.635 12.651 10.4456 13.1352 9.89825 13.3246C10.2561 13.1983 9.47725 13.6404 9.4141 13.6825C9.14045 13.8719 8.8668 14.0403 8.59315 14.2298C8.00375 14.6297 7.41435 15.0086 6.86705 15.4296C5.60405 16.3558 4.4463 17.4083 3.09911 18.1872C3.22541 18.6924 3.09911 19.3239 3.33066 19.808C3.60431 20.4606 4.29896 20.6921 5.01466 20.7132C6.17241 19.4712 7.0986 18.0188 8.1511 16.6716V16.7137Z" fill="#D1AB6D"/>
<path d="M11.7085 24.5864C12.6768 20.0396 13.9609 15.577 17.0131 11.9143C16.108 11.9564 15.2028 11.9564 14.3187 11.9985C14.1082 11.9985 13.8977 11.9985 13.6872 12.0195C13.9819 12.3563 14.1082 12.8194 13.8556 13.2615C13.4346 13.9772 12.9084 14.6087 12.3821 15.2191C11.2033 16.9452 10.2771 18.8397 9.2878 20.6921C9.9193 21.1973 10.235 22.0604 10.5297 22.8603C10.7823 23.5128 11.1402 24.2075 11.6875 24.5864H11.7085Z" fill="#D1AB6D"/>
<path d="M38.0631 13.9351C37.3685 13.8298 37.179 13.2404 37.3264 12.7142C37.1369 12.7142 36.9685 12.6721 36.7791 12.6721C36.1686 12.6721 35.8529 12.23 35.7687 11.7459C33.9373 11.7248 32.0849 11.6827 30.2536 11.6617C26.4014 11.6617 22.5493 11.7248 18.7182 11.8511C18.9498 12.1037 19.076 12.4616 18.9287 12.8194C18.2761 14.4824 17.6868 16.1664 17.0974 17.8504C16.9921 19.8501 16.6764 21.8078 16.2764 23.7654C17.371 23.9338 18.4445 24.6916 19.3076 25.4705C19.9812 26.0599 20.739 26.6914 21.5389 27.1124C20.9495 23.8075 20.9916 20.4395 20.4864 17.0926C20.3812 16.3137 20.9916 15.8085 21.6021 15.7454C21.6652 14.9665 22.3178 14.6929 22.9072 14.8613C23.4124 14.2719 24.528 14.2298 24.7596 15.2191C25.5384 18.5029 28.0223 20.8184 30.022 23.4286C31.6218 23.4286 33.1164 25.0916 34.632 25.3442C34.0636 24.6706 33.5374 23.9549 33.0743 23.1971C31.685 20.9868 29.9168 19.0292 28.9695 16.5663C28.6538 15.7243 29.3905 15.2191 30.0852 15.2823C30.0852 15.2402 30.0431 15.2191 30.022 15.177C29.3905 13.9561 31.1798 12.8826 31.8534 14.0403C32.1481 13.9561 32.4638 13.9561 32.7164 14.1245C33.3479 14.5666 33.8321 15.1349 34.2741 15.7875C34.1689 15.1139 34.7162 14.2719 35.6003 14.4613C35.6424 14.4613 35.6634 14.4613 35.6845 14.4824C35.8108 13.9561 36.2949 13.493 36.9896 13.6825C39.0104 14.2087 40.7575 15.4928 42.7573 16.1243C43.2414 16.2716 43.6835 16.44 44.1255 16.6295C44.1676 16.5874 44.2308 16.5663 44.2939 16.5242C44.3992 16.4821 44.5044 16.4821 44.5886 16.4821C45.0728 16.5453 45.5359 17.0084 45.8727 16.2716C46.02 15.9769 45.999 15.6191 45.999 15.3033C45.999 15.156 45.999 15.0086 45.999 14.8613C43.3256 14.9665 40.7786 14.3561 38.0842 13.9351H38.0631Z" fill="#D1AB6D"/>
<path d="M39.8103 18.945C38.1894 18.3135 36.6949 16.8821 35.0319 16.5453C34.8846 16.5242 34.7793 16.4611 34.6741 16.3979C34.7793 16.5874 34.8846 16.7558 35.0109 16.9452C36.3791 18.124 37.7684 19.3028 39.1998 20.4185C39.4103 20.2501 39.6208 20.0817 39.8734 19.9764C40.526 19.7028 41.3469 19.7449 42.0626 19.6396C41.3048 19.4502 40.547 19.2397 39.8103 18.945Z" fill="#D1AB6D"/>
<path d="M34.4847 6.98859C31.3272 5.97819 27.2645 5.36774 22.823 5.36774C18.3814 5.36774 14.3188 5.97819 11.1613 6.98859H4.57263V12.3774C4.57263 16.2506 12.74 19.387 22.823 19.387C32.9059 19.387 41.0733 16.2506 41.0733 12.3774V6.98859H34.4847Z" fill="#F39C12"/>
<path d="M41.0733 6.98859C41.0733 10.8618 32.9059 13.9982 22.823 13.9982C12.74 13.9982 4.57263 10.8618 4.57263 6.98859C4.57263 3.1154 12.74 0 22.823 0C32.9059 0 41.0733 3.13645 41.0733 6.98859Z" fill="#F1C40F"/>
<path d="M31.0114 10.1882C33.0743 8.84098 35.1161 7.51483 37.0738 6.23078C37.9789 5.64138 38.9051 5.07303 39.8313 4.48363C39.705 4.37838 39.5998 4.25209 39.4524 4.14684C38.3578 4.88358 37.2632 5.64138 36.1686 6.39918C34.4215 7.64113 32.6954 8.90413 30.9903 10.1882H31.0114Z" fill="#FFDE59"/>
<path d="M13.3715 12.9878C14.5293 11.9774 15.7291 11.0091 16.929 10.0829C20.5706 6.67283 24.528 3.36799 28.6749 0.399942C26.8435 0.168392 24.8648 0.0210419 22.823 0.0210419C12.74 0.0210419 4.57263 3.15749 4.57263 7.00963C4.57263 9.55668 8.10903 11.7669 13.3715 12.9878Z" fill="#FFDE59"/>
<path d="M36.6738 3.41009C36.9475 3.22064 37.2211 3.03119 37.4948 2.84174C37.158 2.67334 36.8212 2.50494 36.4633 2.35759C33.9163 4.46259 31.4324 6.60969 29.0327 8.67259C28.2538 9.36724 27.475 10.0619 26.7172 10.7565C29.9589 8.20948 33.2848 5.74663 36.6738 3.38904V3.41009Z" fill="#FFDE59"/>
<path d="M20.1496 13.914C22.6545 11.5143 25.2226 9.17779 27.8328 6.90439C24.7174 9.07254 21.7705 11.4301 18.8445 13.8298C19.2655 13.8719 19.7076 13.893 20.1496 13.914Z" fill="#FFDE59"/>
<path d="M37.8105 10.2724C37.3895 10.525 36.9896 10.7986 36.5686 11.0512C35.8739 11.4933 35.2003 11.9353 34.5057 12.3774C34.653 12.3353 34.8004 12.2721 34.9477 12.23C34.9688 12.23 34.9899 12.209 35.0109 12.1879C35.9371 11.5564 36.8633 10.9249 37.7895 10.2934L37.8105 10.2724Z" fill="#FFDE59"/>
<path d="M10.614 27.9123C10.614 28.4806 10.1509 28.9648 9.56146 28.9648C8.97206 28.9648 8.50896 28.5017 8.50896 27.9123C8.50896 27.3229 8.97206 26.8598 9.56146 26.8598C10.1509 26.8598 10.614 27.3229 10.614 27.9123Z" fill="#64307A"/>
<path d="M14.1293 31.7223C14.1293 32.1854 13.7504 32.5433 13.3084 32.5433C12.8663 32.5433 12.4874 32.1643 12.4874 31.7223C12.4874 31.2803 12.8663 30.9014 13.3084 30.9014C13.7504 30.9014 14.1293 31.2803 14.1293 31.7223Z" fill="#64307A"/>
<path d="M15.1397 30.3962C15.1397 30.6698 14.9082 30.9014 14.6345 30.9014C14.3609 30.9014 14.1293 30.6698 14.1293 30.3962C14.1293 30.1225 14.3609 29.891 14.6345 29.891C14.9082 29.891 15.1397 30.1225 15.1397 30.3962Z" fill="#64307A"/>
<path d="M12.2769 35.0903C12.2769 35.9113 11.6033 36.5849 10.7823 36.5849C9.96139 36.5849 9.2878 35.9113 9.2878 35.0903C9.2878 34.2694 9.96139 33.5958 10.7823 33.5958C11.6033 33.5958 12.2769 34.2694 12.2769 35.0903Z" fill="#64307A"/>
<path d="M14.6345 35.1745C14.6345 35.4482 14.424 35.6587 14.1504 35.6587C13.8767 35.6587 13.6662 35.4482 13.6662 35.1745C13.6662 34.9009 13.8767 34.6904 14.1504 34.6904C14.424 34.6904 14.6345 34.9009 14.6345 35.1745Z" fill="#64307A"/>
<path d="M22.8229 35.4061C22.8229 36.1428 22.2125 36.7533 21.4758 36.7533C20.739 36.7533 20.1286 36.1428 20.1286 35.4061C20.1286 34.6693 20.739 34.0589 21.4758 34.0589C22.2125 34.0589 22.8229 34.6693 22.8229 35.4061Z" fill="#64307A"/>
<path d="M23.3913 32.838C23.3913 32.9853 23.265 33.1116 23.1177 33.1116C22.9703 33.1116 22.844 32.9853 22.844 32.838C22.844 32.6906 22.9703 32.5643 23.1177 32.5643C23.265 32.5643 23.3913 32.6906 23.3913 32.838Z" fill="#64307A"/>
<path d="M32.0007 35.5324C32.0007 36.3323 31.3482 36.9848 30.5483 36.9848C29.7484 36.9848 29.0958 36.3323 29.0958 35.5324C29.0958 34.7325 29.7484 34.0589 30.5483 34.0589C31.3482 34.0589 32.0007 34.7114 32.0007 35.5324Z" fill="#64307A"/>
<path d="M32.2323 33.3852C32.2323 33.6799 31.9797 33.9326 31.685 33.9326C31.3903 33.9326 31.1377 33.6799 31.1377 33.3852C31.1377 33.0905 31.3903 32.838 31.685 32.838C31.9797 32.838 32.2323 33.0905 32.2323 33.3852Z" fill="#64307A"/>
<path d="M33.1795 30.2699C33.1795 31.0066 32.5901 31.596 31.8534 31.596C31.1166 31.596 30.5272 31.0066 30.5272 30.2699C30.5272 29.5331 31.1166 28.9437 31.8534 28.9437C32.5901 28.9437 33.1795 29.5331 33.1795 30.2699Z" fill="#64307A"/>
<path d="M38.2315 31.7223C38.2315 32.1854 37.8526 32.5433 37.4106 32.5433C36.9685 32.5433 36.5896 32.1643 36.5896 31.7223C36.5896 31.2803 36.9685 30.9014 37.4106 30.9014C37.8526 30.9014 38.2315 31.2803 38.2315 31.7223Z" fill="#64307A"/>
<path d="M37.4106 34.4799C37.4106 34.7114 37.2211 34.9009 36.9896 34.9009C36.758 34.9009 36.5686 34.7114 36.5686 34.4799C36.5686 34.2483 36.758 34.0589 36.9896 34.0589C37.2211 34.0589 37.4106 34.2483 37.4106 34.4799Z" fill="#64307A"/>
<path d="M28.2749 31.0277C28.2749 31.3855 28.0013 31.6592 27.6434 31.6592C27.2856 31.6592 27.0119 31.3855 27.0119 31.0277C27.0119 30.6698 27.2856 30.3962 27.6434 30.3962C28.0013 30.3962 28.2749 30.6698 28.2749 31.0277Z" fill="#64307A"/>
<path d="M26.1489 34.6483C26.1489 34.9851 25.8752 35.2377 25.5595 35.2377C25.2437 35.2377 24.9701 34.964 24.9701 34.6483C24.9701 34.3325 25.2437 34.0589 25.5595 34.0589C25.8752 34.0589 26.1489 34.3325 26.1489 34.6483Z" fill="#9B59B6"/>
<path d="M19.5813 31.2171C19.5813 31.6802 19.2024 32.0381 18.7603 32.0381C18.3183 32.0381 17.9394 31.6592 17.9394 31.2171C17.9394 30.7751 18.3183 30.3962 18.7603 30.3962C19.2024 30.3962 19.5813 30.7751 19.5813 31.2171Z" fill="#9B59B6"/>
<path d="M17.9394 34.943C17.9394 35.1956 17.7289 35.4061 17.4763 35.4061C17.2237 35.4061 17.0132 35.1956 17.0132 34.943C17.0132 34.6904 17.2237 34.4799 17.4763 34.4799C17.7289 34.4799 17.9394 34.6904 17.9394 34.943Z" fill="#9B59B6"/>
<path d="M24.97 38.6056C24.97 39.195 24.4859 39.6792 23.8965 39.6792C23.3071 39.6792 22.823 39.195 22.823 38.6056C22.823 38.0163 23.3071 37.5321 23.8965 37.5321C24.4859 37.5321 24.97 38.0163 24.97 38.6056Z" fill="#9B59B6"/>
<path d="M27.9381 36.1218C27.9381 36.3744 27.7276 36.5849 27.475 36.5849C27.2224 36.5849 27.0119 36.3744 27.0119 36.1218C27.0119 35.8692 27.2224 35.6587 27.475 35.6587C27.7276 35.6587 27.9381 35.8692 27.9381 36.1218Z" fill="#9B59B6"/>
<path d="M35.6213 33.3432C35.6213 33.7852 35.2635 34.1431 34.8214 34.1431C34.3794 34.1431 34.0215 33.7852 34.0215 33.3432C34.0215 32.9011 34.3794 32.5433 34.8214 32.5433C35.2635 32.5433 35.6213 32.9011 35.6213 33.3432Z" fill="#9B59B6"/>
<path d="M17.9394 28.7332C17.9394 29.1963 17.5605 29.5542 17.1184 29.5542C16.6764 29.5542 16.2974 29.1963 16.2974 28.7332C16.2974 28.2701 16.6764 27.9123 17.1184 27.9123C17.5605 27.9123 17.9394 28.2701 17.9394 28.7332Z" fill="#9B59B6"/>
<path d="M10.0246 32.438C10.0246 33.1116 9.47726 33.6589 8.82471 33.6589C8.17216 33.6589 7.62486 33.1116 7.62486 32.438C7.62486 31.7644 8.17216 31.2382 8.82471 31.2382C9.47726 31.2382 10.0246 31.7855 10.0246 32.438Z" fill="#9B59B6"/>
<path d="M7.89849 25.7231C7.89849 26.1441 7.56169 26.4809 7.14069 26.4809C6.71969 26.4809 6.38289 26.1441 6.38289 25.7231C6.38289 25.3021 6.71969 24.9653 7.14069 24.9653C7.56169 24.9653 7.89849 25.3021 7.89849 25.7231Z" fill="#9B59B6"/>
<path d="M15.8765 37.5953C15.8765 37.9321 15.6028 38.2057 15.266 38.2057C14.9292 38.2057 14.6555 37.9321 14.6555 37.5953C14.6555 37.2585 14.9292 36.9848 15.266 36.9848C15.6028 36.9848 15.8765 37.2585 15.8765 37.5953Z" fill="#9B59B6"/>
</svg>

`;

export default jamSVG;
