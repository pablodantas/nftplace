import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { items_data } from "../../data/items_data";
import Auctions_dropdown from "../../components/dropdown/Auctions_dropdown";
import Link from "next/link";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import Items_Countdown_timer from "../../components/items_countdown_timer";
import { ItemsTabs } from "../../components/component";
import More_items from "./more_items";
import Likes from "../../components/likes";
import Meta from "../../components/Meta";
import { useMoralis } from "react-moralis";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useQuery } from 'react-query';
import ProfileItemName from "../../components/itemInfo/ProfileItemName";
import ProfileItem from "../../components/itemInfo/ProfileItem";
import Footer from "../../components/footer";
import ImageNFT from '../../components/itemdalis/metadata/nftImage';
import NameNFT from '../../components/itemdalis/metadata/nftName';
import DescriptionNFT from '../../components/itemdalis/metadata/nftDescription';

const Item = () => {

  const router = useRouter();
  const contract = router.query;
  console.log(contract);

  const [tabsActive, setTabsActive] = useState(1);

  const { Moralis } = useMoralis();

  const [imageModal, setImageModal] = useState(false);

  const [post, setPost] = useState([]);

  const fetchItem = async () => {
    const query = new Moralis.Query("NFTsCreatedPlace");
    query.equalTo("objectId", contract);
    const result = await query.find();
    const a = JSON.parse(JSON.stringify(result))
    return a;
  }

  const { data } = useQuery(`${contract}featchItemMk`, fetchItem, {
    staleTime: 1000 * 60,
    //cacheTime: 111120000,
  })

  console.log(data)

  useEffect(() => {
    if (data) {
      setPost(data);
    }
  }, [data, contract]);

  return (
    <>
      <Meta title={`${contract}|| NFTplace Marketplace`} />
      {/*  <!-- Item --> */}
      <section className="relative lg:mt-24 lg:pt-24 lg:pb-48 mt-24 pt-12 pb-24">
        <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
          <img
            src="/images/gradient_light.jpg"
            alt="gradient"
            className="h-full"
          />
        </picture>
        <div className="container">
          {/* <!-- Item --> */}
          {post?.map((item) => {
            return (
              <>
                <div className="md:flex md:flex-wrap" key={item?.tokenId}>
                  {/* <!-- Image --> */}
                  <figure className="mb-8 md:w-2/5 md:flex-shrink-0 md:flex-grow-0 md:basis-auto lg:w-1/2 w-full">
                    <button
                      className=" w-full"
                      onClick={() => setImageModal(true)}
                    >
                      <ImageNFT tokenURI={item?.tokenURI} />
                    </button>

                    {/* <!-- Modal --> */}
                    <div
                      className={
                        imageModal ? "modal fade show block" : "modal fade"
                      }
                    >
                      <div className="modal-dialog !my-0 flex h-full max-w-4xl items-center justify-center NFT_modal">
                        <ImageNFT tokenURI={item?.tokenURI} />
                      </div>

                      <button
                        type="button"
                        className="btn-close absolute top-6 right-6"
                        onClick={() => setImageModal(false)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          className="h-6 w-6 fill-white"
                        >
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
                        </svg>
                      </button>
                    </div>
                    {/* <!-- end modal --> */}
                  </figure>

                  {/* <!-- Details --> */}
                  <div className="md:w-3/5 md:basis-auto md:pl-8 lg:w-1/2 lg:pl-[3.75rem]">
                    {/* <!-- Collection / Likes / Actions --> */}
                    <div className="mb-3 flex">
                      {/* <!-- Collection --> */}
                      <div className="flex items-center">
                        <Link href="#">
                          <a className="text-accent mr-2 text-sm font-bold">
                            {name}
                          </a>
                        </Link>
                        <span
                          className="dark:border-jacarta-600 bg-purple inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-white"
                          data-tippy-content="Verified Collection"
                        >
                          <Tippy content={<span>Verified Owner</span>}>
                            <svg className="icon h-[.875rem] w-[.875rem] fill-white">
                              <use xlinkHref="/icons.svg#icon-right-sign"></use>
                            </svg>
                          </Tippy>
                        </span>
                      </div>
                      {/* <!-- Likes / Actions --> */}
                      <div className="ml-auto flex items-stretch space-x-2 relative">
                        <Likes
                          likeId={`like${item?.address}tokenlike${item?.tokenId}`}
                          classes="dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 flex items-center space-x-1 rounded-xl border bg-white py-2 px-4"
                        />

                        {/* <!-- Actions --> */}
                        <Auctions_dropdown classes="dark:border-jacarta-600 dark:hover:bg-jacarta-600 border-jacarta-100 dropdown hover:bg-jacarta-100 dark:bg-jacarta-700 rounded-xl border bg-white" />
                      </div>
                    </div>

                    <h1 className="font-display text-jacarta-700 mb-4 text-4xl font-semibold dark:text-white">
                      <NameNFT tokenURI={item?.tokenURI} />
                    </h1>

                    <div className="mb-8 flex items-center space-x-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Tippy content={<span>$TAP</span>}>
                          <span className=" dark:border-jacarta-600 border-jacarta-100 flex items-center whitespace-nowrap rounded-md  py-1 px-2 -ml-1 mr-1">
                            <img
                              src="/images/logo_black.png"
                              className="logo_money"
                              alt="Xhibiter | NFT Marketplace"
                            />
                          </span>
                        </Tippy>
                        <span className="text-green text-sm font-medium tracking-tight">
                          {"0"} $TAP
                        </span>
                      </div>
                      <span className="dark:text-jacarta-300 text-jacarta-400 text-sm">
                        1/1 available
                      </span>
                    </div>

                    <p className="dark:text-jacarta-300 mb-10"><DescriptionNFT tokenURI={item?.tokenURI} /></p>

                    {/* <!-- Creator / Owner --> */}
                    <div className="mb-8 flex flex-wrap">
                      <div className="mb-4 flex">
                        <figure className="mr-4 shrink-0">
                          <Link href="/user/avatar_6">
                            <a className="relative block">
                              <ProfileItem address={item?.owner} />
                              <div
                                className="dark:border-jacarta-600 bg-purple absolute -right-3 top-[60%] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white"
                                data-tippy-content="Verified Collection"
                              >
                                <Tippy
                                  content={<span>Verified Collection</span>}
                                >
                                  <svg className="icon h-[.875rem] w-[.875rem] fill-white">
                                    <use xlinkHref="/icons.svg#icon-right-sign"></use>
                                  </svg>
                                </Tippy>
                              </div>
                            </a>
                          </Link>
                        </figure>
                        <div className="flex flex-col justify-center">
                          <span className="text-jacarta-400 block text-sm dark:text-white">
                            Owned by
                          </span>
                          <Link href="/user/avatar_6">
                            <a className="text-accent block">
                              <span className="text-sm font-bold">
                                <ProfileItemName address={item?.owner} />
                              </span>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Bid --> */}
                    <div className="dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 rounded-2lg border bg-white p-8">
                      <div className="mb-8 sm:flex sm:flex-wrap">
                        <div className="sm:w-1/2 sm:pr-4 lg:pr-8">
                          <div className="block overflow-hidden text-ellipsis whitespace-nowrap">
                            <span className="dark:text-jacarta-300 text-jacarta-400 text-sm">
                             By{" "}
                            </span>
                            <Link href="/user/avatar_6">
                              <a className="text-accent text-sm font-bold">
                                {item?.address}
                              </a>
                            </Link>
                          </div>
                          <div className="mt-3 flex">
                            <div>
                              <div className="flex items-center whitespace-nowrap">
                                <Tippy content={<span>$TAP</span>}>
                                  <span className=" dark:border-jacarta-600 border-jacarta-100 flex items-center whitespace-nowrap rounded-md  py-1 px-2 -ml-1 mr-1">
                                    <img
                                      src="/images/logo_black.png"
                                      className="logo_money"
                                      alt="Xhibiter | NFT Marketplace"
                                    />
                                  </span>
                                </Tippy>
                                <span className="text-green text-lg font-medium leading-tight tracking-tight">
                                  {"0"} $TAP
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* <!-- Countdown --> */}
                      </div>

                      <Link href="#">
                        <button
                          className="bg-accent  hover:bg-accent-dark inline-block w-full rounded-button py-3 px-8 text-center font-semibold text-white transition-all">
                          Buy
                        </button>
                      </Link>
                    </div>
                    {/* <!-- end bid --> */}
                  </div>
                  {/* <!-- end details --> */}
                </div>
                <div className="scrollbar-custom mt-14 overflow-x-auto rounded-lg">
                  {/* <!-- Tabs Nav --> */}
                  <Tabs className="min-w-fit tabs">
                    <TabPanel>
                      {/* <!-- Details --> */}
                      <div
                        className="tab-pane fade"
                        id="details"
                        role="tabpanel"
                        aria-labelledby="details-tab"
                      >
                        <div className="dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 rounded-t-2lg rounded-b-2lg rounded-tl-none border bg-white p-6 md:p-10">
                          <div className="mb-2 flex items-center">
                            <span className="dark:text-jacarta-300 mr-2 min-w-[9rem]">Contract Address:</span>
                            <a href="#" className="text-accent">
                              {item?.owner}
                            </a>
                          </div>
                          <div className="mb-2 flex items-center">
                            <span className="dark:text-jacarta-300 mr-2 min-w-[9rem]">Token ID:</span>
                            <span
                              className="js-copy-clipboard text-jacarta-700 cursor-pointer select-none dark:text-white"
                              data-tippy-content="Copy"
                            >
                              {item?.tokenId}
                            </span>
                          </div>
                          <div className="mb-2 flex items-center">
                            <span className="dark:text-jacarta-300 mr-2 min-w-[9rem]">Token Standard:</span>
                            <span className="text-jacarta-700 dark:text-white">ERC-721</span>
                          </div>
                          <div className="flex items-center">
                            <span className="dark:text-jacarta-300 mr-2 min-w-[9rem]">Blockchain:</span>
                            <span className="text-jacarta-700 dark:text-white">{item?.chainId}</span>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                  </Tabs>
                </div>
              </>
            );
          })}
        </div>
      </section>
      {/* <!-- end item --> */}
      <Footer />
    </>
  );
};

export default Item;
