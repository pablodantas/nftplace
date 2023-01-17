import React, { useState, useEffect, useMemo } from "react";
import { useMoralis } from "react-moralis";
import { useQuery } from 'react-query';

export default function UseProfile({ addr }) {

	const { Moralis } = useMoralis();

	const fetchItemMan = async () => {
		if (addr) {
			const query = new Moralis.Query("IfUser");
			query.equalTo("nameUserLink", addr.toLowerCase());
			const result = await query.find();
			const a = JSON.parse(JSON.stringify(result))
			const b = a[0];
			return b;
		}
	}

	const { data } = useQuery(`MoralisfetchProfileAvatar${addr}`, fetchItemMan, {
		staleTime: 1000 * 90,
	})

	function perfilImag (ipfs){
		let origLink = ipfs?.replace('ipfs://', 'https://nftstorage.link/ipfs/');
		return origLink;
	}

	return (
		<>
			{data ? (
				<a href={`/user/${data?.postOwner}`} className="flex flex-col cursor-pointer p-2 mb-2">
					<span className="flex items-center gap-1 user_name">
						<div className="w_h imgBorder2 mr-10-i">
							<img
								src={perfilImag(data?.avatarUser)}
								alt=""
								className="w_h user_pic rounded-pill"
							/>
						</div>
						<div className="">
							<p className="flex flex-col line_heigth_1">
								<span>{data?.userName} <span className="user_nick ml-1">@{data?.nameUserLink}</span></span>
								<small className="mt-1 text-truncate_2">
									{data?.postOwner}
								</small>
							</p>
						</div>
					</span>
				</a>
			) : <a className="flex flex-col cursor-pointer p-2 mb-2">
				<span className="flex gap-1 user_name">
					<div className="imgBorder2 mr-10-i">

					</div>

				</span>
				<span>
					<small className="text-truncate">

					</small>
				</span>
			</a>}
		</>
	);

}
