import React, { FC } from "react";

interface Props {
  header: string;
  description: string;
}

export const MainHeader: FC<Props> = ({ header, description }) => {
  return (
    <div className="flex justify-between w-full mt-10">
      <div className="w-1/3  flex items-center justify-center">
        <svg
          width="171"
          height="179"
          viewBox="0 0 171 179"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_4624_7146)">
            <path
              d="M93.6232 98.1027C94.1607 100.798 96.0786 102.545 97.9074 102.005C99.7362 101.465 100.783 98.84 100.245 96.1451C100.045 95.0646 99.574 94.0731 98.8711 93.2627L96.4443 81.8857L90.7702 83.7544L93.7663 94.7722C93.4451 95.8877 93.3973 97.0317 93.6295 98.1027H93.6232Z"
              fill="#F8A8AB"
            />
            <path
              d="M80.8341 172.908H87.4942V163.466H80.8341V172.908Z"
              fill="#F8A8AB"
            />
            <path
              d="M86.7563 178.317C85.6177 178.418 79.9181 178.87 79.6319 177.564C79.3711 176.365 79.7559 175.113 79.81 174.942C80.357 169.495 80.5606 169.434 80.6846 169.399C80.8786 169.342 81.4448 169.612 82.364 170.203L82.4212 170.242L82.4339 170.308C82.4498 170.394 82.8569 172.393 84.7876 172.085C86.1107 171.875 86.54 171.583 86.6768 171.44C86.5655 171.389 86.4256 171.3 86.327 171.147C86.1838 170.925 86.1584 170.639 86.2538 170.296C86.5019 169.39 87.2461 168.052 87.2779 167.998L87.3638 167.845L94.9336 172.949L99.609 174.284C99.962 174.386 100.245 174.637 100.388 174.974C100.585 175.444 100.465 175.99 100.083 176.334C99.2337 177.096 97.548 178.403 95.7764 178.565C95.3057 178.609 94.6823 178.625 93.9826 178.625C91.0596 178.625 86.7913 178.323 86.7595 178.317H86.7563Z"
              fill="#2F2E43"
            />
            <path
              d="M62.3837 172.908H69.0438V163.466H62.3837V172.908Z"
              fill="#F8A8AB"
            />
            <path
              d="M68.3058 178.317C67.1672 178.418 61.4676 178.87 61.1814 177.564C60.9205 176.365 61.3054 175.113 61.3595 174.942C61.9065 169.495 62.1101 169.434 62.2341 169.399C62.4281 169.342 62.9943 169.612 63.9135 170.203L63.9707 170.242L63.9834 170.308C63.9993 170.394 64.4065 172.393 66.3371 172.085C67.6602 171.875 68.0895 171.583 68.2263 171.44C68.115 171.389 67.975 171.3 67.8765 171.147C67.7333 170.925 67.7079 170.639 67.8033 170.296C68.0514 169.39 68.7956 168.052 68.8274 167.998L68.9133 167.845L76.4831 172.949L81.1585 174.284C81.5115 174.386 81.7946 174.637 81.9377 174.974C82.1349 175.444 82.0141 175.99 81.6324 176.334C80.7832 177.096 79.0975 178.403 77.3259 178.565C76.8552 178.609 76.2318 178.625 75.5321 178.625C72.6091 178.625 68.3408 178.323 68.309 178.317H68.3058Z"
              fill="#2F2E43"
            />
            <path
              d="M67.7811 31.8683L78.1084 35.2592V20.4055H68.7384L67.7811 31.8683Z"
              fill="#F8A8AB"
            />
            <path
              d="M76.8298 24.5177C82.5123 24.5177 87.1189 19.915 87.1189 14.2371C87.1189 8.55932 82.5123 3.95654 76.8298 3.95654C71.1472 3.95654 66.5406 8.55932 66.5406 14.2371C66.5406 19.915 71.1472 24.5177 76.8298 24.5177Z"
              fill="#F8A8AB"
            />
            <path
              d="M74.209 15.0411L75.6275 16.7604L78.1942 12.2731C78.1942 12.2731 81.4702 12.4415 81.4702 10.0136C81.4702 7.58567 84.4759 7.51576 84.4759 7.51576C84.4759 7.51576 88.7283 0.0952957 79.9181 2.04972C79.9181 2.04972 73.8082 -2.13243 70.7676 1.44274C70.7676 1.44274 61.4485 6.13018 64.117 14.2943L68.5476 22.7094L69.5526 20.8059C69.5526 20.8059 68.9451 12.8102 74.2122 15.0379L74.209 15.0411Z"
              fill="#2F2E43"
            />
            <path
              d="M104.577 110.913L85.1343 104.668C82.7361 103.899 80.1599 105.186 79.3424 107.57L70.5577 133.165C69.6608 135.777 71.2447 138.586 73.945 139.177L96.2917 144.062C98.7471 144.599 101.183 143.077 101.775 140.636L107.656 116.401C108.225 114.05 106.883 111.653 104.577 110.913Z"
              fill="#E2E3E4"
            />
            <path
              d="M102.605 116.312L101.352 116.09C102.153 111.539 103.26 99.4056 98.7916 97.9183C96.6256 97.1969 94.4437 98.4585 92.3096 101.671C90.6334 104.198 89.6538 106.994 89.6443 107.023L88.442 106.607C88.6138 106.114 92.7008 94.5497 99.1923 96.7107C105.608 98.8462 102.729 115.597 102.602 116.309L102.605 116.312Z"
              fill="#2F2E43"
            />
            <path
              d="M87.8632 80.7798H53.1091L61.614 168.392L71.4737 167.757L71.9604 104.662L78.1656 132.351L79.9817 167.28L88.9668 167.757L90.0101 128.023L87.8632 80.7798Z"
              fill="#2F2E43"
            />
            <path
              d="M67.2181 26.4371L78.9862 29.2973L89.0464 72.7364L87.8632 80.7797L58.3952 85.7627L53.1091 80.7797L67.2181 26.4371Z"
              fill="#6C63FF"
            />
            <path
              d="M67.199 24.2634L63.1756 28.7729L55.0143 30.7305L41.0993 92.5476L67.9115 97.0857L75.3795 34.1277L67.199 24.2634Z"
              fill="#2F2E43"
            />
            <path
              d="M78.9799 26.5166L76.8807 33.9911L86.5973 101.02H91.6099L89.2976 35.4275L82.4912 30.025L78.9799 26.5166Z"
              fill="#2F2E43"
            />
            <path
              d="M85.2615 34.5981L89.2976 35.4276C89.2976 35.4276 91.066 36.0759 91.7085 41.097C92.3478 46.1181 92.4623 62.9802 92.4623 62.9802L99.326 90.1833L91.5304 92.7511L87.86 78.1135L85.2583 34.595L85.2615 34.5981Z"
              fill="#2F2E43"
            />
            <path
              d="M78.5282 31.1088L76.5753 34.6871L80.481 76.6612L75.9233 80.891L71.6899 76.9885L74.7846 34.8492L70.2746 31.1088L71.8522 29.9679L73.4806 31.9191L76.7375 31.2708L78.0384 29.3164L78.5282 31.1088Z"
              fill="#2F2E43"
            />
            <path
              d="M59.3462 87.5551C60.9842 89.7638 63.465 90.5233 64.8867 89.2553C66.3084 87.9873 66.1335 85.1685 64.4955 82.9567C63.853 82.0637 63.0038 81.3709 62.0179 80.9387L54.957 71.6877L50.6251 75.8L58.0453 84.4821C58.233 85.6293 58.6783 86.6812 59.3462 87.552V87.5551Z"
              fill="#F8A8AB"
            />
            <path
              d="M58.2394 31.7444L55.0143 30.7306C55.0143 30.7306 50.6442 31.8143 49.197 37.2676L42.133 63.8351L54.1142 84.8475L60.5167 77.0807L54.4863 57.7907L58.2426 31.7444H58.2394Z"
              fill="#2F2E43"
            />
          </g>
          <defs>
            <clipPath id="clip0_4624_7146">
              <rect width="171" height="179" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="w-1/3 flex flex-col gap-4">
        <span className="text-center font-bold text-3xl">{header}</span>
        <span className="text-center font-bold text-md text-gray-500">
          {description}
        </span>
      </div>
      <div className="w-1/3 flex items-center justify-center">
        <svg
          width="226"
          height="188"
          viewBox="0 0 226 188"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_4624_7249)">
            <path
              d="M56.3956 144.682H218.6C219.529 144.682 220.449 144.499 221.307 144.144C222.166 143.789 222.945 143.268 223.602 142.612C224.259 141.955 224.78 141.176 225.136 140.319C225.491 139.461 225.674 138.542 225.674 137.614V43.8838C225.675 43.2574 225.592 42.6336 225.426 42.0295C225.019 40.5321 224.13 39.2102 222.897 38.2678C221.663 37.3254 220.153 36.8151 218.6 36.8154H155.245C153.767 39.3032 152.856 42.086 152.578 44.9657C151.792 53.3376 156.595 61.0772 160.894 68.3085C165.192 75.5398 169.291 83.9475 167.015 92.0457C165.476 97.5074 161.305 101.46 156.129 103.83C151.156 106.029 145.686 106.861 140.283 106.241C137.038 105.831 133.842 105.102 130.741 104.064C126.674 102.744 122.702 101.033 118.736 99.303C118.733 99.303 118.733 99.303 118.73 99.2998C118.661 99.2704 118.59 99.2379 118.521 99.2085C115.452 97.8692 112.387 96.5265 109.276 95.3436C105.63 93.919 101.847 92.8771 97.9855 92.2347C92.1187 91.3157 86.2029 91.6481 80.9687 94.3073C72.4374 98.6382 67.8652 107.998 64.2877 116.868C60.6743 125.836 57.436 135.104 56.3956 144.682Z"
              fill="#6C63FF"
            />
            <path
              d="M0.326118 108.825V137.613C0.326068 138.542 0.508991 139.461 0.864451 140.318C1.21991 141.176 1.74094 141.955 2.39779 142.612C3.05463 143.268 3.83443 143.789 4.69265 144.144C5.55087 144.499 6.47071 144.682 7.39963 144.682H34.3631C34.8294 140.338 34.4381 136.01 32.726 131.972C28.9952 123.167 19.9682 117.96 11.362 113.779C7.74531 112.022 4.0667 110.327 0.326118 108.825Z"
              fill="#6C63FF"
            />
            <path
              d="M28.5833 138.034C28.5833 139.909 29.3285 141.706 30.6551 143.032C31.9816 144.358 33.7808 145.102 35.6568 145.102H62.6203C63.0866 140.758 62.6953 136.431 60.9832 132.393C60.106 130.323 58.0571 128.03 55.3874 125.713C44.913 116.625 28.5833 124.172 28.5833 138.034Z"
              fill="#6C63FF"
            />
            <path
              d="M0 137.613V43.8837C0.00222347 41.9233 0.782536 40.0439 2.16975 38.6577C3.55696 37.2715 5.43779 36.4917 7.39961 36.4895H218.6C220.562 36.4917 222.443 37.2715 223.83 38.6577C225.217 40.0439 225.998 41.9233 226 43.8837V137.613C225.998 139.574 225.218 141.453 223.83 142.84C222.443 144.226 220.562 145.006 218.6 145.008H7.39961C5.43777 145.006 3.55692 144.226 2.1697 142.84C0.782484 141.453 0.0021898 139.574 0 137.613ZM7.39961 37.1413C5.61071 37.1433 3.89565 37.8543 2.6307 39.1183C1.36576 40.3823 0.654235 42.0961 0.652237 43.8837V137.613C0.654202 139.401 1.36571 141.115 2.63065 142.379C3.8956 143.643 5.61068 144.354 7.39961 144.356H218.6C220.389 144.354 222.104 143.643 223.369 142.379C224.634 141.115 225.346 139.401 225.348 137.613V43.8837C225.346 42.0961 224.634 40.3823 223.369 39.1183C222.104 37.8543 220.389 37.1433 218.6 37.1413H7.39961Z"
              fill="#3F3D56"
            />
            <path
              d="M69.8904 144.451H79.4816C81.1219 138.931 83.4896 133.081 85.6517 127.749C89.7999 117.527 95.0994 106.741 104.991 101.75C109.214 99.6188 113.819 98.7864 118.521 98.8317C125.017 98.8933 131.696 100.636 137.811 102.945C140.312 103.888 142.791 104.924 145.26 105.983C154.561 109.977 163.76 114.327 173.762 115.503C186.419 116.99 201.3 111.331 204.757 99.1427C207.395 89.8111 202.643 80.1233 197.66 71.7894C192.677 63.4554 187.107 54.5385 188.017 44.8895C188.02 44.8571 188.024 44.8215 188.03 44.7891C188.372 41.3234 190.443 38.8327 193.336 37.2358H180.741C180.575 46.237 185.786 54.1822 190.476 62.027C195.459 70.3577 200.211 80.0488 197.572 89.3804C194.115 101.565 165.491 87.282 152.834 85.7921C149.26 85.3742 154.938 86.8609 151.53 85.7921C146.185 84.1175 145.592 99.4763 140.391 97.222C137.152 95.8162 133.911 94.4202 130.627 93.1797C129.267 92.6647 127.878 92.1821 126.472 91.7351C126.469 91.7351 126.469 91.7351 126.465 91.7319C117.028 88.7455 106.706 87.5827 97.9855 91.9003C97.9268 91.9294 97.8648 91.9586 97.8061 91.9877C87.915 96.9758 82.6156 107.762 78.4673 117.984C75.0398 126.434 71.5797 135.537 69.8904 144.451Z"
              fill="#3F3D56"
            />
            <path
              d="M69.9947 77.2697H7.61095C7.09979 77.2697 6.60955 77.4726 6.2481 77.8337C5.88665 78.1949 5.68359 78.6848 5.68359 79.1956C5.68359 79.7064 5.88665 80.1963 6.2481 80.5575C6.60955 80.9186 7.09979 81.1216 7.61095 81.1216H69.9947C70.5058 81.1216 70.996 80.9186 71.3575 80.5575C71.7189 80.1963 71.922 79.7064 71.922 79.1956C71.922 78.6848 71.7189 78.1949 71.3575 77.8337C70.996 77.4726 70.5058 77.2697 69.9947 77.2697Z"
              fill="#3F3D56"
            />
            <path
              d="M26.9965 66.4706H7.65433C7.14316 66.4706 6.65292 66.6735 6.29147 67.0347C5.93002 67.3959 5.72696 67.8857 5.72696 68.3965C5.72696 68.9073 5.93002 69.3972 6.29147 69.7584C6.65292 70.1196 7.14316 70.3225 7.65433 70.3225H26.9965C27.5077 70.3225 27.9979 70.1196 28.3594 69.7584C28.7208 69.3972 28.9239 68.9073 28.9239 68.3965C28.9239 67.8857 28.7208 67.3959 28.3594 67.0347C27.9979 66.6735 27.5077 66.4706 26.9965 66.4706Z"
              fill="#3F3D56"
            />
            <path
              d="M101.585 179.21L97.6313 179.177L95.8814 163.583L101.716 163.632L101.585 179.21Z"
              fill="#FFB6B6"
            />
            <path
              d="M88.9212 185.492C88.9177 185.961 89.1002 186.411 89.4287 186.745C89.7573 187.079 90.205 187.269 90.6736 187.274L98.5343 187.34L99.9104 184.552L100.416 187.354L103.382 187.381L102.633 177.389L101.601 177.32L97.3919 177.03L96.034 176.939L96.0102 179.766L89.6958 184.046C89.4592 184.207 89.2652 184.422 89.1302 184.674C88.9953 184.926 88.9236 185.207 88.9212 185.492Z"
              fill="#2F2E41"
            />
            <path
              d="M141.698 179.21L137.744 179.177L135.994 163.583L141.829 163.632L141.698 179.21Z"
              fill="#FFB6B6"
            />
            <path
              d="M129.034 185.492C129.03 185.961 129.213 186.411 129.541 186.745C129.87 187.079 130.318 187.269 130.786 187.274L138.647 187.34L140.023 184.552L140.528 187.354L143.494 187.381L142.745 177.389L141.713 177.32L137.504 177.03L136.147 176.939L136.123 179.766L129.808 184.046C129.572 184.207 129.378 184.422 129.243 184.674C129.108 184.926 129.036 185.207 129.034 185.492Z"
              fill="#2F2E41"
            />
            <path
              d="M96.7078 54.331L114.502 40.6469C115.254 40.0649 115.747 39.2107 115.874 38.2687C116.002 37.3267 115.754 36.3724 115.183 35.6117C114.888 35.2182 114.516 34.8888 114.089 34.6437C113.662 34.3986 113.19 34.2429 112.702 34.1861C112.213 34.1293 111.717 34.1726 111.246 34.3133C110.774 34.454 110.336 34.6892 109.959 35.0045L91.9114 49.7852L80.5663 58.3045C80.0049 57.9784 79.3566 57.8328 78.7095 57.8876C78.0624 57.9425 77.4479 58.195 76.9495 58.611C76.451 59.027 76.0928 59.5862 75.9235 60.2127C75.7542 60.8392 75.782 61.5026 76.0031 62.1127C76.2242 62.7229 76.628 63.2502 77.1595 63.6231C77.691 63.996 78.3245 64.1963 78.9739 64.1969C79.6233 64.1975 80.2571 63.9983 80.7893 63.6264C81.3215 63.2545 81.7262 62.7279 81.9484 62.1181L96.7078 54.331Z"
              fill="#FFB6B6"
            />
            <path
              d="M111.211 57.4767L110.426 74.9812L137.066 78.2023C134.969 71.1686 131.532 61.3992 133.107 56.5043L111.211 57.4767Z"
              fill="#A0616A"
            />
            <path
              d="M126.353 25.3862H118.147L114.623 31.4121L112.944 31.3194C109.672 32.5789 108.367 33.8825 106.561 37.3554L100.214 42.6812L105.106 48.5471C108.485 47.9939 109.703 45.3731 108.63 40.5598C108.63 40.5598 104.93 47.0035 110.26 50.1736C110.26 50.1736 109.309 56.1464 110.26 56.0822C111.211 56.018 113.4 54.8024 111.211 56.018C109.021 57.2336 109.396 57.286 109.468 57.6799C110.65 64.1894 111.628 69.0776 111.628 69.0776L134.783 71.3587C134.783 71.3587 133.449 57.366 133.521 56.5704C133.594 55.7749 133.107 57.7198 133.594 55.7749C134.08 53.8299 134.81 54.5593 134.08 53.8299C133.35 53.1006 139.098 52.4725 136.855 48.9675L144.355 47.0123L140.163 37.0549C140.163 33.6928 134.759 30.9673 131.394 30.9673H130.963L126.353 25.3862Z"
              fill="#E6E6E6"
            />
            <path
              d="M135.086 68.7147C126.027 71.8284 117.872 71.1448 110.976 65.167C110.976 65.167 109.036 72.3363 107.071 71.3587C105.106 70.381 106.077 73.1167 105.537 74.1197C104.964 75.1846 105.63 76.9808 103.737 77.5915C101.845 78.2022 102.556 79.997 101.943 81.3179C97.6559 90.5613 92.7599 103.645 89.4523 120.241C86.0535 137.294 94.3441 165.864 94.3441 165.864L102.171 165.212L104.128 128.062L113.077 112.359C113.077 112.359 117.474 109.801 114.714 108.503C111.955 107.206 113.803 105.597 115.814 105.913C117.825 106.228 120.107 95.7998 120.107 95.7998C117.241 102.999 135.109 166.516 135.109 166.516L142.61 165.864L138.37 77.2246L135.086 68.7147Z"
              fill="#2F2E41"
            />
            <path
              d="M131.223 10.2582C132.113 12.472 134.622 16.8255 134.962 19.2005L134.809 19.0501C134.517 19.5483 134.186 20.0221 133.818 20.467C133.158 19.7744 132.361 19.2268 131.477 18.8589C131.96 19.848 132.239 20.9236 132.299 22.0222C130.665 23.4438 126.493 22.5861 124.408 23.3437C121.054 24.56 117.492 24.9929 113.975 25.3525C112.727 25.4809 111.33 25.5588 110.455 24.8218C109.581 24.0848 110.101 22.7199 109.631 21.6876C106.279 14.3342 109.372 11.6812 112.001 8.3469C112.579 7.61315 112.577 6.51816 113.28 5.81807C114.257 4.84767 115.754 4.54919 117.134 4.31009C116.775 4.32897 116.418 4.25531 116.096 4.0962C115.775 3.93709 115.499 3.69789 115.297 3.40163C115.119 3.10314 115.028 2.76144 115.032 2.41421C115.036 2.06698 115.137 1.72772 115.322 1.43384C115.815 0.616154 116.841 0.140659 117.83 0.021872C118.805 -0.0442777 119.785 0.039837 120.734 0.271265C121.349 0.35208 121.944 0.54226 122.492 0.832809C122.75 0.97061 122.961 1.18397 123.094 1.44437C123.228 1.70477 123.279 1.99979 123.241 2.29C123.159 2.558 123.017 2.80393 122.826 3.00947C122.635 3.21501 122.4 3.37484 122.139 3.47704C121.741 3.64535 121.321 3.75997 120.893 3.81789C122.862 3.5626 124.861 3.91238 126.626 4.82068C128.838 5.99967 130.331 8.04557 131.223 10.2582Z"
              fill="#2F2E41"
            />
            <path
              d="M119.247 22.6696C123.613 22.6696 127.153 19.1324 127.153 14.769C127.153 10.4055 123.613 6.86829 119.247 6.86829C114.88 6.86829 111.34 10.4055 111.34 14.769C111.34 19.1324 114.88 22.6696 119.247 22.6696Z"
              fill="#FFB6B6"
            />
            <path
              d="M126.855 10.5327C126.396 11.9171 125.086 12.3633 123.875 12.6415C123.494 12.7304 123.109 12.8133 122.722 12.887C122.579 12.7083 122.427 12.5332 122.268 12.3676C121.608 11.6751 120.811 11.1274 119.927 10.7596C120.309 11.5409 120.563 12.3784 120.679 13.2402C119.947 13.3463 119.211 13.433 118.471 13.5004C117.845 13.6335 117.191 13.5212 116.646 13.1867C116.1 12.8521 115.704 12.3208 115.539 11.7027C114.865 12.8037 114.069 13.8405 112.979 14.2779C112.356 14.5016 111.678 14.52 111.044 14.3304C110.409 14.1408 109.853 13.7531 109.455 13.2243C108.803 12.4289 108.439 11.3603 108.178 10.329C107.869 9.10296 107.697 7.69066 108.304 6.91278C108.79 6.28323 109.629 6.27193 110.403 6.32778C112.112 6.45874 113.802 6.76497 115.448 7.24165L115.587 7.55466C115.304 5.85685 115.918 4.22332 117.053 3.64238C117.818 3.25395 118.739 3.31908 119.634 3.39788C120.784 3.44914 121.92 3.66864 123.005 4.04938C124.251 4.52818 125.318 5.37987 126.061 6.48794C126.855 7.69321 127.25 9.33702 126.855 10.5327Z"
              fill="#2F2E41"
            />
            <path
              d="M115.583 3.14834C115.661 3.12532 115.459 3.15488 115.529 3.15676C115.495 3.15474 115.46 3.1499 115.426 3.14228C115.42 3.14113 115.341 3.11602 115.394 3.13446C115.276 3.09938 115.171 3.03107 115.092 2.93778C114.906 2.70828 114.761 2.44916 114.661 2.17128C114.535 1.80407 114.333 1.46757 114.068 1.18386C113.993 1.10837 113.901 1.05167 113.8 1.01836C113.699 0.985044 113.591 0.976058 113.486 0.992132C113.38 1.00821 113.28 1.04889 113.194 1.11087C113.107 1.17285 113.036 1.25438 112.987 1.34885C112.833 1.68922 112.973 2.1086 113.083 2.4429C113.197 2.79024 113.365 3.11704 113.583 3.41069C113.947 3.8909 114.444 4.2548 115.011 4.45804C115.669 4.69656 116.385 4.71703 117.055 4.5164C117.143 4.47972 117.219 4.41811 117.273 4.33909C117.327 4.26006 117.357 4.16703 117.359 4.07132C117.362 3.97561 117.336 3.88136 117.285 3.80005C117.235 3.71874 117.161 3.65389 117.075 3.61338L115.958 3.15649C115.899 3.13063 115.836 3.1166 115.771 3.1152C115.707 3.1138 115.643 3.12507 115.583 3.14834C115.524 3.1716 115.469 3.20641 115.422 3.25081C115.376 3.2952 115.339 3.34829 115.313 3.40705C115.287 3.46581 115.273 3.52908 115.272 3.59326C115.27 3.65744 115.281 3.72126 115.305 3.78109C115.328 3.84092 115.363 3.89558 115.407 3.94195C115.452 3.98832 115.505 4.0255 115.564 4.05135L116.681 4.50824L116.7 3.60522C116.561 3.64543 116.418 3.66993 116.273 3.67828C116.118 3.69375 115.962 3.68717 115.81 3.65876C115.663 3.63961 115.52 3.60459 115.381 3.55434C115.292 3.52193 115.205 3.48505 115.12 3.44382C115.089 3.42883 115.059 3.41327 115.028 3.39714C115.031 3.3983 114.901 3.32267 114.958 3.35821C114.813 3.26595 114.678 3.16044 114.553 3.04304C114.509 3.00141 114.468 2.95625 114.431 2.90801C114.368 2.82988 114.309 2.74811 114.255 2.66312C114.145 2.48312 114.057 2.29012 113.995 2.08859C113.967 2.00389 113.943 1.91776 113.923 1.83057C113.918 1.78271 113.909 1.73527 113.897 1.68859C113.856 1.57736 113.905 1.75354 113.858 1.80174L113.652 1.95335C113.613 1.96487 113.572 1.96754 113.532 1.96116C113.492 1.95479 113.455 1.93953 113.421 1.91653C113.397 1.88223 113.402 1.88792 113.437 1.9336C113.478 1.98737 113.516 2.04366 113.549 2.10215C113.623 2.23984 113.69 2.38118 113.749 2.52564C113.872 2.83286 114.028 3.1261 114.213 3.40034C114.394 3.67774 114.659 3.8908 114.968 4.00916C115.278 4.12753 115.618 4.14515 115.938 4.05952C116.058 4.01169 116.155 3.91853 116.207 3.80016C116.259 3.68178 116.263 3.54767 116.217 3.42677C116.167 3.30762 116.074 3.21207 115.956 3.16017C115.838 3.10827 115.704 3.10403 115.583 3.14834Z"
              fill="#2F2E41"
            />
            <path
              d="M103.252 88.9872C116.163 88.9872 126.63 78.5282 126.63 65.6264C126.63 52.7246 116.163 42.2656 103.252 42.2656C90.3408 42.2656 79.8742 52.7246 79.8742 65.6264C79.8742 78.5282 90.3408 88.9872 103.252 88.9872Z"
              fill="white"
            />
            <path
              d="M103.252 89.313C98.5638 89.313 93.9809 87.9238 90.0828 85.3211C86.1847 82.7184 83.1465 79.019 81.3524 74.6909C79.5583 70.3627 79.0889 65.6001 80.0035 61.0054C80.9181 56.4106 83.1757 52.1901 86.4907 48.8774C89.8058 45.5648 94.0294 43.3088 98.6275 42.3949C103.226 41.4809 107.992 41.9499 112.323 43.7427C116.654 45.5355 120.356 48.5714 122.961 52.4666C125.566 56.3619 126.956 60.9414 126.956 65.6262C126.949 71.9061 124.449 77.9268 120.005 82.3674C115.562 86.808 109.537 89.3059 103.252 89.313ZM103.252 42.5915C98.6928 42.5915 94.236 43.9424 90.4451 46.4736C86.6543 49.0047 83.6997 52.6022 81.955 56.8113C80.2103 61.0204 79.7538 65.652 80.6432 70.1203C81.5327 74.5886 83.7282 78.6931 86.952 81.9145C90.1759 85.136 94.2833 87.3299 98.7549 88.2187C103.227 89.1075 107.861 88.6513 112.074 86.9078C116.286 85.1643 119.886 82.2118 122.419 78.4237C124.952 74.6357 126.304 70.1821 126.304 65.6262C126.297 59.5191 123.866 53.6641 119.544 49.3458C115.223 45.0274 109.364 42.5983 103.252 42.5915Z"
              fill="#3F3D56"
            />
            <path
              d="M100.063 77.7845C99.6591 77.7845 99.2609 77.6905 98.8999 77.5101C98.5388 77.3296 98.2248 77.0676 97.9826 76.7448L91.6048 68.2471C91.3999 67.9741 91.2509 67.6635 91.1661 67.3329C91.0814 67.0023 91.0626 66.6583 91.1109 66.3205C91.1592 65.9827 91.2736 65.6577 91.4476 65.3641C91.6216 65.0705 91.8518 64.814 92.125 64.6092C92.3982 64.4045 92.7091 64.2555 93.0399 64.1709C93.3707 64.0862 93.715 64.0674 94.053 64.1157C94.3911 64.164 94.7163 64.2783 95.0101 64.4522C95.304 64.626 95.5607 64.856 95.7655 65.129L99.9381 70.688L110.655 54.6248C110.844 54.3409 111.088 54.097 111.372 53.9071C111.655 53.7172 111.974 53.585 112.309 53.5181C112.644 53.4512 112.988 53.4508 113.323 53.5171C113.658 53.5833 113.977 53.7148 114.261 53.9041C114.545 54.0934 114.789 54.3368 114.979 54.6203C115.169 54.9038 115.302 55.222 115.369 55.5566C115.436 55.8913 115.436 56.2358 115.37 56.5706C115.303 56.9053 115.172 57.2238 114.982 57.5077L102.227 76.6273C101.996 76.973 101.686 77.2585 101.322 77.4597C100.958 77.6609 100.551 77.772 100.135 77.7836C100.111 77.784 100.087 77.7845 100.063 77.7845Z"
              fill="#6C63FF"
            />
            <path
              d="M77.5013 187.612C77.5012 187.663 77.5111 187.714 77.5306 187.761C77.55 187.808 77.5786 187.851 77.6146 187.887C77.6507 187.923 77.6936 187.951 77.7407 187.971C77.7879 187.99 77.8384 188 77.8894 188H160.492C160.595 188 160.694 187.959 160.766 187.886C160.839 187.814 160.88 187.715 160.88 187.612C160.88 187.509 160.839 187.411 160.766 187.338C160.694 187.265 160.595 187.224 160.492 187.224H77.8894C77.8384 187.224 77.7879 187.234 77.7407 187.254C77.6936 187.273 77.6507 187.302 77.6147 187.338C77.5786 187.374 77.55 187.416 77.5306 187.464C77.5111 187.511 77.5012 187.561 77.5013 187.612Z"
              fill="#CCCCCC"
            />
            <path
              d="M150.638 66.4253L142.996 45.328C142.669 44.4351 142.005 43.7063 141.145 43.2988C140.286 42.8912 139.3 42.8377 138.402 43.1498C137.937 43.3112 137.51 43.5655 137.147 43.8973C136.783 44.229 136.492 44.6312 136.289 45.0793C136.086 45.5274 135.977 46.0121 135.968 46.5038C135.959 46.9955 136.05 47.4838 136.236 47.9391L144.847 69.611L149.523 83C149.042 83.4354 148.706 84.0084 148.562 84.6411C148.417 85.2738 148.472 85.9356 148.717 86.5365C148.962 87.1374 149.386 87.6483 149.932 87.9998C150.478 88.3513 151.119 88.5263 151.768 88.5012C152.417 88.476 153.042 88.2518 153.559 87.859C154.076 87.4663 154.46 86.924 154.658 86.3059C154.855 85.6878 154.858 85.0238 154.665 84.4042C154.472 83.7846 154.093 83.2393 153.579 82.8425L150.638 66.4253Z"
              fill="#FFB6B6"
            />
            <path
              d="M139.137 35.9324L145.334 47.0123C145.334 47.0123 131.054 51.898 131.019 51.0845C130.984 50.2711 131.729 38.9833 131.729 38.9833L139.137 35.9324Z"
              fill="#E6E6E6"
            />
          </g>
          <defs>
            <clipPath id="clip0_4624_7249">
              <rect width="226" height="188" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
};