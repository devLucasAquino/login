import { Button } from "./button";
import { Input } from "./input";

interface LoginModalProps{
    setIsOpenRegister: (e: boolean) => void;
};

export function LoginModal({setIsOpenRegister}: LoginModalProps){
    return(
        <form className="bg-white w-[300px] h-auto p-5 flex flex-col justify-center rounded-sm">
            <h1 className="text-center text-2xl font-medium mb-5 text-pink-900">LOGIN</h1>
            <div className="flex flex-col gap-3">  
            <div className="flex flex-col">
                <label>E-mail: </label>
                <Input/>
                </div><div className="flex flex-col">
                <label>Senha: </label>
                <Input/>
                </div>
            </div>
            <button onClick={() => setIsOpenRegister(true)}>
                <span className="text-center cursor-pointer text-gray-500 hover:text-gray-600">cadastre-se</span>
            </button>
            <Button> ENTRAR </Button>
        </form>
    )
};