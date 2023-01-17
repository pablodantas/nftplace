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
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

const My_collection_item_nftBlockChain = () => {

  const { Moralis, user } = useMoralis();

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(8);
  const [item, setItem] = useState([]);
  const [base, setBase] = useState([]);

  const walletAddress = user?.attributes?.ethAddress;

  console.log(walletAddress);

  const fetchItem = async () => {
    const toSkip = (page - 1) * pageSize;
    const options = {
      method: 'GET',
      url: 'https://deep-index.moralis.io/api/v2/address/nft',

      params: { address: '0x73b95531e5ad862fc7757af70979D358A91f67ad', chain: 'bsc testnet', format: 'decimal', skip: toSkip, limit: pageSize },
      headers: { accept: 'application/json', 'X-API-Key': 'Chls3GxNualnNcfoaKHIWDlxTotOfI0zcnnGBKpnAiAdkGMq7PT84FF6qr4VXb7J' }
    };

    const respost = axios.request(options).then(function (response) {
      console.log(response.data)
      return response.data
    })
      .catch(function (error) {
        return error;
      });
    return respost;
  };

  const { data } = useQuery(`user${walletAddress}myColecction${'NftsLogs'}page${pageSize}`, fetchItem, {
    staleTime: 1000 * 90,
    //cacheTime: 111120000,
  });

  useEffect(() => {
    if (data) {
      setItem(data.result);
    }
  }, [data]);

  const fetchData = () => {
    setPageSize(pageSize + 1);
  };

  return (
    <>
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
            {console.log(item)}
            <div className="relative dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 height_nft_card rounded-2xl border bg-white p-[1.1875rem] transition-shadow">
              <Link href={`/${item?.address}/${item?.tokenId}`}>
                <a className="flex space-x-[0.625rem]">
                  <span className="collection_item_img">
                    <ImageNFT tokenURI={item.token_uri} />
                  </span>
                </a>
              </Link>
              <div className="flex justify-between">
                <Link href={`/user/${item?.owner}`}>
                  <a className="font-display hover:text-accent dark:hover:text-accent text-jacarta-700 mt-4 block text-base dark:text-white">
                    <NameNFT tokenURI={item.token_uri} />
                  </a>
                </Link>
                <Auctions_dropdown classes="dark:hover:bg-jacarta-500  dropdown hover:bg-jacarta-100 dark:bg-jacarta-700 bg-white mt-2 dropdown_share" />
              </div>
              <div className="flex items-center justify-between text-sm font-medium tracking-tight">
                <div className="flex flex-wrap items-center">
                  <span className="dark:text-jacarta-400 mr-1">by</span>
                  <Link href={"#"}>
                    <a className="text-accent">
                      <span><ProfileExploreName address={item?.owner_of} /></span>
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
    </>
  );
};

export default My_collection_item_nftBlockChain;
