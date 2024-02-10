import React from "react";
import poker from "../assets/images/PNG/poker-img.webp";
import aviator from "../assets/images/PNG/aviator-img.webp";
import ellipse_left from "../assets/images/PNG/ewllipse-aviiator-one.png";
import ellipse_middle from "../assets/images/PNG/middle_ellipse_aviator.png";

function Aviator() {
  return (
    <section className=" bg_dark position-relative mt_neg_2 ">
      <div className="container">
        <div className="row pt_51 pb_51">
          <div className="col-md-6 col-12 d-flex justify-content-xl-center">
            <div className="">
              <div className="max-w-img cursor-pointer">
                <img
                  className=" w-100 position-relative z-30"
                  src={poker}
                  alt="poker"
                />
              </div>
              <h3 className=" font-anton fw-400 text-48 lh-57 color-white mb-0 pt_30">
                Nuestra Visión
              </h3>
              <p className=" font-inter mb-0  fw-500 text-16 lh-25 mb-0  color-white max-w-poker-para pt-3 opacity-8">
                Nuestra visión es ser líderes indiscutibles en la industria de
                los juegos de azar y llevar nuestra pasión por el
                entretenimiento más allá de las fronteras. Imagina un mundo
                donde la emoción y la diversión no tengan límites, y ese es el
                mundo que queremos crear contigo.
              </p>
              <p className=" font-inter fw-700 text-16 lh-25 color-green mb-0 pt_24 cursor-pointer">
                Aprende más ⟶
              </p>
            </div>
          </div>
          <div className="col-md-6 col-12  d-flex  flex-column">
            <div className=" pt-4   pt-md-0  order-2 order-md-1">
              <h3 className=" font-anton fw-400 text-48 lh-57 color-white mb-0 ">
                Nuestra Misión
              </h3>
              <p className=" font-inter mb-0  fw-500 text-16 lh-25 mb-0  color-white max-w-poker-para pt-3 opacity-8">
                Nuestra misión es simple pero poderosa: proporcionarte la más
                amplia gama de soluciones de entretenimiento de alta calidad y
                rentabilidad. Estamos comprometidos a elevar tus expectativas y
                brindarte experiencias inigualables.
              </p>
              <p className=" font-inter fw-700 text-16 lh-25 color-green mb-0 pt_24 cursor-pointer">
                Aprende más ⟶
              </p>
            </div>

            <div className=" pt_30 max-w-img order-1  order-md-2">
              <img
                className=" w-100 cursor-pointer position-relative z-30"
                src={aviator}
                alt="aviator"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" position-absolute ellipse_left_position d-none d-xl-block">
        <img src={ellipse_left} alt="ellipse" />
      </div>
      <div className=" position-absolute ellipse_middle_position d-none d-xl-block">
        <img src={ellipse_middle} alt="ellipse" />
      </div>
    </section>
  );
}

export default Aviator;
