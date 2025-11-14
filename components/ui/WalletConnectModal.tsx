"use client"
import React, { useEffect } from 'react'
import { X, Wallet, CreditCard, Smartphone } from 'lucide-react'

interface WalletConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WalletConnectModal = ({ isOpen, onClose }: WalletConnectModalProps) => {
  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const wallets = [
    {
      id: 'metamask',
      name: 'MetaMask',
      icon: <Wallet className="w-6 h-6" />,
      description: 'Connect using MetaMask wallet',
    },
    {
      id: 'walletconnect',
      name: 'WalletConnect',
      icon: <Smartphone className="w-6 h-6" />,
      description: 'Scan QR code with your mobile wallet',
    },
    {
      id: 'coinbase',
      name: 'Coinbase Wallet',
      icon: <CreditCard className="w-6 h-6" />,
      description: 'Connect with Coinbase Wallet',
    },
  ];

  const handleWalletClick = (walletId: string) => {
    console.log('Connecting to:', walletId);
    // Add your wallet connection logic here
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center px-3"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-[fadeIn_0.3s_ease-out]"
      />
      
      {/* Modal */}
      <div
        className="relative w-full max-w-md bg-[#2d293f] backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl animate-[slideUpFade_0.3s_ease-out] mb-20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <h2 className="text-lg font-semibold text-foreground">Connect Wallet</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 text-foreground/60 hover:text-foreground"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-6">
          <p className="text-sm text-foreground/60 mb-6">
            Choose a wallet to connect to your account
          </p>

          <div className="flex flex-col gap-3">
            {wallets.map((wallet) => (
              <button
                key={wallet.id}
                onClick={() => handleWalletClick(wallet.id)}
                className="flex items-center gap-4 p-4 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-200 group"
              >
                <div className="p-3 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors duration-200 text-foreground">
                  {wallet.icon}
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-sm font-medium text-foreground mb-1">
                    {wallet.name}
                  </h3>
                  <p className="text-xs text-foreground/60">
                    {wallet.description}
                  </p>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-white/10">
            <p className="text-xs text-foreground/40 text-center">
              By connecting a wallet, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletConnectModal;

