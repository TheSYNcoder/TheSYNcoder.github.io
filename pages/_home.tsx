import Image from 'next/image';
import Socials from "../components/mac/socials";


const Home = () => {
    
    const sst = {
      backgroundImage: "url('/imgs/ita-naruto-resized.gif')",
      width: "100vw",
      height: "100vh",
      backgroundRepeat: "no-repeat",      
      backgroundPosition : 'center center',  
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover'
    }
  
    
    return (
      <div className="App">
        <div style={sst}>     
          <div className="flex justify-center" >
            <a href="/mac" className="transform transition duration-1000 hover:scale-110">
              <Image src="/imgs/sharingan.gif" height={200} width={200} alt='Spinning sharingan logo' ></Image>        
            </a>         
          </div>
          <div className="flex  justify-center items-center h-2/6">
            
              <div className="flex flex-col gap-4 mt-2">
                <div className="font-mono font-extrabold text-4xl md:text-6xl"> 
                <span className="text-red-600">Hi ,</span> 
                <span className="text-white md:text-red-600">I am</span>   </div>
                <div className="font-mono font-extrabold text-2xl md:text-4xl">
                <span className="text-red-600">Shuvayan</span> <span className="text-white">Ghosh</span>
                  <span className="text-red-600"> Dastidar</span>
                </div>                     
                <div className="font-mono font-extrabold text-2xl">
                  <span className="text-red-600">Software</span> {'     '}
                  <span className="text-red-300"> Developer</span>
                </div>                     
              </div>                      
          </div>
          <div className="flex  h-1/6 mx-32 md:mx-64 ">
            <div className="font-mono flex justify-center text-sm md:text-lg font-bold text-white md:text-red-500 text-center w-full">
              If you are on a PC or a laptop click on the sharingan above or any of the socials to know more about me!
            </div>
          </div>
          <div className="flex h-44 w-full justify-center items-center flex-grow flex-shrink">         
           <Socials />
          </div>
        </div>
      </div>
    );
  }

export default Home;