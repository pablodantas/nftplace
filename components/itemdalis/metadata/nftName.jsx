import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";

function NameNFT({ tokenURI }) {

  const [name, setName] = useState();

  async function nftName() {
    let origLink = tokenURI.replace('ipfs://', 'https://nftstorage.link/ipfs/');
    return origLink;
  }

  const { data } = useQuery(`Namenft${tokenURI}`, nftName, {
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