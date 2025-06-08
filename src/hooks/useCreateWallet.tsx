"use client"
import React from 'react'
import { userHasWallet } from "@civic/auth-web3"
import { useUser } from "@civic/auth-web3/react"

const useCreateWallet = async() => {
    const userContext = await useUser()

    if(!userHasWallet(userContext) && userContext.user) {
        await userContext.createWallet()
    }

    return ""
}

export default useCreateWallet