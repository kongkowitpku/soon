export default function Footer() {
  return (
    <div className="center-child absolute bottom-2 left-0 right-0 footer z-20 md:bottom-4">
      {/* <div className="footer-section-1 z-20 flex flex-row ">
        <div className="flex items-center justify-items-center">
          <img
            className="w-5 font-medium h-5 mx-2 justify-self-center"
            src="./time_icon.svg"
          />
        </div>
        <div>STAY TUNED FOR MORE!</div>
      </div> */}
      <div className="footer-section-2 z-20 ">
        <div onClick={() => window.open("https://blog.kongkowitpku.xyz")}>
          BLOG
        </div>
        |
        <div
          onClick={() => window.open("https://github.com/KongkowITPekanbaru")}
        >
          GITHUB
        </div>
        |
        <div
          onClick={() =>
            window.open("https://www.instagram.com/kongkowitpekanbaru/")
          }
        >
          INSTAGRAM
        </div>
      </div>
      <div className="footer-section-3 z-20 ">
        Kongkow IT Pekanbaru - © 2022 All Rights Reserved.
      </div>
    </div>
  );
}
