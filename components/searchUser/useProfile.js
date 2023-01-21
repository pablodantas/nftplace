import React, { useState, useEffect, useMemo } from "react";
import { useMoralis } from "react-moralis";
import { useQuery } from 'react-query';

export default function UseProfile({ addr }) {

	const { Moralis } = useMoralis();

	const fetchItemMan = async () => {
		if (addr) {
			const query = new Moralis.Query("IfUser");
			query.startsWith("nameUserLink", addr.toLowerCase());
			const result = await query.find();
			const res = JSON.parse(JSON.stringify(result))
			return res;
		}
	}
	const [item, setItem] = useState([]);

	const { data } = useQuery(`MoralisfetchProfileAvatar${addr}`, fetchItemMan, {
		staleTime: 1000 * 90,
	})

	function perfilImag(ipfs) {
		let origLink = ipfs?.replace('ipfs://', 'https://nftstorage.link/ipfs/');
		return origLink;
	}

	useEffect(() => {
		if (data) {
		  setItem(data);
		}
	  }, [data]);


	return (
		<>
			{item.map((data, index) => (
				<>
					{data ? (
						<a href={`/user/${data?.postOwner}`} className="flex flex-col cursor-pointer p-2 mb-2" key={index}>
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
					) : <></>}
				</>
			))}

		</>
	);

}
