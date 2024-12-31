import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode;
};

export function Button({ children, ...props }: ButtonProps){
    return(
        <button 
          {...props}
          className="mt-5 px-5 py-2 font-bold
                    bg-pink-600 text-slate-100 rounded-md transition-all
                    hover:bg-pink-700 hover:text-white hover:text-xl">
            {children}
        </button>
    )
};