import React from 'react'
import { lendingData } from '@/constants'

const LendingInfo = () => {
  return (
    <article className={`w-full grid  md:grid-cols-[repeat(3,minmax(200px,1fr))] grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-[15px] rounded-[15px]`}>
        { lendingData.map(data => {
            const TOTAL_SUPPLIED = 'total supplied'
            const TOTAL_BORROWED = 'total borrowed'
            const NET_APY = 'net apy'
            const TITLE_LOWERCASE = data.title.toLowerCase()

           return (
                <div key={data.id} className='p-[20px] rounded-[15px] glass_bg'>
                    <aside className='w-full flex items-center gap-[10px]'>
                        <data.logo 
                            className={`w-[30px] h-[30px] 
                            ${ TITLE_LOWERCASE == TOTAL_SUPPLIED ? "text-[var(--success)]" : TITLE_LOWERCASE == TOTAL_BORROWED ? "text-[var(--warning)]" : "text-[var(--purple)]" }`
                            } 
                            />
                        <h4 className='text-[clamp(18px,1vw,25px)] font-bold'> { data.title } </h4>
                    </aside>

                    <aside className='w-full flex flex-col gap-[10px]'>
                        <h2 className={`font-extrabold text-[clamp(22px,1vw,35px)] ${TITLE_LOWERCASE == NET_APY && "text-[var(--success)]"}`}> 
                            { TITLE_LOWERCASE == TOTAL_SUPPLIED ?
                                `$${data.value}` : 
                                TITLE_LOWERCASE == TOTAL_BORROWED ? 
                                 `$${data.value}` :
                                TITLE_LOWERCASE == NET_APY && `+${data.value}%`
                            } 
                        </h2>
                            { 
                                TITLE_LOWERCASE == TOTAL_SUPPLIED ?
                                <p className='text-[var(--success)]'> $12% this month </p> :
                                TITLE_LOWERCASE == TOTAL_BORROWED ?
                                <p> 68.2% collateral ratio </p> :
                                TITLE_LOWERCASE == NET_APY &&
                                <p> Annual percentage yield </p>
                            } 
                    </aside>
                </div>
           ) 
        }
        ) }
    </article>
  )
}

export default LendingInfo