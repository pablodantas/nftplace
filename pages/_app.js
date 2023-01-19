import '../styles/globals.css';
import { ThemeProvider, useTheme } from 'next-themes';
import Layout from '../components/layout';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { useRouter } from 'next/router';
import { MetaMaskProvider } from 'metamask-react';
import UserContext from '../components/UserContext';
import { useRef } from 'react';
import { MoralisProvider } from "react-moralis";
import { QueryClient, QueryClientProvider } from 'react-query';
import MoralisV1 from "moralis-v1";

const queryClient = new QueryClient();

MoralisV1.initialize('001');
MoralisV1.serverURL = 'https://nftappnewman.herokuapp.com/server';

function MyApp({ Component, pageProps }) {	
	const router = useRouter();
	const pid = router.asPath;
	const scrollRef = useRef({
		scrollPos: 0,
	});


	return (
		<>
			<MoralisProvider appId={'001'} serverUrl={'https://nftappnewman.herokuapp.com/server'}>
				<QueryClientProvider client={queryClient} >
					<Provider store={store}>
						<ThemeProvider  themes={['xhibiter']} enableSystem={false} defaultTheme={'dark'}  attribute="class">
							<MetaMaskProvider>
								<UserContext.Provider value={{ scrollRef: scrollRef }}>
									{pid === '/login' ? (
										<Component {...pageProps} />
									) : (
										<Layout>
											<Component {...pageProps} />
										</Layout>
									)}
								</UserContext.Provider>
							</MetaMaskProvider>
						</ThemeProvider>
					</Provider>
				</QueryClientProvider>
			</MoralisProvider>
		</>
	);
}

export default MyApp;
