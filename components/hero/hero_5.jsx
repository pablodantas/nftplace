import Link from "next/link";
import { hero_5_data } from "../../data/coverflow_data";
import React, { useRef } from "react";
import Particles from "react-tsparticles";
import particlesConfig from "./particles.json";

const Hero_5 = () => {
  const particles = useRef();

  return (
    <>
      {/* <!-- Hero --> */}
      <section className="relative py-20 md:pt-32">
        <picture className="light_picture pointer-events-none absolute inset-0 -z-10 dark:hidden">
          <img
            src="/images/tap_03.png"
            alt="gradient"
            className="w-full light_img"
          />
        </picture>
        {/* <picture className="pointer-events-none absolute inset-0 -z-10 hidden dark:block">
          <img src="/images/8.jpg" alt="gradient dark" />
        </picture> */}
        <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 hidden dark:block">
          <figure className="h-[630px] w-full">
            <img
              src="/images/placedarkbg.png"
              alt="gradient dark"
              layout="fill"
            />
          </figure>
        </picture>
        <div className="h-full px-2">
          <div className="grid h-full items-center gap-4 lg:grid-cols-12">
            <div className="col-span-6 flex h-full flex-col items-center justify-start py-10 md:items-start md:py-20 xl:col-span-6 xl:pl-[20%] xl:pr-[10%]">
              {/* <div className="mb-10 w-full sm:flex sm:space-x-4 hidden">
                <div className="mb-4 flex-1 rounded-2lg bg-white p-4 text-center dark:bg-white/[.15]">
                  <span className="block font-display text-3xl text-[#5899d5]">
                    10,568
                  </span>
                  <span className="block font-display text-sm text-jacarta-500 dark:text-white">
                    Collectibles
                  </span>
                </div>
                <div className="mb-4 flex-1 rounded-2lg bg-white p-4 text-center dark:bg-white/[.15]">
                  <span className="block font-display text-3xl text-[#5899d5]">
                    1,200
                  </span>
                  <span className="block font-display text-sm text-jacarta-500 dark:text-white">
                    Auctions
                  </span>
                </div>
                <div className="mb-4 flex-1 rounded-2lg bg-white p-4 text-center dark:bg-white/[.15]">
                  <span className="block font-display text-3xl text-[#5899d5]">
                    6,897
                  </span>
                  <span className="block font-display text-sm text-jacarta-500 dark:text-white">
                    Artists
                  </span>
                </div>
              </div> */}
              <h1 className="mb-6 text-center font-display mb-0 text-5xl text-jacarta-700 dark:text-white md:text-left lg:text-5xl xl:text-6xl">
                <small>We present a new</small>
              </h1>
              <h1 className="mb-6 text-center font-display text-5xl text-jacarta-700 dark:text-white md:text-left lg:text-5xl xl:text-6xl">
                NFT Marketplace
              </h1>
              <p className="mb-8 text-center text-lg dark:text-jacarta-200 md:text-left">
                Explore a marketplace for unique digital collectibles. Discover, own and trade one-of-a-kind artworks secured by blockchain technology.
              </p>
              <div className="flex space-x-4">
                <Link href="https://nftplace.gitbook.io/" >
                  <a target="_blank" className="w-36 rounded-button bg_button py-3 px-8 text-center font-semibold text-white  transition-all ">
                    Whitepaper
                  </a>
                </Link>
                <Link href="/collection/explore_collection">
                  <a className="w-36 rounded-button bg-white py-3 px-8 text-center font-semibold text-[#2384FF] bg_button2  transition-all hover:text-white">
                    Explore
                  </a>
                </Link>
              </div>
            </div>

            {/* <!-- Hero image --> */}
            <div className="col-span-6 flex">
              <div className="relative text-center md:text-right">
                <img
                  src="/images/hero/hero.png"
                  alt=""
                  className="hero-img mt-8 inline-block w-72 rotate-[8deg] sm:w-full lg:w-[24rem] xl:w-[35rem]"
                />
                <img
                  src="/images/hero/3D_elements.png"
                  alt=""
                  className="animate-fly absolute top-3"
                />
              </div>
            </div>
            {/* <!-- Hero images --> */}
            {/* <div className="relative col-span-6 xl:col-span-6 xl:col-start-7 col-cards_header">
              <div className="md:flex md:space-x-6 xl:space-x-12">
                {hero_5_data.map((item, index) => {
                  const { id, img, title, authorImage, authorName, subItem } =
                    item;
                  const itemLink = img
                    .split("/")
                    .slice(-1)
                    .toString()
                    .replace("_2lg.jpg", "")
                    .replace(".gif", "");
                  return (
                    <div
                      className={
                        index === 0
                          ? "mb-6 md:flex md:w-1/2 md:items-center"
                          : "space-y-6 md:w-1/2 xl:space-y-12"
                      }
                      key={id}
                    >
                      <article>
                        <div className="block overflow-hidden rounded-2.5xl bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-jacarta-700">
                          <figure className="relative">
                            <Link href={`/item/${itemLink}`}>
                              <a>
                                <img
                                  src={img}
                                  alt="item 1"
                                  className="w-full object-cover"
                                  height="437"
                                  width="406"
                                />
                              </a>
                            </Link>
                          </figure>
                          <div className="p-6">
                            <div className="flex">
                              <Link href="#">
                                <a className="shrink-0">
                                  <img
                                    src={authorImage}
                                    alt="avatar"
                                    className="mr-4 h-10 w-10 rounded-full"
                                  />
                                </a>
                              </Link>
                              <div>
                                <Link href={`/item/${itemLink}`}>
                                  <a className="block">
                                    <span className="font-display text-lg leading-none text-jacarta-700 hover:text-accent dark:text-white">
                                      {title}
                                    </span>
                                  </a>
                                </Link>
                                <Link href="/user/avatar_6">
                                  <a className="text-2xs text-accent">
                                    {authorName}
                                  </a>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                      {subItem &&
                        subItem.map(
                          ({ id, img, title, authorImage, authorName }) => {
                            const itemLink = img
                              .split("/")
                              .slice(-1)
                              .toString()
                              .replace(".jpg", "")
                              .replace(".gif", "")
                              .replace("_lg", "");
                            return (
                              <div className="md:w-3/4" key={id}>
                                <article>
                                  <div className="block overflow-hidden rounded-2.5xl bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-jacarta-700">
                                    <figure className="relative">
                                      <Link href={`/item/${itemLink}`}>
                                        <a>
                                          <img
                                            src={img}
                                            alt="item 1"
                                            className="w-full object-cover"
                                            height="437"
                                            width="406"
                                          />
                                        </a>
                                      </Link>
                                    </figure>
                                    <div className="p-6">
                                      <div className="flex">
                                        <Link href="/user/avatar_6">
                                          <a className="shrink-0">
                                            <img
                                              src={authorImage}
                                              alt="avatar"
                                              className="mr-4 h-10 w-10 rounded-full"
                                            />
                                          </a>
                                        </Link>
                                        <div>
                                          <Link href={`/item/${itemLink}`}>
                                            <a className="block">
                                              <span className="font-display text-lg leading-none text-jacarta-700 hover:text-accent dark:text-white">
                                                {title}
                                              </span>
                                            </a>
                                          </Link>
                                          <Link href="/user/avatar_6">
                                            <a className="text-2xs text-accent">
                                              {authorName}
                                            </a>
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </article>
                              </div>
                            );
                          }
                        )}
                    </div>
                  );
                })}
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/* <!-- end hero --> */}
    </>
  );
};

export default Hero_5;
