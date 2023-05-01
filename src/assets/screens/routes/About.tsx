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
                <img src="images\Logo.JPG" alt="Logo" className=" h-14 w-14 md:h-20 md:w-20 rounded-full"/>
            </Link>
        </div>
        <div className="flex flex-row items-center mr-4">
            <p className="text-slate-500 text-base md:text-xl pl-4 font-bold">About me</p>
            <Navigation destination="/Project" title="Projects"/>
            <Navigation destination="/Contact" title="Contact"/>
        </div>
      </nav>
    </div>
    <div className="flex flex-col align-middle justify-center text-center">
        <div className="mb-[10vh] mt-[15vh] text-center">
            <h1 className="text-4xl text-center text-slate-200">About me</h1>
        </div>
        <article className="flex flex-col items-center align-middle justify-center md:flex-row md:items-center">
            <div className="flex flex-col items-center max-w-lg md:basis-3/5 bg-slate-700 md:mr-8 rounded-lg drop-shadow-2xl">
                <h1 className="text-3xl text-center text-slate-200 max-w-[32rem] font-bold m-4">About me</h1>
                <p className="text-slate-200 max-w-[32rem] leading-relaxed md:text-lg text-left m-4">
                    Hi there, I'm currently a <span className="font-bold text-yellow-500">student at Howest </span> in Belgium who would like to become a full stack web developper.
                    I have been able to learn a lot of things over the past 2 years that I'm studying and I hope to be able to learn even more in the future.
                </p>
                <p className="text-slate-200 max-w-[32rem] leading-relaxed md:text-lg mt-4 text-left">
                    
                </p>
            </div>
            <Image imageUrl="images\SenneCumptich.jpg" alt="Senne Cumptich" height={40} width={36}/>
        </article>
        <article className="flex flex-col items-center align-middle justify-center md:flex-row-reverse md:items-center mt-[10vh] mb-20">
            <div className="flex flex-col items-center max-w-lg md:basis-3/5 bg-slate-700 md:mr-8 rounded-lg drop-shadow-2xl">
                <h1 className="text-3xl text-center text-slate-200 max-w-[32rem] font-bold m-4">Hobbies</h1>
                <p className="text-slate-200 max-w-[32rem] leading-relaxed md:text-lg text-left m-4">
                    Apart from school I also like to do a lot of other things. One of the main things is playing volleyball.
                    With over 11 years of experience in a club called <span className="font-bold text-yellow-500">Sferos Deinze</span> I never knew that it would be so much fun.
                </p>
                <p className="text-slate-200 max-w-[32rem] leading-relaxed md:text-lg mt-4 text-left m-4">
                    When I do have a little bit of free time I also like to draw. I have been drawing for about 3 years now and I really enjoy it because it's a great way to empty your mind.
                </p>
            </div>
            <Image imageUrl="images\Hobby.jpg" alt="Monkey D Luffy" height={80} width={56}/>
        </article>
    </div>
      <Footer/>
  </div>
 );
}