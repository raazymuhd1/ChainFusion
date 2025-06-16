
import { MdOutlineHistory } from "react-icons/md"
import { BiCoinStack } from "react-icons/bi";
import { IconType } from 'react-icons/lib'
import { GoHome } from "react-icons/go";
import { FiShoppingBag } from "react-icons/fi";
import { MdOutlineSettings, MdOutlineStackedLineChart  } from "react-icons/md";
import { LuArrowUpDown, LuArrowRightLeft  } from "react-icons/lu";
import { PiCoinsBold } from "react-icons/pi";
import { RiChatHistoryLine } from "react-icons/ri";
import { FaFaucet } from "react-icons/fa";
import { FaArrowTrendUp, FaArrowTrendDown, FaDollarSign   } from "react-icons/fa6";
// images
import { circle } from "@/assets";
import { StaticImageData } from "next/image";

interface IPools {
    [index: string]: string | number | StaticImageData; 
}


const countersData = [
    { 
        value: "$2.5B+",
        title: "Total Volume"
     },
    { 
        value: "150K+",
        title: "Active Users"
     },
    { 
        value: "15+",
        title: "Supported Chains"
     },
    { 
        value: "99.9%",
        title: "Uptime"
     },
]

const cards = [
    {
        id: 1,
        title: "Cross-Chain Trading",
        desc: "Trade assets across multiple blockchains without leaving your preferred network"
    },
    {
        id: 2,
        title: "Secure Bridge",
        desc: "Military-grade security protocols ensure your assets are safe during transfers"
    },
    {
        id: 3,
        title: "Lightning Fast",
        desc: "Execute cross-chain transactions in seconds, not minutes"
    },
    {
        id: 4,
        title: "Multi-Chain Staking",
        desc: "Stake tokens across different chains and maximize your yield potential"
    }
]

const sidebarLinks = [
    { id: 1, title: "Dashboard", url: "/main", Icon: GoHome, isActive: true },
    { id: 2, title: "Bridge", url: "/main/bridge", Icon: LuArrowUpDown, isActive: false },
    { id: 3, title: "Swap", url: "/main/swap", Icon: LuArrowRightLeft, isActive: false },
    { id: 4, title: "NFT Marketplace", url: "/main/marketplace", Icon: FiShoppingBag, isActive: false },
    { id: 5, title: "Lending", url: "/main/lending", Icon: FiShoppingBag, isActive: false },
    { id: 6, title: "Staking", url: "/main/staking", Icon: BiCoinStack, isActive: false },
    { id: 7, title: "Faucet", url: "/main/faucet", Icon: FaFaucet, isActive: false },
    { id: 8, title: "Settings", url: "/main/settings", Icon: MdOutlineSettings, isActive: false },
]

const dummyDashboard = [
    { id: 1, title: "Total Portfolio", value: '$12,456.78' },
    { id: 2, title: "Cross-chain Savings", value: '$892.34' },
    { id: 3, title: "Active Bridges", value: '3' },
    { id: 4, title: "Staking Rewards", value: '$234.56' },
]

const quickActions = [
    { id: 1, title: "Cross-chain Bridge", Icon: LuArrowUpDown, url: "/bridge",  bgColor: "rgba(245,97,0,255)" },
    { id: 2, title: "Start Staking", Icon: BiCoinStack, url: "/staking", 
        bgColor: "#f94b78" },
    { id: 3, title: "View History", Icon: MdOutlineHistory, url: "/tx-history", bgColor: "#5aac35" },
]

const recentTxs = [
    { id: 1, type: "Bridge", networks: "ethereum -> bsc", value: "100 USDT", status: "Completed", hash: "0x000" },
    { id: 2, type: "NFT", networks: "ethereum -> bsc", value: "100 USDT", status: "Completed", hash: "0x000" },
    { id: 3, type: "Stake", networks: "ethereum -> bsc", value: "100 USDT", status: "Completed", hash: "0x000" },
]

const recentTxsHeader = [
    "Type",
    "Networks",
    "Status",
    "Value",
    "Tx-Hash"
]


const notifSettings = [
    { id: 1, title: "Transaction notifications", desc: "Get notified about transaction status" },
    { id: 2, title: "Price alerts", desc: "Receive alerts for significant price movements" },
]

// staking dummy data
const stakingData = [
    { id: 1, title: "Total Staked", value: "6,234", Icon: PiCoinsBold },
    { id: 2, title: "Total Rewards", value: "169", Icon: MdOutlineStackedLineChart },
    { id: 3, title: "Avg APY", value: "12", Icon: RiChatHistoryLine },
]

const availablePools = [
    { 
        id: 1, title: "ETH-USDT", network: "BSC", 
        details: [
            {
                title: "APY",
                value: "12.5"
            },
            {
                title: "TVL",
                value: "2.4"
            },
            {
                title: "Your Stake",
                value: "1,234.56"
            },
            {
                title: "Rewards",
                value: "45.67"
            }
        ] 
    },
    { 
        id: 2, title: "ETH-USDC", network: "ETH", 
        details: [
            {
                title: "APY",
                value: "8.2"
            },
            {
                title: "TVL",
                value: "890"
            },
            {
                title: "Your Stake",
                value: "5,000.00"
            },
            {
                title: "Rewards",
                value: "123.45"
            }
        ] 
    }
]

// faucet 

const tokensOption = [
    { id: 1, title: "USDT", value: "100", logo: circle },
    { id: 2, title: "USDC", value: "100", logo: circle },
    { id: 3, title: "MATIC", value: "10", logo: circle },
]

const tokensStatus = [
    { id: 1, name: "USDT", logo: circle, network: "Sepolia", status: "Available" },
    { id: 2, name: "USDC", logo: circle, network: "Sepolia", status: "Available" },
    { id: 3, name: "MATIC", logo: circle, network: "Sepolia", status: "Available" },
]

// Lending & Borrowing
const lendingData = [
    { id: 1, title: "Total Supplied", logo: FaDollarSign, value: "45,231.82"},
    { id: 2, title: "Total Borrowed", logo: FaArrowTrendDown, value: "12,543.21"},
    { id: 3, title: "Net APY", logo: FaArrowTrendUp, value: "3.7"},
]

const lendingCardInfo = [
    { id: 1, title: "Apy", value: "4.5" },
    { id: 2, title: "Available Balance", value: "3" },
    { id: 3, title: "Limit", value: "25,431.82" },
]


const lendingPools = [
    { id: 1, asset: "ETH", logo: circle,  supplyApy: "4.5", borrowApy: "12.3", liquidity: "2.1" },
    { id: 2, asset: "USDC", logo: circle,  supplyApy: "4.5", borrowApy: "12.3", liquidity: "2.1" },
    { id: 3, asset: "USDT", logo: circle,  supplyApy: "4.5", borrowApy: "12.3", liquidity: "2.1" },
    { id: 4, asset: "WBTC", logo: circle,  supplyApy: "4.5", borrowApy: "12.3", liquidity: "2.1" },
]

export { 
    countersData, cards, 
    sidebarLinks, dummyDashboard, 
    quickActions, recentTxs, recentTxsHeader, notifSettings, 
    stakingData, availablePools,
    tokensOption, tokensStatus,
    lendingData, lendingCardInfo, lendingPools
}