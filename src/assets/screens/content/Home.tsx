import { Link } from "react-router-dom";

export default () => {

 return (
    <div>
        <nav className="flex flex-row justify-between items-center bg-slate-900 p-4">
            <div className="flex flex-row items-center">
                <Link to="/">
                    <img src="src\assets\images\Logo.jpg" alt="Logo" className="h-20 w-20 rounded-full"/>
                </Link>
            </div>
            <div className="flex flex-row items-center">
                <Link to="/About" className="text-xl text-slate-200 pl-4 font-bold hover:text-yellow-500">
                    About me
                </Link>
                <Link to="/Project" className="text-xl text-slate-200 pl-4 font-bold hover:text-yellow-500">
                    Projects
                </Link>
                <Link to="/Contact" className="text-xl text-slate-200 pl-4 font-bold hover:text-yellow-500">
                    Contact
                </Link>
            </div>
        </nav>
        <div className="flex flex-col align-middle justify-center text-center">
            <div className="mb-[20vh] mt-[15vh] text-center">
                <h1 className="text-4xl text-center text-slate-200">Hello there,</h1>
                <h2 className="text-2xl text-center text-slate-200">My name is <span className="font-bold text-yellow-500">Senne Cumptich</span></h2>
                <h3 className="text-xl text-center text-slate-200">A full stack developper in the making and a competitive volleyball player</h3>
            </div>
            <article className="flex flex-col items-center align-middle justify-center md:flex-row md:items-center">
                <div className="flex flex-col items-center max-w-lg md:basis-3/5">
                    <h1 className="text-3xl text-center text-slate-200 max-w-[32rem] font-bold">About me</h1>
                    <p className="text-slate-200 max-w-[32rem] leading-relaxed md:text-lg text-left">
                        Hi there, I'm currently a <span className="font-bold text-yellow-500">student at Howest </span> in Belgium who would like to become a full stack web developper.
                        I have been able to learn a lot of things over the past 2 years and I hope to be able to learn even more in the future.
                    </p>
                    <p className="text-slate-200 max-w-[32rem] leading-relaxed md:text-lg mt-4 text-left">
                        When I'm not working for school, you will probably find me with my friends or team members playing <span className="font-bold text-yellow-500">volleyball</span>.
                        With over 11 years of experience, I have been able to be part of the best team I can imagine and hope to continue with them for a long time.
                    </p>
                    <p className="mt-6 text-center flex justify-center text-slate-200">
                        Want to know more about me?{' '}
                        <Link to="/About" className="text-yellow-500 ml-2">
                        About me
                        </Link>
                    </p>
                </div>
                <div className=" flex justify-center lg:basis-1/5 transform transition md:hover:scale-125">
                    <img src="src\assets\images\SenneCumptich.jpg" alt="Senne Cumptich" className=" h-64 w-36 rounded-xl drop-shadow-2xl"/>
                </div>
            </article>
        </div>
    </div>
 );
}
 