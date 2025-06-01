import React from 'react'
import { IconType } from 'react-icons/lib';

interface IProps {
    styles: string;
    title: string;
    Icon?: IconType;
}

const CustomButton = ({styles, title, Icon}: IProps) => {
  return (
    <button className={`${styles} flex items-center justify-center gap-[10px] py-[calc(1em-8px)] px-[10px] min-w-[150px] font-semibold text-[clamp(1em,1.2em,1.6em)] rounded-[10px] shadows cursor-pointer`}>
        { title }
        { Icon && <Icon className='' /> }
    </button>
  )
}

export default CustomButton