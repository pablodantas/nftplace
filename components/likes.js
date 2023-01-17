import Tippy from "@tippyjs/react";
import React, { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import { useQuery } from "react-query";

const Likes = ({ likeId, classes = "dark:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-white p-2", }) => {
  const { Moralis, user } = useMoralis();
  const walletAddress = user?.attributes?.ethAddress;

  const [likeState, setLikeState] = useState(false);
  const [quantityLikes, setquantityLikes] = useState(0);

  async function handleLike() {
    if (walletAddress) {
      const likeCo = !likeState;
      setLikeState(likeCo);
      if (likeCo === true) {
        setquantityLikes(quantityLikes + 1);
      }
      if (likeCo !== true) {
        setquantityLikes(quantityLikes - 1);
      }
      const like = Moralis.Object.extend('like');
      const query = new Moralis.Query(like);
      query.equalTo("postLike", likeId);
      query.equalTo("donoVoter", walletAddress.toLowerCase());
      const likeIses = await query.first();
      if (likeIses) {
        likeIses.destroy();
      } else {
        const newLike = new like();
        newLike.set("postLike", likeId);
        newLike.set("donoVoter", walletAddress);
        newLike.set("like", likeCo);
        await newLike.save();
      }
    }
  };

    async function likeCoracao() {
      if (walletAddress) {
        const like = Moralis.Object.extend('like');
        const query = new Moralis.Query(like);
        query.equalTo("postLike", likeId);
        query.equalTo("donoVoter", walletAddress.toLowerCase());
        const likeIses = await query.first();
        return likeIses?.attributes?.like;
      }
    }

    const { data:coracao } = useQuery(`LikeCoracao${likeId}`, likeCoracao, {
      staleTime: 1000 * 90,
      //cacheTime: 111120000,
    });
  
    useEffect(() => {
      if (coracao) {
        setLikeState(coracao);
      }
    }, [coracao]);

    async function likeQuantity() {
        const query = new Moralis.Query(`like`);
        query.equalTo("postLike", likeId);
        query.equalTo("like", true);
        const likes = await query.find();
        const res = likes.length;
        return res;
    }

  const { data: quantity } = useQuery(`LikeQuantity${likeId}`, likeQuantity, {
    staleTime: 1000 * 90,
    //cacheTime: 111120000,
  });

  useEffect(() => {
    if (quantity) {
      setquantityLikes(quantity);
    }
  }, [quantity]);


  return (
    <>
      <div className={classes} onClick={handleLike} key={likeId}>
        <Tippy content={<span>Favorite</span>}>
          <button className="js-likes relative cursor-pointer">
            {likeState !== true ? (
              <svg className="icon icon-heart-fill dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4">
                <use xlinkHref="/icons.svg#icon-hert-fill"></use>
              </svg>
            ) : (
              <svg className="icon icon-heart-fill dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4">
                <use xlinkHref="/icons.svg#icon-heart-fill"></use>
              </svg>
            )}
          </button>
        </Tippy>
        <span className="dark:text-jacarta-200 text-sm">{quantityLikes} </span>
      </div>
    </>

  );
};

export default Likes;
