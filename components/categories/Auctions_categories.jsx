import React, { useState, useEffect } from "react";
import HeadLine from "../headLine";
import Auctions_category_data from "../../data/auctions_category_data";
import Tippy from "@tippyjs/react";
import Countdown_timer from "../Countdown_timer";
import Auctions_dropdown from "../dropdown/Auctions_dropdown";
import Link from "next/link";
import "tippy.js/themes/light.css";
import Likes from "../likes";
import { useMoralis } from "react-moralis";
import { useQuery } from "react-query";
import ImageNFT from '../collectrions/metadata/nftImage';
import ProfileExplore from "../collectrions/profileUser/ProfileExplore";
import ProfileExploreName from "../collectrions/profileUser/ProfileExploreName";

const Auctions_categories = () => {

  const { Moralis } = useMoralis();

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(8);
  const [item, setItem] = useState([]);

  const fetchItem = async () => {
    const query = new Moralis.Query("FreeMinting");
    const toSkip = (page - 1) * pageSize;
    query.descending("createdAt");
    query.skip(toSkip);
    query.limit(pageSize);
    const result = await query.find();
    const res = JSON.parse(JSON.stringify(result));
    return res;
  };

  const { data } = useQuery(`myCollectionNFTs$NFT${pageSize}`, fetchItem, {
    staleTime: 1000 * 90,
    //cacheTime: 111120000,
  });

  useEffect(() => {
    if (data) {
      setItem(data);
    }
  }, [data]);

  return (
    <div>
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-[1.875rem] md:grid-cols-2 lg:grid-cols-4 flex_resp">
            {item.map((item, index) =>
              <article key={index}>
                <div className="relative dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 height_nft_card rounded-2xl border bg-white p-[1.1875rem] transition-shadow">
                  <Link href={`/user/${item?.owner}`}>
                    <a className="mr-2 shrink-0 user_img_card">
                      <ProfileExplore address={item?.owner} />
                    </a>
                  </Link>
                  <Link href={`collection/${item?.objectId}`}>
                    <a className="flex space-x-[0.625rem]">
                      <span className="collection_item_img">
                        <ImageNFT tokenURI={item.image} />
                      </span>
                    </a>
                  </Link>
                  <div className="flex justify-between">
                    <Link href={`/user/${item?.owner}`}>
                      <a className="font-display hover:text-accent dark:hover:text-accent text-jacarta-700 mt-4 block text-base dark:text-white">
                        {item?.name}
                      </a>
                    </Link>
                  </div>
                  <div className="flex items-center justify-between text-sm font-medium tracking-tight">
                    <div className="flex flex-wrap items-center">
                      <span className="dark:text-jacarta-400 mr-1">by</span>
                      <Link href={`/user/${item?.owner}`}>
                        <a className="text-accent">
                          <span><ProfileExploreName address={item?.owner} /></span>
                        </a>
                      </Link>
                    </div>
                    {/* <span className="dark:text-jacarta-300 text-sm">{itemsCount} Items</span> */}
                  </div>
                </div>
              </article>
            )}
          </div>
          <div className="mt-10 text-center">
            <Link href="/collection/explore_collection" >
              <a className="w-36 rounded-button bg_button py-3 px-8 text-center font-semibold text-white  transition-all ">
                Load More
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Auctions_categories;
