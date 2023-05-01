import { Link } from "react-router-dom";
import Image from "../../components/image";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";

export default () => {

 return (
   <div className="h-full bg-slate-800">
    <div>
      <nav className="flex flex-row justify-between items-center bg-slate-900 p-4">
        <div className="flex flex-row items-center">
            <Link to="/">
                <img src="images\Logo.JPG" alt="Logo" className="h-14 w-14 md:h-20 md:w-20 rounded-full"/>
            </Link>
        </div>
        <div className="flex flex-row items-center mr-4">
            <Navigation destination="/About" title="About me"/>
            <p className="text-slate-500 text-base md:text-xl pl-4 font-bold">Projects</p>
            <Navigation destination="/Contact" title="Contact"/>
        </div>
      </nav>
    </div>
    <div className="flex flex-col align-middle justify-center text-center">
        <div className="mb-[10vh] mt-[5vh] text-center ml-4 mr-4">
            <h1 className="text-4xl text-center text-slate-200 font-bold">Projects</h1>
            </div>
            <article className="flex flex-col items-center align-middle justify-center md:flex-row md:items-center m-4 mb-[6vh]">
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col items-center max-w-lg md:basis-3/5 bg-slate-700 md:mr-8 rounded-lg drop-shadow-2xl">
                        <h1 className="text-2xl text-center text-slate-200 max-w-[32rem] font-bold m-4">MCU List</h1>
                        <p className="text-slate-200 max-w-[32rem] leading-relaxed md:text-lg text-left m-4">
                            The MCU List is a website that contains all the movies from the <span className="font-bold text-yellow-500">Marvel Cinematic Universe</span>.
                            Per movie you can find the release date, the director and how much money that specific movie made.
                        </p>
                        <p className="text-slate-200 max-w-[32rem] leading-relaxed md:text-lg text-left m-4">
                            The website is made with <span className="font-bold text-yellow-500">HTML</span> and <span className="font-bold text-yellow-500">CSS</span> and is fully responsive.
                            For the data I used an open API from Github and with the help of <span className="font-bold text-yellow-500">Javascript</span> I made it possible to display the data on the website.
                        </p>
                    </div>
                    <div className="md:flex flex-row md:basis-3/5 md:mr-8 max-w-min gap-2 hidden">
                        <div className="bg-slate-700 rounded-lg drop-shadow-2xl">
                            <p className="text-slate-200 leading-relaxed md:text-lg text-left m-2">
                                HTML
                            </p>
                        </div>
                        <div className="bg-slate-700 rounded-lg drop-shadow-2xl">
                            <p className="text-slate-200 leading-relaxed md:text-lg text-left m-2">
                                CSS
                            </p>
                        </div>
                        <div className="bg-slate-700 rounded-lg drop-shadow-2xl">
                            <p className="text-slate-200 leading-relaxed md:text-lg text-left m-2">
                                JS
                            </p>
                        </div>
                    </div>
                </div>
                <Image imageUrl="images\interaction.JPG" alt="Interaction Design" height={80} width={64}/>
            </article>
            <article className="flex flex-col items-center align-middle justify-center md:flex-row-reverse md:items-center m-4 mb-[6vh]">
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col items-center max-w-lg md:basis-3/5 bg-slate-700 md:ml-8 rounded-lg drop-shadow-2xl">
                        <h1 className="text-2xl text-center text-slate-200 max-w-[32rem] font-bold m-4">Smart Pool</h1>
                        <p className="text-slate-200 max-w-[32rem] leading-relaxed md:text-lg text-left m-4">
                            Smart Pool is a project which can be used to get all kinds of information about <span className="font-bold text-yellow-500">the water in your pool</span>.
                            You can get the temperature of the water, how clean your water is and the PH value.
                        </p>
                        <p className="text-slate-200 max-w-[32rem] leading-relaxed md:text-lg text-left m-4">
                            This project was made with the help of a lot of different programming languages. The website is made with <span className="font-bold text-yellow-500">HTML</span>, <span className="font-bold text-yellow-500">CSS</span> and <span className="font-bold text-yellow-500">Javascript</span>.
                            The sensors are connected to a Raspberry Pi which is connected to a <span className="font-bold text-yellow-500">MySQL</span> database.
                            For the data visualization I used <span className="font-bold text-yellow-500">Python</span>.
                        </p>
                    </div>
                    <div className="md:flex flex-row md:basis-3/5 md:ml-8 max-w-min gap-2 hidden">
                        <div className="bg-slate-700 rounded-lg drop-shadow-2xl">
                            <p className="text-slate-200 leading-relaxed md:text-lg text-left m-2">
                                HTML
                            </p>
                        </div>
                        <div className="bg-slate-700 rounded-lg drop-shadow-2xl">
                            <p className="text-slate-200 leading-relaxed md:text-lg text-left m-2">
                                CSS
                            </p>
                        </div>
                        <div className="bg-slate-700 rounded-lg drop-shadow-2xl">
                            <p className="text-slate-200 leading-relaxed md:text-lg text-left m-2">
                                JS
                            </p>
                        </div>
                        <div className="bg-slate-700 rounded-lg drop-shadow-2xl">
                            <p className="text-slate-200 leading-relaxed md:text-lg text-left m-2">
                                C
                            </p>
                        </div>
                        <div className="bg-slate-700 rounded-lg drop-shadow-2xl">
                            <p className="text-slate-200 leading-relaxed md:text-lg text-left m-2">
                                MySQL
                            </p>
                        </div>
                        <div className="bg-slate-700 rounded-lg drop-shadow-2xl">
                            <p className="text-slate-200 leading-relaxed md:text-lg text-left m-2">
                                Python
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center lg:basis-1/5 gap-8 mt-8 md:mt-0">
                    <Image imageUrl="images\projectone_1.jpg" alt="Project one" height={80} width={56}/>
                    <Image imageUrl="images\projectone_2.jpg" alt="Project one" height={80} width={56}/>
                </div>
            </article>
            <article className="flex flex-col items-center align-middle justify-center md:flex-row md:items-center m-4 mb-20">
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col items-center max-w-lg md:basis-3/5 bg-slate-700 md:mr-8 rounded-lg drop-shadow-2xl">
                        <h1 className="text-2xl text-center text-slate-200 max-w-[32rem] font-bold m-4">Catch the fish</h1>
                        <p className="text-slate-200 max-w-[32rem] leading-relaxed md:text-lg text-left m-4">
                            This is my most recent project that I made for school where you can play up to 3 different games.
                            The user can choose between Red vs Blue, Simon says and Zen. During the chosen game the player has to push buttons that are lit up with LED's.
                        </p>
                        <p className="text-slate-200 max-w-[32rem] leading-relaxed md:text-lg text-left m-4">
                            This was a team project where I was responsible for the programming and design of the website.
                            The website was build with <span className="font-bold text-yellow-500">HTML</span>, <span className="font-bold text-yellow-500">CSS</span> and <span className="font-bold text-yellow-500">Javascript</span>.
                            To make the actual game we used <span className="font-bold text-yellow-500">C</span> and <span className="font-bold text-yellow-500">C#</span>.
                            The data from the game is stored in a <span className="font-bold text-yellow-500">MySQL</span> database.
                        </p>
                    </div>
                    <div className="md:flex flex-row md:basis-3/5 md:mr-8 max-w-min gap-2 hidden">
                        <div className="bg-slate-700 rounded-lg drop-shadow-2xl">
                            <p className="text-slate-200 leading-relaxed md:text-lg text-left m-2">
                                HTML
                            </p>
                        </div>
                        <div className="bg-slate-700 rounded-lg drop-shadow-2xl">
                            <p className="text-slate-200 leading-relaxed md:text-lg text-left m-2">
                                CSS
                            </p>
                        </div>
                        <div className="bg-slate-700 rounded-lg drop-shadow-2xl">
                            <p className="text-slate-200 leading-relaxed md:text-lg text-left m-2">
                                JS
                            </p>
                        </div>
                        <div className="bg-slate-700 rounded-lg drop-shadow-2xl">
                            <p className="text-slate-200 leading-relaxed md:text-lg text-left m-2">
                                C
                            </p>
                        </div>
                        <div className="bg-slate-700 rounded-lg drop-shadow-2xl">
                            <p className="text-slate-200 leading-relaxed md:text-lg text-left m-2">
                                MySQL
                            </p>
                        </div>
                        <div className="bg-slate-700 rounded-lg drop-shadow-2xl">
                            <p className="text-slate-200 leading-relaxed md:text-lg text-left m-2">
                                C#
                            </p>
                        </div>
                    </div>
                </div>
                <Image imageUrl="images\teamproject.jpg" alt="Team Project" height={88} width={80}/>
            </article>
        </div>
    <Footer/>
  </div>
 );
}