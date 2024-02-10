import React from "react";
import logo from "../assets/images/PNG/logo.png";
import footer_right from "../assets/images/PNG/footer_rigth_ellipse.png";
import footer_left from "../assets/images/PNG/footer_left_ellipse.png";
import { Facebook, Indeed, Insta } from "./Icon";

function Footer() {
  
  return (
    <section className=" bg-black mt_neg_2 pt_64  position-relative  overflow-hidden">
      <div className="container">
        <div className="row pb_40">
          <div className="col-xl-4 col-12 col-lg-4">
            <img className="cursor-pointer" src={logo} alt="logo" />
            <p className=" mb-0  text-16 font-inter fw-500 lh-25 color-white pt_16 opacity-8">
              En Exclusive Games somos un equipo{" "}
              <span className=" d-xl-block">
                apasionado de personas dedicadas al desarrollo
              </span>{" "}
              de multiplataformas para juegos de azar
            </p>
            <div className=" d-flex  align-items-center gap_12 mt_24">
              <a
                className="icon_box  d-flex justify-content-center align-items-center   cursor-pointer  position-relative z-30"
                href="https://www.instagram.com/"
                target="_blank"
              >
                <Insta />
              </a>
              <a
                className="icon_box d-flex  align-items-center justify-content-center cursor-pointer position-relative z-30"
                href=" https://www.facebook.com/"
                target="_blank"
              >
                <Facebook />
              </a>
              <a
                className="icon_box d-flex align-items-center   justify-content-center cursor-pointer position-relative z-30"
                href=" https://in.indeed.com/?r=us"
                target="_blank"
              >
                <Indeed />
              </a>
            </div>
          </div>
          <div className="col-xl-3 col-md-3 col-6  pt-4 pt-lg-0 col-lg-2 d-flex justify-content-md-center">
            <div className="">
              <h6 className="  font-inter mb-0  fw-700 text-16 lh-25 color-white">
                Menú principal
              </h6>
              <ul className=" mb-0  d-flex  flex-column gap_12 pt_16">
                <li>
                  <a
                    className=" font-inter mb-0 fw-500 text-16 lh-25 color-white opacity-8"
                    href=""
                  >
                    Hogar
                  </a>
                </li>
                <li>
                  <a
                    className=" font-inter mb-0 fw-500 text-16 lh-25 color-white opacity-8"
                    href=""
                  >
                    Misión
                  </a>
                </li>
                <li>
                  <a
                    className=" font-inter mb-0 fw-500 text-16 lh-25 color-white opacity-8"
                    href=""
                  >
                    Tragamonedas
                  </a>
                </li>
                <li>
                  <a
                    className=" font-inter mb-0 fw-500 text-16 lh-25 color-white opacity-8"
                    href=""
                  >
                    Por qué elegirnos
                  </a>
                </li>
                <li>
                  <a
                    className=" font-inter mb-0 fw-500 text-16 lh-25 color-white opacity-8"
                    href=""
                  >
                    Ofertas
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-2 col-md-4 col-6 pt-4 pt-lg-0  col-lg-3">
            <h6 className="  font-inter mb-0  fw-700 text-16 lh-25 color-white">
              Atención al cliente
            </h6>
            <ul className=" mb-0  d-flex  flex-column gap_12 pt_16">
              <li>
                <a
                  className=" font-inter mb-0 fw-500 text-16 lh-25 color-white opacity-8"
                  href=""
                >
                  ¿Necesitas ayuda?
                </a>
              </li>
              <li>
                <a
                  className=" font-inter mb-0 fw-500 text-16 lh-25 color-white opacity-8"
                  href=""
                >
                  política de privacidad
                </a>
              </li>
              <li>
                <a
                  className=" font-inter mb-0 fw-500 text-16 lh-25 color-white opacity-8"
                  href=""
                >
                  Términos de servicios
                </a>
              </li>
            </ul>
          </div>
          <div className="col-xl-3 col-md-5 col-12 pt-4 pt-lg-0  col-lg-3">
            <h6 className="  font-inter mb-0  fw-700 text-16 lh-25 color-white">
              Ponerse en contacto
            </h6>
            <div className=" d-flex align-items-center gap-2 pt_16">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.668 3.33301H3.33464C2.41797 3.33301 1.6763 4.08301 1.6763 4.99967L1.66797 14.9997C1.66797 15.9163 2.41797 16.6663 3.33464 16.6663H16.668C17.5846 16.6663 18.3346 15.9163 18.3346 14.9997V4.99967C18.3346 4.08301 17.5846 3.33301 16.668 3.33301ZM16.3346 6.87467L10.443 10.558C10.1763 10.7247 9.8263 10.7247 9.55964 10.558L3.66797 6.87467C3.58441 6.82777 3.51123 6.76439 3.45288 6.68839C3.39452 6.61238 3.35219 6.52532 3.32845 6.43248C3.30471 6.33964 3.30005 6.24295 3.31477 6.14826C3.32948 6.05357 3.36325 5.96285 3.41404 5.88159C3.46482 5.80033 3.53157 5.73022 3.61024 5.6755C3.68891 5.62079 3.77786 5.5826 3.87171 5.56326C3.96557 5.54391 4.06237 5.54381 4.15626 5.56296C4.25016 5.58212 4.33919 5.62012 4.41797 5.67467L10.0013 9.16634L15.5846 5.67467C15.6634 5.62012 15.7524 5.58212 15.8463 5.56296C15.9402 5.54381 16.037 5.54391 16.1309 5.56326C16.2247 5.5826 16.3137 5.62079 16.3924 5.6755C16.471 5.73022 16.5378 5.80033 16.5886 5.88159C16.6394 5.96285 16.6731 6.05357 16.6878 6.14826C16.7025 6.24295 16.6979 6.33964 16.6742 6.43248C16.6504 6.52532 16.6081 6.61238 16.5497 6.68839C16.4914 6.76439 16.4182 6.82777 16.3346 6.87467Z"
                  fill="white"
                />
              </svg>
              <a
                href="mailto:juegosexclusivos@gmail.com"
                className=" font-inter fw-500 text-16 mb-0  lh-25 color-white  cursor-pointer opacity-8"
              >
                juegosexclusivos@gmail.com
              </a>
            </div>
            <div className=" d-flex align-items-center gap-2 pt_16">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 13.6833V16.63C17.5001 16.841 17.4202 17.0441 17.2763 17.1985C17.1325 17.3528 16.9355 17.4469 16.725 17.4617C16.3608 17.4867 16.0633 17.5 15.8333 17.5C8.46917 17.5 2.5 11.5308 2.5 4.16667C2.5 3.93667 2.5125 3.63917 2.53833 3.275C2.5531 3.06454 2.64715 2.86751 2.8015 2.72367C2.95585 2.57984 3.15902 2.4999 3.37 2.5H6.31667C6.42003 2.4999 6.51975 2.53822 6.59644 2.60752C6.67313 2.67682 6.72133 2.77215 6.73167 2.875C6.75083 3.06667 6.76833 3.21917 6.785 3.335C6.95061 4.49077 7.29 5.61486 7.79167 6.66917C7.87083 6.83583 7.81917 7.035 7.66917 7.14167L5.87083 8.42667C6.97038 10.9887 9.01212 13.0305 11.5742 14.13L12.8575 12.335C12.91 12.2617 12.9865 12.2091 13.0737 12.1864C13.161 12.1637 13.2535 12.1723 13.335 12.2108C14.3892 12.7116 15.513 13.0501 16.6683 13.215C16.7842 13.2317 16.9367 13.2492 17.1267 13.2683C17.2294 13.2789 17.3245 13.3271 17.3936 13.4038C17.4628 13.4805 17.5001 13.5801 17.5 13.6833Z"
                  fill="white"
                />
              </svg>
              <a
                href=" tel: (101)342-7873"
                className=" mb-0 font-inter fw-500 text-16   lh-25 color-white  cursor-pointer opacity-8"
              >
                (101)342-7873
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="line_footer"></div>
      <p className=" mb-0 color-white  font-inter fw-500 text-16 lh-25 text-center  py_20">
        © Juegos exclusivos - Todos los derechos reservados 2024
      </p>
      <div className=" position-absolute footer_right_ellipse d-xl-block d-none">
        <img src={footer_right} alt="footer_right" />
      </div>
      <div className=" position-absolute footer_left_ellipse d-xl-block d-none">
        <img src={footer_left} alt="footer_right" />
      </div>
    </section>
  );
}

export default Footer;
