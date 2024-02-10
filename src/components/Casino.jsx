import React from "react";
import casino from "../assets/images/PNG/casino_night_img.png";
import green_btn from "../assets/images/PNG/green_btn_line.png";
import ellipse_casino from "../assets/images/PNG/casino_night_left_.png";
import right_ellipse from "../assets/images/PNG/jackpot-right-ellipse.png";

function Casino() {
  return (
    <section className=" bg_casino_img mt_neg_2 bg-color-slot position-relative ">
      <div className="container  py_49">
        <div className="row   ">
          <div className="col-md-6 col-12 d-flex align-items-center justify-content-center">
            <div className="">
              <h2 className=" mb-0  color-black font-anton  fw-400 text-48 lh-57 ">
                Por qué elegirnos
              </h2>
              <p className=" mb-0 pt-3 font-inter fw-500 text-16 lh-25 color-black opacity-8">
                Con Exclusive Games tenés Exclusivos beneficios. Te reintegramos
                <span className=" d-xl-block">
                  todo lo invertido en fichas en la moneda que elijas. En
                  Exclusive
                </span>
                <span className=" d-xl-block">
                  Games siempre sumamos nuevos juegos. Juegos crash, los juegos
                </span>
                <span className=" d-xl-block">
                  interactivos que más pide la gente. Con Exclusive Games
                  empezás a
                </span>
                ganar ya! Creamos tu plataforma en solo 2 semanas.
              </p>
              <div className=" position-relative">
                <button className=" font-inter fw-700 text-16 lh-25 mb-0  color-black empezar_btn mt_40">
                  Aprende más
                </button>
                <div className=" position-absolute  green_btn_line_position2">
                  <img src={green_btn} alt="green_btn" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 mt-4">
            <img
              className=" max-w-casino w-100"
              src={casino}
              alt="casino-night"
            />
          </div>
        </div>
      </div>
      <div className=" position-absolute casino_left_position d-none ">
        <img src={ellipse_casino} alt="ellipse_casino" />
      </div>
      <div className=" position-absolute right_jackpot_ellipse d-none d-xl-block">
        <img src={right_ellipse} alt="jackpot" />
      </div>
    </section>
  );
}

export default Casino;
