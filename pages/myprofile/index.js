import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Social_dropdown from '../../components/dropdown/Social_dropdown';
import Auctions_dropdown from '../../components/dropdown/Auctions_dropdown';
import User_items from '../../components/user/User_items_profile';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Meta from '../../components/Meta';
import { useMoralis } from "react-moralis";
import { useQuery } from 'react-query';
import Footer from "../../components/footer";

const MyProfile = () => {
	const { Moralis, user } = useMoralis();

	const walletAddress = user?.attributes?.ethAddress;

	const fetchProfile = async () => {
		const query = new Moralis.Query("IfUser");
		query.equalTo("postOwner", walletAddress);
		const result = await query.find();
		const a = JSON.parse(JSON.stringify(result))
		const b = a[0];
		return b;
	}

	const { data } = useQuery(`userProfile${walletAddress}myprofile`, fetchProfile, {
		staleTime: 1000 * 50,
		//cacheTime: 111120000,
	})

	const [copied, setCopied] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setCopied(false);
		}, 2000);
	}, [copied]);


	const [quantitySeguindo, setQuantitySeguindo] = useState("");
	const [quantitySeguidores, setquantitySeguidores] = useState("");
	const [quantityPublications, setQuantityPublications] = useState("");

	useEffect(() => {
		async function seguindo() {
			if (walletAddress) {
				const query = new Moralis.Query(`seguir`);
				query.equalTo("seguidores", walletAddress.toLowerCase());
				const likes = await query.find();
				setQuantitySeguindo(likes.length);
			}
		}
		seguindo()
	}, [walletAddress]);

	useEffect(() => {
		async function seguidores() {
			if (walletAddress) {
				const query = new Moralis.Query(`seguir`);
				query.equalTo("seguindo", walletAddress.toLowerCase());
				const likes = await query.find();
				setquantitySeguidores(likes.length);
			}
		}
		seguidores()
	}, [walletAddress]);

	useEffect(() => {
		async function publication() {
			if (walletAddress) {
				const query = new Moralis.Query(`FreeMinting`);
				query.equalTo("owner", walletAddress.toLowerCase());
				const likes = await query.find();
				setQuantityPublications(likes.length);
			}
		}
		publication()
	}, [walletAddress]);


	function perfilImag (ipfs){
		let origLink = ipfs?.replace('ipfs://', 'https://nftstorage.link/ipfs/');
		return origLink;
	}

	return (
		<>
			<Meta title="User" />
			{/* <!-- Profile --> */}

			<div className="pt-[5.5rem] lg:pt-24" >
				{/* <!-- Banner --> */}
				<div className="relative h-[18.75rem] banner_user_profile">
					<img src={perfilImag(data?.bannerUser) ? perfilImag(data?.bannerUser) : '/images/frame_2_1.png'} alt="banner" layout="fill" objectFit="cover" />
				</div>
				{/* <!-- end banner --> */}
				<section className="dark:bg-jacarta-800 bg-light-base relative pb-12 pt-28">
					{/* <!-- Avatar --> */}
					<div className="absolute left-1/2 top-0 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center ts_trans_resp">
						<figure className="relative h-40 w-40 dark:border-jacarta-600 border-radius_100 border-[5px] border-white">
							<img
								src={perfilImag(data?.avatarUser) ? perfilImag(data?.avatarUser) : '/images/frame_2_1.png'}
								alt=""
								layout="fill"
								objectFit="contain"
								className="dark:border-jacarta-600 border-radius_100  border-white user_profile_img"
							/>
							<div
								className="dark:border-jacarta-600 bg-purple absolute right_avatar bottom-0 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white"
								data-tippy-content="Verified Collection"
							>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="h-[.875rem] w-[.875rem] fill-white"><path fill="none" d="M0 0h24v24H0z"></path><path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path></svg>
							</div>
						</figure>
					</div>
					<div className="container">
						<div className="text-center">
							<h2 className="font-display text-jacarta-700 mb-2 text-4xl font-medium dark:text-white">
								{data?.userName}
							</h2>
							<h3 className="text-jacarta-400">
							@{data?.nameUserLink}
							</h3>
							<div className="dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 mb-8 inline-flex items-center justify-center rounded-full border bg-white py-1.5 px-4">
								{/* <Image
									src="/images/logo_black.png"
									className=" inline-block h-6 w-6"
									alt=""
									height={15}
									width={15}
								/> */}
								<Tippy
									hideOnClick={false}
									content={copied ? <span>copied</span> : <span>copy</span>}
								>
									<button className="js-copy-clipboard dark:text-jacarta-200 ml-1 max-w-[10rem] select-none overflow-hidden text-ellipsis whitespace-nowrap">
										<CopyToClipboard text={walletAddress} onCopy={() => setCopied(true)}>
											<span>{walletAddress}</span>
										</CopyToClipboard>
									</button>
								</Tippy>
							</div>
							<p className="dark:text-jacarta-300 mx-auto mb-2 max-w-xl text-lg">{data?.bio}</p>
							<div className='flex flex-col items-center'>
								<span className="text-jacarta-400">Joined December {data?.createdAt}</span>
								<div className="dark:bg-jacarta-800 dark:border-jacarta-600 border-jacarta-100 mb-8 inline-flex flex-wrap items-center justify-center rounded-xl border bg-white mt-5">
									<div className="border-resp_none dark:border-jacarta-600 border-jacarta-100 w-1/2 rounded-l-xl border-r py-4 hover:shadow-md sm:w-32">
										<div className="text-jacarta-700 mb-1 text-base font-bold dark:text-white">
											<p>{quantityPublications}</p>
										</div>
										<div className="text-2xs dark:text-jacarta-400 font-medium tracking-tight">
											<p>publications</p>
										</div>
									</div>
									<div className="dark:border-jacarta-600 border-jacarta-100 w-1/2 rounded-l-xl border-r py-4 hover:shadow-md sm:w-32">
										<div className="text-jacarta-700 mb-1 text-base font-bold dark:text-white">
											<p>{quantitySeguidores}</p>
										</div>
										<div className="text-2xs dark:text-jacarta-400 font-medium tracking-tight">
											<p>followers</p>
										</div>
									</div>
									<div className="w_resp_100 dark:border-jacarta-600 border-jacarta-100 w-1/2 rounded-l-xl border-r py-4 hover:shadow-md sm:w-32">
										<div className="text-jacarta-700 mb-1 text-base font-bold dark:text-white">
											<p>{quantitySeguindo}</p>
										</div>
										<div className="text-2xs dark:text-jacarta-400 font-medium tracking-tight">
											<p>following</p>
										</div>
									</div>
								</div>
							</div>
							<div className="mt-6 flex items-center justify-center space-x-2.5 relative">
								<Social_dropdown />

								<Auctions_dropdown classes="dark:border-jacarta-600 dark:hover:bg-jacarta-600 border-jacarta-100 dropdown hover:bg-jacarta-100 dark:bg-jacarta-700 rounded-xl border bg-white relative" />
							</div>
						</div>
					</div>
				</section>
				{/* <!-- end profile --> */}
				<User_items />
			</div>
			<Footer />
		</>
	);
};

export default MyProfile;
