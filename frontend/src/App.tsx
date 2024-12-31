import { useState } from "react"
import { RegisterModal } from "./components/register-modal";
import { LoginModal } from "./components/login-modal";

export function App() {
  const [ isOpenRegister, setIsOpenRegister ] = useState<boolean>(false);

  return (

    <main className="flex justify-center items-center h-screen">
      {isOpenRegister ? <RegisterModal setIsOpenRegister={setIsOpenRegister}/> : <LoginModal setIsOpenRegister={setIsOpenRegister}/>}
    </main>
  )
}
