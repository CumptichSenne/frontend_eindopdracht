import { Link } from "react-router-dom";
import Image from "../../components/image";

export default () => {

 return (
    <div>
        <nav className="flex flex-row justify-between items-center bg-slate-900 p-4">
            <div className="flex flex-row items-center">
                <Link to="/">
                    <img src="src\assets\images\Logo.jpg" alt="Logo" className="h-14 w-14 md:h-20 md:w-20 rounded-full"/>
                </Link>
            </div>
            <div className="flex flex-row items-center mr-4">
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
                <h3 className="text-xl text-center text-slate-200">A full stack developer in the making and a competitive volleyball player</h3>
            </div>
            <div className="mb-[5vh] mt-[5vh] text-center ml-4 mr-4">
                <h1 className="text-4xl text-center text-slate-200 font-bold">About me</h1>
            </div>
            <article className="flex flex-col items-center align-middle justify-center md:flex-row md:items-center m-4 mb-[6vh]">
                <div className="flex flex-col items-center max-w-lg md:basis-3/5 bg-slate-700 md:mr-8 rounded-lg drop-shadow-2xl">
                    <p className="text-slate-200 max-w-[32rem] leading-relaxed md:text-lg text-left m-4">
                        Hi there, I'm currently a <span className="font-bold text-yellow-500">student at Howest </span> in Belgium who would like to become a full stack web developer.
                        I have been able to learn a lot of things over the past 2 years and I hope to be able to learn even more in the future.
                    </p>
                    <p className="mt-6 text-center flex justify-center text-slate-200 mb-2">
                        Want to know more about me?
                    </p>
                    <Link to="/About" className="text-yellow-500 mb-4">
                        About me
                    </Link>
                </div>
                <Image imageUrl="src\assets\images\SenneCumptich.jpg" alt="Senne Cumptich" height={40} width={36}/>
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
                        Want to know more about this project?
                    </p>
                    <Link to="/Project" className="text-yellow-500 mb-4">
                        Go to my project page
                    </Link>
                </div>
                <Image imageUrl="src\assets\images\interaction.jpg" alt="Interaction Design" height={80} width={64}/>
            </article>
            <article className="flex flex-col items-center align-middle justify-center md:flex-row-reverse md:items-center m-4 mb-[6vh]">
                <div className="flex flex-col items-center max-w-lg md:basis-3/5 bg-slate-700 md:ml-8 rounded-lg drop-shadow-2xl">
                    <h1 className="text-2xl text-center text-slate-200 max-w-[32rem] font-bold m-4">Smart Pool</h1>
                    <p className="text-slate-200 max-w-[32rem] leading-relaxed md:text-lg text-left m-4">
                        Smart Pool is a project which can be used to get all kinds of information about <span className="font-bold text-yellow-500">the water in your pool</span>.
                        You can get the temperature of the water, how clean your water is and the PH value.
                    </p>
                    <p className="mt-6 text-center flex justify-center text-slate-200 mb-2">
                        Want to know more about this project?
                    </p>
                    <Link to="/Project" className="text-yellow-500 mb-4">
                        Go to my project page
                    </Link>
                </div>
                <div className="flex flex-col justify-center lg:basis-1/5 gap-8 mt-8 md:mt-0 h">
                    <Image imageUrl="src\assets\images\projectone_1.jpg" alt="Project one" height={80} width={56}/>
                    <Image imageUrl="src\assets\images\projectone_2.jpg" alt="Project one" height={80} width={56}/>
                </div>
            </article>
            <article className="flex flex-col items-center align-middle justify-center md:flex-row md:items-center m-4 mb-20">
                <div className="flex flex-col items-center max-w-lg md:basis-3/5 bg-slate-700 md:mr-8 rounded-lg drop-shadow-2xl">
                    <h1 className="text-2xl text-center text-slate-200 max-w-[32rem] font-bold m-4">Catch the fish</h1>
                    <p className="text-slate-200 max-w-[32rem] leading-relaxed md:text-lg text-left m-4">
                        This is my most recent project that I made for school where you can play up to 3 different games.
                        The user can choose between Red vs Blue, Simon says and Zen. During the chosen game the player has to push buttons that are lit up with LED's.
                    </p>
                    <p className="mt-6 text-center flex justify-center text-slate-200 mb-2">
                        Want to know more about this project?{' '}
                    </p>
                    <Link to="/Project" className="text-yellow-500 mb-4">
                        Go to my project page
                    </Link>
                </div>
                <Image imageUrl="src\assets\images\teamproject.jpg" alt="Team Project" height={88} width={80}/>
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