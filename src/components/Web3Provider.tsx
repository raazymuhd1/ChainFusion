"use client"
import React from 'react'
import { http, createConfig, WagmiProvider } from "wagmi"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CivicAuthProvider } from "@civic/auth/nextjs";
import { sepolia } from "wagmi/chains"
import { embeddedWallet } from "@civic/auth-web3/wagmi"
import useCreateWallet from "@/hooks/useCreateWallet"
import { Provider } from "react-redux";
import { store } from "@/redux/store"

export const config = createConfig({
    chains: [sepolia],
    transports: {
      [sepolia.id]: http(),
    },
    connectors: [embeddedWallet()]
  })

const queryClient = new QueryClient();

const Web3Provider = ({children}: { children: React.ReactNode}) => {
    // create a wallet for a user
    // useCreateWallet()

  return (
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient} >
                  {/* <CivicAuthProvider displayMode='redirect'> */}
                      <Provider store={store}>
                        {children}
                      </Provider>
                  {/* </CivicAuthProvider> */}
          </QueryClientProvider>
        </WagmiProvider>
  )
}

export default Web3Provider