import React, { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";

const Seguir = ({ userPost, walletAddress }) => {

    const [seguiriu, setSeguiriu] = useState();

    const { Moralis } = useMoralis();

    useEffect(() => {
        async function likeCora() {
            if (userPost) {
                const like = Moralis.Object.extend('seguir');
                const query = new Moralis.Query(like);
                query.equalTo("seguindo", userPost.toLowerCase());
                query.equalTo("seguidores", walletAddress.toLowerCase());
                const likeIses = await query.first();
                setSeguiriu(likeIses?.attributes?.like);
            }
        }
        likeCora()
    }, [userPost]);

    async function handleSeguir() {
        if (walletAddress && userPost && walletAddress !== userPost) {
            const like = Moralis.Object.extend('seguir');
            const query = new Moralis.Query(like);
            query.equalTo("seguindo", userPost.toLowerCase());
            query.equalTo("seguidores", walletAddress.toLowerCase());
            const likeIses = await query.first();
            if (likeIses) {
                setSeguiriu(false);
                likeIses.destroy();
            } else {
                const newLike = new like();
                newLike.set("seguindo", userPost.toLowerCase());
                newLike.set("seguidores", walletAddress.toLowerCase());
                newLike.set("like", true);
                setSeguiriu(true);
                await newLike.save();
            }
        }
    };

    return (
        <>
            {walletAddress !== userPost ? (
                <button
                    className="mb-3 mt-2 feedBtn btn p-3 bgbuttons dark:bg-jacarta-900 seguir_container"
                    onClick={handleSeguir}
                >
                    {seguiriu ? (
                        <p className="dark:text-white">following</p>
                    ) : (
                        <p className="dark:text-white">follow</p>
                    )}
                </button>
            ) : (
                <p></p>
            )}
        </>
    );
};
export default Seguir;
