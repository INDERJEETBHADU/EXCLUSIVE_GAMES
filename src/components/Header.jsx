import React from "react";
import logo from "../assets/images/PNG/logo.png";
import line_btn from "../assets/images/PNG/button_line.png";
import green_btn from "../assets/images/PNG/green_btn_line.png";

function Header() {
  return (
    <header className="bg_img_hero min-vh-100 bg-dark ">
      <div className="nav_box d-flex  align-items-center    ">
        <div className="container">
          <div className=" d-flex  align-items-center justify-content-between  ">
            <img className="cursor-pointer" src={logo} alt="logo" />
            <label for="icon" class="icon">
              <span></span>
              <span></span>
              <span></span>
            </label>
            <input type="checkbox" id="icon" hidden />
            <ul className=" d-flex  align-items-center gap-4 mobile-view    ">
              <li>
                <a
                  className=" font-inter fw-500 text-16 lh-25 mb-0  color-white opacity-8 home"
                  href=""
                >
                  Hogar
                </a>
              </li>
              <li>
                <a
                  className=" font-inter fw-500 text-16 lh-25 mb-0  color-white opacity-8 home"
                  href=""
                >
                  Misión
                </a>
              </li>
              <li>
                <a
                  className=" font-inter fw-500 text-16 lh-25 mb-0  color-white opacity-8 home"
                  href=""
                >
                  Tragamonedas
                </a>
              </li>
              <li>
                <a
                  className=" font-inter fw-500 text-16 lh-25 mb-0  color-white opacity-8 home "
                  href=""
                >
                  Por qué elegirnos
                </a>
              </li>
              <li>
                <a
                  className=" font-inter fw-500 text-16 lh-25 mb-0  color-white opacity-8 home"
                  href=""
                >
                  Ofertas
                </a>
              </li>
              <li className=" d-lg-none">
                {" "}
                <div className=" position-relative d-none  d-lg-block">
                  <button className=" font-inter fw-700 text-16 lh-25 acces_btn color-white  mb-0 ">
                    Acceso
                  </button>
                  <div className=" position-absolute btn_line_position">
                    <img src={line_btn} alt="button_line" />
                  </div>
                </div>
              </li>
            </ul>
            <div className=" position-relative d-none  d-lg-block">
              <button className=" font-inter fw-700 text-16 lh-25 acces_btn color-white  mb-0 ">
                Acceso
              </button>
              <div className=" position-absolute btn_line_position">
                <img src={line_btn} alt="button_line" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="d-flex justify-content-center pt_140  ">
          <div className="d-flex flex-column  align-items-center ">
            <h2 className=" font-anton fw-400 mb-0  text-72 lh-86 text-center  color-white max-w-hero-heading  text-uppercase">
              Exclusive Games. Pasión por ganar
            </h2>
            <p className=" font-inter fw-500 mb-0  color-white opacity-8 text-16 lh-25 text-center max-w-para-hero pt-3">
              En Exclusive Games somos un equipo apasionado de personas
              dedicados al desarrollo de
              <span className=" d-md-block">
                multiplataformas para juegos de azar. A lo largo de nuestra vida
                consumimos todo tipo de
              </span>
              juegos hasta que un día decidimos crear los propios.
            </p>
            <div className=" position-relative">
              <button className=" font-inter fw-700 text-16 lh-25 mb-0  color-black empezar_btn mt_40">
                Empezar
              </button>
              <div className=" position-absolute  green_btn_line_position">
                <img src={green_btn} alt="green_btn" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
