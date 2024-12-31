import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {};

export function Input(props: InputProps){
    return(
        <input 
            {...props}
            className="px-2 py-1 border-pink-800 border-[3px] rounded-md
            focus:outline-none focus:border-pink-700 transition-all"/>
    )
};