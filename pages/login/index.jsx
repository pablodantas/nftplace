import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar";
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Meta from "../../components/Meta";
import { useMoralis } from "react-moralis";
import Image from 'next/image';
import { useRouter } from "next/router";
import Moralis from 'moralis-v1';


const Login = () => {

  const [itemActive, setItemActive] = useState(1);

  const { authenticate, enableWeb3, isAuthenticated, user, logout } = useMoralis();
  const [authError, setAuthError] = useState(null);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const handleLogin = async () => {
    try {
      setAuthError(null);
      setIsAuthenticating(true);
      // Enable web3 to get user address and chain
      await enableWeb3({
        throwOnError: true,
        provider: "walletconnect",
        appLogo: "/images/placelogo.png",
        chainId: 97,
      });
      const { account, chainId } = Moralis;
      if (!account) {
        throw new Error('Login Failed');
      }
      if (!chainId) {
        throw new Error('Login Failed');
      }
      if (!isAuthenticated && account && chainId) {
        const chainId = parseInt(97)
        //chainId must match the testnet/mainnet of the web3auth clientId's project settings or the login won't work
        // Get message to sign from the auth api
        const { message } = await Moralis.Cloud.run('requestMessage', {
          address: account,
          chain: 97,
          network: 'evm',
        });
        await authenticate({
          signingMessage: message,
          throwOnError: true,
          provider: "walletconnect",
          chainId: 97,
        })
      }
    } catch (error) {
      setAuthError(error);
    } finally {
      setIsAuthenticating(false);
    }
  }

  const handleMetaMask = async () => {
    try {
      setAuthError(null);
      setIsAuthenticating(true);
      // Enable web3 to get user address and chain
      await enableWeb3({
        throwOnError: true,
        provider: "metamask",
        chainId: 97,
      });
      const { account, chainId } = Moralis;
      if (!account) {
        throw new Error('Login Failed');
      }
      if (!chainId) {
        throw new Error('Login Failed');
      }
      if (!isAuthenticated && account && chainId) {
        const chainId = parseInt(97)
        //chainId must match the testnet/mainnet of the web3auth clientId's project settings or the login won't work
        // Get message to sign from the auth api
        const { message } = await Moralis.Cloud.run('requestMessage', {
          address: account,
          chain: 97,
          network: 'evm',
        });
        await authenticate({
          signingMessage: message,
          throwOnError: true,
          provider: "metamask",
          chainId: 97,
        })
      }
    } catch (error) {
      setAuthError(error);
    } finally {
      setIsAuthenticating(false);
    }
  }

  const Router = useRouter();
  useEffect(() => {
    if (user) {
      Router.push('/')
    }
  }, [user]);


  return (
    <div>
      <Meta title="Login" />
      <Navbar />
      {/* <!-- Login --> */}
      <section className="relative h-screen section_login">
        <div className="display_login pt-10">
          {/* <!-- Right --> */}
          <div className="display_login_color">
            <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
              <img
                src="/images/gradient_light.jpg"
                alt="gradient"
                className="h-full w-full"
              />
            </picture>
            <div className="w-full max-w-[25.625rem] text-center">
              <h1 className="text-jacarta-700 font-display mb-6 text-4xl dark:text-white">
                Sign in
              </h1>
              <p className="dark:text-jacarta-300 mb-10 text-lg leading-normal">
                Choose one of available wallet providers or create a new wallet. <a href="#" className="text-accent">What is a wallet?</a></p>
              {/* <!-- Tabs Nav --> */}
              <Tabs className="tabs ">
                <TabList className="nav gap-aut nav-tabs flex justify-start scrollbar-custom dark:border-jacarta-600 border-jacarta-100 mb-12 flex items-center  overflow-x-auto overflow-y-hidden border-b pb-px">

                </TabList>
                {/* <!-- Ethereum --> */}
                <TabPanel>
                  <div className="tab-pane fade show active">
                    <button className="js-wallet bg-accent hover:bg-accent-dark mb-4 flex w-full items-center justify-center rounded border-2 border-transparent py-4 px-8 text-center font-semibold text-white transition-all"
                      onClick={() => handleMetaMask()}>
                      {/* <Image
                        src="/images/tap_2.png"
                        className=" inline-block h-6 w-6"
                        alt=""
                        height={27}
                        width={27}
                      /> */}
                      <span className="ml-2.5">Login MetaMask</span>
                    </button>
                    <button className="js-wallet bg-accent hover:bg-accent-dark mb-4 flex w-full items-center justify-center rounded border-2 border-transparent py-4 px-8 text-center font-semibold text-white transition-all"
                      onClick={() => handleLogin()}>
                      {/* <Image
                        src="/images/tap_2.png"
                        className=" inline-block h-6 w-6"
                        alt=""
                        height={27}
                        width={27}
                      /> */}
                      <span className="ml-2.5">Login WalletConnect</span>
                    </button>
                  </div>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end login --> */}
    </div>
  );
};

export default Login;
