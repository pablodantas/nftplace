// import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, EffectCoverflow, Ally } from "swiper";
import "tippy.js/dist/tippy.css";
import Link from "next/link";
import Like from "./like";
import ComentsPost from "./comentarios/comentsPost";

const Feed_carousel = () => {
  return (
    <div className="overflow-hidden relative">
      <Swiper
        slidesPerView="auto"
        spaceBetween={190}
        autoplay={true}
        loop={true}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        navigation={{
          nextEl: ".swiper-button-next-4",
          prevEl: ".swiper-button-prev-4",
        }}
        breakpoints={{
          // when window width is >= 640px
          100: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 768px
          700: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          900: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 100,
          },
          1300: {
            slidesPerView: 3,
            spaceBetween: 200,
          },
        }}
        className="card-slider-4-columns !py-5 w-full h-655"
        // style={{ transform: "scaleX(1.2)" }}
      >
        <SwiperSlide>
          <Link href={"#"}>
              <div className="col cardpost card-m">
                <div className="row flex">
                  <div className="col">
                    <div className="row flex flex-col">
                      <div className="col p-0">
                        <div className="row flex flex-row">
                          <div className="col-auto flex items-start">
                            <div className="mt-4"></div>
                          </div>
                          <div className="col flex justify-between ">
                            {/* <Seguir /> */}
                          </div>
                        </div>
                      </div>
                      <div className="col flex items-center">
                        <div className="row flex flex-col">
                          <div className="col mt-2 mx-w">
                            <p className="textpost dark:text-white name_light"></p>
                          </div>
                          <div className="col mx-w">
                            <div className="row flex col-reverse_500">
                              <div className="col relative col_img_feed">
                                <article className="article_card">
                                  <div className="rounded-2xl overflow-hidden transition-shadow hover:shadow-lg">
                                    <figure className="group overflow-hidden ">
                                      <a href="/single_post/post_1">
                                        <img
                                          src="/images/Doodles-Guide-Feature-Image.png"
                                          alt="Mint your own Tezos collections"
                                          className="h-full w-full object-cover transition-transform duration-[1600ms] will-change-transform group-hover:scale-105 "
                                        />
                                      </a>
                                    </figure>
                                    <div className="dark:border-jacarta-600 dark:bg-jacarta-700 border-jacarta-100 rounded-b-[1.25rem] border border-t-0 bg-white p-5_c">
                                      <div className="mb-3 flex flex-wrap items-center space-x-1">
                                        <a
                                          href="#"
                                          className="dark:text-jacarta-200 text-jacarta-700 font-display hover:text-accent"
                                        >
                                          <div className="imgBorder mr-2">
                                            <img
                                              className="imgPostAuthor"
                                              src="https://ipfs.moralis.io:2053/ipfs/QmUkjfws5aESgu1XUNenpUU159zQvxytSQ5R1wJmGKwwUv/ipfs.jpg"
                                              alt="owner"
                                            />
                                          </div>
                                        </a>
                                        <span className="text-accent inline-flex flex-wrap items-center space-x-1">
                                          <a href="#" className="text_user">
                                            NFTplace
                                          </a>
                                        </span>
                                        <div className="col flex items-center flex-w-col items-center">
                                          <p className="ml-2 mb-0 flex">
                                            <small className="text-truncate ml-1 max-w-[10rem] select-none overflow-hidden">
                                              0x587505062217ddf512d13c2e514b69af0cb7cddc
                                            </small>
                                          </p>
                                          <button className="btn feedBtn rounded-pill flex p-1 ml-1">
                                            <svg
                                              width="11"
                                              height="11"
                                              viewBox="0 0 11 11"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                d="M7.07916 1.92382H1.9655C1.48567 1.92382 1.09595 2.31354 1.09595 2.79337V10.1305C1.09595 10.6103 1.48567 11 1.9655 11H7.07916C7.55898 11 7.94871 10.6103 7.94871 10.1305V2.79337C7.94646 2.31354 7.55673 1.92382 7.07916 1.92382ZM7.33821 10.1282C7.33821 10.2724 7.22106 10.3895 7.07691 10.3895H1.96324C1.81907 10.3895 1.70193 10.2724 1.70193 10.1282V2.79337C1.70193 2.6492 1.81907 2.53206 1.96324 2.53206H7.07691C7.22106 2.53206 7.33821 2.6492 7.33821 2.79337V10.1282Z"
                                                fill="#959595"
                                              />
                                              <path
                                                d="M9.03452 0H3.92085C3.44102 0 3.0513 0.38972 3.0513 0.86955C3.0513 1.0385 3.18646 1.17366 3.35542 1.17366C3.52437 1.17366 3.65953 1.0385 3.65953 0.86955C3.65953 0.725373 3.77667 0.608234 3.92085 0.608234H9.03452C9.17867 0.608234 9.29582 0.725373 9.29582 0.86955V8.20666C9.29582 8.35081 9.17867 8.46797 9.03452 8.46797C8.86556 8.46797 8.73037 8.6031 8.73037 8.77206C8.73037 8.94102 8.86556 9.07616 9.03452 9.07616C9.51434 9.07616 9.90407 8.68648 9.90407 8.20666V0.86955C9.90407 0.38972 9.51434 0 9.03452 0Z"
                                                fill="#959595"
                                              />
                                            </svg>
                                          </button>
                                        </div>
                                      </div>
                                      <h2 className="font-display text-jacarta-700 dark:hover:text-accent hover:text-accent mb-4 text-xl dark:text-white">
                                        <a href="/single_post/post_1">
                                          Mint your own Tezos collections
                                        </a>
                                      </h2>
                                      <p className="dark:text-jacarta-200 mb-8">
                                        Since we launched Tezos at the end of
                                        2021, many awesome creators...
                                      </p>
                                      <div className="text-jacarta-400 flex flex-wrap items-center space-x-2 text-sm">
                                        <span>
                                          <time>5 Feb</time>
                                        </span>
                                        <span>•</span>
                                        <span>3 min read</span>
                                      </div>
                                    </div>
                                  </div>
                                </article>
                              </div>
                              <div className="col-auto ml-3 mt-3">
                                <div className="row flex flex-col rever-col gap-3">
                                  <Like />
                                  <div className="col mb-3 mw-100">
                                    <div className="row flex flex-col flex-center-500">
                                      <button className="col-auto feedBtn btn rounded-pill p-4 bgbuttons dark:bg-jacarta-900">
                                        <svg
                                          width="33"
                                          height="33"
                                          viewBox="0 0 33 33"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M24.398 14.1764C23.1085 14.1764 22.1094 15.1674 22.1094 16.3909C22.1094 17.6144 23.1085 18.6055 24.398 18.6055C25.5758 18.6055 26.575 17.6144 26.575 16.3909C26.575 15.1674 25.5758 14.1764 24.398 14.1764ZM8.76836 14.1764C7.47892 14.1764 6.47974 15.1674 6.47974 16.3909C6.47974 17.6144 7.47892 18.6055 8.76836 18.6055C9.94617 18.6055 10.9453 17.6144 10.9453 16.3909C10.9453 15.1674 9.94617 14.1764 8.76836 14.1764Z"
                                            fill="#959595"
                                          />
                                          <path
                                            d="M9.47654 30.3287L5.23386 31.6464L5.19107 27.2325L5.18742 26.8555L4.93581 26.5748L4.50283 26.0916C0.0805632 20.7273 -0.20586 13.01 3.93684 7.34913C8.99283 0.473154 18.6877 -1.04636 25.6001 3.91528C32.5328 8.91422 34.061 18.4999 29.0619 25.3222C24.864 31.0338 17.3459 33.1501 10.8141 30.6319L10.1551 30.3595L9.82136 30.2216L9.47654 30.3287Z"
                                            stroke="#959595"
                                            strokeWidth="2"
                                          />
                                          <path
                                            d="M16.5832 14.1764C15.2937 14.1764 14.2946 15.1674 14.2946 16.3909C14.2946 17.6144 15.2937 18.6055 16.5832 18.6055C17.761 18.6055 18.7602 17.6144 18.7602 16.3909C18.7602 15.1674 17.761 14.1764 16.5832 14.1764Z"
                                            fill="#959595"
                                          />
                                        </svg>
                                      </button>
                                      <div className="col pt-1 text-center dark:text-white name_light ">
                                        <p className="grayfeed mb-0">
                                          <ComentsPost />
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row flex flex-col flex-center-500">
                                    <button className="col-auto feedBtn btn rounded-pill p-4 bgbuttons dark:bg-jacarta-900">
                                      <svg
                                        width="31"
                                        height="31"
                                        viewBox="0 0 31 31"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <g clipPath="url(#clip0_618_47)">
                                          <path
                                            d="M0.436351 26.7541C2.43852 19.53 6.49952 14.4257 12.4259 11.6881C14.2196 10.8842 16.3094 10.2418 18.4901 9.86122L18.6515 9.8377C19.1454 9.8377 19.1475 9.82274 19.1475 6.25453V2.67242L31.3829 14.9078L19.1475 27.1432V19.979H17.6595C13.6114 20.073 9.81332 21.0554 6.4247 22.7369L6.5797 22.6674C4.61708 23.8134 2.93452 25.1763 1.48394 26.7562L1.47004 26.7723L0.00128174 28.3265L0.43742 26.753L0.436351 26.7541Z"
                                            fill="#959595"
                                          />
                                        </g>
                                        <defs>
                                          <clipPath id="clip0_618_47">
                                            <rect
                                              width="31"
                                              height="31"
                                              fill="white"
                                            />
                                          </clipPath>
                                        </defs>
                                      </svg>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col flex justify-content-start mt-2"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"#"}>
              <div className="col cardpost card-m">
                <div className="row flex">
                  <div className="col">
                    <div className="row flex flex-col">
                      <div className="col p-0">
                        <div className="row flex flex-row">
                          <div className="col-auto flex items-start">
                            <div className="mt-4"></div>
                          </div>
                          <div className="col flex justify-between ">
                            {/* <Seguir /> */}
                          </div>
                        </div>
                      </div>
                      <div className="col flex items-center">
                        <div className="row flex flex-col">
                          <div className="col mt-2 mx-w">
                            <p className="textpost dark:text-white name_light"></p>
                          </div>
                          <div className="col mx-w">
                            <div className="row flex col-reverse_500">
                              <div className="col relative col_img_feed">
                                <article className="article_card">
                                  <div className="rounded-2xl overflow-hidden transition-shadow hover:shadow-lg">
                                    <figure className="group overflow-hidden ">
                                      <a href="/single_post/post_1">
                                        <img
                                          src="/images/Doodles-Guide-Feature-Image.png"
                                          alt="Mint your own Tezos collections"
                                          className="h-full w-full object-cover transition-transform duration-[1600ms] will-change-transform group-hover:scale-105 "
                                        />
                                      </a>
                                    </figure>
                                    <div className="dark:border-jacarta-600 dark:bg-jacarta-700 border-jacarta-100 rounded-b-[1.25rem] border border-t-0 bg-white p-5_c">
                                      <div className="mb-3 flex flex-wrap items-center space-x-1">
                                        <a
                                          href="#"
                                          className="dark:text-jacarta-200 text-jacarta-700 font-display hover:text-accent"
                                        >
                                          <div className="imgBorder mr-2">
                                            <img
                                              className="imgPostAuthor"
                                              src="https://ipfs.moralis.io:2053/ipfs/QmUkjfws5aESgu1XUNenpUU159zQvxytSQ5R1wJmGKwwUv/ipfs.jpg"
                                              alt="owner"
                                            />
                                          </div>
                                        </a>
                                        <span className="text-accent inline-flex flex-wrap items-center space-x-1">
                                          <a href="#" className="text_user">
                                            NFTplace
                                          </a>
                                        </span>
                                        <div className="col flex items-center flex-w-col items-center">
                                          <p className="ml-2 mb-0 flex">
                                            <small className="text-truncate ml-1 max-w-[10rem] select-none overflow-hidden">
                                              0x587505062217ddf512d13c2e514b69af0cb7cddc
                                            </small>
                                          </p>
                                          <button className="btn feedBtn rounded-pill flex p-1 ml-1">
                                            <svg
                                              width="11"
                                              height="11"
                                              viewBox="0 0 11 11"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                d="M7.07916 1.92382H1.9655C1.48567 1.92382 1.09595 2.31354 1.09595 2.79337V10.1305C1.09595 10.6103 1.48567 11 1.9655 11H7.07916C7.55898 11 7.94871 10.6103 7.94871 10.1305V2.79337C7.94646 2.31354 7.55673 1.92382 7.07916 1.92382ZM7.33821 10.1282C7.33821 10.2724 7.22106 10.3895 7.07691 10.3895H1.96324C1.81907 10.3895 1.70193 10.2724 1.70193 10.1282V2.79337C1.70193 2.6492 1.81907 2.53206 1.96324 2.53206H7.07691C7.22106 2.53206 7.33821 2.6492 7.33821 2.79337V10.1282Z"
                                                fill="#959595"
                                              />
                                              <path
                                                d="M9.03452 0H3.92085C3.44102 0 3.0513 0.38972 3.0513 0.86955C3.0513 1.0385 3.18646 1.17366 3.35542 1.17366C3.52437 1.17366 3.65953 1.0385 3.65953 0.86955C3.65953 0.725373 3.77667 0.608234 3.92085 0.608234H9.03452C9.17867 0.608234 9.29582 0.725373 9.29582 0.86955V8.20666C9.29582 8.35081 9.17867 8.46797 9.03452 8.46797C8.86556 8.46797 8.73037 8.6031 8.73037 8.77206C8.73037 8.94102 8.86556 9.07616 9.03452 9.07616C9.51434 9.07616 9.90407 8.68648 9.90407 8.20666V0.86955C9.90407 0.38972 9.51434 0 9.03452 0Z"
                                                fill="#959595"
                                              />
                                            </svg>
                                          </button>
                                        </div>
                                      </div>
                                      <h2 className="font-display text-jacarta-700 dark:hover:text-accent hover:text-accent mb-4 text-xl dark:text-white">
                                        <a href="/single_post/post_1">
                                          Mint your own Tezos collections
                                        </a>
                                      </h2>
                                      <p className="dark:text-jacarta-200 mb-8">
                                        Since we launched Tezos at the end of
                                        2021, many awesome creators...
                                      </p>
                                      <div className="text-jacarta-400 flex flex-wrap items-center space-x-2 text-sm">
                                        <span>
                                          <time>5 Feb</time>
                                        </span>
                                        <span>•</span>
                                        <span>3 min read</span>
                                      </div>
                                    </div>
                                  </div>
                                </article>
                              </div>
                              <div className="col-auto ml-3 mt-3">
                                <div className="row flex flex-col rever-col gap-3">
                                  <Like />
                                  <div className="col mb-3 mw-100">
                                    <div className="row flex flex-col flex-center-500">
                                      <button className="col-auto feedBtn btn rounded-pill p-4 bgbuttons dark:bg-jacarta-900">
                                        <svg
                                          width="33"
                                          height="33"
                                          viewBox="0 0 33 33"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M24.398 14.1764C23.1085 14.1764 22.1094 15.1674 22.1094 16.3909C22.1094 17.6144 23.1085 18.6055 24.398 18.6055C25.5758 18.6055 26.575 17.6144 26.575 16.3909C26.575 15.1674 25.5758 14.1764 24.398 14.1764ZM8.76836 14.1764C7.47892 14.1764 6.47974 15.1674 6.47974 16.3909C6.47974 17.6144 7.47892 18.6055 8.76836 18.6055C9.94617 18.6055 10.9453 17.6144 10.9453 16.3909C10.9453 15.1674 9.94617 14.1764 8.76836 14.1764Z"
                                            fill="#959595"
                                          />
                                          <path
                                            d="M9.47654 30.3287L5.23386 31.6464L5.19107 27.2325L5.18742 26.8555L4.93581 26.5748L4.50283 26.0916C0.0805632 20.7273 -0.20586 13.01 3.93684 7.34913C8.99283 0.473154 18.6877 -1.04636 25.6001 3.91528C32.5328 8.91422 34.061 18.4999 29.0619 25.3222C24.864 31.0338 17.3459 33.1501 10.8141 30.6319L10.1551 30.3595L9.82136 30.2216L9.47654 30.3287Z"
                                            stroke="#959595"
                                            strokeWidth="2"
                                          />
                                          <path
                                            d="M16.5832 14.1764C15.2937 14.1764 14.2946 15.1674 14.2946 16.3909C14.2946 17.6144 15.2937 18.6055 16.5832 18.6055C17.761 18.6055 18.7602 17.6144 18.7602 16.3909C18.7602 15.1674 17.761 14.1764 16.5832 14.1764Z"
                                            fill="#959595"
                                          />
                                        </svg>
                                      </button>
                                      <div className="col pt-1 text-center dark:text-white name_light ">
                                        <p className="grayfeed mb-0">
                                          <ComentsPost />
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row flex flex-col flex-center-500">
                                    <button className="col-auto feedBtn btn rounded-pill p-4 bgbuttons dark:bg-jacarta-900">
                                      <svg
                                        width="31"
                                        height="31"
                                        viewBox="0 0 31 31"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <g clipPath="url(#clip0_618_47)">
                                          <path
                                            d="M0.436351 26.7541C2.43852 19.53 6.49952 14.4257 12.4259 11.6881C14.2196 10.8842 16.3094 10.2418 18.4901 9.86122L18.6515 9.8377C19.1454 9.8377 19.1475 9.82274 19.1475 6.25453V2.67242L31.3829 14.9078L19.1475 27.1432V19.979H17.6595C13.6114 20.073 9.81332 21.0554 6.4247 22.7369L6.5797 22.6674C4.61708 23.8134 2.93452 25.1763 1.48394 26.7562L1.47004 26.7723L0.00128174 28.3265L0.43742 26.753L0.436351 26.7541Z"
                                            fill="#959595"
                                          />
                                        </g>
                                        <defs>
                                          <clipPath id="clip0_618_47">
                                            <rect
                                              width="31"
                                              height="31"
                                              fill="white"
                                            />
                                          </clipPath>
                                        </defs>
                                      </svg>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col flex justify-content-start mt-2"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"#"}>
              <div className="col cardpost card-m">
                <div className="row flex">
                  <div className="col">
                    <div className="row flex flex-col">
                      <div className="col p-0">
                        <div className="row flex flex-row">
                          <div className="col-auto flex items-start">
                            <div className="mt-4"></div>
                          </div>
                          <div className="col flex justify-between ">
                            {/* <Seguir /> */}
                          </div>
                        </div>
                      </div>
                      <div className="col flex items-center">
                        <div className="row flex flex-col">
                          <div className="col mt-2 mx-w">
                            <p className="textpost dark:text-white name_light"></p>
                          </div>
                          <div className="col mx-w">
                            <div className="row flex col-reverse_500">
                              <div className="col relative col_img_feed">
                                <article className="article_card">
                                  <div className="rounded-2xl overflow-hidden transition-shadow hover:shadow-lg">
                                    <figure className="group overflow-hidden ">
                                      <a href="/single_post/post_1">
                                        <img
                                          src="/images/Doodles-Guide-Feature-Image.png"
                                          alt="Mint your own Tezos collections"
                                          className="h-full w-full object-cover transition-transform duration-[1600ms] will-change-transform group-hover:scale-105 "
                                        />
                                      </a>
                                    </figure>
                                    <div className="dark:border-jacarta-600 dark:bg-jacarta-700 border-jacarta-100 rounded-b-[1.25rem] border border-t-0 bg-white p-5_c">
                                      <div className="mb-3 flex flex-wrap items-center space-x-1">
                                        <a
                                          href="#"
                                          className="dark:text-jacarta-200 text-jacarta-700 font-display hover:text-accent"
                                        >
                                          <div className="imgBorder mr-2">
                                            <img
                                              className="imgPostAuthor"
                                              src="https://ipfs.moralis.io:2053/ipfs/QmUkjfws5aESgu1XUNenpUU159zQvxytSQ5R1wJmGKwwUv/ipfs.jpg"
                                              alt="owner"
                                            />
                                          </div>
                                        </a>
                                        <span className="text-accent inline-flex flex-wrap items-center space-x-1">
                                          <a href="#" className="text_user">
                                            NFTplace
                                          </a>
                                        </span>
                                        <div className="col flex items-center flex-w-col items-center">
                                          <p className="ml-2 mb-0 flex">
                                            <small className="text-truncate ml-1 max-w-[10rem] select-none overflow-hidden">
                                              0x587505062217ddf512d13c2e514b69af0cb7cddc
                                            </small>
                                          </p>
                                          <button className="btn feedBtn rounded-pill flex p-1 ml-1">
                                            <svg
                                              width="11"
                                              height="11"
                                              viewBox="0 0 11 11"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                d="M7.07916 1.92382H1.9655C1.48567 1.92382 1.09595 2.31354 1.09595 2.79337V10.1305C1.09595 10.6103 1.48567 11 1.9655 11H7.07916C7.55898 11 7.94871 10.6103 7.94871 10.1305V2.79337C7.94646 2.31354 7.55673 1.92382 7.07916 1.92382ZM7.33821 10.1282C7.33821 10.2724 7.22106 10.3895 7.07691 10.3895H1.96324C1.81907 10.3895 1.70193 10.2724 1.70193 10.1282V2.79337C1.70193 2.6492 1.81907 2.53206 1.96324 2.53206H7.07691C7.22106 2.53206 7.33821 2.6492 7.33821 2.79337V10.1282Z"
                                                fill="#959595"
                                              />
                                              <path
                                                d="M9.03452 0H3.92085C3.44102 0 3.0513 0.38972 3.0513 0.86955C3.0513 1.0385 3.18646 1.17366 3.35542 1.17366C3.52437 1.17366 3.65953 1.0385 3.65953 0.86955C3.65953 0.725373 3.77667 0.608234 3.92085 0.608234H9.03452C9.17867 0.608234 9.29582 0.725373 9.29582 0.86955V8.20666C9.29582 8.35081 9.17867 8.46797 9.03452 8.46797C8.86556 8.46797 8.73037 8.6031 8.73037 8.77206C8.73037 8.94102 8.86556 9.07616 9.03452 9.07616C9.51434 9.07616 9.90407 8.68648 9.90407 8.20666V0.86955C9.90407 0.38972 9.51434 0 9.03452 0Z"
                                                fill="#959595"
                                              />
                                            </svg>
                                          </button>
                                        </div>
                                      </div>
                                      <h2 className="font-display text-jacarta-700 dark:hover:text-accent hover:text-accent mb-4 text-xl dark:text-white">
                                        <a href="/single_post/post_1">
                                          Mint your own Tezos collections
                                        </a>
                                      </h2>
                                      <p className="dark:text-jacarta-200 mb-8">
                                        Since we launched Tezos at the end of
                                        2021, many awesome creators...
                                      </p>
                                      <div className="text-jacarta-400 flex flex-wrap items-center space-x-2 text-sm">
                                        <span>
                                          <time>5 Feb</time>
                                        </span>
                                        <span>•</span>
                                        <span>3 min read</span>
                                      </div>
                                    </div>
                                  </div>
                                </article>
                              </div>
                              <div className="col-auto ml-3 mt-3">
                                <div className="row flex flex-col rever-col gap-3">
                                  <Like />
                                  <div className="col mb-3 mw-100">
                                    <div className="row flex flex-col flex-center-500">
                                      <button className="col-auto feedBtn btn rounded-pill p-4 bgbuttons dark:bg-jacarta-900">
                                        <svg
                                          width="33"
                                          height="33"
                                          viewBox="0 0 33 33"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M24.398 14.1764C23.1085 14.1764 22.1094 15.1674 22.1094 16.3909C22.1094 17.6144 23.1085 18.6055 24.398 18.6055C25.5758 18.6055 26.575 17.6144 26.575 16.3909C26.575 15.1674 25.5758 14.1764 24.398 14.1764ZM8.76836 14.1764C7.47892 14.1764 6.47974 15.1674 6.47974 16.3909C6.47974 17.6144 7.47892 18.6055 8.76836 18.6055C9.94617 18.6055 10.9453 17.6144 10.9453 16.3909C10.9453 15.1674 9.94617 14.1764 8.76836 14.1764Z"
                                            fill="#959595"
                                          />
                                          <path
                                            d="M9.47654 30.3287L5.23386 31.6464L5.19107 27.2325L5.18742 26.8555L4.93581 26.5748L4.50283 26.0916C0.0805632 20.7273 -0.20586 13.01 3.93684 7.34913C8.99283 0.473154 18.6877 -1.04636 25.6001 3.91528C32.5328 8.91422 34.061 18.4999 29.0619 25.3222C24.864 31.0338 17.3459 33.1501 10.8141 30.6319L10.1551 30.3595L9.82136 30.2216L9.47654 30.3287Z"
                                            stroke="#959595"
                                            strokeWidth="2"
                                          />
                                          <path
                                            d="M16.5832 14.1764C15.2937 14.1764 14.2946 15.1674 14.2946 16.3909C14.2946 17.6144 15.2937 18.6055 16.5832 18.6055C17.761 18.6055 18.7602 17.6144 18.7602 16.3909C18.7602 15.1674 17.761 14.1764 16.5832 14.1764Z"
                                            fill="#959595"
                                          />
                                        </svg>
                                      </button>
                                      <div className="col pt-1 text-center dark:text-white name_light ">
                                        <p className="grayfeed mb-0">
                                          <ComentsPost />
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row flex flex-col flex-center-500">
                                    <button className="col-auto feedBtn btn rounded-pill p-4 bgbuttons dark:bg-jacarta-900">
                                      <svg
                                        width="31"
                                        height="31"
                                        viewBox="0 0 31 31"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <g clipPath="url(#clip0_618_47)">
                                          <path
                                            d="M0.436351 26.7541C2.43852 19.53 6.49952 14.4257 12.4259 11.6881C14.2196 10.8842 16.3094 10.2418 18.4901 9.86122L18.6515 9.8377C19.1454 9.8377 19.1475 9.82274 19.1475 6.25453V2.67242L31.3829 14.9078L19.1475 27.1432V19.979H17.6595C13.6114 20.073 9.81332 21.0554 6.4247 22.7369L6.5797 22.6674C4.61708 23.8134 2.93452 25.1763 1.48394 26.7562L1.47004 26.7723L0.00128174 28.3265L0.43742 26.753L0.436351 26.7541Z"
                                            fill="#959595"
                                          />
                                        </g>
                                        <defs>
                                          <clipPath id="clip0_618_47">
                                            <rect
                                              width="31"
                                              height="31"
                                              fill="white"
                                            />
                                          </clipPath>
                                        </defs>
                                      </svg>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col flex justify-content-start mt-2"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </Link>
        </SwiperSlide>
         <SwiperSlide>
          <Link href={"#"}>
              <div className="col cardpost card-m">
                <div className="row flex">
                  <div className="col">
                    <div className="row flex flex-col">
                      <div className="col p-0">
                        <div className="row flex flex-row">
                          <div className="col-auto flex items-start">
                            <div className="mt-4"></div>
                          </div>
                          <div className="col flex justify-between ">
                            {/* <Seguir /> */}
                          </div>
                        </div>
                      </div>
                      <div className="col flex items-center">
                        <div className="row flex flex-col">
                          <div className="col mt-2 mx-w">
                            <p className="textpost dark:text-white name_light"></p>
                          </div>
                          <div className="col mx-w">
                            <div className="row flex col-reverse_500">
                              <div className="col relative col_img_feed">
                                <article className="article_card">
                                  <div className="rounded-2xl overflow-hidden transition-shadow hover:shadow-lg">
                                    <figure className="group overflow-hidden ">
                                      <a href="/single_post/post_1">
                                        <img
                                          src="/images/Doodles-Guide-Feature-Image.png"
                                          alt="Mint your own Tezos collections"
                                          className="h-full w-full object-cover transition-transform duration-[1600ms] will-change-transform group-hover:scale-105 "
                                        />
                                      </a>
                                    </figure>
                                    <div className="dark:border-jacarta-600 dark:bg-jacarta-700 border-jacarta-100 rounded-b-[1.25rem] border border-t-0 bg-white p-5_c">
                                      <div className="mb-3 flex flex-wrap items-center space-x-1">
                                        <a
                                          href="#"
                                          className="dark:text-jacarta-200 text-jacarta-700 font-display hover:text-accent"
                                        >
                                          <div className="imgBorder mr-2">
                                            <img
                                              className="imgPostAuthor"
                                              src="https://ipfs.moralis.io:2053/ipfs/QmUkjfws5aESgu1XUNenpUU159zQvxytSQ5R1wJmGKwwUv/ipfs.jpg"
                                              alt="owner"
                                            />
                                          </div>
                                        </a>
                                        <span className="text-accent inline-flex flex-wrap items-center space-x-1">
                                          <a href="#" className="text_user">
                                            NFTplace
                                          </a>
                                        </span>
                                        <div className="col flex items-center flex-w-col items-center">
                                          <p className="ml-2 mb-0 flex">
                                            <small className="text-truncate ml-1 max-w-[10rem] select-none overflow-hidden">
                                              0x587505062217ddf512d13c2e514b69af0cb7cddc
                                            </small>
                                          </p>
                                          <button className="btn feedBtn rounded-pill flex p-1 ml-1">
                                            <svg
                                              width="11"
                                              height="11"
                                              viewBox="0 0 11 11"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                d="M7.07916 1.92382H1.9655C1.48567 1.92382 1.09595 2.31354 1.09595 2.79337V10.1305C1.09595 10.6103 1.48567 11 1.9655 11H7.07916C7.55898 11 7.94871 10.6103 7.94871 10.1305V2.79337C7.94646 2.31354 7.55673 1.92382 7.07916 1.92382ZM7.33821 10.1282C7.33821 10.2724 7.22106 10.3895 7.07691 10.3895H1.96324C1.81907 10.3895 1.70193 10.2724 1.70193 10.1282V2.79337C1.70193 2.6492 1.81907 2.53206 1.96324 2.53206H7.07691C7.22106 2.53206 7.33821 2.6492 7.33821 2.79337V10.1282Z"
                                                fill="#959595"
                                              />
                                              <path
                                                d="M9.03452 0H3.92085C3.44102 0 3.0513 0.38972 3.0513 0.86955C3.0513 1.0385 3.18646 1.17366 3.35542 1.17366C3.52437 1.17366 3.65953 1.0385 3.65953 0.86955C3.65953 0.725373 3.77667 0.608234 3.92085 0.608234H9.03452C9.17867 0.608234 9.29582 0.725373 9.29582 0.86955V8.20666C9.29582 8.35081 9.17867 8.46797 9.03452 8.46797C8.86556 8.46797 8.73037 8.6031 8.73037 8.77206C8.73037 8.94102 8.86556 9.07616 9.03452 9.07616C9.51434 9.07616 9.90407 8.68648 9.90407 8.20666V0.86955C9.90407 0.38972 9.51434 0 9.03452 0Z"
                                                fill="#959595"
                                              />
                                            </svg>
                                          </button>
                                        </div>
                                      </div>
                                      <h2 className="font-display text-jacarta-700 dark:hover:text-accent hover:text-accent mb-4 text-xl dark:text-white">
                                        <a href="/single_post/post_1">
                                          Mint your own Tezos collections
                                        </a>
                                      </h2>
                                      <p className="dark:text-jacarta-200 mb-8">
                                        Since we launched Tezos at the end of
                                        2021, many awesome creators...
                                      </p>
                                      <div className="text-jacarta-400 flex flex-wrap items-center space-x-2 text-sm">
                                        <span>
                                          <time>5 Feb</time>
                                        </span>
                                        <span>•</span>
                                        <span>3 min read</span>
                                      </div>
                                    </div>
                                  </div>
                                </article>
                              </div>
                              <div className="col-auto ml-3 mt-3">
                                <div className="row flex flex-col rever-col gap-3">
                                  <Like />
                                  <div className="col mb-3 mw-100">
                                    <div className="row flex flex-col flex-center-500">
                                      <button className="col-auto feedBtn btn rounded-pill p-4 bgbuttons dark:bg-jacarta-900">
                                        <svg
                                          width="33"
                                          height="33"
                                          viewBox="0 0 33 33"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M24.398 14.1764C23.1085 14.1764 22.1094 15.1674 22.1094 16.3909C22.1094 17.6144 23.1085 18.6055 24.398 18.6055C25.5758 18.6055 26.575 17.6144 26.575 16.3909C26.575 15.1674 25.5758 14.1764 24.398 14.1764ZM8.76836 14.1764C7.47892 14.1764 6.47974 15.1674 6.47974 16.3909C6.47974 17.6144 7.47892 18.6055 8.76836 18.6055C9.94617 18.6055 10.9453 17.6144 10.9453 16.3909C10.9453 15.1674 9.94617 14.1764 8.76836 14.1764Z"
                                            fill="#959595"
                                          />
                                          <path
                                            d="M9.47654 30.3287L5.23386 31.6464L5.19107 27.2325L5.18742 26.8555L4.93581 26.5748L4.50283 26.0916C0.0805632 20.7273 -0.20586 13.01 3.93684 7.34913C8.99283 0.473154 18.6877 -1.04636 25.6001 3.91528C32.5328 8.91422 34.061 18.4999 29.0619 25.3222C24.864 31.0338 17.3459 33.1501 10.8141 30.6319L10.1551 30.3595L9.82136 30.2216L9.47654 30.3287Z"
                                            stroke="#959595"
                                            strokeWidth="2"
                                          />
                                          <path
                                            d="M16.5832 14.1764C15.2937 14.1764 14.2946 15.1674 14.2946 16.3909C14.2946 17.6144 15.2937 18.6055 16.5832 18.6055C17.761 18.6055 18.7602 17.6144 18.7602 16.3909C18.7602 15.1674 17.761 14.1764 16.5832 14.1764Z"
                                            fill="#959595"
                                          />
                                        </svg>
                                      </button>
                                      <div className="col pt-1 text-center dark:text-white name_light ">
                                        <p className="grayfeed mb-0">
                                          <ComentsPost />
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row flex flex-col flex-center-500">
                                    <button className="col-auto feedBtn btn rounded-pill p-4 bgbuttons dark:bg-jacarta-900">
                                      <svg
                                        width="31"
                                        height="31"
                                        viewBox="0 0 31 31"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <g clipPath="url(#clip0_618_47)">
                                          <path
                                            d="M0.436351 26.7541C2.43852 19.53 6.49952 14.4257 12.4259 11.6881C14.2196 10.8842 16.3094 10.2418 18.4901 9.86122L18.6515 9.8377C19.1454 9.8377 19.1475 9.82274 19.1475 6.25453V2.67242L31.3829 14.9078L19.1475 27.1432V19.979H17.6595C13.6114 20.073 9.81332 21.0554 6.4247 22.7369L6.5797 22.6674C4.61708 23.8134 2.93452 25.1763 1.48394 26.7562L1.47004 26.7723L0.00128174 28.3265L0.43742 26.753L0.436351 26.7541Z"
                                            fill="#959595"
                                          />
                                        </g>
                                        <defs>
                                          <clipPath id="clip0_618_47">
                                            <rect
                                              width="31"
                                              height="31"
                                              fill="white"
                                            />
                                          </clipPath>
                                        </defs>
                                      </svg>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col flex justify-content-start mt-2"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </Link>
        </SwiperSlide>
         <SwiperSlide>
          <Link href={"#"}>
              <div className="col cardpost card-m">
                <div className="row flex">
                  <div className="col">
                    <div className="row flex flex-col">
                      <div className="col p-0">
                        <div className="row flex flex-row">
                          <div className="col-auto flex items-start">
                            <div className="mt-4"></div>
                          </div>
                          <div className="col flex justify-between ">
                            {/* <Seguir /> */}
                          </div>
                        </div>
                      </div>
                      <div className="col flex items-center">
                        <div className="row flex flex-col">
                          <div className="col mt-2 mx-w">
                            <p className="textpost dark:text-white name_light"></p>
                          </div>
                          <div className="col mx-w">
                            <div className="row flex col-reverse_500">
                              <div className="col relative col_img_feed">
                                <article className="article_card">
                                  <div className="rounded-2xl overflow-hidden transition-shadow hover:shadow-lg">
                                    <figure className="group overflow-hidden ">
                                      <a href="/single_post/post_1">
                                        <img
                                          src="/images/Doodles-Guide-Feature-Image.png"
                                          alt="Mint your own Tezos collections"
                                          className="h-full w-full object-cover transition-transform duration-[1600ms] will-change-transform group-hover:scale-105 "
                                        />
                                      </a>
                                    </figure>
                                    <div className="dark:border-jacarta-600 dark:bg-jacarta-700 border-jacarta-100 rounded-b-[1.25rem] border border-t-0 bg-white p-5_c">
                                      <div className="mb-3 flex flex-wrap items-center space-x-1">
                                        <a
                                          href="#"
                                          className="dark:text-jacarta-200 text-jacarta-700 font-display hover:text-accent"
                                        >
                                          <div className="imgBorder mr-2">
                                            <img
                                              className="imgPostAuthor"
                                              src="https://ipfs.moralis.io:2053/ipfs/QmUkjfws5aESgu1XUNenpUU159zQvxytSQ5R1wJmGKwwUv/ipfs.jpg"
                                              alt="owner"
                                            />
                                          </div>
                                        </a>
                                        <span className="text-accent inline-flex flex-wrap items-center space-x-1">
                                          <a href="#" className="text_user">
                                            NFTplace
                                          </a>
                                        </span>
                                        <div className="col flex items-center flex-w-col items-center">
                                          <p className="ml-2 mb-0 flex">
                                            <small className="text-truncate ml-1 max-w-[10rem] select-none overflow-hidden">
                                              0x587505062217ddf512d13c2e514b69af0cb7cddc
                                            </small>
                                          </p>
                                          <button className="btn feedBtn rounded-pill flex p-1 ml-1">
                                            <svg
                                              width="11"
                                              height="11"
                                              viewBox="0 0 11 11"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                d="M7.07916 1.92382H1.9655C1.48567 1.92382 1.09595 2.31354 1.09595 2.79337V10.1305C1.09595 10.6103 1.48567 11 1.9655 11H7.07916C7.55898 11 7.94871 10.6103 7.94871 10.1305V2.79337C7.94646 2.31354 7.55673 1.92382 7.07916 1.92382ZM7.33821 10.1282C7.33821 10.2724 7.22106 10.3895 7.07691 10.3895H1.96324C1.81907 10.3895 1.70193 10.2724 1.70193 10.1282V2.79337C1.70193 2.6492 1.81907 2.53206 1.96324 2.53206H7.07691C7.22106 2.53206 7.33821 2.6492 7.33821 2.79337V10.1282Z"
                                                fill="#959595"
                                              />
                                              <path
                                                d="M9.03452 0H3.92085C3.44102 0 3.0513 0.38972 3.0513 0.86955C3.0513 1.0385 3.18646 1.17366 3.35542 1.17366C3.52437 1.17366 3.65953 1.0385 3.65953 0.86955C3.65953 0.725373 3.77667 0.608234 3.92085 0.608234H9.03452C9.17867 0.608234 9.29582 0.725373 9.29582 0.86955V8.20666C9.29582 8.35081 9.17867 8.46797 9.03452 8.46797C8.86556 8.46797 8.73037 8.6031 8.73037 8.77206C8.73037 8.94102 8.86556 9.07616 9.03452 9.07616C9.51434 9.07616 9.90407 8.68648 9.90407 8.20666V0.86955C9.90407 0.38972 9.51434 0 9.03452 0Z"
                                                fill="#959595"
                                              />
                                            </svg>
                                          </button>
                                        </div>
                                      </div>
                                      <h2 className="font-display text-jacarta-700 dark:hover:text-accent hover:text-accent mb-4 text-xl dark:text-white">
                                        <a href="/single_post/post_1">
                                          Mint your own Tezos collections
                                        </a>
                                      </h2>
                                      <p className="dark:text-jacarta-200 mb-8">
                                        Since we launched Tezos at the end of
                                        2021, many awesome creators...
                                      </p>
                                      <div className="text-jacarta-400 flex flex-wrap items-center space-x-2 text-sm">
                                        <span>
                                          <time>5 Feb</time>
                                        </span>
                                        <span>•</span>
                                        <span>3 min read</span>
                                      </div>
                                    </div>
                                  </div>
                                </article>
                              </div>
                              <div className="col-auto ml-3 mt-3">
                                <div className="row flex flex-col rever-col gap-3">
                                  <Like />
                                  <div className="col mb-3 mw-100">
                                    <div className="row flex flex-col flex-center-500">
                                      <button className="col-auto feedBtn btn rounded-pill p-4 bgbuttons dark:bg-jacarta-900">
                                        <svg
                                          width="33"
                                          height="33"
                                          viewBox="0 0 33 33"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M24.398 14.1764C23.1085 14.1764 22.1094 15.1674 22.1094 16.3909C22.1094 17.6144 23.1085 18.6055 24.398 18.6055C25.5758 18.6055 26.575 17.6144 26.575 16.3909C26.575 15.1674 25.5758 14.1764 24.398 14.1764ZM8.76836 14.1764C7.47892 14.1764 6.47974 15.1674 6.47974 16.3909C6.47974 17.6144 7.47892 18.6055 8.76836 18.6055C9.94617 18.6055 10.9453 17.6144 10.9453 16.3909C10.9453 15.1674 9.94617 14.1764 8.76836 14.1764Z"
                                            fill="#959595"
                                          />
                                          <path
                                            d="M9.47654 30.3287L5.23386 31.6464L5.19107 27.2325L5.18742 26.8555L4.93581 26.5748L4.50283 26.0916C0.0805632 20.7273 -0.20586 13.01 3.93684 7.34913C8.99283 0.473154 18.6877 -1.04636 25.6001 3.91528C32.5328 8.91422 34.061 18.4999 29.0619 25.3222C24.864 31.0338 17.3459 33.1501 10.8141 30.6319L10.1551 30.3595L9.82136 30.2216L9.47654 30.3287Z"
                                            stroke="#959595"
                                            strokeWidth="2"
                                          />
                                          <path
                                            d="M16.5832 14.1764C15.2937 14.1764 14.2946 15.1674 14.2946 16.3909C14.2946 17.6144 15.2937 18.6055 16.5832 18.6055C17.761 18.6055 18.7602 17.6144 18.7602 16.3909C18.7602 15.1674 17.761 14.1764 16.5832 14.1764Z"
                                            fill="#959595"
                                          />
                                        </svg>
                                      </button>
                                      <div className="col pt-1 text-center dark:text-white name_light ">
                                        <p className="grayfeed mb-0">
                                          <ComentsPost />
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row flex flex-col flex-center-500">
                                    <button className="col-auto feedBtn btn rounded-pill p-4 bgbuttons dark:bg-jacarta-900">
                                      <svg
                                        width="31"
                                        height="31"
                                        viewBox="0 0 31 31"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <g clipPath="url(#clip0_618_47)">
                                          <path
                                            d="M0.436351 26.7541C2.43852 19.53 6.49952 14.4257 12.4259 11.6881C14.2196 10.8842 16.3094 10.2418 18.4901 9.86122L18.6515 9.8377C19.1454 9.8377 19.1475 9.82274 19.1475 6.25453V2.67242L31.3829 14.9078L19.1475 27.1432V19.979H17.6595C13.6114 20.073 9.81332 21.0554 6.4247 22.7369L6.5797 22.6674C4.61708 23.8134 2.93452 25.1763 1.48394 26.7562L1.47004 26.7723L0.00128174 28.3265L0.43742 26.753L0.436351 26.7541Z"
                                            fill="#959595"
                                          />
                                        </g>
                                        <defs>
                                          <clipPath id="clip0_618_47">
                                            <rect
                                              width="31"
                                              height="31"
                                              fill="white"
                                            />
                                          </clipPath>
                                        </defs>
                                      </svg>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col flex justify-content-start mt-2"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </Link>
        </SwiperSlide>
      </Swiper>
      <div className="swiper-button-prev-4 group absolute top-1/2 left-4 z-10 -mt-6 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-base shadow-white-volume">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          className="fill-jacarta-700 group-hover:fill-accent"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" />
        </svg>
      </div>
      <div className="swiper-button-next-4 group absolute top-1/2 right-4 z-10 -mt-6 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-base shadow-white-volume">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          className="fill-jacarta-700 group-hover:fill-accent"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
        </svg>
      </div>
    </div>
  );
};

export default Feed_carousel;
