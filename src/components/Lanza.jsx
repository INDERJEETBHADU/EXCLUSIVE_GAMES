import React from "react";
import green_btn from "../assets/images/PNG/green_btn_line.png";

function Lanza() {
  return (
    <section className=" bg_dark mt_neg_2 pt-3">
      <div className="container">
        <div className=" d-flex justify-content-center pb_52">
          <div className="lanza_box lanza_box_bg_img  d-flex justify-content-center align-items-center">
            <div className="">
              <h3 className=" font-anton mb-0 fw-400 text-32 lh-41 color-white text-center">
                Lanza tu propia plataforma en sólo 2 semanas
              </h3>
              <div className="  d-flex justify-content-center">
                <div className=" position-relative">
                  <button className=" font-inter fw-700 text-16 lh-25 mb-0  color-black empezar_btn mt_40">
                    Leer más
                  </button>
                  <div className=" position-absolute  lanza_line_btn_poss">
                    <img src={green_btn} alt="green_btn" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Lanza;
