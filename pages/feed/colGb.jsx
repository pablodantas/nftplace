import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useMoralis } from "react-moralis";
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

const ColGb = () => {

  const { Moralis, user } = useMoralis();


  const fetchProfile = async () => {
    if (user) {
      const query = new Moralis.Query("IfUser");
      query.equalTo("postOwner", user.attributes.ethAddress);
      const result = await query.find();
      const a = JSON.parse(JSON.stringify(result))
      const b = a[0];
      return b;
    }
  }

  const { data } = useQuery(`userProfile${user}`, fetchProfile, {
    staleTime: 1000 * 80,
    //cacheTime: 111120000,
  })
  return (
    <>
      <div className="col-3 lg:block hidden px-3 mr-20">
        <div className="row flex flex">
          <div className="col-auto flex items-center">
            <div className="imgBorder">
              <img
                src={data?.avatarUser ? data?.avatarUser : '/images/frame_2_1.png'}
                alt=""
                className="imgPostAuthor imgProfileFeed"
              />
            </div>
          </div>
          <div className="col flex items-center justify-center">
            <div className="row flex flex w-full">
              <div className="col px-3 flex items-center w-full">
                <h4 className="user_name_feed mb-0 dark:text-white text name_light">
                  {data?.userName}
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="row flex">
          <div className="col">
            <div className="row flex flex-col mt-4">
              <button
                className="dark:bg-jacarta-900 btn col-auto feedBtn btnMenu bgbuttons"
                style={{ width: "fit-content;" }}
              >
                <div className="row flex flex w-auto">
                  <div className="col-auto pr-2 dark:text-white name_light">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 25.6667C12.3667 25.6667 10.8403 25.3604 9.42083 24.7479C8.00138 24.1354 6.76666 23.3042 5.71666 22.2542C4.66666 21.2042 3.84027 19.9646 3.2375 18.5354C2.63472 17.1063 2.33333 15.575 2.33333 13.9417C2.33333 12.3083 2.63472 10.7868 3.2375 9.37708C3.84027 7.96736 4.66666 6.7375 5.71666 5.6875C6.76666 4.6375 8.00138 3.81597 9.42083 3.22292C10.8403 2.62986 12.3667 2.33333 14 2.33333C15.6333 2.33333 17.1597 2.62986 18.5792 3.22292C19.9986 3.81597 21.2333 4.6375 22.2833 5.6875C23.3333 6.7375 24.1597 7.96736 24.7625 9.37708C25.3653 10.7868 25.6667 12.3083 25.6667 13.9417C25.6667 15.575 25.3653 17.1063 24.7625 18.5354C24.1597 19.9646 23.3333 21.2042 22.2833 22.2542C21.2333 23.3042 19.9986 24.1354 18.5792 24.7479C17.1597 25.3604 15.6333 25.6667 14 25.6667ZM14 23.975C14.6806 23.275 15.2493 22.4729 15.7062 21.5687C16.1632 20.6646 16.5375 19.5903 16.8292 18.3458H11.2C11.4722 19.5125 11.8368 20.5625 12.2937 21.4958C12.7507 22.4292 13.3194 23.2556 14 23.975ZM11.5208 23.625C11.0347 22.8861 10.6167 22.0889 10.2667 21.2333C9.91666 20.3778 9.625 19.4153 9.39166 18.3458H5.01666C5.75555 19.7264 6.61111 20.8104 7.58333 21.5979C8.55555 22.3854 9.86805 23.0611 11.5208 23.625ZM16.5083 23.5958C17.9083 23.1486 19.1674 22.4778 20.2854 21.5833C21.4035 20.6889 22.3028 19.6097 22.9833 18.3458H18.6375C18.3847 19.3958 18.0882 20.3486 17.7479 21.2042C17.4076 22.0597 16.9944 22.8569 16.5083 23.5958ZM4.43333 16.5958H9.07083C9.0125 16.0708 8.97847 15.5993 8.96875 15.1813C8.95902 14.7632 8.95416 14.35 8.95416 13.9417C8.95416 13.4556 8.96388 13.0229 8.98333 12.6438C9.00277 12.2646 9.04166 11.8417 9.1 11.375H4.43333C4.29722 11.8417 4.20486 12.2597 4.15624 12.6292C4.10763 12.9986 4.08333 13.4361 4.08333 13.9417C4.08333 14.4472 4.10763 14.8993 4.15624 15.2979C4.20486 15.6965 4.29722 16.1292 4.43333 16.5958ZM10.8792 16.5958H17.15C17.2278 15.9931 17.2764 15.5021 17.2958 15.1229C17.3153 14.7438 17.325 14.35 17.325 13.9417C17.325 13.5528 17.3153 13.1785 17.2958 12.8188C17.2764 12.459 17.2278 11.9778 17.15 11.375H10.8792C10.8014 11.9778 10.7528 12.459 10.7333 12.8188C10.7139 13.1785 10.7042 13.5528 10.7042 13.9417C10.7042 14.35 10.7139 14.7438 10.7333 15.1229C10.7528 15.5021 10.8014 15.9931 10.8792 16.5958ZM18.9 16.5958H23.5667C23.7028 16.1292 23.7951 15.6965 23.8437 15.2979C23.8924 14.8993 23.9167 14.4472 23.9167 13.9417C23.9167 13.4361 23.8924 12.9986 23.8437 12.6292C23.7951 12.2597 23.7028 11.8417 23.5667 11.375H18.9292C18.9875 12.0556 19.0264 12.5757 19.0458 12.9354C19.0653 13.2951 19.075 13.6306 19.075 13.9417C19.075 14.3694 19.0604 14.7729 19.0312 15.1521C19.0021 15.5313 18.9583 16.0125 18.9 16.5958ZM18.6083 9.625H22.9833C22.3417 8.28333 21.4618 7.16528 20.3437 6.27083C19.2257 5.37639 17.9375 4.74444 16.4792 4.375C16.9653 5.09444 17.3785 5.87222 17.7187 6.70833C18.059 7.54444 18.3556 8.51667 18.6083 9.625ZM11.2 9.625H16.8583C16.6444 8.59444 16.2847 7.59792 15.7792 6.63542C15.2736 5.67292 14.6806 4.82222 14 4.08333C13.3778 4.60833 12.8528 5.29861 12.425 6.15417C11.9972 7.00972 11.5889 8.16667 11.2 9.625ZM5.01666 9.625H9.42083C9.63472 8.575 9.90694 7.63681 10.2375 6.81042C10.5681 5.98403 10.9861 5.18194 11.4917 4.40417C10.0333 4.77361 8.75972 5.39583 7.67083 6.27083C6.58194 7.14583 5.69722 8.26389 5.01666 9.625Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div className="col-auto flex items-center dark:text-white name_light">
                    Global feed
                  </div>
                </div>
              </button>
              <button
                className="btn col-auto feedBtn btnMenu mt-2"
                style={{ width: "fit-content;" }}
              >
                <Link href="/collection/explore_collection">
                  <div className="row flex w-auto">
                    <div className="col-auto pr-2">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.5 23.625V12.25H5.25V23.625C5.25 23.8571 5.34219 24.0796 5.50628 24.2437C5.67038 24.4078 5.89294 24.5 6.125 24.5H21.875C22.1071 24.5 22.3296 24.4078 22.4937 24.2437C22.6578 24.0796 22.75 23.8571 22.75 23.625V12.25H24.5V23.625C24.5 24.3212 24.2234 24.9889 23.7312 25.4812C23.2389 25.9734 22.5712 26.25 21.875 26.25H6.125C5.42881 26.25 4.76113 25.9734 4.26884 25.4812C3.77656 24.9889 3.5 24.3212 3.5 23.625ZM22.75 4.375V10.5L19.25 7V4.375C19.25 4.14294 19.3422 3.92038 19.5063 3.75628C19.6704 3.59219 19.8929 3.5 20.125 3.5H21.875C22.1071 3.5 22.3296 3.59219 22.4937 3.75628C22.6578 3.92038 22.75 4.14294 22.75 4.375Z"
                          fill="currentColor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.7628 2.625C13.0909 2.29693 13.536 2.11263 14 2.11263C14.464 2.11263 14.9091 2.29693 15.2373 2.625L26.8695 14.2555C27.0338 14.4198 27.1261 14.6426 27.1261 14.875C27.1261 15.1074 27.0338 15.3302 26.8695 15.4945C26.7052 15.6588 26.4824 15.7511 26.25 15.7511C26.0176 15.7511 25.7948 15.6588 25.6305 15.4945L14 3.86225L2.36951 15.4945C2.2052 15.6588 1.98236 15.7511 1.75001 15.7511C1.51765 15.7511 1.29481 15.6588 1.13051 15.4945C0.966205 15.3302 0.873901 15.1074 0.873901 14.875C0.873901 14.6426 0.966205 14.4198 1.13051 14.2555L12.7628 2.625Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="col-auto flex items-center">
                      Marketplace
                    </div>
                  </div>
                </Link>
              </button>
              <button
                className="btn col-auto feedBtn btnMenu mt-2"
                style={{ width: "fit-content;" }}
              >
                <Link href="/feed/following">
                  <div className="row flex w-auto">
                    <div className="col-auto pr-2">
                      <svg
                        width="33"
                        height="33"
                        viewBox="0 0 33 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M24.4345 12.9729L21.7271 9.81356L20 11.8339L24.4345 17L33 7.02034L31.2729 5L24.4345 12.9729Z"
                          fill="grey"
                        />
                        <path
                          d="M12.375 16.4656C10.8625 16.4656 9.625 15.9844 8.6625 15.0219C7.7 14.0594 7.21875 12.8219 7.21875 11.3094C7.21875 9.79689 7.7 8.55939 8.6625 7.59689C9.625 6.63439 10.8625 6.15314 12.375 6.15314C13.8875 6.15314 15.125 6.63439 16.0875 7.59689C17.05 8.55939 17.5312 9.79689 17.5312 11.3094C17.5312 12.8219 17.05 14.0594 16.0875 15.0219C15.125 15.9844 13.8875 16.4656 12.375 16.4656ZM1.375 27.5V24.2688C1.375 23.4667 1.58125 22.7391 1.99375 22.0859C2.40625 21.4328 2.97917 20.9458 3.7125 20.625C5.43125 19.8688 6.96094 19.3359 8.30156 19.0266C9.64219 18.7172 11 18.5625 12.375 18.5625C13.75 18.5625 15.1078 18.7172 16.4484 19.0266C17.7891 19.3359 19.3073 19.8688 21.0031 20.625C21.7365 20.9688 22.3151 21.4615 22.7391 22.1031C23.163 22.7448 23.375 23.4667 23.375 24.2688V27.5H1.375ZM3.4375 25.4375H21.3125V24.2688C21.3125 23.9021 21.2208 23.5526 21.0375 23.2203C20.8542 22.888 20.5677 22.6417 20.1781 22.4813C18.574 21.7021 17.2047 21.1979 16.0703 20.9688C14.9359 20.7396 13.7042 20.625 12.375 20.625C11.0458 20.625 9.81406 20.7453 8.67969 20.986C7.54531 21.2266 6.16458 21.725 4.5375 22.4813C4.19375 22.6417 3.92448 22.888 3.72969 23.2203C3.5349 23.5526 3.4375 23.9021 3.4375 24.2688V25.4375ZM12.375 14.4031C13.2687 14.4031 14.0078 14.1109 14.5922 13.5266C15.1766 12.9422 15.4687 12.2031 15.4687 11.3094C15.4687 10.4156 15.1766 9.67658 14.5922 9.0922C14.0078 8.50783 13.2687 8.21564 12.375 8.21564C11.4812 8.21564 10.7422 8.50783 10.1578 9.0922C9.57344 9.67658 9.28125 10.4156 9.28125 11.3094C9.28125 12.2031 9.57344 12.9422 10.1578 13.5266C10.7422 14.1109 11.4812 14.4031 12.375 14.4031Z"
                          fill="grey"
                        />
                      </svg>
                    </div>
                    <div className="col-auto flex items-center">
                      following
                    </div>
                  </div>
                </Link>
              </button>
              <button
                className="btn col-auto feedBtn btnMenu mt-2"
                style={{ width: "fit-content;" }}
              >
                <Link href="/user/user">
                  <div className="row flex w-auto">
                    <div className="col-auto pr-2">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.10834 23.3333V20.5917C1.10834 19.9111 1.28334 19.2937 1.63334 18.7396C1.98334 18.1854 2.46945 17.7722 3.09167 17.5C4.51112 16.8778 5.78959 16.4306 6.92709 16.1583C8.06459 15.8861 9.23611 15.75 10.4417 15.75C11.6472 15.75 12.8139 15.8861 13.9417 16.1583C15.0694 16.4306 16.3431 16.8778 17.7625 17.5C18.3847 17.7722 18.8757 18.1854 19.2354 18.7396C19.5951 19.2937 19.775 19.9111 19.775 20.5917V23.3333H1.10834ZM21.525 23.3333V20.5917C21.525 19.3667 21.2139 18.3604 20.5917 17.5729C19.9694 16.7854 19.1528 16.1486 18.1417 15.6625C19.4833 15.8181 20.7472 16.0465 21.9333 16.3479C23.1194 16.6493 24.0819 16.9944 24.8208 17.3833C25.4625 17.7528 25.9681 18.2097 26.3375 18.7542C26.7069 19.2986 26.8917 19.9111 26.8917 20.5917V23.3333H21.525ZM10.4417 13.9708C9.15834 13.9708 8.10834 13.5625 7.29167 12.7458C6.475 11.9292 6.06667 10.8792 6.06667 9.59583C6.06667 8.3125 6.475 7.2625 7.29167 6.44583C8.10834 5.62917 9.15834 5.22083 10.4417 5.22083C11.725 5.22083 12.775 5.62917 13.5917 6.44583C14.4083 7.2625 14.8167 8.3125 14.8167 9.59583C14.8167 10.8792 14.4083 11.9292 13.5917 12.7458C12.775 13.5625 11.725 13.9708 10.4417 13.9708ZM20.9417 9.59583C20.9417 10.8792 20.5333 11.9292 19.7167 12.7458C18.9 13.5625 17.85 13.9708 16.5667 13.9708C16.3528 13.9708 16.1146 13.9562 15.8521 13.9271C15.5896 13.8979 15.3514 13.8444 15.1375 13.7667C15.6042 13.2806 15.959 12.6826 16.2021 11.9729C16.4451 11.2632 16.5667 10.4708 16.5667 9.59583C16.5667 8.72083 16.4451 7.94792 16.2021 7.27708C15.959 6.60625 15.6042 5.98889 15.1375 5.425C15.3514 5.36667 15.5896 5.31806 15.8521 5.27917C16.1146 5.24028 16.3528 5.22083 16.5667 5.22083C17.85 5.22083 18.9 5.62917 19.7167 6.44583C20.5333 7.2625 20.9417 8.3125 20.9417 9.59583ZM2.85834 21.5833H18.025V20.5917C18.025 20.2806 17.9326 19.9792 17.7479 19.6875C17.5632 19.3958 17.3347 19.1917 17.0625 19.075C15.6625 18.4528 14.4861 18.0347 13.5333 17.8208C12.5806 17.6069 11.55 17.5 10.4417 17.5C9.33334 17.5 8.29792 17.6069 7.33542 17.8208C6.37292 18.0347 5.19167 18.4528 3.79167 19.075C3.51945 19.1917 3.29584 19.3958 3.12084 19.6875C2.94584 19.9792 2.85834 20.2806 2.85834 20.5917V21.5833ZM10.4417 12.2208C11.2 12.2208 11.8271 11.9729 12.3229 11.4771C12.8188 10.9812 13.0667 10.3542 13.0667 9.59583C13.0667 8.8375 12.8188 8.21042 12.3229 7.71458C11.8271 7.21875 11.2 6.97083 10.4417 6.97083C9.68334 6.97083 9.05625 7.21875 8.56042 7.71458C8.06459 8.21042 7.81667 8.8375 7.81667 9.59583C7.81667 10.3542 8.06459 10.9812 8.56042 11.4771C9.05625 11.9729 9.68334 12.2208 10.4417 12.2208Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="col-auto flex items-center">
                      My Profile
                    </div>
                  </div>
                </Link>
              </button>
            </div>
          </div>
        </div>
        <hr className="hrPost mt-4" />
        <div className="row flex mt-3 flex-col">
          <div className="col mt-2">
            <h4 className="grayfeed">Suggestions for you</h4>
          </div>
          <div className="col mt-3 ml-2">
            <button className="row flex_important btn flex feedBtn items-center p-1">
              <div className="col-auto mr-3">
                <div className="imgBorder">
                  <img
                    src="/images/FEaFK4OWUAAlgiV.jpeg"
                    alt=""
                    className="imgPostAuthor"
                  />
                </div>
              </div>
              <div className="col flex col_line_2">
                {" "}
                {/*  style={{;"}} */}
                <div className="row flex flex-col col_mw">
                  {" "}
                  {/*  style={{"}}*/}
                  <div className="col flex pr-2 dark:text-white name_light">
                    <p className="m-0 text-truncate">Walken</p>
                  </div>
                  <div className="col p-0 flex items-center">
                    <small>
                      <p className="mb-0 mr-2 flex graypost2">
                        New to NFTplace
                      </p>
                    </small>
                  </div>
                </div>
              </div>
            </button>
          </div>
          <div className="col mt-3 ml-2">
            <button className="row flex_important btn flex feedBtn items-center p-1">
              <div className="col-auto mr-3">
                <div className="imgBorder">
                  <img
                    src="/images/login.jpg"
                    alt=""
                    className="imgPostAuthor"
                  />
                </div>
              </div>
              <div className="col flex col_line_2">
                {" "}
                {/*style="" */}
                <div className="row flex flex-col col_mw">
                  {" "}
                  {/*style="max-width: 200px;" */}
                  <div className="col flex pr-2 dark:text-white name_light">
                    <p className="m-0 text-truncate">omgkirby</p>
                  </div>
                  <div className="col p-0 flex items-center">
                    <small>
                      <p className="mb-0 mr-2 flex graypost2">
                        New to NFTplace
                      </p>
                    </small>
                  </div>
                </div>
              </div>
            </button>
          </div>
          <div className="col mt-3 ml-2">
            <button className="row flex btn flex_important feedBtn items-center p-1">
              <div className="col-auto mr-3">
                <div className="imgBorder">
                  <img
                    src="/images/hand-drawn-nft-style-ape-illustration_23-2149611030.webp"
                    alt=""
                    className="imgPostAuthor"
                  />
                </div>
              </div>
              <div className="col flex col_line_2">
                {" "}
                {/*style="line-height: 19px;" */}
                <div className="row flex flex-col col_mw">
                  {" "}
                  {/* style="max-width: 200px;" */}
                  <div className="col flex pr-2 dark:text-white name_light">
                    <p className="m-0 text-truncate">Chainsaw</p>
                  </div>
                  <div className="col p-0 flex items-center">
                    <small>
                      <p className="mb-0 mr-2 flex graypost2">
                        New to NFTplace
                      </p>
                    </small>
                  </div>
                </div>
              </div>
            </button>
          </div>
          <div className="col hashtag ml-2 ps-1">
            <p>
              <a href="">
                <small>Ver mais</small>
              </a>
            </p>
          </div>
        </div>
        <hr className="hrPost mt-3" />
        <div className="row flex mt-4 flex-col">
          <div className="col mt-2">
            <h4 className="grayfeed">Most commented hashtags</h4>
          </div>
          <div className="col mt-3">
            <div className="row flex">
              <div className="col flex flex-wrap hashtag">
                <a href="#">
                  <p className="m-0 pr-3">#BBBForaPablo</p>
                </a>
                <a href="#">
                  <p className="m-0 pr-3">#exampleHashtag</p>
                </a>
                <a href="#">
                  <p className="m-0 pr-3">#Eleicoes2020</p>
                </a>
                <p className="m-0 pr-3">#Lifestyle</p>
                <p className="m-0 pr-3">#Bolsomito2022</p>
                <p className="m-0 pr-3">#Lula13</p>
                <p className="m-0 pr-3">#Cirogomes</p>
                <p className="m-0 pr-3">#Rockinrio</p>
                <p className="m-0 pr-3">#trendsdasemana</p>
                <p className="m-0 pr-3">#trendsNFTplace</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ColGb;
