import { Link } from 'react-router-dom'

export default () => {

 return (
  <div className="h-full bg-slate-600">
    <div>
      <nav className="flex flex-row justify-between items-center bg-slate-700 p-4">
        <div className="flex flex-row items-center">
            <img src="src\assets\images\Logo.jpg" alt="Logo" className="h-16 w-16 rounded-full"/>
        </div>
        <div className="flex flex-row items-center">
          <a href="
          " className="text-xl text-slate-200 pl-4">About</a>
          <a href="
          " className="text-xl text-slate-200 pl-4">Projects</a>
          <a href="
          " className="text-xl text-slate-200 pl-4">Contact</a>
        </div>
      </nav>
    </div>
    <div className="flex flex-col max-w-6xl align-middle justify-center">
      <h1 className="text-4xl text-center text-slate-200">Hello there,</h1>
      <h2 className="text-2xl text-center text-slate-200">My name is <span className="text-slate-900 font-bold">Senne Cumptich</span></h2>
      <h3 className="text-xl text-center text-slate-200">A full stack developper and a competitive volleyball player</h3>
      <div className="flex flex-row justify-center">
        <img src="src\assets\images\SenneCumptich.jpg" alt="Senne Cumptich" className=" h-64 w-36 rounded-xl"/>
        <img src="src\assets\images\Sparky.jpg" alt="Sparky" className=" h-64 w-40 rounded-xl"/>
      </div>
    </div>
  </div>
 );
}
