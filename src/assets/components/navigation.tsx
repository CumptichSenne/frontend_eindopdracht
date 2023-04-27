import { Link } from "react-router-dom";

export default ({destination, title}: {destination: string, title: string}) => {

 return (
    <Link to={destination} className="text-base md:text-xl text-slate-200 pl-4 font-bold hover:text-yellow-500">
        {title}
    </Link>
);
}
 