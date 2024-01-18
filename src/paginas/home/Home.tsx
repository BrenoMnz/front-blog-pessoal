import homeLogo from "../../assets/home.svg"
import "./Home.css"

export const Home = () => {
  return (
    <>
      <div className="bg-indigo-900 flex justify-center">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5x1 font-bold">Seja bem vindo!</h2>
            <p className="text-x1">Expresse aqui seus pensamentos e opiniões</p>
            <div className="flex justify-around gap-4">
              <button className="rounded bg-white text-blue-800 py-2 px-4">Ver postagens</button>
            </div>
          </div>
          <div className="flex justify-center">
            <img src={homeLogo} alt="Imagem de um analista caçando bugs" className="w-2/3"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home