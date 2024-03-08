import React, { useState } from "react";
import Menu from "./Menu";

const Navbar = () => {
  const [isBreadCrumb, setIsBreadCrumb] = useState(false);
  return (
    <>
      <div className="navbar d-lg-block d-none position-relative">
        <div className="d-flex justify-content-between container align-items-center py-2 ">
          <div className="d-flex gap-5">
            <img src="/smart_logo.svg" className="nav-logo" alt="logo" />
            <img src="/Nimaya Logo.svg" className="nav-logo" alt="logo" />
          </div>
          <div className="d-flex navbarLi align-items-center">
            <li>Home</li>
            <li>Learning Experience</li>
            <li>About</li>
            <li>Contact</li>
            <li>
              <button className="bg-gradientStyle navBtnApply" type="button">
                Apply
              </button>
            </li>
          </div>
        </div>
      </div>
      <div className="d-flex d-lg-none justify-content-between align-items-center p-3">
        <img src="/mobileLogo.png" />
        <div>
          <img src="/breadcrumb.svg" onClick={() => setIsBreadCrumb(true)} />
          {/* <img src="/cancel.svg" /> */}
          {isBreadCrumb ? <Menu setMenu={setIsBreadCrumb} /> : ""}
        </div>
      </div>
    </>
  );
};

export default Navbar;
