
import './App.css';
import Typical from "react-typical";
import pytorchImg from "./assests/images.png"
import scikitImg from "./assests/image.png"
import pandasImg from "./assests/pandas-logo-300.png"
import HeadImg from './assests/computer-science-education.jpg'
import LinearProgress from '@mui/material/LinearProgress';
import Heartimg from"./assests/Heart.png"
import Mernimg from "./assests/MERN-Stack-by-FLM.jpg"
import careerImg from "./assests/CareerGenie.png"
import TurreteImg from "./assests/Turrete.png"
import ArduinoImg from "./assests/Achievments/Arduino.png"
import techImg from "./assests/Achievments/image.png"
import IITMimg from "./assests/Achievments/IITMmed.png"
import IITMbuild from "./assests/Achievments/IITM_build.png"

function App() {
  return (
    <div className="App flex  items-center flex-col  h-[5600px]">
      <div>
      <div className='NavBar  flex w-[1230px] items-center  justify-center flex-row h-[47px]   '>
        <div className='poppins-regular  flex text-center text-[15px] justify-center items-center pr-9'>Home</div>
        <div className='poppins-regular  flex text-center text-[15px] justify-center items-center pr-9'>About Me</div>
        <div className='poppins-regular  flex text-center text-[15px] justify-center items-center pr-9'>Projects</div>
        <div className='poppins-regular  flex text-center text-[15px] justify-center items-center pr-9'>My Achievements</div>
        <div><button className='justify-end items-end bg-[#FD6F00] text-white pl-3 pr-3 pt-1 pb-1 rounded-md flex'>Download CV</button></div>
      </div>
      </div>
      <div>
      <div className='Header  flex p-5  items-center flex-row w-[1400px] h-[612px]'>
        <div className='felx h-96   w-1/2 justify-self-center'>
        <div className='p-10'>
          <div className='poppins-semibold text-[24px]'>Hi I am</div>
          <div className='poppins-semibold text-[32px] text-[#FD6F00]'>Abhiram PB</div>
          <div className='poppins-semibold text-[50px] poppins-bold '>
          <Typical
        steps={['AI/ML engineer', 2000, 'Web Developer', 2000, "Data analyst", 2000]}
        loop={Infinity}
        wrapper="p"
      />
          </div>
          <div className='poppins-regular text-[19px] pt-5'>Enthusiastic and innovative engineer with a passion for driving change through creative solutions. Adept at translating ideas into tangible results, I thrive on challenges that require both analytical thinking and creative problem-solving.</div>
          
        </div>
            
        </div>
        <div className='p-5 justify-center items-center flex  h-96 w-1/2'>
        <div className=''>
          <img src={HeadImg}  alt='HeadImg' className='rounded-full h-96 w-96'/> 
        </div>
        </div>
      </div>
      
      <div className=' flex h-[609px]  '>
        <div className='flex w-1/2'>
          
        </div>

        <div className=' w-1/2 p-10'>
        <div className=' poppins-semibold text-[45px]'>
          About Me
        </div>
        <div className='poppins-regular'>I’m Abhiram PB, a dedicated Computer Science student specializing in Artificial Intelligence and Machine Learning. My expertise lies in harnessing the power of advanced tools such as PyTorch, Pandas, and Scikit-learn to build sophisticated machine learning models. Alongside my AI and ML skills, I am also proficient in full-stack web development, enabling me to integrate complex machine learning algorithms into robust, user-friendly web applications. My passion for technology drives me to continuously learn and apply the latest advancements in AI and web development, striving to create innovative and impactful solution</div>

        <div>
          <div className='pt-5 poppins-semibold'>Web development</div>
          <LinearProgress variant="determinate" color="error" value={90} />
        </div>
        <div>
          <div className='pt-5 poppins-semibold'>AI/ML</div>
          <LinearProgress variant="determinate" color="warning" value={90} />
        </div>
        <div>
          <div className='pt-5 poppins-semibold'>WEB Design</div>
          <LinearProgress variant="determinate" color='success' value={70} />
        </div>
        <div>
          <div className='pt-5 poppins-semibold'>IOT</div>
          <LinearProgress variant="determinate" color="inherit" value={60} />
        </div>
        <div>
          <div className='pt-5 poppins-semibold'>Data Analyst</div>
          <LinearProgress variant="determinate" value={80} />
        </div>
        
        </div>
 

      </div>
      <div className='Techstack  flex-col flex justify-center items-center'>
        <div className='w-[1413px] flex  flex-col  items-center p-5  h-[500px] pop'>
          <div className='text-[45px] flex poppins-semibold  justify-center p-5'>TECH STACK</div>

          <div className='grid grid-cols-4 p-5 grid-rows-1 w-[1428px] gap-3 h-[472px]'>
            <div className=' flex items-center flex-col'>
              <img src={pytorchImg} alt='pytorch img' className='h-[89px] '></img>
              <div className='poppins-semibold text-[24px] p-3'>PyTorch</div>
              <div className='poppins-regular text-[15px] tracking-[3%] text-center'>PyTorch is a Python library for deep learning, known for its flexibility and dynamic computation, supporting tasks such as neural network training and deployment.</div>
            </div>
            <div className=' flex items-center flex-col'>
              <img src={scikitImg} alt='pytorch img' className='h-[89px] '></img>
              <div className='poppins-semibold text-[24px] p-3'>Scikit-learn</div>
              <div className='poppins-regular text-[15px] tracking-[3%] text-center'>Scikit-learn is a Python library for easy and efficient machine learning, supporting tasks like classification, regression, and clustering.</div>
            </div>
            <div className=' flex items-center flex-col'>
              <img src={pandasImg} alt='pytorch img' className='h-[89px] '></img>
              <div className='poppins-semibold text-[24px] p-3'>PyTorch</div>
              <div className='poppins-regular text-[15px] tracking-[3%] text-center'>PyTorch is a Python library for deep learning, known for its flexibility and dynamic computation, supporting tasks such as neural network training and deployment.</div>
            </div>
            <div className=' flex items-center flex-col'>
              <img src={Mernimg} alt='pytorch img' className='h-[89px] '></img>
              <div className='poppins-semibold text-[24px] p-3'>MERN</div>
              <div className='poppins-regular text-[15px] tracking-[3%] text-center'>MERN is a tech stack combining MongoDB, Express.js, React, and Node.js for building full-stack web applications with a unified JavaScript environment.</div>
            </div>
          </div>
        </div>

        
        
      
      </div>

      <div className='Techstack backdrop-blur-3xl flex-col flex justify-center items-center'>
        <div className=' flex border-solid border border-black flex-col  items-center backdrop-blur-3xl rounded-2xl  shadow-2xl   pop'>
          <div className='text-[45px] flex poppins-semibold  justify-center p-20  '>My Projects</div>

          <div className='grid grid-cols-3 grid-rows-1  w-auto gap-3 h-[623px]'>
            
            <div className=' flex items-center flex-col'>
              <img src={Heartimg} alt='pytorch img' className='h-[400px] '></img>
              <div className='poppins-bold text-[24px] text-center p-6 '>Heart health score using random 
              forest classification</div>
             
            </div>
            <div className=' flex items-center flex-col'>
              <img src={careerImg} alt='pytorch img' className='h-[400px] '></img>
              <div className='poppins-bold text-[24px] text-center p-6'>Face tracking turret using open-cv and arduino  </div>
              
            </div>
            <div className=' flex items-center flex-col'>
              <img src={TurreteImg} alt='pytorch img' className='h-[400px]'></img>
              <div className='poppins-bold text-[24px] text-center p-6'>Career counseling using  GEN AI</div>
            </div>
           
          </div>
        </div>
      </div>



      <div className='Techstack  flex-col flex justify-center items-center'>
        <div className=' flex  flex-col  items-center backdrop-blur-3xl rounded-2xl pt-32 h-[613px] pop'>
          <div className='text-[45px] flex poppins-semibold  justify-center pb-16'>My Achievements</div>

          <div className='grid grid-cols-3 grid-rows-2  w-auto gap-3 '>
            
            <div className=' flex items-center flex-col'>
              <img src={ArduinoImg} alt='pytorch img' className='h-[300px] '></img>
              <div className='poppins-bold text-[24px] text-center p-5 '>2nd place in the Techvolution Hackathon </div>
             
            </div>
            <div className=' flex items-center flex-col'>
              <img src={techImg} alt='pytorch img' className='h-[300px] '></img>
              <div className='poppins-bold text-[24px] text-center p-6'>3rd place in the Bytebash Software </div>
              
            </div>
            <div className=' flex items-center flex-col'>
              <img src={IITMimg} alt='pytorch img' className='h-[300px]'></img>
              <div className='poppins-bold text-[24px] text-center p-6'>4th place in IITM Medicuore Challenge</div>
            </div>
            <div>

            </div>
            <div>
            <img src={IITMbuild} alt='pytorch img' className='h-[300px]'></img>
            <div className='poppins-bold text-[24px] text-center p-6'>Semi-finalist in IITM Build to innovate challenge</div>
            </div>
            <div>
              
            </div>
           
          </div>
        </div>
      </div>



      <div>
      </div>
      </div>

      
   
    </div>
  );
}

export default App;
