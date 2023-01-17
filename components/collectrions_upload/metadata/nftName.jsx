import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";

function NameNFT({ tokenURI }) {

  let origLink = tokenURI.replace('ipfs://', 'https://ipfs.io/ipfs/');
  let tokenUri = origLink;

  const [name, setName] = useState();

  async function nftName() {
    let NFT;
    try {
      await fetch(tokenUri)
        .then((response) => response.json())
        .then((data) => {
          NFT = data.name;
        });
    } catch (error) {
      console.log(error);
    }
    return NFT;
  }

  const { data } = useQuery(`Namenft${tokenUri}`, nftName, {
    staleTime: 1000 * 60,
    //cacheTime: 111120000,
  });

  useEffect(() => {
    if (data) {
      setName(data);
    }
  }, [data]);

  return (name);

} export default NameNFT;