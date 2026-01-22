
import React from 'react';
import { OWNER } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="py-20 md:py-32 flex flex-col items-center text-center">
      <div className="relative mb-8">
        <img 
          src={`https://picsum.photos/seed/profile/200/200`} 
          alt={OWNER.name} 
          className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-xl floating"
        />
        <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-2 rounded-full shadow-lg">
          <i className="fa-solid fa-hand-wave"></i>
        </div>
      </div>
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
        안녕하세요, <span className="text-blue-600">{OWNER.name}</span>입니다.
      </h1>
      <p className="text-xl md:text-2xl text-slate-500 mb-8 max-w-2xl">
        {OWNER.role}로 활동하며, <span className="font-semibold text-slate-800 dark:text-slate-200">사용자에게 감동을 주는 디지털 경험</span>을 설계합니다.
      </p>
      <div className="flex gap-4">
        <a 
          href="#projects" 
          className="px-8 py-3 bg-slate-900 dark:bg-white dark:text-slate-900 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          View Work
        </a>
        <a 
          href="#contact" 
          className="px-8 py-3 border border-slate-300 dark:border-slate-700 rounded-lg font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
