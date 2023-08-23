import { useState } from "react"
import IconSvg from "./IconSvg";

export default function SearchBar({
    className='', buttonClassName='', rounded=true, value, onChange
}:{className?:string, buttonClassName?:string, rounded?:boolean, value?:string, onChange?:React.ChangeEventHandler<HTMLInputElement> | undefined}){
    return (
        <form className={`${className} flex pl-2 ${rounded?'rounded':''} bg-gray-200 my-2 px-1`}>
            <button type="submit" className={`${buttonClassName} flex items-center bg-opacity-0 border-none cursor-pointer`} aria-label="Search">
                <IconSvg type="lupe" className="icon-svg" />
            </button>
            <input type="search" value={value} onChange={onChange} placeholder="Search in Inspiration"
                className={`appearance-none h-full w-full bg-transparent border-none pl-2 focus:ring-0`}/>
        </form>
    )
}
