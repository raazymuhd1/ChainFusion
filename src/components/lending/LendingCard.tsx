"use client"
import {useState} from 'react'
import { lendingCardInfo } from '@/constants'
import { CustomButton } from "@/components"

const assets = ['ETH', "WBTC", "USDT", "USDC"]

const LendingCard = () => {
      const [activeTabs, setActiveTabs] = useState([
             { id: 1, title: "Supply", active: true },
             { id: 2, title: "Borrow", active: false },
         ]);
    const SUPPLY_TABS = activeTabs[0]
    const BORROW_TABS = activeTabs[1]

        /**
         * @de handling an active tabs
         * @param id 
         */
        const handleActiveTabs = (id: number) => {
            // make a copies of the array bfore updating the object inside of array
            const tabs = [...activeTabs];
            const tabIsActive = tabs.find(tab => tab.id === id)
            const tabIsNotActive = tabs.filter(tab => tab.id !== id)
    
            // @ts-ignore
            tabIsActive.active = true;
            // @ts-ignore
            tabIsNotActive.forEach(tab => {
                tab.active = false;
            })
    
             setActiveTabs(tabs)
         }

  return (
    <aside className='p-[20px] grid grid-cols-1 gap-[10px] rounded-[15px] w-[80%]   glass_bg'>
        {/* tabs */}
        <div className='w-full max-h-[fit-content] border-[1px] flex items-center p-[10px] rounded-[15px]'>
            { activeTabs.map(tab => (
                <h4 
                    key={tab.id}
                    onClick={() => handleActiveTabs(tab.id)}
                    className={`${(tab.title.toLowerCase() == "supply" && tab.active == true) ? "bg-[var(--secondry-bgColor)]" : (tab.title.toLowerCase() == "borrow" && tab.active == true) && "bg-[var(--purple)]"} p-[10px] w-[50%] rounded-[15px] hover:text-[var(--main-color)] hover:bg-[var(--main-text-color)] cursor-pointer text-center transition-[background_1s] font-semibold`}> { tab.title }
                </h4>
            )) }
        </div>

        {/* assets */}
        <div className='w-full flex flex-col gap-[10px]'>
            <label htmlFor="assets"> Asset </label>
            <select className='w-full p-[8px] rounded-[15px] glass_bg' name="" id="assets">
                { assets.map((asset, idx) => (
                    <option key={idx} value={asset}> {asset.toUpperCase()} </option>
                )) }
            </select>
        </div>

        {/* amount input */}
        <div className='w-full flex flex-col gap-[10px]'>
           <label htmlFor="amount"> Amount </label>
           <aside className='w-full glass_bg border-[1px_var(--border-col)] flex items-center justify-between p-[5px] rounded-[15px]'>
            <input type="text" placeholder='0' id="amount" className='h-full w-[90%] active:border-none' />
            <h5 className='w-[10%] cursor-pointer'> Max </h5>
           </aside>
        </div>

        {/* extra info */}
        <div className='glass_bg p-[15px] rounded-[15px]'>
            { lendingCardInfo.map(info => (
                <div key={info.id} className={`w-full flex items-center justify-between`}> 
                    <p className={`text-[var(--grey-color)] font-semibold`}> { info.title } </p>
                    <h3 className={`font-bold ${SUPPLY_TABS.active ? "text-[var(--warning)]" : "text-[var(--purple)]" }`}> { info.value } </h3>
                </div>
            )) }
        </div>
        {/* button */}
        <CustomButton 
            styles={`w-full p-[5px] ${SUPPLY_TABS.active ? "shadows_orange" : "shadows_purple" }`} 
            title={`${SUPPLY_TABS.active == true ? "Supply" : "Borrow"}`} 
        />
    </aside>
  )
}

export default LendingCard