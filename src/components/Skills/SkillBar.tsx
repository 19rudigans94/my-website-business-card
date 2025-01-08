import React from 'react';
import { Skill } from '../../data/skills';

interface SkillBarProps {
  skill: Skill;
}

export const SkillBar: React.FC<SkillBarProps> = ({ skill }) => (
  <div className="mb-6">
    <div className="flex justify-between mb-2">
      <span className="font-medium">{skill.name}</span>
      <span className="text-gray-600">{skill.level}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div
        className="bg-gray-900 h-2.5 rounded-full transition-all duration-500"
        style={{ width: `${skill.level}%` }}
      />
    </div>
  </div>
);