import React from 'react'

interface IProps {
   id: number;
   title: string;
   desc: string;
}

const Card = ({ title, desc, id }: IProps) => {
  return (
    <div className={`flex glass_bg min-h-[250px] flex-col gap-[10px] p-[20px] rounded-[15px] hover:translate-y-[-10px] transition-[transform_1s] cursor-pointer ${id == 1 && "spanning"} `}>
        {/* logo goes here */}

       <div className='flex flex-col gap-[10px]'>
          <h3 className='font-semibold text-[clamp(1em,1.3em,1.5em)] '> { title } </h3>
          <p className='text-[clamp(.8em,1em,1.2em)] text-[#9090a8] '> {desc} </p>
       </div>
    </div>
  )
}

export default Card