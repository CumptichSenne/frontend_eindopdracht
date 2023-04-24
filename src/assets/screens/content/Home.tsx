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
                <div className="flex flex-col items-center max-w-lg md:basis-3/5 mt-8 bg-slate-700 md:mr-8 rounded-lg drop-shadow-2xl">
                    <p className="text-slate-200 max-w-[32rem] leading-relaxed md:text-lg text-left m-4">
                        Hi there, I'm currently a <span className="font-bold text-yellow-500">student at Howest </span> in Belgium who would like to become a full stack web developer.
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
                        Smart Pool is a project which can be used to get all kinds of information about <span className="font-bold text-yellow-500">the water in your pool</span>.
                        You can get the temperature of the water, how clean your water is and the PH value.
                    </p>
                    <p className="mt-6 text-center flex justify-center text-slate-200 mb-2">
                        Want to know more about this project?{' '}
                    </p>
                    <Link to="/Project" className="text-yellow-500 mb-4">
                        Go to my project page
                    </Link>
                </div>
                <div className="flex flex-col justify-center lg:basis-1/5 gap-8 mt-8 md:mt-0">
                    <div className="transform transition md:hover:scale-125">
                        <img src="src\assets\images\projectone_1.jpg" alt="Project one" className="w-56 h-32 rounded-xl drop-shadow-2xl"/>
                    </div>
                    <div className="transform transition md:hover:scale-125">
                        <img src="src\assets\images\projectone_2.jpg" alt="Project one" className="w-56 h-32 rounded-xl drop-shadow-2xl"/>
                    </div>
                </div>
            </article>
            <article className="flex flex-col items-center align-middle justify-center md:flex-row md:items-center m-4 mb-[6vh]">
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
                <div className=" flex justify-center lg:basis-1/5 md:transform md:transition md:hover:scale-125 mt-8 md:mt-0">
                    <img src="src\assets\images\teamproject.jpg" alt="Team project" className="h-64 w-64 rounded-xl drop-shadow-2xl"/>
                </div>
            </article>
            <div className="mb-[5vh] mt-[5vh] text-center ml-4 mr-4">
                <h1 className="text-4xl text-center text-slate-200 font-bold">Contact</h1>
            </div>
            <article className="flex flex-col items-center align-middle justify-center md:flex-row md:items-center m-4 mb-[6vh]">
                <div className="flex flex-col max-w-lg md:basis-3/5 mt-8 bg-slate-700 md:mr-8 rounded-lg drop-shadow-2xl">
                    <p className="text-slate-200 max-w-[32rem] leading-relaxed md:text-lg text-left m-4">
                        If you would like to get in touch with me you can do so by visiting my LinkedIn or Github page.
                    </p>
                    <div className="flex flex-row items-center justify-around">
                        <Link to="https://www.linkedin.com/in/senne-cumptich-a7b592273/" className="text-yellow-500 mb-4 flex">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#e2e8f0" stroke="#e2e8f0" className="flex">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                        </Link>
                        <Link to="https://github.com/CumptichSenne" className="text-yellow-500 mb-4 flex">
                            <svg viewBox="0 -3.5 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" fill="#e2e8f0" stroke="#e2e8f0" className="w-8 h-8 flex">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier"> 
                                    <g fill="#e2e8f0"> 
                                        <path d="M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0"></path> 
                                        <path d="M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923M54.027 187.23c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65M58.33 194.39c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069M65.606 202.683c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258M75.01 205.483c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612M85.714 206.67c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86M96.228 206.267c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398"></path> 
                                    </g> 
                                </g>
                            </svg>
                        </Link>
                    </div>
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

