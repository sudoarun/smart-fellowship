import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="navbar d-lg-block d-none">
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
          <img src="/breadcrumb.svg" />
          {/* <img src="/cancel.svg" /> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
