import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Image from 'next/image';
import 'react-tabs/style/react-tabs.css';
import My_collection_item from '../collectrions_upload/myprofile_collection_item';

const User_items = () => {
	//myprofile
	const [itemActive, setItemActive] = useState(1);
	const tabItem = [
		{
			id: 2,
			text: 'Free Minting',
			icon: 'owned',
		},
	];
	return (
		<>
			<section className="relative py-24">
				<picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
					{/* <img src="img/gradient_light.jpg" alt="gradient" className="h-full w-full" /> */}
					<Image
						src="/images/gradient_light.jpg"
						alt="gradient"
						className="h-full w-full"
						layout="fill"
					/>
				</picture>
				<div className="container">
					{/* <!-- Tabs Nav --> */}
					<Tabs className="tabs">
						<TabList className="nav nav-tabs scrollbar-custom mb-12 flex items-center justify-start overflow-x-auto overflow-y-hidden border-b border-jacarta-100 pb-px dark:border-jacarta-600 md:justify-center">
							{tabItem.map(({ id, text, icon }) => {
								return (
									<Tab
										className="nav-item"
										role="presentation"
										key={id}
										onClick={() => setItemActive(id)}
									>
										<button
											className={
												itemActive
													? 'nav-link hover:text-jacarta-700 text-jacarta-400 relative flex items-center whitespace-nowrap py-3 px-6 dark:hover:text-white active'
													: 'nav-link hover:text-jacarta-700 text-jacarta-400 relative flex items-center whitespace-nowrap py-3 px-6 dark:hover:text-white'
											}
										>
											<svg className="icon mr-1 h-5 w-5 fill-current">
												<use xlinkHref={`/icons.svg#icon-${icon}`}></use>
											</svg>
											<span className="font-display text-base font-medium">Free Minting</span>
										</button>
									</Tab>
								);
							})}
						</TabList>
						<TabPanel>
							<div>
								<My_collection_item />
							</div>
						</TabPanel>
						{/* <TabPanel>
							<div className="grid grid-cols-1 gap-[1.875rem] md:grid-cols-3 lg:grid-cols-4">
								<Explore_collection_item itemFor="userPage" />
							</div>
						</TabPanel>*/}
					</Tabs>
				</div>
			</section>
		</>
	);
};

export default User_items;
