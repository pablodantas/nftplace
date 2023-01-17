import React, { useState, useEffect } from "react";
import { useMoralis } from "react-moralis";
import { useQuery } from 'react-query';

function ProfileItemName({ address }) {

	const { Moralis } = useMoralis();

	const addressId  = address;
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
			setProfileuserName(data?.userName);
		}
	}, [addressId, data, address]);

	return (userName);

} export default ProfileItemName;


