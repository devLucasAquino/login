import axios from "axios";
import { useState } from "react";

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

export function App() {

  const [ name, setName ] = useState<string>("");
  const [ email, setEmail ] = useState<string>("");
  const [ password, setPassword ] = useState<string>("");

  const handleForm = (e: React.FormEvent) => {
    e.preventDefault();

    const user = {
      name, email, password
    };

    createUser(user);
  };

  return (
    <main className="flex justify-center items-center h-screen">
      <form onSubmit={handleForm} className="bg-white w-[300px] h-auto p-5 flex flex-col justify-center rounded-sm">
        <h1 className="text-center text-2xl font-medium mb-5 text-pink-900">CADASTRE-SE</h1>

        <div className="flex flex-col gap-3">  
          <div className="flex flex-col">
            <label>Nome: </label>
            <input type="text" 
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="
                px-2 py-1
                border-pink-800 border-[3px] rounded-md
                  focus:outline-none focus:border-pink-700 transition-all"/>
          </div>
          <div className="flex flex-col">
            <label>E-mail: </label>
            <input type="text" 
              placeholder="e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="
                px-2 py-1
                border-pink-800 border-[3px] rounded-md
                  focus:outline-none focus:border-pink-700 transition-all"/>
          </div>
          <div className="flex flex-col">
            <label>Senha: </label>
            <input type="text" 
              placeholder="senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="
                px-2 py-1
                border-pink-800 border-[3px] rounded-md
                  focus:outline-none focus:border-pink-700 transition-all"/>
          </div>
        </div>

        <button 
          type="submit"
          className="mt-5 px-5 py-2 font-bold
                    bg-pink-600 text-slate-100 rounded-md transition-all
                    hover:bg-pink-700 hover:text-white hover:text-xl">
            CADASTRAR
        </button>

      </form>
    </main>
  )
}
