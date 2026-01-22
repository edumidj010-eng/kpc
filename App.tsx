
import React, { useState, useEffect } from 'react';
import { OWNER, PROJECTS, SKILLS } from './constants.ts';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import ProjectCard from './components/ProjectCard.tsx';
import SkillBar from './components/SkillBar.tsx';
import ChatBot from './components/ChatBot.tsx';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('bg-slate-900', 'text-white');
      document.body.classList.remove('bg-slate-50', 'text-slate-900');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('bg-slate-900', 'text-white');
      document.body.classList.add('bg-slate-50', 'text-slate-900');
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen">
      <Navbar 
        isDarkMode={isDarkMode} 
        toggleDarkMode={() => setIsDarkMode(!isDarkMode)} 
      />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                {OWNER.bio}
              </p>
              <div className="flex gap-4">
                <a href={OWNER.github} className="text-2xl hover:text-blue-600 transition-colors">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href={OWNER.linkedin} className="text-2xl hover:text-blue-600 transition-colors">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href={`mailto:${OWNER.email}`} className="text-2xl hover:text-blue-600 transition-colors">
                  <i className="fa-solid fa-envelope"></i>
                </a>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">Top Skills</h3>
              {SKILLS.map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 border-t border-slate-200 dark:border-slate-800">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-slate-600 dark:text-slate-400">제가 열정을 쏟아 완성한 최근 작업물들입니다.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 border-t border-slate-200 dark:border-slate-800 text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
            새로운 프로젝트나 협업 기회에 언제나 열려 있습니다. 
            함께 멋진 아이디어를 현실로 만들어봐요!
          </p>
          <a 
            href={`mailto:${OWNER.email}`}
            className="inline-block px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-transform hover:scale-105"
          >
            Say Hello
          </a>
        </section>
      </main>

      <footer className="py-10 border-t border-slate-200 dark:border-slate-800 text-center text-slate-500 text-sm">
        <p>© 2024 {OWNER.name}. Built with Gemini & React.</p>
      </footer>

      {/* Floating Chat Bot */}
      <ChatBot />
    </div>
  );
};

export default App;
