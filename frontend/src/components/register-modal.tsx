import axios from "axios";
import { useState } from "react";
import { Input } from "./input";
import { Button } from "./button";
import { BackButton } from "./back-button";

interface RegisterModalProps{
    setIsOpenRegister: (e: boolean) => void;
};

interface createUsers {
  name: string;
  email: string;
  password: string;
};

const createUser = async ({name, email, password}: createUsers) => {
  if(!name || !email || !password) return

  axios.post("http://localhost:3333/user", {
    name, email, password
  })
  .then((json) => console.log(json.data))
  .catch((err) => console.log("error: \n", err))
};

export function RegisterModal({setIsOpenRegister}: RegisterModalProps){
    const [ name, setName ] = useState<string>("");
    const [ email, setEmail ] = useState<string>("");
    const [ password, setPassword ] = useState<string>("");
  
    const user = {
      name, email, password
    };
  
    const cleanFields = () => {
      setName("");
      setEmail("");
      setPassword("");
    };
  
    const handleForm = (e: React.FormEvent) => {
      e.preventDefault();
  
      createUser(user);
      cleanFields();
    };
    return(
        <form onSubmit={handleForm} className="bg-white w-[300px] h-auto p-5 flex flex-col justify-center rounded-sm">
        <div className="text-start">
            <BackButton onClick={() => setIsOpenRegister(false)}/>
        </div>
        <h1 className="text-center text-2xl font-medium mb-5 text-pink-900">CADASTRE-SE</h1>
            

        <div className="flex flex-col gap-3">  
          <div className="flex flex-col">
            <label>Nome: </label>
            <Input type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className="flex flex-col">
            <label>E-mail: </label>
            <Input type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="flex flex-col">
            <label>Senha: </label>
            <Input type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}/>
          </div>
        </div>

        <Button type="submit">
            CADASTRAR
        </Button>

      </form>
    )
};