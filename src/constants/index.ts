
import { MdOutlineHistory } from "react-icons/md"
import { BiCoinStack } from "react-icons/bi";
import { IconType } from 'react-icons/lib'
import { GoHome } from "react-icons/go";
import { FiShoppingBag } from "react-icons/fi";
import { MdOutlineSettings } from "react-icons/md";
import { LuArrowUpDown, LuArrowRightLeft  } from "react-icons/lu";


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
    { id: 1, title: "Dashboard", url: "/main", Icon: GoHome },
    { id: 2, title: "Bridge", url: "/main/bridge", Icon: LuArrowUpDown },
    { id: 3, title: "Swap", url: "/main/swap", Icon: LuArrowRightLeft },
    { id: 4, title: "NFT Marketplace", url: "/main/marketplace", Icon: FiShoppingBag },
    { id: 5, title: "Staking", url: "/main/staking", Icon: BiCoinStack },
    { id: 6, title: "Settings", url: "/main/settings", Icon: MdOutlineSettings },
]

const dummyDashboard = [
    { id: 1, title: "Total Portfolio", value: '$12,456.78' },
    { id: 2, title: "Cross-chain Savings", value: '$892.34' },
    { id: 3, title: "Active Bridges", value: '3' },
    { id: 4, title: "Staking Rewards", value: '$234.56' },
]

const quickActions = [
    { id: 1, title: "Cross-chain Bridge", Icon: LuArrowUpDown, url: "/bridge",  bgColor: "#18191d" },
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


export { countersData, cards, sidebarLinks, dummyDashboard, quickActions, recentTxs, recentTxsHeader, notifSettings }