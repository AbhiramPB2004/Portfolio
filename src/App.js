import React from 'react';
import './App.css';
import Typical from 'react-typical';
import pytorchImg from './assests/images.png';
import scikitImg from './assests/image.png';
import pandasImg from './assests/pandas-logo-300.png';
import HeadImg from './assests/background.jpg';
import LinearProgress from '@mui/material/LinearProgress';

import MernImg from './assests/MERN-Stack-by-FLM.jpg';
import CareerImg from './assests/CareerGenie.png';
import TurreteImg from './assests/Turrete.png';
import ArduinoImg from './assests/Achievments/Arduino.png';
import TechImg from './assests/Achievments/image.png';
import IITMImg from './assests/Achievments/IITMmed.png';
import IITMBuild from './assests/Achievments/IITM_build.png';
import nutriscan from './assests/final logo.jpg';

function App() {
  return (
    <div className="App flex flex-col min-h-screen font-poppins bg-gradient animate-gradient">      
      {/* Navbar */}
      <header className="sticky top-0 bg-black backdrop-blur-md shadow-md z-50">
        <nav className="container mx-auto px-6 py-4 flex flex-wrap items-center justify-between">
          <div className="text-xl font-bold text-white">Abhiram PB</div>
          <ul className="flex space-x-6 text-white">
            {['Home', 'About', 'Skills', 'Projects', 'Achievements', 'Contact'].map(item => (
              <li key={item} className="hover:text-orange-500 transition-colors">
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </li>
            ))}
          </ul>
          <a
            href="/AbhiramPB_CV.pdf"
            className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
          >
            Download CV
          </a>
        </nav>
      </header>

      {/* Hero Section */}
    <section
      id="hero"
      className="flex items-center justify-center h-screen bg-cover bg-center text-white bg-[#0f172a]"
      // style={{
      //   backgroundImage: `url(${HeadImg})`,
      // }}
    >
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Abhiram PB</h1>
        <p className="text-xl font-bold mb-6">
          <Typical
            steps={[
              "AI/ML Enthusiast",
              2000,
              "Full-Stack Developer",
              2000,
              "Data Analyst",
              2000,
            ]}
            loop={Infinity}
            wrapper="span"
          />
        </p>
        <a
          href="#about"
          className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition"
        >
          Learn More
        </a>
      </div>
    </section>

      {/* About & Skills Section */}
      <section id="about" className="py-24 bg-gradient-to-br from-[#19426e] to-[#142c4a]">
  <div className="container mx-auto px-6 md:px-10 max-w-6xl">
    <h2 className="text-4xl font-extrabold text-white mb-12 relative inline-block w-fit">
      <span className="pb-2 border-b-4 border-yellow-300">About Me</span>
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
      {/* Text Section */}
      <div className="flex flex-col justify-center h-full">
        <p className="text-blue-100 text-lg leading-8 tracking-wide">
          I’m <span className="font-semibold text-yellow-300">Abhiram PB</span>, a passionate Computer Science student specializing in
          <span className="text-yellow-300"> Artificial Intelligence and Machine Learning</span>. I excel in using tools like
          <span className="text-yellow-300"> PyTorch</span>, <span className="text-yellow-300">Pandas</span>, and
          <span className="text-yellow-300"> Scikit-learn</span> to develop intelligent systems.
          <br className="my-4" />
          I'm also skilled in full-stack web development, merging <span className="text-yellow-300">AI/ML</span> with
          intuitive user experiences in modern applications.
        </p>
      </div>

      {/* Skills Section */}
      <div className="space-y-6">
        {[
          { label: 'Full Stack Development', value: 90, color: 'bg-orange-500' },
          { label: 'Student', value: 90, color: 'bg-yellow-400' },
          { label: 'Web Design', value: 75, color: 'bg-green-400' },
          { label: 'Backend Development', value: 65, color: 'bg-blue-400' },
          { label: 'Data Analysis', value: 80, color: 'bg-purple-400' }
        ].map(skill => (
          <div key={skill.label}>
            <div className="flex justify-between items-center mb-2">
              <span className="text-white font-medium text-base md:text-lg">{skill.label}</span>
              <span className="text-white font-medium text-base md:text-lg">{skill.value}%</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-3 shadow-inner">
              <div
                className={`${skill.color} h-3 rounded-full shadow-md transition-all duration-700 ease-in-out`}
                style={{ width: `${skill.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>



      {/* Tech Stack Section */}
      <section id="skills" className="py-20 bg-[#0f172a]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-12">Tech Stack</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { img: pytorchImg, title: 'PyTorch', desc: 'Deep learning library for dynamic computation.', href: 'https://pytorch.org/' },
              { img: scikitImg, title: 'Scikit-learn', desc: 'Machine learning library for classification and regression.', href: 'https://scikit-learn.org/' },
              { img: pandasImg, title: 'Pandas', desc: 'Data manipulation and analysis toolkit.', href: 'https://pandas.pydata.org/' },
              { img: MernImg, title: 'MERN Stack', desc: 'MongoDB, Express, React, Node.js full-stack development.', href: 'https://www.mongodb.com/mern-stack' }
            ].map(tool => (
              <a
                key={tool.title}
                href={tool.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
              >
                <img src={tool.img} alt={tool.title} className="h-20 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">{tool.title}</h3>
                <p className="text-sm text-blue-100">{tool.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section id="projects" className="py-20 bg-gradient-to-br from-[#0f172a] to-[#1e293b]">
  {/* Full‑width wrapper (no mx-auto max‑width) */}
  <div className="w-full px-6 lg:px-10">
    {/* Left‑aligned heading */}
    <h2 className="text-4xl font-extrabold text-white mb-12">
      <span className="pb-2 border-b-4 border-yellow-300">My Projects</span>
    </h2>

    {/* Grid with left‑aligned items */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-start">
      {[
        { img: nutriscan, title: 'NutriScan', desc: "NutiScan is a smart nutrition scanner that helps users make healthier food choices by analyzing packaged food labels. Using image recognition and AI, it scans nutrition facts and ingredients to provide insights like calorie count, sugar levels, allergens, and suitability for specific diets (e.g., keto, diabetic-friendly). Whether you're shopping at the store or managing your diet, NutiScan makes understanding nutrition quick, easy, and personalized"},
        { img: TurreteImg, title: 'Face Tracking Turret', desc: 'OpenCV + Arduino.' },
        { img: CareerImg, title: 'Career Genie', desc: 'AI-powered career counseling.' }
      ].map(project => (
        <div
          key={project.title}
          className="group relative bg-gradient-to-br from-[#1a4574] to-[#15334f]
                     rounded-2xl overflow-hidden shadow-lg transform hover:scale-105
                     transition-transform duration-300 w-full"
        >
          {/* Image */}
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-96 object-fill transition-transform
                       duration-500 group-hover:scale-110"
          />

          {/* Title, left‑aligned */}
          <div className="p-6">
            <h3 className="text-xl text-white font-semibold mb-2 text-left">
              {project.title}
            </h3>
          </div>

          {/* Hover Overlay, top‑left */}
          <div className="absolute inset-0 bg-black bg-opacity-0
                         group-hover:bg-opacity-60 transition duration-300
                         flex items-start justify-start p-6">
            <p className="text-white text-left opacity-0
                          group-hover:opacity-100 transition-opacity duration-300">
              {project.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-gradient-to-br from-[#0f172a] to-[#1e293b]">
  <div className="container mx-auto px-6 md:px-10 text-center">
    <h2 className="text-4xl font-extrabold text-white mb-16 relative inline-block">
      <span className="pb-2 border-b-4 border-yellow-300">Achievements</span>
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
      {[
        { img: ArduinoImg, title: 'Techvolution Hackathon', desc: '2nd Place' },
        { img: TechImg, title: 'Bytebash Software Challenge', desc: '3rd Place' },
        { img: IITMImg, title: 'IITM Medicuore Challenge', desc: '4th Place' },
        { img: IITMBuild, title: 'IITM Build to Innovate', desc: 'Semi‑Finalist' }
      ].map(item => (
        <div
          key={item.title}
          className="bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
        >
          <div className="overflow-hidden h-48">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
            <p className="text-sm text-blue-200">{item.desc}</p>
          </div>
        </div>
      ))}

      {/* Optional CTA card for more achievements */}
      
    </div>
  </div>
</section>

      {/* Contact & Footer */}
      <footer id="contact" className="bg-gray-800 text-gray-200 py-10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="mb-6">Feel free to reach out for collaborations or just a friendly hello!</p>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="mailto:abhiram@example.com" className="hover:text-white transition">
              Email
            </a>
            <a href="https://www.linkedin.com/in/abhiram-pb" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              LinkedIn
            </a>
            <a href="https://github.com/abhirampb" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              GitHub
            </a>
          </div>
          <p className="text-sm">© {new Date().getFullYear()} Abhiram PB. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
