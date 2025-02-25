import { ArrowBigLeft } from "lucide-react";
import { ButtonHTMLAttributes } from "react";

interface BackButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
};

export function BackButton({...props}: BackButtonProps){
    return(
        <button 
            {...props}
            className="p-2
            bg-pink-600 text-slate-100 rounded-full transition-all
            hover:bg-pink-700 hover:text-white hover:p-[10px]">
                <ArrowBigLeft />
        </button>
    )
};