import Image from 'next/image'
import React from 'react'

const ItemBox = ( props: {item:string, imgPath:string} ) => {
  return (
    <div className='
    flex flex-row items-center justify-center 
    bg-slate-500 w-fit min mt-4 mx-2 p-2 rounded-lg
    '>
        <div>
            {props.item}&nbsp;
        </div>
        <Image src={props.imgPath} alt={'Icon'} className='h-6'/>
    </div>
  )
}

export default ItemBox