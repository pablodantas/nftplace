import React from 'react';
import { NewseLatter, Auctions_categories } from '../../components/component';
import Meta from '../../components/Meta';
import Hero5 from "../../components/hero/hero_5";
import Process from "../../components/blog/process";
import Footer from "../../components/footer";

const Home_4 = () => {
	return (
		<>
			<Meta title="NFTplace" />
			<Hero5 />
			<NewseLatter bgWhite={true} />
			<Auctions_categories />
			<Footer />
		</>
	);
};

export default Home_4;
