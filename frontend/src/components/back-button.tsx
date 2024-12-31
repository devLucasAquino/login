import { ArrowBigLeft } from "lucide-react";
import { ButtonHTMLAttributes } from "react";

interface BackButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
};

export function BackButton({...props}: BackButtonProps){
    return(
        <button 
            {...props}
            className="p-2
            bg-pink-600 text-slate-100 rounded-md rounded-full transition-all
            hover:bg-pink-700 hover:text-white hover:size-xl">
                <ArrowBigLeft />
        </button>
    )
};