export default ({imageUrl, alt, height, width}: {imageUrl: string, alt:string, height: number, width: number}) => {

 return (
    <div className=" flex justify-center lg:basis-1/5 mt-8 md:mt-0">
        <img src={imageUrl} alt={alt} className="rounded-xl drop-shadow-2xl" height={height*5} width={width*5}/>
    </div>
 );
}
 