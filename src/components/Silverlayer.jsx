import React from "react";
import silver_box_img from "../assets/images/PNG/silver_box_img.png";
import shadow_silver from "../assets/images/PNG/silver_box_img_shadow.png";
import repro_btn from "../assets/images/PNG/repro_btn_line.png";
import green_btn from "../assets/images/PNG/green_btn_line.png";
import carrom from "../assets/images/PNG/carrom_coin_img.png";
import spade_right from "../assets/images/PNG/spade_card1_right.png";
import spade_left from "../assets/images/PNG/spade_card_left.png";
import dice from "../assets/images/PNG/dice_img-luxury.png";
import platinum_card from "../assets/images/PNG/platinum-card-img.png";
import wheel_free from "../assets/images/PNG/wheel-of-spin.png";
import todo from "../assets/images/PNG/todos.png";
import happyhour from "../assets/images/PNG/happy-hours-img.png";
import silver_ellipse from "../assets/images/PNG/silver_ellipse.png";
import plantinum_ellipse from "../assets/images/PNG/platinum_ellipse.png";
import ellipse_luxury from "../assets/images/PNG/luxury_middle_ellipse.png";
import hours_ellipse from "../assets/images/PNG/hours_ellipse_right.png";
import accordion_ellipse from "../assets/images/PNG/accordion_ellipse_left.png";
function Silverlayer() {
  return (
    <section className=" bg_dark mt_neg_2 position-relative">
      <div className="container">
        <h2 className=" mb-0 font-anton fw-400 text-48 lh-57 text-center color-white">
          Nuestras ofertas{" "}
        </h2>
        <p className=" mb-0 color-white font-inter fw-500 text-16 lh-25 text-center  pt-3">
          Te ofrecemos las mejores experiencias de juegos para tus clientes.
        </p>
        <div className=" d-flex justify-content-center pb_64">
          <div className="silver_box mt_60">
            <div className="row">
              <div className="col-lg-7 col-12 mb-4 mb-lg-0  d-flex flex-column justify-content-center ">
                <div className=" position-relative  ">
                  <img
                    className=" w-100 position-relative z-30"
                    src={silver_box_img}
                    alt="silver_box_img"
                  />
                  <img
                    className=" shadow_mix_blend w-100"
                    src={shadow_silver}
                    alt="shadow"
                  />
                  <div className=" silver_ellipse position-absolute d-none d-xl-block ">
                    <img src={silver_ellipse} alt="silver_ellipse" />
                  </div>
                </div>
              </div>
              {/* silver */}

              <div className="col-lg-5 col-12">
                <h4 className=" mb-0 font-anton fw-400 text-32  color-white lh-41 ">
                  Silver
                </h4>
                <p className=" mb-0  font-inter fw-500 text-16  lh-25 opacity-8 color-white pt-3">
                  Diseño predeterminado, atractivo y fácil de navegar,
                  tecnología HTLM5.
                </p>
                <h3 className=" font-anton fw-400 text-48 mb-0  lh-57 color-white pt_32">
                  $5000
                </h3>
                <div className="">
                  <div className=" d-flex  gap-2    pt_16 ">
                    <svg
                      className=" min_wid_svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.456 7.45506C13.6673 7.2539 13.9485 7.14268 14.2402 7.14489C14.5319 7.1471 14.8114 7.26256 15.0196 7.4669C15.2279 7.67124 15.3486 7.94848 15.3563 8.24013C15.364 8.53177 15.2581 8.81501 15.061 9.03006L9.07597 16.5151C8.97306 16.6259 8.84885 16.7149 8.71077 16.7766C8.57269 16.8384 8.42358 16.8716 8.27235 16.8744C8.12112 16.8772 7.97087 16.8495 7.8306 16.7929C7.69033 16.7363 7.56292 16.652 7.45597 16.5451L3.48697 12.5761C3.37644 12.4731 3.28779 12.3489 3.2263 12.2109C3.16481 12.0729 3.13175 11.9239 3.12908 11.7728C3.12642 11.6218 3.1542 11.4718 3.21078 11.3317C3.26737 11.1916 3.35158 11.0643 3.45841 10.9575C3.56524 10.8507 3.69249 10.7665 3.83257 10.7099C3.97265 10.6533 4.1227 10.6255 4.27375 10.6282C4.42481 10.6308 4.57378 10.6639 4.71178 10.7254C4.84977 10.7869 4.97398 10.8755 5.07697 10.9861L8.21797 14.1256L13.426 7.48806C13.4353 7.47648 13.4453 7.46546 13.456 7.45506ZM12.076 15.1651L13.456 16.5451C13.5629 16.6518 13.6902 16.7359 13.8303 16.7923C13.9705 16.8488 14.1205 16.8765 14.2716 16.8737C14.4226 16.8709 14.5716 16.8377 14.7095 16.7761C14.8475 16.7144 14.9716 16.6257 15.0745 16.5151L21.0625 9.03006C21.17 8.92387 21.2551 8.79708 21.3126 8.65728C21.3701 8.51748 21.3988 8.36752 21.397 8.21638C21.3952 8.06523 21.363 7.91599 21.3023 7.77756C21.2416 7.63914 21.1536 7.51437 21.0436 7.41071C20.9336 7.30705 20.8038 7.22662 20.662 7.17423C20.5202 7.12184 20.3693 7.09856 20.2183 7.10578C20.0674 7.113 19.9194 7.15057 19.7832 7.21625C19.6471 7.28193 19.5256 7.37438 19.426 7.48806L14.2165 14.1256L13.489 13.3966L12.0745 15.1651H12.076Z"
                        fill="url(#paint0_linear_362_317)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_362_317"
                          x1="26.4852"
                          y1="16.3828"
                          x2="14.0628"
                          y2="-1.11632"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#51C8EF" />
                          <stop offset="1" stop-color="#7AF57A" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <p className="  font-inter fw-500 text-16 lh-25  opacity-8  color-white mb-0">
                      Disponibles Payku, Pix, Depósitos en Euros, Criptomonedas,
                      Cargas manuales
                    </p>
                  </div>
                  <div className=" d-flex  gap-2   pt-3 ">
                    <svg
                      className=" min_wid_svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.456 7.45506C13.6673 7.2539 13.9485 7.14268 14.2402 7.14489C14.5319 7.1471 14.8114 7.26256 15.0196 7.4669C15.2279 7.67124 15.3486 7.94848 15.3563 8.24013C15.364 8.53177 15.2581 8.81501 15.061 9.03006L9.07597 16.5151C8.97306 16.6259 8.84885 16.7149 8.71077 16.7766C8.57269 16.8384 8.42358 16.8716 8.27235 16.8744C8.12112 16.8772 7.97087 16.8495 7.8306 16.7929C7.69033 16.7363 7.56292 16.652 7.45597 16.5451L3.48697 12.5761C3.37644 12.4731 3.28779 12.3489 3.2263 12.2109C3.16481 12.0729 3.13175 11.9239 3.12908 11.7728C3.12642 11.6218 3.1542 11.4718 3.21078 11.3317C3.26737 11.1916 3.35158 11.0643 3.45841 10.9575C3.56524 10.8507 3.69249 10.7665 3.83257 10.7099C3.97265 10.6533 4.1227 10.6255 4.27375 10.6282C4.42481 10.6308 4.57378 10.6639 4.71178 10.7254C4.84977 10.7869 4.97398 10.8755 5.07697 10.9861L8.21797 14.1256L13.426 7.48806C13.4353 7.47648 13.4453 7.46546 13.456 7.45506ZM12.076 15.1651L13.456 16.5451C13.5629 16.6518 13.6902 16.7359 13.8303 16.7923C13.9705 16.8488 14.1205 16.8765 14.2716 16.8737C14.4226 16.8709 14.5716 16.8377 14.7095 16.7761C14.8475 16.7144 14.9716 16.6257 15.0745 16.5151L21.0625 9.03006C21.17 8.92387 21.2551 8.79708 21.3126 8.65728C21.3701 8.51748 21.3988 8.36752 21.397 8.21638C21.3952 8.06523 21.363 7.91599 21.3023 7.77756C21.2416 7.63914 21.1536 7.51437 21.0436 7.41071C20.9336 7.30705 20.8038 7.22662 20.662 7.17423C20.5202 7.12184 20.3693 7.09856 20.2183 7.10578C20.0674 7.113 19.9194 7.15057 19.7832 7.21625C19.6471 7.28193 19.5256 7.37438 19.426 7.48806L14.2165 14.1256L13.489 13.3966L12.0745 15.1651H12.076Z"
                        fill="url(#paint0_linear_362_317)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_362_317"
                          x1="26.4852"
                          y1="16.3828"
                          x2="14.0628"
                          y2="-1.11632"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#51C8EF" />
                          <stop offset="1" stop-color="#7AF57A" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <p className="  font-inter fw-500 text-16 lh-25  opacity-8  color-white mb-0">
                      Control de RTP (controlás qué porcentaje pagar)
                    </p>
                  </div>
                  <div className=" d-flex  gap-2   pt-3 ">
                    <svg
                      className=" min_wid_svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.456 7.45506C13.6673 7.2539 13.9485 7.14268 14.2402 7.14489C14.5319 7.1471 14.8114 7.26256 15.0196 7.4669C15.2279 7.67124 15.3486 7.94848 15.3563 8.24013C15.364 8.53177 15.2581 8.81501 15.061 9.03006L9.07597 16.5151C8.97306 16.6259 8.84885 16.7149 8.71077 16.7766C8.57269 16.8384 8.42358 16.8716 8.27235 16.8744C8.12112 16.8772 7.97087 16.8495 7.8306 16.7929C7.69033 16.7363 7.56292 16.652 7.45597 16.5451L3.48697 12.5761C3.37644 12.4731 3.28779 12.3489 3.2263 12.2109C3.16481 12.0729 3.13175 11.9239 3.12908 11.7728C3.12642 11.6218 3.1542 11.4718 3.21078 11.3317C3.26737 11.1916 3.35158 11.0643 3.45841 10.9575C3.56524 10.8507 3.69249 10.7665 3.83257 10.7099C3.97265 10.6533 4.1227 10.6255 4.27375 10.6282C4.42481 10.6308 4.57378 10.6639 4.71178 10.7254C4.84977 10.7869 4.97398 10.8755 5.07697 10.9861L8.21797 14.1256L13.426 7.48806C13.4353 7.47648 13.4453 7.46546 13.456 7.45506ZM12.076 15.1651L13.456 16.5451C13.5629 16.6518 13.6902 16.7359 13.8303 16.7923C13.9705 16.8488 14.1205 16.8765 14.2716 16.8737C14.4226 16.8709 14.5716 16.8377 14.7095 16.7761C14.8475 16.7144 14.9716 16.6257 15.0745 16.5151L21.0625 9.03006C21.17 8.92387 21.2551 8.79708 21.3126 8.65728C21.3701 8.51748 21.3988 8.36752 21.397 8.21638C21.3952 8.06523 21.363 7.91599 21.3023 7.77756C21.2416 7.63914 21.1536 7.51437 21.0436 7.41071C20.9336 7.30705 20.8038 7.22662 20.662 7.17423C20.5202 7.12184 20.3693 7.09856 20.2183 7.10578C20.0674 7.113 19.9194 7.15057 19.7832 7.21625C19.6471 7.28193 19.5256 7.37438 19.426 7.48806L14.2165 14.1256L13.489 13.3966L12.0745 15.1651H12.076Z"
                        fill="url(#paint0_linear_362_317)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_362_317"
                          x1="26.4852"
                          y1="16.3828"
                          x2="14.0628"
                          y2="-1.11632"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#51C8EF" />
                          <stop offset="1" stop-color="#7AF57A" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <p className="  font-inter fw-500 text-16 lh-25  opacity-8  color-white mb-0">
                      Bonos Editables, Happy Hours, Jackpots, Códigos
                      Promocionales Regalo
                    </p>
                  </div>
                  <div className=" d-flex  gap-2   pt-3 ">
                    <svg
                      className=" min_wid_svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.456 7.45506C13.6673 7.2539 13.9485 7.14268 14.2402 7.14489C14.5319 7.1471 14.8114 7.26256 15.0196 7.4669C15.2279 7.67124 15.3486 7.94848 15.3563 8.24013C15.364 8.53177 15.2581 8.81501 15.061 9.03006L9.07597 16.5151C8.97306 16.6259 8.84885 16.7149 8.71077 16.7766C8.57269 16.8384 8.42358 16.8716 8.27235 16.8744C8.12112 16.8772 7.97087 16.8495 7.8306 16.7929C7.69033 16.7363 7.56292 16.652 7.45597 16.5451L3.48697 12.5761C3.37644 12.4731 3.28779 12.3489 3.2263 12.2109C3.16481 12.0729 3.13175 11.9239 3.12908 11.7728C3.12642 11.6218 3.1542 11.4718 3.21078 11.3317C3.26737 11.1916 3.35158 11.0643 3.45841 10.9575C3.56524 10.8507 3.69249 10.7665 3.83257 10.7099C3.97265 10.6533 4.1227 10.6255 4.27375 10.6282C4.42481 10.6308 4.57378 10.6639 4.71178 10.7254C4.84977 10.7869 4.97398 10.8755 5.07697 10.9861L8.21797 14.1256L13.426 7.48806C13.4353 7.47648 13.4453 7.46546 13.456 7.45506ZM12.076 15.1651L13.456 16.5451C13.5629 16.6518 13.6902 16.7359 13.8303 16.7923C13.9705 16.8488 14.1205 16.8765 14.2716 16.8737C14.4226 16.8709 14.5716 16.8377 14.7095 16.7761C14.8475 16.7144 14.9716 16.6257 15.0745 16.5151L21.0625 9.03006C21.17 8.92387 21.2551 8.79708 21.3126 8.65728C21.3701 8.51748 21.3988 8.36752 21.397 8.21638C21.3952 8.06523 21.363 7.91599 21.3023 7.77756C21.2416 7.63914 21.1536 7.51437 21.0436 7.41071C20.9336 7.30705 20.8038 7.22662 20.662 7.17423C20.5202 7.12184 20.3693 7.09856 20.2183 7.10578C20.0674 7.113 19.9194 7.15057 19.7832 7.21625C19.6471 7.28193 19.5256 7.37438 19.426 7.48806L14.2165 14.1256L13.489 13.3966L12.0745 15.1651H12.076Z"
                        fill="url(#paint0_linear_362_317)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_362_317"
                          x1="26.4852"
                          y1="16.3828"
                          x2="14.0628"
                          y2="-1.11632"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#51C8EF" />
                          <stop offset="1" stop-color="#7AF57A" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <p className="  font-inter fw-500 text-16 lh-25  opacity-8  color-white mb-0">
                      Aplicación para Android y Windows de regalo.
                    </p>
                  </div>
                  <div className=" d-flex  gap-2   pt-3 ">
                    <svg
                      className=" min_wid_svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.456 7.45506C13.6673 7.2539 13.9485 7.14268 14.2402 7.14489C14.5319 7.1471 14.8114 7.26256 15.0196 7.4669C15.2279 7.67124 15.3486 7.94848 15.3563 8.24013C15.364 8.53177 15.2581 8.81501 15.061 9.03006L9.07597 16.5151C8.97306 16.6259 8.84885 16.7149 8.71077 16.7766C8.57269 16.8384 8.42358 16.8716 8.27235 16.8744C8.12112 16.8772 7.97087 16.8495 7.8306 16.7929C7.69033 16.7363 7.56292 16.652 7.45597 16.5451L3.48697 12.5761C3.37644 12.4731 3.28779 12.3489 3.2263 12.2109C3.16481 12.0729 3.13175 11.9239 3.12908 11.7728C3.12642 11.6218 3.1542 11.4718 3.21078 11.3317C3.26737 11.1916 3.35158 11.0643 3.45841 10.9575C3.56524 10.8507 3.69249 10.7665 3.83257 10.7099C3.97265 10.6533 4.1227 10.6255 4.27375 10.6282C4.42481 10.6308 4.57378 10.6639 4.71178 10.7254C4.84977 10.7869 4.97398 10.8755 5.07697 10.9861L8.21797 14.1256L13.426 7.48806C13.4353 7.47648 13.4453 7.46546 13.456 7.45506ZM12.076 15.1651L13.456 16.5451C13.5629 16.6518 13.6902 16.7359 13.8303 16.7923C13.9705 16.8488 14.1205 16.8765 14.2716 16.8737C14.4226 16.8709 14.5716 16.8377 14.7095 16.7761C14.8475 16.7144 14.9716 16.6257 15.0745 16.5151L21.0625 9.03006C21.17 8.92387 21.2551 8.79708 21.3126 8.65728C21.3701 8.51748 21.3988 8.36752 21.397 8.21638C21.3952 8.06523 21.363 7.91599 21.3023 7.77756C21.2416 7.63914 21.1536 7.51437 21.0436 7.41071C20.9336 7.30705 20.8038 7.22662 20.662 7.17423C20.5202 7.12184 20.3693 7.09856 20.2183 7.10578C20.0674 7.113 19.9194 7.15057 19.7832 7.21625C19.6471 7.28193 19.5256 7.37438 19.426 7.48806L14.2165 14.1256L13.489 13.3966L12.0745 15.1651H12.076Z"
                        fill="url(#paint0_linear_362_317)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_362_317"
                          x1="26.4852"
                          y1="16.3828"
                          x2="14.0628"
                          y2="-1.11632"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#51C8EF" />
                          <stop offset="1" stop-color="#7AF57A" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <p className="  font-inter fw-500 text-16 lh-25  opacity-8  color-white mb-0">
                      Tiempo de creación 2 a 3 semanas
                    </p>
                  </div>
                </div>
                <div className=" position-relative mt_40">
                  <button className=" font-inter fw-700 text-16 lh-25 compar_btn color-white  mb-0 ">
                    Comprar ahora
                  </button>
                  <div className="Compra_btn_line_pos position-absolute">
                    <img src={repro_btn} alt="repro-btn" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* luxury---box-- */}
        <div className=" d-flex justify-content-center  pb_64">
          <div className="luxury_box luxury_bg_img position-relative">
            <h4 className=" font-anton mb-0  color-white  fw-400 text-32 lh-41 text-center">
              Luxury
            </h4>
            <p className=" font-inter mb-0 fw-500 text-16 lh-25  text-center opacity-8 color-white  pt_16">
              lleva tu experiencia de juego al siguiente nivel. Con{" "}
              <span className=" d-block">
                todas las características de la versión Silver y la
              </span>{" "}
              potencia adicional de la tecnología React .
            </p>
            <h2 className=" mb-0 color-white font-anton fw-400 text-48 lh-57 text-center pt_32">
              $9000
            </h2>
            <div className=" d-flex  justify-content-center pt_16">
              <div className=" d-flex flex-column  ">
                <div className=" d-flex  gap-2     ">
                  <svg
                    className=" min_wid_svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.456 7.45506C13.6673 7.2539 13.9485 7.14268 14.2402 7.14489C14.5319 7.1471 14.8114 7.26256 15.0196 7.4669C15.2279 7.67124 15.3486 7.94848 15.3563 8.24013C15.364 8.53177 15.2581 8.81501 15.061 9.03006L9.07597 16.5151C8.97306 16.6259 8.84885 16.7149 8.71077 16.7766C8.57269 16.8384 8.42358 16.8716 8.27235 16.8744C8.12112 16.8772 7.97087 16.8495 7.8306 16.7929C7.69033 16.7363 7.56292 16.652 7.45597 16.5451L3.48697 12.5761C3.37644 12.4731 3.28779 12.3489 3.2263 12.2109C3.16481 12.0729 3.13175 11.9239 3.12908 11.7728C3.12642 11.6218 3.1542 11.4718 3.21078 11.3317C3.26737 11.1916 3.35158 11.0643 3.45841 10.9575C3.56524 10.8507 3.69249 10.7665 3.83257 10.7099C3.97265 10.6533 4.1227 10.6255 4.27375 10.6282C4.42481 10.6308 4.57378 10.6639 4.71178 10.7254C4.84977 10.7869 4.97398 10.8755 5.07697 10.9861L8.21797 14.1256L13.426 7.48806C13.4353 7.47648 13.4453 7.46546 13.456 7.45506ZM12.076 15.1651L13.456 16.5451C13.5629 16.6518 13.6902 16.7359 13.8303 16.7923C13.9705 16.8488 14.1205 16.8765 14.2716 16.8737C14.4226 16.8709 14.5716 16.8377 14.7095 16.7761C14.8475 16.7144 14.9716 16.6257 15.0745 16.5151L21.0625 9.03006C21.17 8.92387 21.2551 8.79708 21.3126 8.65728C21.3701 8.51748 21.3988 8.36752 21.397 8.21638C21.3952 8.06523 21.363 7.91599 21.3023 7.77756C21.2416 7.63914 21.1536 7.51437 21.0436 7.41071C20.9336 7.30705 20.8038 7.22662 20.662 7.17423C20.5202 7.12184 20.3693 7.09856 20.2183 7.10578C20.0674 7.113 19.9194 7.15057 19.7832 7.21625C19.6471 7.28193 19.5256 7.37438 19.426 7.48806L14.2165 14.1256L13.489 13.3966L12.0745 15.1651H12.076Z"
                      fill="url(#paint0_linear_362_317)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_362_317"
                        x1="26.4852"
                        y1="16.3828"
                        x2="14.0628"
                        y2="-1.11632"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#51C8EF" />
                        <stop offset="1" stop-color="#7AF57A" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <p className="  font-inter fw-500 text-16 lh-25  opacity-8  color-white mb-0 text-center max_w_luxury">
                    Disponibles Payku, Pix, Depósitos en Euros, Criptomonedas,
                    Cargas manuales
                  </p>
                </div>
                <div className=" d-flex  gap-2   pt-3 ">
                  <svg
                    className=" min_wid_svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.456 7.45506C13.6673 7.2539 13.9485 7.14268 14.2402 7.14489C14.5319 7.1471 14.8114 7.26256 15.0196 7.4669C15.2279 7.67124 15.3486 7.94848 15.3563 8.24013C15.364 8.53177 15.2581 8.81501 15.061 9.03006L9.07597 16.5151C8.97306 16.6259 8.84885 16.7149 8.71077 16.7766C8.57269 16.8384 8.42358 16.8716 8.27235 16.8744C8.12112 16.8772 7.97087 16.8495 7.8306 16.7929C7.69033 16.7363 7.56292 16.652 7.45597 16.5451L3.48697 12.5761C3.37644 12.4731 3.28779 12.3489 3.2263 12.2109C3.16481 12.0729 3.13175 11.9239 3.12908 11.7728C3.12642 11.6218 3.1542 11.4718 3.21078 11.3317C3.26737 11.1916 3.35158 11.0643 3.45841 10.9575C3.56524 10.8507 3.69249 10.7665 3.83257 10.7099C3.97265 10.6533 4.1227 10.6255 4.27375 10.6282C4.42481 10.6308 4.57378 10.6639 4.71178 10.7254C4.84977 10.7869 4.97398 10.8755 5.07697 10.9861L8.21797 14.1256L13.426 7.48806C13.4353 7.47648 13.4453 7.46546 13.456 7.45506ZM12.076 15.1651L13.456 16.5451C13.5629 16.6518 13.6902 16.7359 13.8303 16.7923C13.9705 16.8488 14.1205 16.8765 14.2716 16.8737C14.4226 16.8709 14.5716 16.8377 14.7095 16.7761C14.8475 16.7144 14.9716 16.6257 15.0745 16.5151L21.0625 9.03006C21.17 8.92387 21.2551 8.79708 21.3126 8.65728C21.3701 8.51748 21.3988 8.36752 21.397 8.21638C21.3952 8.06523 21.363 7.91599 21.3023 7.77756C21.2416 7.63914 21.1536 7.51437 21.0436 7.41071C20.9336 7.30705 20.8038 7.22662 20.662 7.17423C20.5202 7.12184 20.3693 7.09856 20.2183 7.10578C20.0674 7.113 19.9194 7.15057 19.7832 7.21625C19.6471 7.28193 19.5256 7.37438 19.426 7.48806L14.2165 14.1256L13.489 13.3966L12.0745 15.1651H12.076Z"
                      fill="url(#paint0_linear_362_317)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_362_317"
                        x1="26.4852"
                        y1="16.3828"
                        x2="14.0628"
                        y2="-1.11632"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#51C8EF" />
                        <stop offset="1" stop-color="#7AF57A" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <p className="  font-inter fw-500 text-16 lh-25  opacity-8  color-white mb-0">
                    Control de RTP (controlás qué porcentaje pagar)
                  </p>
                </div>
                <div className=" d-flex  gap-2   pt-3 ">
                  <svg
                    className=" min_wid_svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.456 7.45506C13.6673 7.2539 13.9485 7.14268 14.2402 7.14489C14.5319 7.1471 14.8114 7.26256 15.0196 7.4669C15.2279 7.67124 15.3486 7.94848 15.3563 8.24013C15.364 8.53177 15.2581 8.81501 15.061 9.03006L9.07597 16.5151C8.97306 16.6259 8.84885 16.7149 8.71077 16.7766C8.57269 16.8384 8.42358 16.8716 8.27235 16.8744C8.12112 16.8772 7.97087 16.8495 7.8306 16.7929C7.69033 16.7363 7.56292 16.652 7.45597 16.5451L3.48697 12.5761C3.37644 12.4731 3.28779 12.3489 3.2263 12.2109C3.16481 12.0729 3.13175 11.9239 3.12908 11.7728C3.12642 11.6218 3.1542 11.4718 3.21078 11.3317C3.26737 11.1916 3.35158 11.0643 3.45841 10.9575C3.56524 10.8507 3.69249 10.7665 3.83257 10.7099C3.97265 10.6533 4.1227 10.6255 4.27375 10.6282C4.42481 10.6308 4.57378 10.6639 4.71178 10.7254C4.84977 10.7869 4.97398 10.8755 5.07697 10.9861L8.21797 14.1256L13.426 7.48806C13.4353 7.47648 13.4453 7.46546 13.456 7.45506ZM12.076 15.1651L13.456 16.5451C13.5629 16.6518 13.6902 16.7359 13.8303 16.7923C13.9705 16.8488 14.1205 16.8765 14.2716 16.8737C14.4226 16.8709 14.5716 16.8377 14.7095 16.7761C14.8475 16.7144 14.9716 16.6257 15.0745 16.5151L21.0625 9.03006C21.17 8.92387 21.2551 8.79708 21.3126 8.65728C21.3701 8.51748 21.3988 8.36752 21.397 8.21638C21.3952 8.06523 21.363 7.91599 21.3023 7.77756C21.2416 7.63914 21.1536 7.51437 21.0436 7.41071C20.9336 7.30705 20.8038 7.22662 20.662 7.17423C20.5202 7.12184 20.3693 7.09856 20.2183 7.10578C20.0674 7.113 19.9194 7.15057 19.7832 7.21625C19.6471 7.28193 19.5256 7.37438 19.426 7.48806L14.2165 14.1256L13.489 13.3966L12.0745 15.1651H12.076Z"
                      fill="url(#paint0_linear_362_317)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_362_317"
                        x1="26.4852"
                        y1="16.3828"
                        x2="14.0628"
                        y2="-1.11632"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#51C8EF" />
                        <stop offset="1" stop-color="#7AF57A" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <p className="  font-inter fw-500 text-16 lh-25  opacity-8  color-white mb-0 text-center">
                    Bonos Editables, Happy Hours, Jackpots, Códigos{" "}
                    <span className=" d-sm-block">Promocionales Regalo</span>
                  </p>
                </div>
                <div className=" d-flex  gap-3   pt-3 ">
                  <svg
                    className=" min_wid_svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.456 7.45506C13.6673 7.2539 13.9485 7.14268 14.2402 7.14489C14.5319 7.1471 14.8114 7.26256 15.0196 7.4669C15.2279 7.67124 15.3486 7.94848 15.3563 8.24013C15.364 8.53177 15.2581 8.81501 15.061 9.03006L9.07597 16.5151C8.97306 16.6259 8.84885 16.7149 8.71077 16.7766C8.57269 16.8384 8.42358 16.8716 8.27235 16.8744C8.12112 16.8772 7.97087 16.8495 7.8306 16.7929C7.69033 16.7363 7.56292 16.652 7.45597 16.5451L3.48697 12.5761C3.37644 12.4731 3.28779 12.3489 3.2263 12.2109C3.16481 12.0729 3.13175 11.9239 3.12908 11.7728C3.12642 11.6218 3.1542 11.4718 3.21078 11.3317C3.26737 11.1916 3.35158 11.0643 3.45841 10.9575C3.56524 10.8507 3.69249 10.7665 3.83257 10.7099C3.97265 10.6533 4.1227 10.6255 4.27375 10.6282C4.42481 10.6308 4.57378 10.6639 4.71178 10.7254C4.84977 10.7869 4.97398 10.8755 5.07697 10.9861L8.21797 14.1256L13.426 7.48806C13.4353 7.47648 13.4453 7.46546 13.456 7.45506ZM12.076 15.1651L13.456 16.5451C13.5629 16.6518 13.6902 16.7359 13.8303 16.7923C13.9705 16.8488 14.1205 16.8765 14.2716 16.8737C14.4226 16.8709 14.5716 16.8377 14.7095 16.7761C14.8475 16.7144 14.9716 16.6257 15.0745 16.5151L21.0625 9.03006C21.17 8.92387 21.2551 8.79708 21.3126 8.65728C21.3701 8.51748 21.3988 8.36752 21.397 8.21638C21.3952 8.06523 21.363 7.91599 21.3023 7.77756C21.2416 7.63914 21.1536 7.51437 21.0436 7.41071C20.9336 7.30705 20.8038 7.22662 20.662 7.17423C20.5202 7.12184 20.3693 7.09856 20.2183 7.10578C20.0674 7.113 19.9194 7.15057 19.7832 7.21625C19.6471 7.28193 19.5256 7.37438 19.426 7.48806L14.2165 14.1256L13.489 13.3966L12.0745 15.1651H12.076Z"
                      fill="url(#paint0_linear_362_317)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_362_317"
                        x1="26.4852"
                        y1="16.3828"
                        x2="14.0628"
                        y2="-1.11632"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#51C8EF" />
                        <stop offset="1" stop-color="#7AF57A" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <p className="  font-inter fw-500 text-16 lh-25  opacity-8  color-white mb-0">
                    Aplicación para Android y Windows de regalo.
                  </p>
                </div>
                <div className=" d-flex  gap-3 gap-sm-5   pt-3 ">
                  <svg
                    className=" min_wid_svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.456 7.45506C13.6673 7.2539 13.9485 7.14268 14.2402 7.14489C14.5319 7.1471 14.8114 7.26256 15.0196 7.4669C15.2279 7.67124 15.3486 7.94848 15.3563 8.24013C15.364 8.53177 15.2581 8.81501 15.061 9.03006L9.07597 16.5151C8.97306 16.6259 8.84885 16.7149 8.71077 16.7766C8.57269 16.8384 8.42358 16.8716 8.27235 16.8744C8.12112 16.8772 7.97087 16.8495 7.8306 16.7929C7.69033 16.7363 7.56292 16.652 7.45597 16.5451L3.48697 12.5761C3.37644 12.4731 3.28779 12.3489 3.2263 12.2109C3.16481 12.0729 3.13175 11.9239 3.12908 11.7728C3.12642 11.6218 3.1542 11.4718 3.21078 11.3317C3.26737 11.1916 3.35158 11.0643 3.45841 10.9575C3.56524 10.8507 3.69249 10.7665 3.83257 10.7099C3.97265 10.6533 4.1227 10.6255 4.27375 10.6282C4.42481 10.6308 4.57378 10.6639 4.71178 10.7254C4.84977 10.7869 4.97398 10.8755 5.07697 10.9861L8.21797 14.1256L13.426 7.48806C13.4353 7.47648 13.4453 7.46546 13.456 7.45506ZM12.076 15.1651L13.456 16.5451C13.5629 16.6518 13.6902 16.7359 13.8303 16.7923C13.9705 16.8488 14.1205 16.8765 14.2716 16.8737C14.4226 16.8709 14.5716 16.8377 14.7095 16.7761C14.8475 16.7144 14.9716 16.6257 15.0745 16.5151L21.0625 9.03006C21.17 8.92387 21.2551 8.79708 21.3126 8.65728C21.3701 8.51748 21.3988 8.36752 21.397 8.21638C21.3952 8.06523 21.363 7.91599 21.3023 7.77756C21.2416 7.63914 21.1536 7.51437 21.0436 7.41071C20.9336 7.30705 20.8038 7.22662 20.662 7.17423C20.5202 7.12184 20.3693 7.09856 20.2183 7.10578C20.0674 7.113 19.9194 7.15057 19.7832 7.21625C19.6471 7.28193 19.5256 7.37438 19.426 7.48806L14.2165 14.1256L13.489 13.3966L12.0745 15.1651H12.076Z"
                      fill="url(#paint0_linear_362_317)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_362_317"
                        x1="26.4852"
                        y1="16.3828"
                        x2="14.0628"
                        y2="-1.11632"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#51C8EF" />
                        <stop offset="1" stop-color="#7AF57A" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <p className="  font-inter fw-500 text-16 lh-25  opacity-8  color-white mb-0  max_w_luxury">
                    Tiempo de creación 2 a 3 semanas
                  </p>
                </div>
              </div>
            </div>
            <div className=" d-flex justify-content-center">
              <div className=" position-relative ">
                <button className=" font-inter fw-700 text-16 lh-25 mb-0  color-black empezar_btn mt_40">
                  Comprar ahora
                </button>
                <div className=" position-absolute  comprar_btn_line_position">
                  <img src={green_btn} alt="green_btn" />
                </div>
              </div>
            </div>

            {/* spade-cards-coins--here */}
            <div className=" position-absolute carrom_position  d-none d-lg-block">
              <img src={carrom} alt="carrom" />
            </div>
            <div className="spade_right_position position-absolute  d-none d-lg-block ">
              <img src={spade_right} alt="spade" />
            </div>
            <div className="spade_left_position position-absolute  d-none d-lg-block ">
              <img src={spade_left} alt="spade" />
            </div>
            <div className=" dice_position position-absolute  d-none d-lg-block">
              <img src={dice} alt="dice" />
            </div>
          </div>
        </div>
        {/* platinum---box */}
        <div className=" d-flex justify-content-center pb_52">
          <div className="platinum_box ">
            <div className="row">
              <div className="col-lg-6 col-xl-5 col-12 d-flex align-items-center">
                <div className="">
                  <h3 className=" mb-0  font-anton color-white fw-400 text-32 lh-41">
                    Platinum
                  </h3>
                  <p className=" mb-0 opacity-8  font-inter  fw-500 text-16 lh-25 color-white pt_16">
                    Diseño totalmente personalizado. Contáctanos{" "}
                    <span className=" d-sm-block">para un presupuesto.</span>
                  </p>
                  <h2 className=" mb-0 color-white font-anton fw-400 text-48   lh-57 pt_32">
                    Consultar precio
                  </h2>
                  <div className=" d-flex  gap-2    pt_16 ">
                    <svg
                      className=" min_wid_svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.456 7.45506C13.6673 7.2539 13.9485 7.14268 14.2402 7.14489C14.5319 7.1471 14.8114 7.26256 15.0196 7.4669C15.2279 7.67124 15.3486 7.94848 15.3563 8.24013C15.364 8.53177 15.2581 8.81501 15.061 9.03006L9.07597 16.5151C8.97306 16.6259 8.84885 16.7149 8.71077 16.7766C8.57269 16.8384 8.42358 16.8716 8.27235 16.8744C8.12112 16.8772 7.97087 16.8495 7.8306 16.7929C7.69033 16.7363 7.56292 16.652 7.45597 16.5451L3.48697 12.5761C3.37644 12.4731 3.28779 12.3489 3.2263 12.2109C3.16481 12.0729 3.13175 11.9239 3.12908 11.7728C3.12642 11.6218 3.1542 11.4718 3.21078 11.3317C3.26737 11.1916 3.35158 11.0643 3.45841 10.9575C3.56524 10.8507 3.69249 10.7665 3.83257 10.7099C3.97265 10.6533 4.1227 10.6255 4.27375 10.6282C4.42481 10.6308 4.57378 10.6639 4.71178 10.7254C4.84977 10.7869 4.97398 10.8755 5.07697 10.9861L8.21797 14.1256L13.426 7.48806C13.4353 7.47648 13.4453 7.46546 13.456 7.45506ZM12.076 15.1651L13.456 16.5451C13.5629 16.6518 13.6902 16.7359 13.8303 16.7923C13.9705 16.8488 14.1205 16.8765 14.2716 16.8737C14.4226 16.8709 14.5716 16.8377 14.7095 16.7761C14.8475 16.7144 14.9716 16.6257 15.0745 16.5151L21.0625 9.03006C21.17 8.92387 21.2551 8.79708 21.3126 8.65728C21.3701 8.51748 21.3988 8.36752 21.397 8.21638C21.3952 8.06523 21.363 7.91599 21.3023 7.77756C21.2416 7.63914 21.1536 7.51437 21.0436 7.41071C20.9336 7.30705 20.8038 7.22662 20.662 7.17423C20.5202 7.12184 20.3693 7.09856 20.2183 7.10578C20.0674 7.113 19.9194 7.15057 19.7832 7.21625C19.6471 7.28193 19.5256 7.37438 19.426 7.48806L14.2165 14.1256L13.489 13.3966L12.0745 15.1651H12.076Z"
                        fill="url(#paint0_linear_362_317)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_362_317"
                          x1="26.4852"
                          y1="16.3828"
                          x2="14.0628"
                          y2="-1.11632"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#51C8EF" />
                          <stop offset="1" stop-color="#7AF57A" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <p className="  font-inter fw-500 text-16 lh-25  opacity-8  color-white mb-0">
                      Personalizable
                    </p>
                  </div>
                  <div className=" position-relative mt_40">
                    <button className=" font-inter fw-700 text-16 lh-25 compar_btn color-white  mb-0 ">
                      Comprar ahora
                    </button>
                    <div className="Compra_btn_line_pos position-absolute">
                      <img src={repro_btn} alt="repro-btn" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xl-7 col-12 mt-5">
                <div className="  position-relative  ">
                  <img
                    className=" position-relative z-30 w-100"
                    src={platinum_card}
                    alt="platinum_card"
                  />
                  <div className=" position-absolute plantinum_ellipse_position z-2 d-none d-xl-block">
                    <img src={plantinum_ellipse} alt="plantinum_ellipse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" position-absolute luxury_ellipse_postion d-none  d-xl-block">
        <img src={ellipse_luxury} alt="ellipse_luxury" />
      </div>
      <div className="hours_ellipse position-absolute d-none d-xl-block">
        <img src={hours_ellipse} alt="hours_ellipse" />
      </div>
      <div className="accordion_ellipse position-absolute d-none d-xl-block">
        <img src={accordion_ellipse} alt="accordion_ellipse" />
      </div>
      <div className="container">
        <h2 className=" font-anton mb-0 fw-400 text-48 lh-57 text-center color-white">
          Ellos eligieron apostar con nosotros
        </h2>
        <div className="row pt_60 d-flex justify-content-center">
          <div className="col-md-4 col-sm-6 col-12">
            <div className=" position-relative hover_layer">
              <img className=" w-100" src={wheel_free} alt="wheel" />
              <div className="layer_img position-absolute layer_position translate-middle d-flex justify-content-center align-items-center">
                <div className=" position-relative">
                  <button className=" font-inter fw-700 text-16 lh-25 reprod_btn color-white  mb-0 ">
                    Rcasinovip
                  </button>
                  <div className="reprod_btn_line_pos position-absolute">
                    <img src={repro_btn} alt="repro-btn" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-12 mt-4  mt-sm-0">
            <div className=" position-relative hover_layer">
              <img className=" w-100" src={todo} alt="todo" />
              <div className="layer_img position-absolute layer_position translate-middle d-flex justify-content-center align-items-center">
                <div className=" position-relative">
                  <button className=" font-inter fw-700 text-16 lh-25 reprod_btn color-white  mb-0 ">
                    Rcasinovip
                  </button>
                  <div className="reprod_btn_line_pos position-absolute">
                    <img src={repro_btn} alt="repro-btn" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6  col-12 mt-4 mt-md-0">
            <div className=" position-relative hover_layer">
              <img className=" w-100" src={happyhour} alt="wheel" />
              <div className="layer_img position-absolute layer_position translate-middle d-flex justify-content-center align-items-center">
                <div className=" position-relative">
                  <button className=" font-inter fw-700 text-16 lh-25 reprod_btn color-white  mb-0 ">
                    Rcasinovip
                  </button>
                  <div className="reprod_btn_line_pos position-absolute">
                    <img src={repro_btn} alt="repro-btn" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="  mb-0 font-inter   fw-600 color-white text-center text-16 lh-25 pt_38  pb_52">
          Clientes satisfechos que confiaron en Exclusive Games y han disfrutado
          de emocionantes experiencias de juego.{" "}
          <span className=" d-lg-block">
            Ahora, la próxima apuesta está en tus manos.
          </span>{" "}
          Elige ganar. Elige exclusive game.
        </p>
      </div>
      {/* accordion---part---here */}
      <div className="container">
        <h2 className=" mb-0 color-white font-anton fw-400 text-48 lh-57 text-center text-uppercase">
          Preguntas más frecuentes
        </h2>

        {/* accordion */}

        <div className=" d-flex justify-content-center pb_52">
          <div
            class="accordion accordion-flush d-flex gap_32 flex-column pt_60 max-w-accordion w-100"
            id="accordionFlushExample"
          >
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button
                  class="accordion-button collapsed color-white font-anton fw-400 mb-0 text-20 lh-26"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  ¿Cuáles son las ventajas de elegir Juegos Exclusivos para mis
                  plataformas de juegos?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body  font-inter fw-500 text-16 lh-25 mb-0 opacity-8">
                  En Exclusive Games, ofrecemos experiencias únicas y
                  personalizadas, respaldadas por más de 15 años de{" "}
                  <span className=" d-lg-block">
                    {" "}
                    dedicación al desarrollo de multiplataformas para juegos de
                    azar.
                  </span>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button
                  class="accordion-button collapsed color-white font-anton fw-400 mb-0 text-20 lh-26"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  ¿Cómo garantizan la seguridad de las operaciones en sus
                  juegos?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body  font-inter fw-500 text-16 lh-25 mb-0 opacity-8">
                  En Exclusive Games, ofrecemos experiencias únicas y
                  personalizadas, respaldadas por más de 15 años de{" "}
                  <span className=" d-lg-block">
                    {" "}
                    dedicación al desarrollo de multiplataformas para juegos de
                    azar.
                  </span>
                </div>
              </div>
            </div>
            <div class="accordion-item ">
              <h2 class="accordion-header" id="flush-headingThree">
                <button
                  class="accordion-button collapsed color-white font-anton fw-400 mb-0 text-20 lh-26"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  ¿Cuáles son las opciones de juego disponibles en las versiones
                  Silver, Luxury y Platinum?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body  font-inter fw-500 text-16 lh-25 mb-0 opacity-8">
                  En Exclusive Games, ofrecemos experiencias únicas y
                  personalizadas, respaldadas por más de 15 años de{" "}
                  <span className=" d-lg-block">
                    {" "}
                    dedicación al desarrollo de multiplataformas para juegos de
                    azar.
                  </span>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingfour">
                <button
                  class="accordion-button collapsed color-white font-anton fw-400 mb-0 text-20 lh-26"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapsefour"
                  aria-expanded="false"
                  aria-controls="flush-collapsefour"
                >
                  ¿Cuánto tiempo lleva crear una plataforma con Juegos
                  Exclusivos?
                </button>
              </h2>
              <div
                id="flush-collapsefour"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingfour"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body  font-inter fw-500 text-16 lh-25 mb-0 opacity-8">
                  En Exclusive Games, ofrecemos experiencias únicas y
                  personalizadas, respaldadas por más de 15 años de{" "}
                  <span className=" d-lg-block">
                    {" "}
                    dedicación al desarrollo de multiplataformas para juegos de
                    azar.
                  </span>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingfive">
                <button
                  class="accordion-button collapsed color-white font-anton fw-400 mb-0 text-20 lh-26"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapsefive"
                  aria-expanded="false"
                  aria-controls="flush-collapsefive"
                >
                  ¿Qué métodos de pago aceptan?
                </button>
              </h2>
              <div
                id="flush-collapsefive"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingfive"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body  font-inter fw-500 text-16 lh-25 mb-0 opacity-8">
                  En Exclusive Games, ofrecemos experiencias únicas y
                  personalizadas, respaldadas por más de 15 años de{" "}
                  <span className=" d-lg-block">
                    {" "}
                    dedicación al desarrollo de multiplataformas para juegos de
                    azar.
                  </span>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingsix">
                <button
                  class="accordion-button collapsed color-white font-anton fw-400 mb-0 text-20 lh-26"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapsesix"
                  aria-expanded="false"
                  aria-controls="flush-collapsesix"
                >
                  ¿Puedo probar sus juegos antes de comprometerme?
                </button>
              </h2>
              <div
                id="flush-collapsesix"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingsix"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body  font-inter fw-500 text-16 lh-25 mb-0 opacity-8">
                  En Exclusive Games, ofrecemos experiencias únicas y
                  personalizadas, respaldadas por más de 15 años de{" "}
                  <span className=" d-lg-block">
                    {" "}
                    dedicación al desarrollo de multiplataformas para juegos de
                    azar.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Silverlayer;
