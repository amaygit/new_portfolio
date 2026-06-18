import React from "react";
import { skills } from "../../data/skills";
import * as Icons from "lucide-react";
import FadeIn from "../animations/FadeIn";
import { FaD } from "react-icons/fa6";

const Skills = () => {
  // Categorize skills
  const skillCategories = {
    "Design & Modeling": [
      skills.find((s) => s.name === "Autodesk Revit (BIM)"),
      skills.find((s) => s.name === "AutoCAD"),
      skills.find((s) => s.name === "3D Modeling (Rhino/SketchUp)"),
      skills.find((s) => s.name === "Spatial Planning"),
      skills.find((s) => s.name === "Interior Architecture"),
    ].filter(Boolean),
    "Visualization & Documentation": [
      skills.find((s) => s.name === "V-Ray & Lumion Rendering"),
      skills.find((s) => s.name === "Construction Documentation"),
      skills.find((s) => s.name === "Building Codes & Zoning"),
    ].filter(Boolean),
    "Planning & Sustainability": [
      skills.find((s) => s.name === "Sustainable Design (LEED)"),
      skills.find((s) => s.name === "Site Analysis & Feasibility"),
      skills.find((s) => s.name === "Urban & Landscape Design"),
      skills.find((s) => s.name === "Project Management"),
    ].filter(Boolean),
  };
  //get proficiency percentage
  const getProficiencyLevel = (level) => {
    const levels = {
      Expert: 95,
      Advanced: 80,
      Intermediate: 65,
    };
    return levels[level] || 50; // Default to 50% if level is unknown
  };
  //get level color
  const getLevelColor = (level) => {
    const colors = {
      Expert: "text-[#8DFF69] bg-[#8DFF69]/20 border-[#8DFF69]/30",
      Advanced: "text-cyan-400 bg-cyan-500/20 border-cyan-500/30",
      Intermediate: "text-emerald-400 bg-emerald-500/20 border-emerald-500/30",
    };
    return colors[level] || "text-gray-400 bg-gray-500/20 border-gray-500/30"; // Default to gray if level is unknown
  };
  return (
    <section className="relative py-20 bg-black overflow-hidden" id="skills">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">
        <FadeIn delay={100}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Icons.Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">My Expertise</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-normal text-white mb-4">
              Skills & Proficiency
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              A comprehensive overview of my skills, categorized into Design &
              Modeling, Visualization & Documentation, and Planning &
              Sustainability. Each skill is accompanied by a proficiency level,
              showcasing my expertise in the field of architecture and interior
              design.
            </p> 
          </div>
        </FadeIn>
        {/* Skill categories will be rendered here */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {Object.entries(skillCategories).map(
            ([category, categorySkills], categoryIndex) => (
              <FadeIn key={category} delay={categoryIndex * 100}>
                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                    <div className="w-1 h-8 bg-gradient-to-b from-primary/30 to-primary/10 rounded-full"></div>
                    <div className="text-xl font-medium text-white">{category}</div>
                  </div>
                  {/* Skills List */}
                  <div className="space-y-5">
                    {categorySkills.map((skill, skillIndex) => {
                      const IconComponent = Icons[skill.icon] || Icons.Code2; // Default to FaD if icon not found
                      const proficiency = getProficiencyLevel(skill.level);

                      return (
                        <div className="space-y-2" key={skill.id}>
                          <div className="flex items-center justify-between ">
                            <div className="flex items-center gap-3">
                              <div className="p-2 bg-white/5 rounded-lg">
                                <IconComponent className="w-4 h-4 text-primary" />
                              </div>
                              <div>
                                <div className="text-sm font-medium text-white">{skill.name}</div>
                                <div className="text-xs text-white/50">{skill.experience}</div>
                              </div>
                            </div>
                            <span
                              className={`text-xs px-2 py-1 rounded-full border ${getLevelColor(skill.level)}`}
                            >
                              {skill.level}
                            </span>
                          </div>
                          <div className="relative h-1.5 bg-white/5 rounded-full overflow-hidden">
                            <div
                              className="absolute top-0 left-0 h-full bg-linear-to-r from-primary/10 to-primary/80 rounded-full transition-all duration-1000 ease-out"
                              style={{ width: `${proficiency}%` }}
                            ></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/5 group:hover:from-primary/5 group-hover:to-primary/5 rounded-2xl transition-all duration-300 pointer-events-none"></div>
                </div>
              </FadeIn>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
