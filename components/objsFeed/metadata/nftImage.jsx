import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";

function ImageNFT({ tokenURI }) {

  let origLink = tokenURI.replace('ipfs://', 'https://ipfs.io/ipfs/');
  let tokenUri = origLink;

  async function nftImage() {
    let NFT;
    try {
      await fetch(tokenUri)
        .then((response) => response.json())
        .then((data) => {
          NFT = data.image;
        });
    } catch (error) {
      console.log(error);
    }

    let img = NFT.replace('ipfs://', 'https://ipfs.io/ipfs/');
    return img;
  }

  const { data } = useQuery(`Imgnft${tokenUri}`, nftImage, {
    staleTime: 1000 * 60,
    //cacheTime: 111120000,
  });
  useEffect(() => {
    if (data) {
      let type;
      type = data.split('.').reverse().join('');
      type = type.substr(0, 3);
      const postResult = (<video className="imgpost" controls autoPlay muted loop src={data} allow="fullscreen" ></video>)
      const emptyResult = (<img className="imgpost" src={data} rounded alt="" />)

      if (type === "mp4" || type === "mov" || type === "avi" || type === "m4v" || type === "mpe" || type === "ogv" || type === "web" || type === "wmv") {
        setPlayMan(postResult);
      }
      if (type === "gif" || type === "png" || type === "jpg" || type === "bmp" || type === "jpe" || type === "svg" || type === "web") {
        setPlayMan(emptyResult);
      }
    }
  }, [data]);

  const [playMan, setPlayMan] = useState('');

  return (playMan)

} export default ImageNFT;
