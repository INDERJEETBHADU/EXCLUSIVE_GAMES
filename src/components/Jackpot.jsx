import React from "react";

import jackpot from "../assets/images/PNG/jackpot_img.png";

import betting1 from "../assets/images/PNG/betting_img_1.png";
import betting2 from "../assets/images/PNG/betting-img-2.png";
import betting3 from "../assets/images/PNG/betting-img-3.png";
import repro_btn from "../assets/images/PNG/repro_btn_line.png";
import ellipse_middle from "../assets/images/PNG/jackpot_middle_ellipse.png";
function Jackpot() {
  return (
    <section className=" jackpot_bg_img  bg_dark mt_neg_2 position-relative">
      <div className="container pb_51 position-relative ">
        <div className="row pt_64 ">
          <div className="col-lg-6 col-12 d-flex justify-content-center position-relative z-30">
            <img
              className="max-w_jackpot w-100  position-relative z-3  cursor-pointer"
              src={jackpot}
              alt="jackpot"
            />
          </div>
          <div className="col-lg-6 col-12 d-flex justify-content-md-center  justify-content-lg-start">
            <div className="">
              <h2 className=" mb-0 font-anton color-white fw-400 text-48 lh-57  pt_33">
                Potenciando sus elecciones
              </h2>
              <p className=" mb-0  font-inter fw-500 text-16 lh-25 color-white opacity-8 pt-3">
                Con Exclusive Game lo mejor está de tu lado.
              </p>
              <div className=" d-flex gap-2 align-items-center pt_24">
                <svg
                  className="min_wid_svg "
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.456 7.95506C13.6673 7.7539 13.9485 7.64268 14.2402 7.64489C14.5319 7.6471 14.8114 7.76256 15.0196 7.9669C15.2279 8.17124 15.3486 8.44848 15.3563 8.74013C15.364 9.03177 15.2581 9.31501 15.061 9.53006L9.07597 17.0151C8.97305 17.1259 8.84885 17.2149 8.71077 17.2766C8.57269 17.3384 8.42357 17.3716 8.27235 17.3744C8.12112 17.3772 7.97087 17.3495 7.8306 17.2929C7.69033 17.2363 7.56292 17.152 7.45597 17.0451L3.48697 13.0761C3.37644 12.9731 3.28779 12.8489 3.2263 12.7109C3.16481 12.5729 3.13175 12.4239 3.12908 12.2728C3.12642 12.1218 3.1542 11.9718 3.21078 11.8317C3.26737 11.6916 3.35158 11.5643 3.45841 11.4575C3.56524 11.3507 3.69249 11.2665 3.83257 11.2099C3.97265 11.1533 4.1227 11.1255 4.27375 11.1282C4.42481 11.1308 4.57378 11.1639 4.71178 11.2254C4.84977 11.2869 4.97398 11.3755 5.07697 11.4861L8.21797 14.6256L13.426 7.98806C13.4353 7.97648 13.4453 7.96546 13.456 7.95506ZM12.076 15.6651L13.456 17.0451C13.5629 17.1518 13.6902 17.2359 13.8303 17.2923C13.9705 17.3488 14.1205 17.3765 14.2716 17.3737C14.4226 17.3709 14.5716 17.3377 14.7095 17.2761C14.8475 17.2144 14.9716 17.1257 15.0745 17.0151L21.0625 9.53006C21.17 9.42387 21.2551 9.29708 21.3126 9.15728C21.3701 9.01748 21.3988 8.86752 21.397 8.71638C21.3952 8.56523 21.363 8.41599 21.3023 8.27756C21.2416 8.13914 21.1536 8.01437 21.0436 7.91071C20.9336 7.80705 20.8038 7.72662 20.662 7.67423C20.5202 7.62184 20.3693 7.59856 20.2183 7.60578C20.0674 7.613 19.9194 7.65057 19.7832 7.71625C19.6471 7.78193 19.5256 7.87438 19.426 7.98806L14.2165 14.6256L13.489 13.8966L12.0745 15.6651H12.076Z"
                    fill="url(#paint0_linear_88_126)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_88_126"
                      x1="26.4852"
                      y1="16.8828"
                      x2="14.0628"
                      y2="-0.616319"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#51C8EF" />
                      <stop offset="1" stop-color="#7AF57A" />
                    </linearGradient>
                  </defs>
                </svg>
                <h6 className=" mb-0  font-inter  fw-500 text-16 lh-25 color-white">
                  Tecnología HTML5
                </h6>
              </div>
              <div className=" d-flex gap-2 align-items-center pt_5">
                <svg
                  className="min_wid_svg "
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.456 7.95506C13.6673 7.7539 13.9485 7.64268 14.2402 7.64489C14.5319 7.6471 14.8114 7.76256 15.0196 7.9669C15.2279 8.17124 15.3486 8.44848 15.3563 8.74013C15.364 9.03177 15.2581 9.31501 15.061 9.53006L9.07597 17.0151C8.97305 17.1259 8.84885 17.2149 8.71077 17.2766C8.57269 17.3384 8.42357 17.3716 8.27235 17.3744C8.12112 17.3772 7.97087 17.3495 7.8306 17.2929C7.69033 17.2363 7.56292 17.152 7.45597 17.0451L3.48697 13.0761C3.37644 12.9731 3.28779 12.8489 3.2263 12.7109C3.16481 12.5729 3.13175 12.4239 3.12908 12.2728C3.12642 12.1218 3.1542 11.9718 3.21078 11.8317C3.26737 11.6916 3.35158 11.5643 3.45841 11.4575C3.56524 11.3507 3.69249 11.2665 3.83257 11.2099C3.97265 11.1533 4.1227 11.1255 4.27375 11.1282C4.42481 11.1308 4.57378 11.1639 4.71178 11.2254C4.84977 11.2869 4.97398 11.3755 5.07697 11.4861L8.21797 14.6256L13.426 7.98806C13.4353 7.97648 13.4453 7.96546 13.456 7.95506ZM12.076 15.6651L13.456 17.0451C13.5629 17.1518 13.6902 17.2359 13.8303 17.2923C13.9705 17.3488 14.1205 17.3765 14.2716 17.3737C14.4226 17.3709 14.5716 17.3377 14.7095 17.2761C14.8475 17.2144 14.9716 17.1257 15.0745 17.0151L21.0625 9.53006C21.17 9.42387 21.2551 9.29708 21.3126 9.15728C21.3701 9.01748 21.3988 8.86752 21.397 8.71638C21.3952 8.56523 21.363 8.41599 21.3023 8.27756C21.2416 8.13914 21.1536 8.01437 21.0436 7.91071C20.9336 7.80705 20.8038 7.72662 20.662 7.67423C20.5202 7.62184 20.3693 7.59856 20.2183 7.60578C20.0674 7.613 19.9194 7.65057 19.7832 7.71625C19.6471 7.78193 19.5256 7.87438 19.426 7.98806L14.2165 14.6256L13.489 13.8966L12.0745 15.6651H12.076Z"
                    fill="url(#paint0_linear_88_126)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_88_126"
                      x1="26.4852"
                      y1="16.8828"
                      x2="14.0628"
                      y2="-0.616319"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#51C8EF" />
                      <stop offset="1" stop-color="#7AF57A" />
                    </linearGradient>
                  </defs>
                </svg>
                <h6 className=" mb-0  font-inter  fw-500 text-16 lh-25 color-white">
                  Versión PC y móvil
                </h6>
              </div>
              <div className=" d-flex gap-2  pt_5">
                <svg
                  className="min_wid_svg "
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.456 7.95506C13.6673 7.7539 13.9485 7.64268 14.2402 7.64489C14.5319 7.6471 14.8114 7.76256 15.0196 7.9669C15.2279 8.17124 15.3486 8.44848 15.3563 8.74013C15.364 9.03177 15.2581 9.31501 15.061 9.53006L9.07597 17.0151C8.97305 17.1259 8.84885 17.2149 8.71077 17.2766C8.57269 17.3384 8.42357 17.3716 8.27235 17.3744C8.12112 17.3772 7.97087 17.3495 7.8306 17.2929C7.69033 17.2363 7.56292 17.152 7.45597 17.0451L3.48697 13.0761C3.37644 12.9731 3.28779 12.8489 3.2263 12.7109C3.16481 12.5729 3.13175 12.4239 3.12908 12.2728C3.12642 12.1218 3.1542 11.9718 3.21078 11.8317C3.26737 11.6916 3.35158 11.5643 3.45841 11.4575C3.56524 11.3507 3.69249 11.2665 3.83257 11.2099C3.97265 11.1533 4.1227 11.1255 4.27375 11.1282C4.42481 11.1308 4.57378 11.1639 4.71178 11.2254C4.84977 11.2869 4.97398 11.3755 5.07697 11.4861L8.21797 14.6256L13.426 7.98806C13.4353 7.97648 13.4453 7.96546 13.456 7.95506ZM12.076 15.6651L13.456 17.0451C13.5629 17.1518 13.6902 17.2359 13.8303 17.2923C13.9705 17.3488 14.1205 17.3765 14.2716 17.3737C14.4226 17.3709 14.5716 17.3377 14.7095 17.2761C14.8475 17.2144 14.9716 17.1257 15.0745 17.0151L21.0625 9.53006C21.17 9.42387 21.2551 9.29708 21.3126 9.15728C21.3701 9.01748 21.3988 8.86752 21.397 8.71638C21.3952 8.56523 21.363 8.41599 21.3023 8.27756C21.2416 8.13914 21.1536 8.01437 21.0436 7.91071C20.9336 7.80705 20.8038 7.72662 20.662 7.67423C20.5202 7.62184 20.3693 7.59856 20.2183 7.60578C20.0674 7.613 19.9194 7.65057 19.7832 7.71625C19.6471 7.78193 19.5256 7.87438 19.426 7.98806L14.2165 14.6256L13.489 13.8966L12.0745 15.6651H12.076Z"
                    fill="url(#paint0_linear_88_126)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_88_126"
                      x1="26.4852"
                      y1="16.8828"
                      x2="14.0628"
                      y2="-0.616319"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#51C8EF" />
                      <stop offset="1" stop-color="#7AF57A" />
                    </linearGradient>
                  </defs>
                </svg>
                <h6 className=" mb-0  font-inter  fw-500 text-16 lh-25 color-white">
                  Control de RTP (controlás qué porcentaje pagar)
                </h6>
              </div>
              <div className=" d-flex gap-2  pt_5">
                <svg
                  className="min_wid_svg "
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.456 7.95506C13.6673 7.7539 13.9485 7.64268 14.2402 7.64489C14.5319 7.6471 14.8114 7.76256 15.0196 7.9669C15.2279 8.17124 15.3486 8.44848 15.3563 8.74013C15.364 9.03177 15.2581 9.31501 15.061 9.53006L9.07597 17.0151C8.97305 17.1259 8.84885 17.2149 8.71077 17.2766C8.57269 17.3384 8.42357 17.3716 8.27235 17.3744C8.12112 17.3772 7.97087 17.3495 7.8306 17.2929C7.69033 17.2363 7.56292 17.152 7.45597 17.0451L3.48697 13.0761C3.37644 12.9731 3.28779 12.8489 3.2263 12.7109C3.16481 12.5729 3.13175 12.4239 3.12908 12.2728C3.12642 12.1218 3.1542 11.9718 3.21078 11.8317C3.26737 11.6916 3.35158 11.5643 3.45841 11.4575C3.56524 11.3507 3.69249 11.2665 3.83257 11.2099C3.97265 11.1533 4.1227 11.1255 4.27375 11.1282C4.42481 11.1308 4.57378 11.1639 4.71178 11.2254C4.84977 11.2869 4.97398 11.3755 5.07697 11.4861L8.21797 14.6256L13.426 7.98806C13.4353 7.97648 13.4453 7.96546 13.456 7.95506ZM12.076 15.6651L13.456 17.0451C13.5629 17.1518 13.6902 17.2359 13.8303 17.2923C13.9705 17.3488 14.1205 17.3765 14.2716 17.3737C14.4226 17.3709 14.5716 17.3377 14.7095 17.2761C14.8475 17.2144 14.9716 17.1257 15.0745 17.0151L21.0625 9.53006C21.17 9.42387 21.2551 9.29708 21.3126 9.15728C21.3701 9.01748 21.3988 8.86752 21.397 8.71638C21.3952 8.56523 21.363 8.41599 21.3023 8.27756C21.2416 8.13914 21.1536 8.01437 21.0436 7.91071C20.9336 7.80705 20.8038 7.72662 20.662 7.67423C20.5202 7.62184 20.3693 7.59856 20.2183 7.60578C20.0674 7.613 19.9194 7.65057 19.7832 7.71625C19.6471 7.78193 19.5256 7.87438 19.426 7.98806L14.2165 14.6256L13.489 13.8966L12.0745 15.6651H12.076Z"
                    fill="url(#paint0_linear_88_126)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_88_126"
                      x1="26.4852"
                      y1="16.8828"
                      x2="14.0628"
                      y2="-0.616319"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#51C8EF" />
                      <stop offset="1" stop-color="#7AF57A" />
                    </linearGradient>
                  </defs>
                </svg>
                <h6 className=" mb-0  font-inter  fw-500 text-16 lh-25 color-white">
                  Bonos editables, happy hours, Jackpots, códigos{" "}
                  <span className=" d-md-block">promocionales.</span>
                </h6>
              </div>
              <div className=" d-flex gap-2 align-items-center pt_5">
                <svg
                  className="min_wid_svg "
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.456 7.95506C13.6673 7.7539 13.9485 7.64268 14.2402 7.64489C14.5319 7.6471 14.8114 7.76256 15.0196 7.9669C15.2279 8.17124 15.3486 8.44848 15.3563 8.74013C15.364 9.03177 15.2581 9.31501 15.061 9.53006L9.07597 17.0151C8.97305 17.1259 8.84885 17.2149 8.71077 17.2766C8.57269 17.3384 8.42357 17.3716 8.27235 17.3744C8.12112 17.3772 7.97087 17.3495 7.8306 17.2929C7.69033 17.2363 7.56292 17.152 7.45597 17.0451L3.48697 13.0761C3.37644 12.9731 3.28779 12.8489 3.2263 12.7109C3.16481 12.5729 3.13175 12.4239 3.12908 12.2728C3.12642 12.1218 3.1542 11.9718 3.21078 11.8317C3.26737 11.6916 3.35158 11.5643 3.45841 11.4575C3.56524 11.3507 3.69249 11.2665 3.83257 11.2099C3.97265 11.1533 4.1227 11.1255 4.27375 11.1282C4.42481 11.1308 4.57378 11.1639 4.71178 11.2254C4.84977 11.2869 4.97398 11.3755 5.07697 11.4861L8.21797 14.6256L13.426 7.98806C13.4353 7.97648 13.4453 7.96546 13.456 7.95506ZM12.076 15.6651L13.456 17.0451C13.5629 17.1518 13.6902 17.2359 13.8303 17.2923C13.9705 17.3488 14.1205 17.3765 14.2716 17.3737C14.4226 17.3709 14.5716 17.3377 14.7095 17.2761C14.8475 17.2144 14.9716 17.1257 15.0745 17.0151L21.0625 9.53006C21.17 9.42387 21.2551 9.29708 21.3126 9.15728C21.3701 9.01748 21.3988 8.86752 21.397 8.71638C21.3952 8.56523 21.363 8.41599 21.3023 8.27756C21.2416 8.13914 21.1536 8.01437 21.0436 7.91071C20.9336 7.80705 20.8038 7.72662 20.662 7.67423C20.5202 7.62184 20.3693 7.59856 20.2183 7.60578C20.0674 7.613 19.9194 7.65057 19.7832 7.71625C19.6471 7.78193 19.5256 7.87438 19.426 7.98806L14.2165 14.6256L13.489 13.8966L12.0745 15.6651H12.076Z"
                    fill="url(#paint0_linear_88_126)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_88_126"
                      x1="26.4852"
                      y1="16.8828"
                      x2="14.0628"
                      y2="-0.616319"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#51C8EF" />
                      <stop offset="1" stop-color="#7AF57A" />
                    </linearGradient>
                  </defs>
                </svg>
                <h6 className=" mb-0  font-inter  fw-500 text-16 lh-25 color-white">
                  Aplicación para android y windows de regalo.
                </h6>
              </div>
              <p className=" mb-0 color-white pt_24  font-inter text-16 lh-25">
                Te reintegramos todo lo invertido en fichas en la moneda que
                elijas.
              </p>
            </div>
          </div>
        </div>
        <div className=" position-absolute ellipse_middle_position_jackpot d-none d-xl-block">
          <img src={ellipse_middle} alt="ellipse" />
        </div>

        {/* jackpot---box---here */}
        <div className="  d-flex justify-content-center py_64">
          <div className="jackpot_box  d-flex justify-content-center align-items-center position-relative overflow-hidden jackpot_box_bg_img">
            <h4 className=" mb-0 font-anton fw-400 text-48 lh-57 color-white text-center position-relative z-1">
              lanza tu propia plataforma{" "}
              <span className=" d-sm-block">en sólo 2 semanas</span>
            </h4>
          </div>
        </div>
        {/* betting-part---here */}
        <h3 className=" mb-0 color-white font-anton fw-400 text-48 lh-57 text-center">
          Juegos en vivo
        </h3>
        <div className="row pt_60 d-flex justify-content-center">
          <div className="col-md-4  col-sm-6 col-12 ">
            <div className=" position-relative hover_layer">
              <img
                className="  w-100 border_rad"
                src={betting1}
                alt="betting1"
              />
              <div className="layer_img position-absolute layer_position translate-middle d-flex justify-content-center align-items-center">
                <div className=" position-relative">
                  <button className=" font-inter fw-700 text-16 lh-25 reprod_btn color-white  mb-0 ">
                    Reproducir ahora
                  </button>
                  <div className="reprod_btn_line_pos position-absolute">
                    <img src={repro_btn} alt="repro-btn" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4  col-sm-6 col-12 mt-5  mt-sm-0 ">
            <div className=" position-relative hover_layer ">
              <img
                className="   w-100 border_rad "
                src={betting2}
                alt="betting1"
              />
              <div className="layer_img position-absolute layer_position translate-middle d-flex justify-content-center align-items-center">
                <div className=" position-relative">
                  <button className=" font-inter fw-700 text-16 lh-25 reprod_btn color-white  mb-0 ">
                    Reproducir ahora
                  </button>
                  <div className="reprod_btn_line_pos position-absolute">
                    <img src={repro_btn} alt="repro-btn" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4  col-sm-6 col-12 mt-5 position-relative z-30   mt-md-0  ">
            <div className=" position-relative hover_layer">
              <img
                className="  w-100 border_rad"
                src={betting3}
                alt="betting1"
              />
              <div className="layer_img position-absolute layer_position translate-middle d-flex justify-content-center align-items-center">
                <div className=" position-relative">
                  <button className=" font-inter fw-700 text-16 lh-25 reprod_btn color-white  mb-0 ">
                    Reproducir ahora
                  </button>
                  <div className="reprod_btn_line_pos position-absolute">
                    <img src={repro_btn} alt="repro-btn" />
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

export default Jackpot;
