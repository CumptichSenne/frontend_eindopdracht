import { Link } from "react-router-dom";

export default () => {

 return (
   <div className="h-full bg-slate-600">
    <div>
      <nav className="flex flex-row justify-between items-center bg-slate-700 p-4">
        <div className="flex flex-row items-center">
            <Link to="/">
                <img src="src\assets\images\Logo.jpg" alt="Logo" className="h-16 w-16 rounded-full"/>
            </Link>
        </div>
        <div className="flex flex-row items-center">
            <p className="text-slate-400 text-xl pl-4">About</p>
            <Link to="/Project" className="text-xl text-slate-200 pl-4">
                Projects
            </Link>
            <Link to="/Contact" className="text-xl text-slate-200 pl-4">
                Contact
            </Link>
        </div>
      </nav>
    </div>
    <div className="flex flex-col max-w-6xl align-middle justify-center">
    </div>
  </div>
 );
}
 