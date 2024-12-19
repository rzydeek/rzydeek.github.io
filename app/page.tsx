import Image from "next/image";
import Footer from "./components/footer";
import Odliczanie from "./components/odliczanie";

export default function Home() {
  return (
    <div className="overflow-hidden">
    <Footer/>



      <div className="px-24 flex items-center flex-col justify-center my-6"> 

      <div className="h-auto w-80 sm:w-[28rem] bg-czerw/75 items-center justify-center flex flex-col p-2">
          <a className="mt-2" href="https://phantom.best/" target="_blank" rel="noopener noreferrer"><Image src='/standard.gif' unoptimized={true} alt='phantom' width={512} height={256}></Image></a>
        </div>

        <div className="h-auto w-80 sm:w-[28rem] bg-czerw/75 items-center justify-center flex flex-col p-8 mt-4">      {/* glowny div */}
          <h1 className="font-bold text-3xl underline ">Cweltygodnia.pl</h1>
          <img src='https://i.ibb.co/jR0QgDC/image.png' alt="huj" className="my-8"></img>
          <Odliczanie/>
        </div>

        <div className="flex items-center justify-center my-4">                                                     {/* bannery */}
          <div className="h-auto w-80 sm:w-[28rem] bg-czerw/75 items-center justify-center flex flex-col p-2">
            <div className="grid grid-rows-2 grid-cols-2 gap-2">
              <Image src='/donate/blinkiesCafe-8p.gif' unoptimized={true} alt="gowno"  width={256} height={256}/>
              <Image src='/donate/blinkiesCafe-fL.gif' unoptimized={true} alt="gowno" width={256} height={256}/>
              <Image src='/donate/blinkiesCafe-I6.gif' unoptimized={true} alt="gowno" width={256} height={256}/>
              <Image src='/donate/blinkiesCafe-nc.gif' unoptimized={true} alt="gowno" width={256} height={256}/>
              <Image src='/donate/blinkiesCafe-o6.gif' unoptimized={true} alt="gowno" width={256} height={256}/>
              <Image src='/donate/blinkiesCafe-qj.gif' unoptimized={true} alt="gowno" width={256} height={256}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
