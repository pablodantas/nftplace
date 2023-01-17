import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import ProfileExplore from "./profileUser/ProfileExplore";
import ProfileExploreName from "./profileUser/ProfileExploreName";
import { useQuery } from "react-query";
import Auctions_dropdown from "../../components/dropdown/Auctions_dropdown";
import Likes from "../likes";
import ImageNFT from './metadata/nftImage';
import NameNFT from './metadata/nftName';
import InfiniteScroll from "react-infinite-scroll-component";

const My_collection_item_nft = () => {

  const { Moralis, user } = useMoralis();

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(8);
  const [item, setItem] = useState([]);

  const walletAddress = user?.attributes?.ethAddress;

  const fetchItem = async () => {
    if (walletAddress) {
      const toSkip = (page - 1) * pageSize;
      const query = new Moralis.Query('NFTsCreatedPlace');
      query.equalTo("owner", walletAddress);
      query.descending("createdAt");
      query.skip(toSkip);
      query.limit(pageSize);
      const result = await query.find();
      const res = JSON.parse(JSON.stringify(result));
      return res;
    }
  };

  const { data } = useQuery(`myCollectionNFTs${walletAddress}NFT${pageSize}`, fetchItem, {
    staleTime: 1000 * 90,
    //cacheTime: 111120000,
  });

  useEffect(() => {
    if (data) {
      setItem(data);
    }
  }, [data]);

  const fetchData = () => {
    setPageSize(pageSize + 1);
  };

  return (
    <>
        <div className="flex mk_gap">
        {item.map((item, index) =>
          <article key={index}>
            {console.log(item)}
            <div className="relative dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 height_nft_card rounded-2xl border bg-white p-[1.1875rem] transition-shadow">
              <Link href={`/${item?.objectId}`}>
                <a className="flex space-x-[0.625rem]">
                  <span className="collection_item_img">
                    <ImageNFT tokenURI={item.metadataurl} />
                  </span>
                </a>
              </Link>
              <div className="flex justify-between">
                <Link href={`/user/${item?.owner}`}>
                  <a className="font-display hover:text-accent dark:hover:text-accent text-jacarta-700 mt-4 block text-base dark:text-white">
                    <NameNFT tokenURI={item.metadataurl} />
                  </a>
                </Link>
                <Auctions_dropdown classes="dark:hover:bg-jacarta-500  dropdown hover:bg-jacarta-100 dark:bg-jacarta-700 bg-white mt-2 dropdown_share" />
              </div>
              <div className="flex items-center justify-between text-sm font-medium tracking-tight">
                <div className="flex flex-wrap items-center">
                  <span className="dark:text-jacarta-400 mr-1">by</span>
                  <Link href={"#"}>
                    <a className="text-accent">
                      <span><ProfileExploreName address={item?.owner} /></span>
                    </a>
                  </Link>
                </div>
                {/* <span className="dark:text-jacarta-300 text-sm">{itemsCount} Items</span> */}
              </div>
              <div className="mt-2 flex justify-between">
                <p className="text-sm">
                  <span className="text-green">$Place</span>
                </p>
                <Likes likeId={`like${item?.objectId}`}
                  classes="dark:bg-jacarta-700 flex items-center space-x-1 dropdown_share bg-white"
                />
              </div>
            </div>
          </article>
        )}
        </div>
    </>
  );
};

export default My_collection_item_nft;
