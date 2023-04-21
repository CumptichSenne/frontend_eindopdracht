import { Link } from "react-router-dom";

export default () => {

 return (
    <div>
        <nav className="flex flex-row justify-between items-center bg-slate-900 p-4">
            <div className="flex flex-row items-center">
                <Link to="/">
                    <img src="src\assets\images\Logo.jpg" alt="Logo" className="h-14 w-14 md:h-20 md:w-20 rounded-full"/>
                </Link>
            </div>
            <div className="flex flex-row items-center">
                <Link to="/About" className="text-base md:text-xl text-slate-200 pl-4 font-bold hover:text-yellow-500">
                    About me
                </Link>
                <Link to="/Project" className="text-base md:text-xl text-slate-200 pl-4 font-bold hover:text-yellow-500">
                    Projects
                </Link>
                <Link to="/Contact" className="text-base md:text-xl text-slate-200 pl-4 font-bold hover:text-yellow-500">
                    Contact
                </Link>
            </div>
        </nav>
        <div className="flex flex-col align-middle justify-center text-center">
            <div className="mb-[10vh] mt-[15vh] text-center ml-4 mr-4">
                <h1 className="text-4xl text-center text-slate-200">Hello there,</h1>
                <h2 className="text-2xl text-center text-slate-200">My name is <span className="font-bold text-yellow-500">Senne Cumptich</span></h2>
                <h3 className="text-xl text-center text-slate-200">A full stack developper in the making and a competitive volleyball player</h3>
            </div>
            <div className="mb-[5vh] mt-[5vh] text-center ml-4 mr-4">
                <h1 className="text-4xl text-center text-slate-200 font-bold">About me</h1>
            </div>
            <article className="flex flex-col items-center align-middle justify-center md:flex-row md:items-center m-4 mb-[6vh]">
                <div className="flex flex-col items-center max-w-lg md:basis-3/5 mt-8 bg-slate-700 md:mr-8 rounded-lg drop-shadow-2xl">
                    <p className="text-slate-200 max-w-[32rem] leading-relaxed md:text-lg text-left m-4">
                        Hi there, I'm currently a <span className="font-bold text-yellow-500">student at Howest </span> in Belgium who would like to become a full stack web developper.
                        I have been able to learn a lot of things over the past 2 years and I hope to be able to learn even more in the future.
                    </p>
                    <p className="mt-6 text-center flex justify-center text-slate-200 mb-2">
                        Want to know more about me?{' '}
                    </p>
                    <Link to="/About" className="text-yellow-500 mb-4">
                        About me
                    </Link>
                </div>
                <div className=" flex justify-center lg:basis-1/5 transform transition md:hover:scale-125 mt-8 md:mt-0">
                    <img src="src\assets\images\SenneCumptich.jpg" alt="Senne Cumptich" className=" h-64 w-36 rounded-xl drop-shadow-2xl"/>
                </div>
            </article>
            <div className="mb-[10vh] mt-[5vh] text-center ml-4 mr-4">
                <h1 className="text-4xl text-center text-slate-200 font-bold">Projects</h1>
            </div>
            <article className="flex flex-col items-center align-middle justify-center md:flex-row md:items-center m-4 mb-[6vh]">
                <div className="flex flex-col items-center max-w-lg md:basis-3/5 bg-slate-700 md:mr-8 rounded-lg drop-shadow-2xl">
                    <h1 className="text-2xl text-center text-slate-200 max-w-[32rem] font-bold m-4">MCU List</h1>
                    <p className="text-slate-200 max-w-[32rem] leading-relaxed md:text-lg text-left m-4">
                        The MCU List is a website that contains all the movies from the <span className="font-bold text-yellow-500">Marvel Cinematic Universe</span>.
                        Per movie you can find the release date, the director and how much money that specific movie made.
                    </p>
                    <p className="mt-6 text-center flex justify-center text-slate-200 mb-2">
                        Want to know more about this project?{' '}
                    </p>
                    <Link to="/Project" className="text-yellow-500 mb-4">
                        Go to my project page
                    </Link>
                </div>
                <div className=" flex justify-center lg:basis-1/5 transform transition md:hover:scale-125 mt-8 md:mt-0">
                    <img src="src\assets\images\interaction.jpg" alt="Interaction Design" className="h-80 w-64 rounded-xl drop-shadow-2xl"/>
                </div>
            </article>
            <article className="flex flex-col items-center align-middle justify-center md:flex-row-reverse md:items-center m-4 mb-[6vh]">
                <div className="flex flex-col items-center max-w-lg md:basis-3/5 bg-slate-700 md:ml-8 rounded-lg drop-shadow-2xl">
                    <h1 className="text-2xl text-center text-slate-200 max-w-[32rem] font-bold m-4">Smart Pool</h1>
                    <p className="text-slate-200 max-w-[32rem] leading-relaxed md:text-lg text-left m-4">
                        Smart Pool is a project which can be used to get all kinds of information about the water in your pool.
                        You can get the temperature of the water, how clean your water is and the PH value.
                    </p>
                    <p className="mt-6 text-center flex justify-center text-slate-200 mb-2">
                        Want to know more about this project?{' '}
                    </p>
                    <Link to="/Project" className="text-yellow-500 mb-4">
                        Go to my project page
                    </Link>
                </div>
                <div className="flex flex-col justify-center lg:basis-1/5 md:ml-10 mt-8 md:mt-0">
                    <div className="transform transition md:hover:scale-125 mb-8">
                        <img src="src\assets\images\projectone_1.jpg" alt="Project one" className="w-56 h-32 rounded-xl drop-shadow-2xl"/>
                    </div>
                    <div className="transform transition md:hover:scale-125 mb-8">
                        <img src="src\assets\images\projectone_2.jpg" alt="Project one" className="w-56 h-32 rounded-xl drop-shadow-2xl"/>
                    </div>
                </div>
            </article>
            <article className="flex flex-col items-center align-middle justify-center md:flex-row md:items-center m-4 mb-[6vh]">
                <div className="flex flex-col items-center max-w-lg md:basis-3/5 bg-slate-700 md:mr-8 rounded-lg drop-shadow-2xl">
                    <h1 className="text-2xl text-center text-slate-200 max-w-[32rem] font-bold m-4">Catch the fish</h1>
                    <p className="text-slate-200 max-w-[32rem] leading-relaxed md:text-lg text-left m-4">
                        
                    </p>
                    <p className="mt-6 text-center flex justify-center text-slate-200 mb-2">
                        Want to know more about this project?{' '}
                    </p>
                    <Link to="/Project" className="text-yellow-500 mb-4">
                        Go to my project page
                    </Link>
                </div>
                <div className=" flex justify-center lg:basis-1/5 md:transform md:transition md:hover:scale-125 mt-8 md:mt-0">
                    <img src="src\assets\images\interaction.jpg" alt="Interaction Design" className="h-80 w-64 rounded-xl drop-shadow-2xl"/>
                </div>
            </article>
        </div>
        <footer className="flex flex-col items-center justify-center pb-4 text-slate-300">
            <p>
                Made by Senne Cumptich
            </p>
            <p>
                © 2023 
            </p>
        </footer>
    </div>
 );
}
 