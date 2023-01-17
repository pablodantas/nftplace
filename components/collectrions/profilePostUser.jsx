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

const Profile_Post_User = () => {

  const { Moralis, user } = useMoralis();

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(8);
  const [item, setItem] = useState([]);
  const walletAddress = user?.attributes?.ethAddress;

  const fetchItem = async () => {
    if (walletAddress) {
      const toSkip = (page - 1) * pageSize;
      const query = new Moralis.Query('PostFeed');
      query.equalTo("owner", walletAddress);
      query.descending("createdAt");
      query.skip(toSkip);
      query.limit(pageSize);
      const result = await query.find();
      const res = JSON.parse(JSON.stringify(result));
      return res;
    }
  };

  const { data } = useQuery(`user${walletAddress}post${'PostFeed'}page${pageSize}`, fetchItem, {
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

      {item.map((item, index) =>
        <article key={index}>
          {console.log(item)}
          <div className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 height_nft_card rounded-2xl border bg-white p-[1.1875rem] transition-shadow">
            <Link href={`/user/${walletAddress}`}>
              <a className="mr-2 shrink-0 user_img_card">
                <ProfileExplore address={walletAddress} />
              </a>
            </Link>
            <Link href={``}>
              <a className="flex space-x-[0.625rem]">
                <span className="collection_item_img">
                <img className="height_nft  w-full rounded-[0.625rem] object-cover" preview={null} src={item?.image ? item?.image : '/images/frame_2_1.png'} alt="owner" loading="lazy"/>
                </span>
              </a>
            </Link>
            <div className="flex justify-between">
              <Link href={`/user/${walletAddress}`}>
                <a className="font-display hover:text-accent dark:hover:text-accent text-jacarta-700 mt-4 block text-base dark:text-white">
                  {item?.name}
                </a>
              </Link>
              <Auctions_dropdown classes="dark:hover:bg-jacarta-500  dropdown hover:bg-jacarta-100 dark:bg-jacarta-700 bg-white mt-2 dropdown_share" />
            </div>
            <div className="flex items-center justify-between text-sm font-medium tracking-tight">
              <div className="flex flex-wrap items-center">
                <span className="dark:text-jacarta-400 mr-1">by</span>
                <Link href={"#"}>
                  <a className="text-accent">
                    <span><ProfileExploreName address={walletAddress} /></span>
                  </a>
                </Link>
              </div>
              {/* <span className="dark:text-jacarta-300 text-sm">{itemsCount} Items</span> */}
            </div>
            <div className="mt-2 flex justify-between">
              <p className="text-sm">
                <span className="text-green">$TAP</span> 004
              </p>
              <Likes likeId={`like${item?.objectId}tokenlike${item?.objectId}`}
                classes="dark:bg-jacarta-700 flex items-center space-x-1 dropdown_share bg-white"
              />
            </div>
          </div>
        </article>
      )}
    </>
  );
};

export default Profile_Post_User;
