import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Feature_collections_data from "../../data/Feature_collections_data";
import { useMoralis } from "react-moralis";
import ProfileExplore from "./profileUser/ProfileExplore";
import ProfileExploreName from "./profileUser/ProfileExploreName";
import { useQuery } from "react-query";
import Auctions_dropdown from "../dropdown/Auctions_dropdown";
import Likes from "../likes";
import ImageNFT from "./metadata/nftImage";
import NameNFT from "./metadata/nftName";
import { useDispatch } from "react-redux";
import { bidsModalShow } from "../../redux/counterSlice";

const My_collection_item = ({ table }) => {
  const dispatch = useDispatch();

  const { Moralis, user } = useMoralis();

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(8);
  const [item, setItem] = useState([]);
  const walletAddress = user?.attributes?.ethAddress;

  const fetchItem = async () => {
    if (table) {
      const toSkip = (page - 1) * pageSize;
      const query = new Moralis.Query(table);
      query.equalTo("owner", walletAddress);
      query.descending("createdAt");
      query.skip(toSkip);
      query.limit(pageSize);
      const result = await query.find();
      const res = JSON.parse(JSON.stringify(result));
      return res;
    }
  };

  const { data } = useQuery(
    `user${walletAddress}myColecction${table}page${pageSize}`,
    fetchItem,
    {
      staleTime: 1000 * 90,
      //cacheTime: 111120000,
    }
  );

  useEffect(() => {
    if (data) {
      setItem(data);
    }
  }, [data, table]);

  const fetchData = () => {
    setPageSize(pageSize + 1);
  };

  return (
    <>
      {item.map((item, index) => (
        <article key={index}>
          <div className="dark:bg-jacarta-700 dark:border-jacarta-700 overflow-hidden border-jacarta-100 height_nft_card rounded-2xl border bg-white p-[1.1875rem] transition-shadow relative height_profile_card">
            <Link href={`/user/${item?.owner}`}>
              <a className="mr-2 shrink-0 user_img_card">
                <ProfileExplore address={item?.owner} />
              </a>
            </Link>
            <Link href={`/${item?.address}/${item?.tokenId}`}>
              <a className="flex space-x-[0.625rem]">
                <span className="collection_item_img">
                  <ImageNFT tokenURI={item.tokenURI} />
                </span>
              </a>
            </Link>
            <div className="flex justify-between">
              <Link href={`/user/${item?.owner}`}>
                <a className="font-display hover:text-accent dark:hover:text-accent text-jacarta-700 mt-4 block text-base dark:text-white">
                  <NameNFT tokenURI={item.tokenURI} />
                </a>
              </Link>
              <Auctions_dropdown classes="dark:hover:bg-jacarta-500  dropdown hover:bg-jacarta-100 dark:bg-jacarta-700 bg-white mt-2 dropdown_share" />
            </div>
            <div className="flex items-center justify-between text-sm font-medium tracking-tight">
              <div className="flex flex-wrap items-center">
                <span className="dark:text-jacarta-400 mr-1">by</span>
                <Link href={"#"}>
                  <a className="text-accent">
                    <span>
                      <ProfileExploreName address={item?.owner} />
                    </span>
                  </a>
                </Link>
              </div>
              {/* <span className="dark:text-jacarta-300 text-sm">{itemsCount} Items</span> */}
            </div>
            <div className="mt-2 mb-5 flex justify-between">
              <p className="text-sm">
                <span className="text-green">$TAP</span> 00
              </p>
              <Likes
                likeId={`like${item?.address}tokenlike${item?.tokenId}`}
                classes="dark:bg-jacarta-700 flex items-center space-x-1 dropdown_share bg-white"
              />
            </div>
            <div className="flex items-center justify-around button_sale p-5 absolute bottom-0 left-0 w-full">
              <a className="">
                <button
                  className="w-full flex justify-center btn_sale flex gap-2 items-center"
                  onClick={() => dispatch(bidsModalShow())}
                >
                  For Sale{" "}
                </button>
              </a>
              <hr className="line_left" />
              <Link href="/create">
                <a>
                  <button className="w-full flex justify-center btn_sale flex gap-2 items-center">
                    New Post
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </article>
      ))}
    </>
  );
};

export default My_collection_item;
