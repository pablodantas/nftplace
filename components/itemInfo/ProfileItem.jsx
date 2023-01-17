import React, { useState, useEffect } from "react";
import { useMoralis } from "react-moralis";
import { useQuery } from 'react-query';

function ProfileItem({ address }) {

	const { Moralis } = useMoralis();

	const addressId  = address;

	const [profileImg, setProfileImg] = useState();
	const [userName, setProfileuserName] = useState();

	const fetchItemMan = async () => {
		const query = new Moralis.Query("IfUser");
		query.equalTo("postOwner", addressId);
		const result = await query.find();
		const a = JSON.parse(JSON.stringify(result))
		const b = a[0];
		return b;
	}

	const { data } = useQuery(`fetchItemAvatar${addressId}`, fetchItemMan, {
		staleTime: 1000 * 1,
	})

	useEffect(() => {
		if (address) {
			setProfileImg(data?.avatarUser.replace('ipfs://', 'https://nftstorage.link/ipfs/'))
			setProfileuserName(data?.userName);
		}
	}, [addressId, data, address]);


	return (<img src={profileImg} alt={userName} className="rounded-2lg h-12 w-12" loading="lazy" />);

} export default ProfileItem;
