
import React from 'react';
import { Skill } from '../types';

interface SkillBarProps {
  skill: Skill;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="flex items-center gap-2 font-medium">
          <i className={`${skill.icon} text-blue-600`}></i>
          {skill.name}
        </span>
        <span className="text-xs text-slate-400">{skill.level}%</span>
      </div>
      <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-blue-600 rounded-full transition-all duration-1000" 
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
