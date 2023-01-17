import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Feature_collections_data from "../../data/Feature_collections_data";
import { useMoralis } from "react-moralis";
import ProfileExploreName from "./profileUser/ProfileExploreName";
import { useQuery } from "react-query";
import Auctions_dropdown from "../dropdown/Auctions_dropdown";
import Likes from "../likes";
import ImageNFT from './metadata/nftImage';
import NameNFT from './metadata/nftName';
import { useRouter } from 'next/router';
import InfiniteScroll from "react-infinite-scroll-component";

const Profile_collection_item = () => {

  const { Moralis, user } = useMoralis();

  const router = useRouter();
  const pid = router.query.user;
  const walletAddressProfile = pid;

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(8);
  const [item, setItem] = useState([]);

  const fetchItem = async () => {
    if (walletAddressProfile) {
      const toSkip = (page - 1) * pageSize;
      const query = new Moralis.Query('FreeMinting');
      query.equalTo("owner", walletAddressProfile);
      query.descending("createdAt");
      query.skip(toSkip);
      query.limit(pageSize);
      const result = await query.find();
      const res = JSON.parse(JSON.stringify(result));
      return res;
    }
  };

  const { data } = useQuery(`user${walletAddressProfile}myColecction${'NFTsCreatedPlace'}page${pageSize}`, fetchItem, {
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
    <InfiniteScroll
      dataLength={item.length} //This is important field to render the next data
      next={fetchData}
      hasMore={true}
      loader={
        <div className="col d-flex justify-content-center"></div>
      }
    >
      <div className="flex mk_gap">
        {item.map((item, index) =>
          <article key={index}>
            <div className="relative dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 height_nft_card rounded-2xl border bg-white p-[1.1875rem] transition-shadow">
              <Link href={`/collection/${item?.objectId}`}>
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
                <Likes likeId={`like${item?.objectId}`}
                  classes="dark:bg-jacarta-700 flex items-center space-x-1 dropdown_share bg-white"
                />
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
    </InfiniteScroll>
  );
};

export default Profile_collection_item;
