import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Activity_item from '../collectrions/Activity_item';
import Image from 'next/image';

import 'react-tabs/style/react-tabs.css';
import Profile_collection_item from '../collectrions/profile_collection_item';

const User_items = () => {
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
					<div className="tabs">
						<div className="nav nav-tabs scrollbar-custom mb-12 flex items-center justify-start overflow-x-auto overflow-y-hidden border-b border-jacarta-100 pb-px dark:border-jacarta-600 md:justify-center">
							<div
								className="nav-item"
								role="presentation"
							>
								<button
									className='nav-link hover:text-jacarta-700 text-jacarta-400 relative flex items-center whitespace-nowrap py-3 px-6 dark:hover:text-white active'>
								
									<svg className="icon mr-1 h-5 w-5 fill-current">
										<use xlinkHref={`/icons.svg#icon-owned`}></use>
									</svg>
									<span className="font-display text-base font-medium">Free Minting</span>
								</button>
							</div>

						</div>
					</div>
					<div >
						<Profile_collection_item />
					</div>
				</div>
			</section>
		</>
	);
};

export default User_items;
