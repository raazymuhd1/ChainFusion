import { useState } from 'react'
import { recentTxsHeader, recentTxs } from '@/constants'
import { LuArrowUpDown  } from "react-icons/lu";
import { RiExternalLinkLine } from "react-icons/ri";

const RecentTxs = () => {

    const handleRecentTxs = (title: string, values: string[]) => {
        return (
            <aside className='flex flex-col gap-[10px]'>
                <div className='flex items-center gap-[8px]'>
                    <h3 className='font-bold underline underline-offset-[8px] '> { title } </h3>
                </div>
                { values.map(val => (
                    <aside className='flex items-center gap-[8px]'>
                        <LuArrowUpDown className={`${title.toLowerCase() == "type" ? "visible" : "hidden"} w-[25px] h-[25px] glass_bg p-[5px] rounded-[10px]`} />
                        <p 
                            className={`
                                ${ (title.toLowerCase() == "type" || title.toLowerCase() == "value") ? "font-bold" : 'font-semibold' }


                                ${(title.toLowerCase() == "hash") 
                                    ? "text-[#4c91c9] underline font-semibold" 
                                    : title.toLowerCase() == 'status' 
                                    ? "bg-[#5aac35]" 
                                    : "bg-[#f94b78]"
                                 } 
                                 py-[3px] px-[5px] rounded-[10px]`}> 
                        {val} 
                        </p>
                       
                       <a href={`${val}`} target='_blank' className={` ${(title.toLowerCase() == "hash") ? "visible" : "hidden"} `}> 
                           <RiExternalLinkLine className={`w-[25px] h-[25px] glass_bg p-[5px] rounded-[10px]`} />
                       </a>
                    </aside>
                )) }
            </aside>
        )
    }

  return (
    <div className='w-full p-[20px] min-h-[300px] rounded-[15px] glass_bg'>
        <h3 className='font-extrabold text-[clamp(1vw,1.5vw,2vw)]'> Recent Transactions </h3>
        
        {/* <article className='w-full mt-[20px] flex items-center justify-around flex-wrap gap-[20px] glass_bg p-[20px]'>
            { handleRecentTxs("Type", ['Bridge', 'NFT Purchase', 'Stake']) }
            { handleRecentTxs("Networks", ['ethereum -> bsc', 'ethereum -> bsc', 'ethereum -> bsc']) }
            { handleRecentTxs("Status", ['Completed', 'Completed', 'Completed']) }
            { handleRecentTxs("Value", ['100 USDT', '100 USDT', '100 USDT']) }
            { handleRecentTxs("Hash", ['0x000', '0x000', '0x000']) }
        </article> */}

        <article className='flex flex-col gap-[10px]'>
            <aside className='mt-[30px] flex items-center justify-around'>
                { recentTxsHeader.map((txHeader, idx) => (
                    <h4 className='font-semibold underline underline-offset-[8px] ' key={idx}>
                        { txHeader }
                    </h4>
                )) }
            </aside>

            <aside className='flex flex-col gap-[10px]'>
                { recentTxs.map(tx => (
                    <div key={tx.id} className='w-full flex items-start justify-around glass_bg p-[20px] rounded-[10px] translate-x-[-10px]'>
                        <div className='flex items-center gap-[5px]'>
                            <LuArrowUpDown className={`w-[25px] h-[25px] bg-[#f94b78] p-[5px] rounded-[10px]`} />
                            <h4 className='font-bold'> { tx.type } </h4>
                        </div>
                        <p className='bg-[#f94b78] p-[5px] rounded-[10px]'> { tx.networks } </p>
                        <p className='px-[10px] py-[5px] bg-[#5aac35] rounded-[10px]'> { tx.status } </p>
                        <h4 className='bg-[#f94b78] p-[5px] rounded-[10px]'> { tx.value } </h4>
                        <aside className='flex items-center gap-[5px]'>
                            <p className='text-[#4c91c9] underline font-semibold'> { tx.hash } </p>
                            <a href={`${tx.hash}`} target='_blank' className={``}> 
                                <RiExternalLinkLine className={`w-[25px] h-[25px] glass_bg p-[5px] rounded-[10px]`} />
                             </a>
                        </aside>
                    </div>
                )) }
            </aside>
        </article>
    </div>
  )
}

export default RecentTxs