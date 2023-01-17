import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Auctions_dropdown from '../../components/dropdown/Auctions_dropdown';
import Social_dropdown from '../../components/dropdown/Social_dropdown';
import Collection_items from '../../components/collectrions/Collection_items';
import Link from 'next/link';
import Footer from "../../components/footer";
import Meta from '../../components/Meta';
import { useMoralis } from "react-moralis";

const Collection = () => {
	const [likesImage, setLikesImage] = useState(false);
	const router = useRouter();
	const pid = router.query.collection;

	const handleLikes = () => {
		if (!likesImage) {
			setLikesImage(true);
		} else {
			setLikesImage(false);
		}
	};

	const { Moralis } = useMoralis();
	const [preview, setPreview] = useState();
	const [coverPreview, setCoverPreview] = useState();
	const [userName, setUserName] = useState();
	const [bio, setBio] = useState();

	const walletAddress = pid;

	useEffect(() => {

		setTimeout(() => {
			async function getPostrs() {
				try {
					const query = new Moralis.Query("IfUser");
					query.equalTo("postOwner", walletAddress);
					const Posts = await query.find();
					const fetchedContent = JSON.parse(JSON.stringify(Posts, ["avatarUser"]));
					const avatar = fetchedContent[0]?.avatarUser;
					if (avatar) {
						setPreview(avatar);
					} else {
						setPreview(null);
					}
					const fetchedContentCover = JSON.parse(JSON.stringify(Posts, ["bannerUser"]));
					const avatarCover = fetchedContentCover[0]?.bannerUser;
					if (avatarCover) {
						setCoverPreview(avatarCover);
					} else {
						setCoverPreview(null);
					}
					const fetchedContentuserName = JSON.parse(JSON.stringify(Posts, ["userName"]));
					const userName = fetchedContentuserName[0]?.userName;
					if (userName) {
						setUserName(userName);
					} else {
						setUserName(null);
					}
					const fetchedContentuserbio = JSON.parse(JSON.stringify(Posts, ["bio"]));
					const bio = fetchedContentuserbio[0]?.bio;
					if (bio) {
						setBio(bio);
					} else {
						setBio(null);
					}
				} catch (error) {
					console.error(error);
				}

			}
			getPostrs();
		}, 2000);
		return () => {
			console.log('cleaned up');
		}

	}, [walletAddress]);

	return (
		<>
			<Meta title={`${pid} || Collection`} />

			<Collection_items />
			<Footer />
		</>
	);
};

export default Collection;
