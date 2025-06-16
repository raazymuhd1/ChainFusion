import React from 'react'
import { IconType } from 'react-icons/lib';

interface IProps {
    styles: string;
    title: string;
    Icon?: IconType;
}

const CustomButton = ({styles, title, Icon}: IProps) => {
  return (
    <button className={`${styles} flex items-center justify-center gap-[10px] w-[fit-content] font-semibold text-[clamp(16px,1vw,20px)] rounded-[10px] shadows whitespace-nowrap cursor-pointer`}>
        { title }
        { Icon && <Icon className='' /> }
    </button>
  )
}

export default CustomButton