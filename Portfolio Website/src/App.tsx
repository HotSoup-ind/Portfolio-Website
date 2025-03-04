import React, { useState, useEffect } from 'react';
import { Menu, X, Github as GitHub, Linkedin, Mail, ExternalLink, ChevronDown, Code, BookOpen, Monitor, Database, Terminal, Moon, Sun } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for user preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }

    const handleScroll = () => {
      // Update navbar style on scroll
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'education', 'skills', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
    setActiveSection(sectionId);
  };

  const projects = [
    {
      title: "Portfolio Website",
      description: "Developed a fully responsive personal portfolio using React.js to display skills, projects, and contact details. Implemented smooth navigation, interactive animations, and an optimized performance setup using React hooks. Integrated SEO enhancements to improve discoverability.",
      technologies: ["React.js", "Tailwind CSS", "JavaScript", "HTML/CSS"],
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "#"
    },
    {
      title: "Library Management System",
      description: "Designed and implemented a Python-MySQL-based CLI application for book management, issue tracking, and user authentication. Integrated error handling mechanisms, automated overdue reminders, and optimized SQL queries to ensure efficient database operations.",
      technologies: ["Python", "MySQL", "CLI", "Database Design"],
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "#"
    }
  ];

  const skills = [
    { category: "Programming", items: ["Python", "C", "C++", "JavaScript"] },
    { category: "Web Development", items: ["HTML", "CSS", "React.js", "Bootstrap", "Tailwind CSS"] },
    { category: "Databases", items: ["MySQL", "PostgreSQL"] },
    { category: "Operating Systems", items: ["Linux (Ubuntu, Kali)", "Windows"] },
    { category: "Other Tools", items: ["Git", "GitHub", "VS Code", "Adobe Photoshop"] },
    { category: "Concepts", items: ["Data Structures and Algorithms", "Object-Oriented Programming", "Software Development Life Cycle", "REST APIs", "Problem Solving"] }
  ];

  const education = [
    {
      institution: "Dr. Sudhir Chandra Sur Institute of Technology & Sports Complex, MAKAUT",
      degree: "B.Tech in Computer Science and Engineering",
      year: "2025",
      grade: "CGPA: 7.64/10"
    },
    {
      institution: "Kendriya Vidyalaya Ichapore (CBSE)",
      degree: "Class 12",
      year: "2020",
      grade: "73.4%"
    },
    {
      institution: "Kendriya Vidyalaya Ichapore (CBSE)",
      degree: "Class 10",
      year: "2018",
      grade: "78.8%"
    }
  ];

  const otherSkills = [
    {
      category: "Soft Skills",
      items: ["Strong Analytical Thinking", "Problem-Solving", "Team Collaboration", "Communication", "Adaptability"]
    },
    {
      category: "Creative Skills",
      items: ["Video Editing", "Adobe Photoshop", "UI/UX Designing"]
    },
    {
      category: "Languages Known",
      items: ["English", "Hindi", "Bengali"]
    }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-black text-white' : 'bg-gray-50 text-gray-800'} font-sans transition-colors duration-300`}>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled 
        ? (darkMode ? 'bg-black shadow-lg shadow-custom-green/20 py-3' : 'bg-white shadow-md py-3') 
        : (darkMode ? 'bg-transparent py-5' : 'bg-transparent py-5')}`}>
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <a href="#home" className={`text-2xl font-bold ${darkMode ? 'text-custom-green' : 'text-indigo-600'}`}>Sourab.dev</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['home', 'about', 'education', 'skills', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize ${activeSection === item 
                  ? (darkMode ? 'text-custom-green font-medium' : 'text-indigo-600 font-medium') 
                  : (darkMode ? 'text-gray-300 hover:text-custom-green' : 'text-gray-600 hover:text-indigo-500')}`}
              >
                {item}
              </button>
            ))}
            <button 
              onClick={toggleDarkMode} 
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-900 text-custom-green' : 'bg-gray-100 text-gray-700'}`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
          
          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={toggleDarkMode} 
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-900 text-custom-green' : 'bg-gray-100 text-gray-700'}`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              className={darkMode ? 'text-gray-300 hover:text-custom-green' : 'text-gray-600 hover:text-indigo-500'}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden ${darkMode ? 'bg-gray-900 shadow-lg' : 'bg-white shadow-lg'} absolute top-full left-0 right-0 py-4 px-4`}>
            <div className="flex flex-col space-y-4">
              {['home', 'about', 'education', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize py-2 ${activeSection === item 
                    ? (darkMode ? 'text-custom-green font-medium' : 'text-indigo-600 font-medium') 
                    : (darkMode ? 'text-gray-300' : 'text-gray-600')}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className={`min-h-screen flex items-center justify-center ${darkMode 
        ? 'bg-gradient-to-br from-black to-gray-900' 
        : 'bg-gradient-to-br from-indigo-50 to-blue-50'} pt-20`}>
        <div className="container mx-auto px-4 md:px-6 py-12">
          {/* Mobile View - Heading above profile photo */}
          <div className="md:hidden text-center mb-8">
            <h1 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} leading-tight`}>
              Hi, I'm <span className={darkMode ? 'text-custom-green' : 'text-indigo-600'}>Sourab</span>
              <br />
              Frontend Developer
            </h1>
          </div>
          
          {/* Mobile View - Profile photo */}
          <div className="md:hidden flex justify-center mb-8">
            <div className={`relative w-32 h-32 rounded-full overflow-hidden border-4 ${darkMode ? 'border-gray-800' : 'border-white'} shadow-xl`}>
              <img 
                src="https://res.cloudinary.com/dgdtfxnji/image/upload/f_auto,q_auto/spdxp5iqykrjyvusjzys" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Desktop View */}
          <div className="hidden md:flex md:flex-row items-center">
            <div className="md:w-1/2">
              <h1 className={`text-5xl lg:text-6xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'} leading-tight`}>
                Hi, I'm <span className={darkMode ? 'text-custom-green' : 'text-indigo-600'}>Sourab</span>
                <br />
                Frontend Developer
              </h1>
              <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-8 max-w-lg`}>
                Final Year B.Tech CSE Student passionate about creating responsive and user-friendly web applications.
              </p>
              <div className="flex space-x-4">
                <button 
                  onClick={() => scrollToSection('projects')}
                  className={`${darkMode 
                    ? 'bg-custom-green hover:bg-custom-green/90 text-black' 
                    : 'bg-indigo-600 hover:bg-indigo-700 text-white'} px-6 py-3 rounded-lg font-medium transition-colors duration-300`}
                >
                  View My Work
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className={`${darkMode 
                    ? 'border-2 border-custom-green text-custom-green hover:bg-gray-900' 
                    : 'border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50'} px-6 py-3 rounded-lg font-medium transition-colors duration-300`}
                >
                  Contact Me
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 ${darkMode ? 'border-gray-800' : 'border-white'} shadow-xl`}>
                <img 
                  src="https://res.cloudinary.com/dgdtfxnji/image/upload/f_auto,q_auto/spdxp5iqykrjyvusjzys" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Mobile View - Description and buttons */}
          <div className="md:hidden">
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-8 text-center`}>
              Final Year B.Tech CSE Student passionate about creating responsive and user-friendly web applications.
            </p>
            <div className="flex justify-center space-x-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className={`${darkMode 
                  ? 'bg-custom-green hover:bg-custom-green/90 text-black' 
                  : 'bg-indigo-600 hover:bg-indigo-700 text-white'} px-6 py-3 rounded-lg font-medium transition-colors duration-300`}
              >
                View My Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`${darkMode 
                  ? 'border-2 border-custom-green text-custom-green hover:bg-gray-900' 
                  : 'border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50'} px-6 py-3 rounded-lg font-medium transition-colors duration-300`}
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={() => scrollToSection('about')} className={darkMode ? 'text-gray-400 hover:text-custom-green' : 'text-gray-500 hover:text-indigo-600'}>
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${darkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="container mx-auto px-4 md:px-6">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${darkMode ? 'text-white' : 'text-gray-800'}`}>About Me</h2>
          <div className="flex flex-col items-center">
            <div className="w-full max-w-3xl">
              <h3 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-custom-green' : 'text-indigo-600'}`}>Who I Am</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6 leading-relaxed`}>
                I'm Sourab Das, a final year B.Tech CSE student and frontend developer with a passion for creating 
                responsive and user-friendly web applications.
              </p>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6 leading-relaxed`}>
                My journey in web development started during my college years, and I've since honed my skills in 
                React.js, JavaScript, HTML, and CSS. I enjoy solving complex problems and turning ideas into 
                functional and aesthetically pleasing websites.
              </p>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-8 leading-relaxed`}>
                When I'm not coding, you can find me exploring new technologies, working on UI/UX designs, 
                or editing videos. I'm always eager to learn and grow in the ever-evolving field of web development.
              </p>
              <div className="flex space-x-6">
                <a href="https://github.com/HotSoup-ind" target="_blank" rel="noopener noreferrer" className={`${darkMode ? 'text-gray-300 hover:text-custom-green' : 'text-gray-600 hover:text-indigo-600'} transition-colors`}>
                  <GitHub size={24} />
                </a>
                <a href="https://linkedin.com/in/sourab-das" target="_blank" rel="noopener noreferrer" className={`${darkMode ? 'text-gray-300 hover:text-custom-green' : 'text-gray-600 hover:text-indigo-600'} transition-colors`}>
                  <Linkedin size={24} />
                </a>
                <a href="mailto:dastan123.sd@gmail.com" className={`${darkMode ? 'text-gray-300 hover:text-custom-green' : 'text-gray-600 hover:text-indigo-600'} transition-colors`}>
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className={`py-20 ${darkMode ? 'bg-gray-950' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4 md:px-6">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Education</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 ${darkMode ? 'bg-custom-green/30' : 'bg-indigo-200'}`}></div>
              
              {/* Education items */}
              {education.map((edu, index) => (
                <div key={index} className={`mb-12 relative ${index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-auto md:mr-1/2' : 'md:pl-12 md:ml-1/2'} md:w-1/2`}>
                  {/* Timeline dot */}
                  <div className={`absolute left-0 md:left-1/2 transform -translate-x-1/2 -translate-y-1/3 w-4 h-4 rounded-full ${darkMode ? 'bg-custom-green border-4 border-black' : 'bg-indigo-600 border-4 border-indigo-100'}`}></div>
                  
                  <div className={`${darkMode ? 'bg-black border border-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md`}>
                    <h3 className={`text-xl font-semibold ${darkMode ? 'text-custom-green' : 'text-indigo-600'}`}>{edu.institution}</h3>
                    <p className={`${darkMode ? 'text-gray-200' : 'text-gray-700'} font-medium mt-2`}>{edu.degree}</p>
                    <div className="flex justify-between mt-2">
                      <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{edu.year}</span>
                      <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} font-medium`}>{edu.grade}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 ${darkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="container mx-auto px-4 md:px-6">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Technical Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skills.map((skillCategory, index) => (
              <div key={index} className={`${darkMode ? 'bg-gray-950 border border-gray-800' : 'bg-gray-50 border border-gray-100'} p-6 rounded-lg shadow-md`}>
                <div className="flex items-center mb-4">
                  {index === 0 && <Code className={darkMode ? 'text-custom-green mr-3' : 'text-indigo-600 mr-3'} size={24} />}
                  {index === 1 && <Monitor className={darkMode ? 'text-custom-green mr-3' : 'text-indigo-600 mr-3'} size={24} />}
                  {index === 2 && <Database className={darkMode ? 'text-custom-green mr-3' : 'text-indigo-600 mr-3'} size={24} />}
                  {index === 3 && <Terminal className={darkMode ? 'text-custom-green mr-3' : 'text-indigo-600 mr-3'} size={24} />}
                  {index === 4 && <GitHub className={darkMode ? 'text-custom-green mr-3' : 'text-indigo-600 mr-3'} size={24} />}
                  {index === 5 && <BookOpen className={darkMode ? 'text-custom-green mr-3' : 'text-indigo-600 mr-3'} size={24} />}
                  <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{skillCategory.category}</h3>
                </div>
                <ul className="space-y-2">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center">
                      <span className={`w-2 h-2 ${darkMode ? 'bg-custom-green' : 'bg-indigo-600'} rounded-full mr-2`}></span>
                      <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <h3 className={`text-2xl font-semibold text-center mb-8 ${darkMode ? 'text-custom-green' : 'text-indigo-600'}`}>Other Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherSkills.map((skillCategory, index) => (
              <div key={index} className={`${darkMode ? 'bg-gray-950 border border-gray-800' : 'bg-gray-50 border border-gray-100'} p-6 rounded-lg shadow-md`}>
                <h4 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-800'} mb-4`}>{skillCategory.category}</h4>
                <ul className="space-y-2">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center">
                      <span className={`w-2 h-2 ${darkMode ? 'bg-custom-green' : 'bg-indigo-400'} rounded-full mr-2`}></span>
                      <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-950' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4 md:px-6">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${darkMode ? 'text-white' : 'text-gray-800'}`}>My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <div key={index} className={`${darkMode ? 'bg-black border border-gray-800' : 'bg-white border border-gray-100'} rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2`}>
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{project.title}</h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className={`${darkMode ? 'bg-gray-900 text-custom-green' : 'bg-indigo-100 text-indigo-800'} text-xs px-3 py-1 rounded-full`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`inline-flex items-center ${darkMode ? 'text-custom-green hover:text-custom-green/80' : 'text-indigo-600 hover:text-indigo-800'}`}
                  >
                    View Project <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 ${darkMode ? 'bg-black' : 'bg-indigo-50'}`}>
        <div className="container mx-auto px-4 md:px-6">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Get In Touch</h2>
          <div className={`max-w-3xl mx-auto ${darkMode ? 'bg-gray-950 border border-gray-800' : 'bg-white'} rounded-lg shadow-lg overflow-hidden`}>
            <div className={`${darkMode ? 'bg-gray-950' : 'bg-white'} p-8`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className={`${darkMode ? 'bg-black' : 'bg-indigo-50'} p-6 rounded-lg`}>
                  <h3 className={`text-2xl font-semibold mb-6 ${darkMode ? 'text-custom-green' : 'text-indigo-600'}`}>Contact Info</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Mail className={`mr-4 mt-1 ${darkMode ? 'text-custom-green' : 'text-indigo-600'}`} size={20} />
                      <div>
                        <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>Email</p>
                        <a href="mailto:dastan123.sd@gmail.com" className={`${darkMode ? 'text-gray-300 hover:text-custom-green' : 'text-indigo-600 hover:text-indigo-800'}`}>dastan123.sd@gmail.com</a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Linkedin className={`mr-4 mt-1 ${darkMode ? 'text-custom-green' : 'text-indigo-600'}`} size={20} />
                      <div>
                        <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>LinkedIn</p>
                        <a href="https://linkedin.com/in/sourab-das" target="_blank" rel="noopener noreferrer" className={`${darkMode ? 'text-gray-300 hover:text-custom-green' : 'text-indigo-600 hover:text-indigo-800'}`}>linkedin.com/in/sourab-das</a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <GitHub className={`mr-4 mt-1 ${darkMode ? 'text-custom-green' : 'text-indigo-600'}`} size={20} />
                      <div>
                        <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>GitHub</p>
                        <a href="https://github.com/HotSoup-ind" target="_blank" rel="noopener noreferrer" className={`${darkMode ? 'text-gray-300 hover:text-custom-green' : 'text-indigo-600 hover:text-indigo-800'}`}>github.com/HotSoup-ind</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${darkMode ? 'bg-black' : 'bg-indigo-50'} p-6 rounded-lg`}>
                  <h3 className={`text-2xl font-semibold mb-6 ${darkMode ? 'text-custom-green' : 'text-indigo-600'}`}>Let's Connect</h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
                    I'm currently looking for new opportunities and would love to hear from you. Feel free to reach out if you have any questions or just want to say hi!
                  </p>
                  <div className="flex flex-col space-y-4">
                    <a 
                      href="mailto:dastan123.sd@gmail.com" 
                      className={`${darkMode 
                        ? 'bg-custom-green hover:bg-custom-green/90 text-black' 
                        : 'bg-indigo-600 hover:bg-indigo-700 text-white'} px-6 py-3 rounded-md font-medium transition-colors duration-300 text-center`}
                    >
                      Send Email
                    </a>
                    <a 
                      href="https://linkedin.com/in/sourab-das" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`${darkMode 
                        ? 'border border-custom-green text-custom-green hover:bg-gray-900' 
                        : 'border border-indigo-600 text-indigo-600 hover:bg-indigo-50'} px-6 py-3 rounded-md font-medium transition-colors duration-300 text-center`}
                    >
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${darkMode ? 'bg-black text-white border-t border-gray-900' : 'bg-gray-800 text-white'} py-8`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <a href="#home" className={`text-2xl font-bold ${darkMode ? 'text-custom-green' : 'text-white'}`}>Sourab.dev</a>
              <p className={darkMode ? 'text-gray-400 mt-2' : 'text-gray-400 mt-2'}>Frontend Developer</p>
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com/HotSoup-ind" target="_blank" rel="noopener noreferrer" className={`${darkMode ? 'text-gray-400 hover:text-custom-green' : 'text-gray-400 hover:text-white'} transition-colors`}>
                <GitHub size={20} />
              </a>
              <a href="https://linkedin.com/in/sourab-das" target="_blank" rel="noopener noreferrer" className={`${darkMode ? 'text-gray-400 hover:text-custom-green' : 'text-gray-400 hover:text-white'} transition-colors`}>
                <Linkedin size={20} />
              </a>
              <a href="mailto:dastan123.sd@gmail.com" className={`${darkMode ? 'text-gray-400 hover:text-custom-green' : 'text-gray-400 hover:text-white'} transition-colors`}>
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div className={`border-t ${darkMode ? 'border-gray-900' : 'border-gray-700'} mt-8 pt-8 text-center text-gray-400`}>
            <p>&copy; {new Date().getFullYear()} Sourab Das. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;