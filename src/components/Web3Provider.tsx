import React from 'react'
import { http, createConfig, WagmiProvider } from "wagmi"
import { CivicAuthProvider } from "@civic/auth/nextjs";
import { sepolia } from "wagmi/chains"
import { embeddedWallet } from "@civic/auth-web3/wagmi"

export const config = createConfig({
    chains: [sepolia],
    transports: {
      [sepolia.id]: http(),
    },
    connectors: [embeddedWallet()]
  })

const Web3Provider = (children: React.ReactNode) => {
  return (
    <WagmiProvider config={config}>
        <CivicAuthProvider displayMode='redirect'>
            {children}
        </CivicAuthProvider>
    </WagmiProvider>
  )
}

export default Web3Provider