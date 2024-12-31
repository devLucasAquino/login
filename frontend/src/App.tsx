function App() {

  return (
    <main className="flex justify-center items-center h-screen">
      <form className="bg-white w-[300px] h-auto p-5 flex flex-col justify-center rounded-sm">
        <h1 className="text-center text-2xl font-medium mb-5 text-pink-900">CADASTRE-SE</h1>

        <div className="flex flex-col gap-3">  
          <div className="flex flex-col">
            <label>Nome: </label>
            <input type="text" 
              placeholder="name"
              className="
                px-2 py-1
                border-pink-800 border-[3px] rounded-md
                  focus:outline-none focus:border-pink-700 transition-all"/>
          </div>
          <div className="flex flex-col">
            <label>E-mail: </label>
            <input type="text" 
              placeholder="e-mail"
              className="
                px-2 py-1
                border-pink-800 border-[3px] rounded-md
                  focus:outline-none focus:border-pink-700 transition-all"/>
          </div>
          <div className="flex flex-col">
            <label>Senha: </label>
            <input type="text" 
              placeholder="senha"
              className="
                px-2 py-1
                border-pink-800 border-[3px] rounded-md
                  focus:outline-none focus:border-pink-700 transition-all"/>
          </div>
        </div>

        <button 
          className="mt-5 px-5 py-2 font-bold
                    bg-pink-600 text-slate-100 rounded-md transition-all
                    hover:bg-pink-700 hover:text-white hover:text-xl">
            CADASTRAR
        </button>

      </form>
    </main>
  )
}

export default App
