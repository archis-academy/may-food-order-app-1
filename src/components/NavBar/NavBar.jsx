import "./NavBar.scss";

function NavBar() {
  const DashboardIcon = (props) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.49776 4.7606C8.58545 4.93485 8.63817 5.12392 8.65332 5.32102L9.04185 10.8095C9.04706 10.8847 9.08269 10.9548 9.14085 11.0042C9.18448 11.0413 9.23808 11.0645 9.29801 11.0712L9.35991 11.0724L14.9341 10.7366C15.3867 10.71 15.8305 10.8675 16.1604 11.1719C16.4902 11.4763 16.6768 11.9004 16.6744 12.3912C16.4265 16.0037 13.773 19.0237 10.159 19.8065C6.54503 20.5893 2.83611 18.9474 1.05781 15.7848C0.582292 14.9695 0.261779 14.0778 0.113798 13.1749L0.0664268 12.8359C0.0253023 12.5821 0.00319023 12.3257 0 12.0795L0.00311369 11.8372C0.0133983 8.06546 2.66156 4.80403 6.38809 3.92434L6.64383 3.86807L6.7814 3.84532C7.502 3.74681 8.21097 4.12453 8.49776 4.7606ZM7.01643 5.27813L6.93217 5.28772L6.70369 5.33933C3.73526 6.05477 1.6062 8.61031 1.48796 11.621L1.4828 11.8661C1.47569 12.0525 1.4825 12.2392 1.50499 12.4378L1.53277 12.6408C1.63212 13.495 1.90795 14.3206 2.34914 15.0772C3.81632 17.6863 6.86669 19.0367 9.839 18.3929C12.8113 17.7491 14.9936 15.2653 15.1958 12.3414C15.1958 12.2974 15.1774 12.2552 15.1446 12.225C15.1228 12.2049 15.0959 12.1912 15.0675 12.1851L15.024 12.1817L9.45904 12.5169C8.98938 12.5503 8.52549 12.3992 8.17003 12.0971C7.81456 11.7951 7.59684 11.3669 7.56522 10.91L7.17702 5.42617C7.17632 5.41708 7.17385 5.40822 7.15682 5.37299C7.1315 5.31695 7.07648 5.28131 7.01643 5.27813ZM11.423 0.00105033C15.7084 0.122269 19.3029 3.20162 19.9904 7.34084L20 7.4567L19.9977 7.65855C19.9737 7.95621 19.8538 8.23931 19.6545 8.46677C19.4041 8.75241 19.0477 8.92862 18.6588 8.95674L12.0133 9.39005C11.1615 9.43818 10.4295 8.80509 10.3741 7.97348L9.92986 1.44914L9.9349 1.30295L9.95698 1.13824C10.0162 0.84619 10.1684 0.579378 10.3925 0.376428C10.6739 0.121564 11.0474 -0.0133911 11.423 0.00105033ZM11.4113 1.44902L11.8511 7.87814C11.8537 7.91719 11.888 7.94688 11.9214 7.94502L18.5182 7.51352L18.4854 7.33352C17.8318 4.0802 15.0119 1.66443 11.6287 1.45932L11.4113 1.44902Z"
        fill={props.fill}
      />
    </svg>
  );

  const HomePageIcon = (props) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.73024 0.788355C9.00024 -0.220645 10.7802 -0.260645 12.0892 0.668355L12.2502 0.788355L18.3392 5.65935C19.0092 6.17835 19.4202 6.94936 19.4902 7.78835L19.5002 7.98935V16.0984C19.5002 18.1884 17.8492 19.8884 15.7802 19.9984H13.7902C12.8392 19.9794 12.0702 19.2394 12.0002 18.3094L11.9902 18.1684V15.3094C11.9902 14.9984 11.7592 14.7394 11.4502 14.6884L11.3602 14.6784H8.68924C8.37024 14.6884 8.11024 14.9184 8.07024 15.2184L8.06024 15.3094V18.1594C8.06024 18.2184 8.04924 18.2884 8.04024 18.3384L8.03024 18.3594L8.01924 18.4284C7.90024 19.2794 7.20024 19.9284 6.33024 19.9894L6.20024 19.9984H4.41024C2.32024 19.9984 0.610244 18.3594 0.500244 16.2984V7.98935C0.509244 7.13835 0.880244 6.34835 1.50024 5.79835L7.73024 0.788355ZM11.3802 1.87835C10.6202 1.26835 9.54025 1.23935 8.74024 1.76835L8.58924 1.87835L2.50924 6.77936C2.16024 7.03835 1.95024 7.42836 1.90024 7.83836L1.88924 7.99835V16.0984C1.88924 17.4284 2.92924 18.5184 4.25024 18.5984H6.20024C6.42024 18.5984 6.61024 18.4494 6.63924 18.2394L6.66024 18.0594L6.67024 18.0084V15.3094C6.67024 14.2394 7.49024 13.3694 8.54024 13.2884H11.3602C12.4292 13.2884 13.2992 14.1094 13.3802 15.1594V18.1684C13.3802 18.3784 13.5302 18.5594 13.7302 18.5984H15.5892C16.9292 18.5984 18.0192 17.5694 18.0992 16.2584L18.1102 16.0984V7.99835C18.0992 7.56936 17.9202 7.16835 17.6102 6.86935L17.4802 6.75835L11.3802 1.87835Z"
        fill={props.fill}
      />
    </svg>
  );

  const SettingsIcon = (props) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.6161 2.17992e-07C11.3251 -0.000285658 12.0041 0.280614 12.4983 0.77871C12.9925 1.27681 13.2599 1.94968 13.2383 2.57766L13.2468 2.72535C13.2641 2.87079 13.3124 3.01116 13.3908 3.14054C13.5435 3.39567 13.7935 3.58081 14.0857 3.65514C14.3779 3.72947 14.6882 3.68688 14.9821 3.51839L15.146 3.4355C16.3759 2.86897 17.8511 3.31918 18.5333 4.47928L19.1465 5.52174C19.1627 5.54922 19.1769 5.57762 19.1892 5.60674L19.2461 5.71842C19.7945 6.86519 19.4043 8.22927 18.3624 8.92228L18.1051 9.08068C17.9706 9.17256 17.8585 9.29258 17.7742 9.43678C17.6218 9.69291 17.58 9.99795 17.658 10.2844C17.736 10.5708 17.9272 10.8149 18.2174 10.9793L18.3843 11.0841C18.8887 11.4297 19.253 11.9391 19.4119 12.523C19.5912 13.1817 19.495 13.8833 19.1399 14.4804L18.4803 15.557L18.3808 15.7089C17.6058 16.8008 16.1011 17.1344 14.9527 16.485L14.8166 16.4163C14.6746 16.3541 14.5214 16.3199 14.382 16.316C14.0786 16.3146 13.7872 16.432 13.5727 16.6422C13.3582 16.8524 13.2383 17.1379 13.2391 17.4698L13.231 17.6414C13.12 18.9703 11.9845 20 10.6164 20H9.38106C7.93219 20 6.75765 18.8493 6.75912 17.4753L6.75063 17.3277C6.73337 17.1822 6.68504 17.0418 6.6027 16.9057C6.45336 16.65 6.20591 16.4633 5.91538 16.3871C5.62484 16.3109 5.31529 16.3516 5.01565 16.5213L4.83762 16.6084C4.2746 16.8565 3.63953 16.9023 3.04445 16.7366C2.37306 16.5497 1.80539 16.1083 1.47412 15.5224L0.83679 14.4442L0.751966 14.2844C0.171573 13.0841 0.626514 11.6412 1.78115 10.9875L1.88645 10.9228C2.19491 10.7137 2.37987 10.3688 2.37987 10C2.37987 9.59896 2.16149 9.22838 1.77948 9.01151L1.62449 8.91408C0.510007 8.15476 0.169493 6.68049 0.859895 5.50696L1.50918 4.46166C2.23128 3.23376 3.83155 2.81017 5.06235 3.50171L5.19559 3.5713C5.33141 3.63238 5.47895 3.6648 5.62101 3.66628C6.24742 3.66634 6.75775 3.17352 6.76724 2.54181L6.77575 2.3478C6.82704 1.74716 7.09307 1.1827 7.52796 0.754574C8.01861 0.27155 8.6855 2.17992e-07 9.38106 2.17992e-07H10.6161ZM10.6164 1.44774H9.38106C9.07863 1.44774 8.78866 1.56581 8.57533 1.77582C8.38625 1.96196 8.27058 2.20741 8.25028 2.43661L8.23685 2.7415C8.13339 4.07087 6.99969 5.11416 5.61326 5.11398C5.25588 5.11034 4.90355 5.03293 4.54427 4.87026L4.3519 4.77085C3.8038 4.46315 3.1049 4.64815 2.78057 5.19925L2.13128 6.24455C1.83377 6.75044 1.98256 7.39466 2.44324 7.70925L2.70395 7.871C3.42196 8.34666 3.85754 9.14295 3.85754 10C3.85754 10.8446 3.43413 11.634 2.70219 12.1296L2.54639 12.2256C2.03354 12.5163 1.83562 13.144 2.07398 13.6383L2.13027 13.7449L2.75952 14.8084C2.90728 15.0696 3.1552 15.2624 3.44842 15.344C3.70831 15.4164 3.98569 15.3964 4.20208 15.3018L4.3108 15.2497C4.91096 14.9066 5.62614 14.8126 6.29737 14.9886C6.96861 15.1645 7.54028 15.5959 7.87937 16.1768C8.06179 16.478 8.17721 16.8132 8.2219 17.1985L8.24205 17.552C8.30426 18.1145 8.79047 18.5523 9.38106 18.5523H10.6164C11.2137 18.5523 11.7099 18.1023 11.7565 17.5511L11.7621 17.4421C11.7588 16.7585 12.0345 16.1019 12.5279 15.6185C13.0212 15.1351 13.6914 14.865 14.4053 14.8686C14.7556 14.8778 15.1004 14.9547 15.4528 15.11L15.7687 15.2682C16.2647 15.4814 16.8529 15.3258 17.1511 14.9067L17.2236 14.7957L17.868 13.7436C18.0203 13.4875 18.0621 13.1824 17.9841 12.896C17.915 12.6422 17.7566 12.4207 17.5645 12.2882L17.2922 12.1195C16.7716 11.7748 16.3932 11.2563 16.2302 10.6574C16.0509 9.99866 16.1471 9.29707 16.4946 8.71262C16.6849 8.38716 16.9464 8.10733 17.2873 7.87532L17.448 7.77613C17.9601 7.4827 18.1578 6.85504 17.9212 6.35884L17.8505 6.22529L17.8378 6.19726L17.253 5.20208C16.9764 4.73175 16.4008 4.52853 15.9125 4.6891L15.8015 4.73265L15.6983 4.78415C15.1001 5.12941 14.3863 5.22736 13.7143 5.05641C13.0423 4.88546 12.4673 4.45965 12.1181 3.87616C11.9357 3.57504 11.8203 3.23984 11.7756 2.85454L11.7624 2.60249C11.7713 2.29923 11.6546 2.00536 11.4387 1.78783C11.2229 1.57029 10.9264 1.44774 10.6164 1.44774ZM10.0032 6.73182C11.8455 6.73182 13.339 8.19503 13.339 10C13.339 11.805 11.8455 13.2682 10.0032 13.2682C8.16095 13.2682 6.66748 11.805 6.66748 10C6.66748 8.19503 8.16095 6.73182 10.0032 6.73182ZM10.0032 8.17956C8.97705 8.17956 8.14516 8.9946 8.14516 10C8.14516 11.0054 8.97705 11.8204 10.0032 11.8204C11.0294 11.8204 11.8613 11.0054 11.8613 10C11.8613 8.9946 11.0294 8.17956 10.0032 8.17956Z"
        fill={props.fill}
      />
    </svg>
  );

  const ExitIcon = (props) => (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.33097 0.0214844C11.7102 0.0214844 13.6521 1.89542 13.7611 4.24772L13.766 4.45648V5.38948C13.766 5.8037 13.4302 6.13948 13.016 6.13948C12.6363 6.13948 12.3225 5.85733 12.2728 5.49125L12.266 5.38948V4.45648C12.266 2.89358 11.044 1.61575 9.50341 1.52647L9.33097 1.52148H4.45597C2.89392 1.52148 1.61623 2.74362 1.52696 4.28406L1.52197 4.45648V15.5865C1.52197 17.1493 2.74388 18.4272 4.28363 18.5165L4.45597 18.5215H9.34097C10.8983 18.5215 12.172 17.3039 12.261 15.7693L12.266 15.5975V14.6545C12.266 14.2403 12.6018 13.9045 13.016 13.9045C13.3957 13.9045 13.7095 14.1866 13.7591 14.5527L13.766 14.6545V15.5975C13.766 17.9687 11.8992 19.9046 9.55533 20.0164L9.34097 20.0215H4.45597C2.07753 20.0215 0.135813 18.1474 0.0267998 15.7952L0.0219727 15.5865V4.45648C0.0219727 2.07743 1.89573 0.135347 4.24728 0.0263125L4.45597 0.0214844H9.33097ZM17.326 6.50234L17.4103 6.57478L20.3383 9.48978C20.3647 9.51594 20.3878 9.54256 20.409 9.57073L20.3383 9.48978C20.3689 9.52019 20.3963 9.55258 20.4205 9.58653C20.4376 9.61028 20.4533 9.63538 20.4676 9.66142C20.4702 9.66648 20.4728 9.67145 20.4754 9.67645C20.4881 9.70042 20.4993 9.72529 20.5092 9.75084C20.5132 9.76202 20.5173 9.77334 20.5211 9.78473C20.5284 9.80575 20.5345 9.8274 20.5397 9.84942C20.5421 9.86118 20.5445 9.87286 20.5467 9.88457C20.5508 9.90501 20.5538 9.9261 20.5559 9.94745C20.557 9.96231 20.558 9.97701 20.5586 9.99174C20.5593 10.0016 20.5595 10.0115 20.5595 10.0214L20.5586 10.0497C20.5581 10.0651 20.557 10.0805 20.5555 10.0958L20.5595 10.0214C20.5595 10.0682 20.5552 10.1141 20.547 10.1585C20.5445 10.1696 20.5421 10.1814 20.5394 10.193C20.5343 10.2162 20.5279 10.2387 20.5205 10.2607C20.5167 10.2709 20.513 10.2813 20.509 10.2915C20.4997 10.3164 20.4889 10.3405 20.4769 10.3639C20.4739 10.3692 20.4708 10.3751 20.4675 10.381C20.4331 10.4443 20.39 10.5015 20.3398 10.5517L20.3384 10.5527L17.4104 13.4687C17.1169 13.761 16.642 13.76 16.3498 13.4665C16.084 13.1997 16.0607 12.783 16.2791 12.4898L16.3519 12.4059L17.991 10.7705L7.76847 10.7714C7.35426 10.7714 7.01847 10.4356 7.01847 10.0214C7.01847 9.64169 7.30063 9.32789 7.6667 9.27823L7.76847 9.27139L17.993 9.27048L16.352 7.63779C16.0852 7.37212 16.06 6.95551 16.2772 6.66142L16.3497 6.57714C16.6153 6.31028 17.0319 6.28514 17.326 6.50234Z"
        fill={props.fill}
      />
    </svg>
  );

  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="logo">
          <img src="public/app_logo.svg"></img>
        </li>

        <li className="">
          <a href="/" className="">
            {/* <img src="public/homepage.svg"></img> */}
            <HomePageIcon fill="#EA7C69" />
          </a>
        </li>

        <li className="">
          <a href="/dashboard" className="" aria-current="page">
            {/* <img src="public/dashboard.svg"></img> */}
            <DashboardIcon fill="#EA7C69" />
          </a>
        </li>

        <li className="">
          <a
            href="/settings/product-management"
            className=""
            aria-current="page"
          >
            {/* <img src="public/settings.svg"></img> */}
            <SettingsIcon fill="#EA7C69" />
          </a>
        </li>

        <li className="exit-logo">
          <a href="/" className="" aria-current="page">
            {/* <img src="public/exit.svg"></img> */}
            <ExitIcon fill="#EA7C69" />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
