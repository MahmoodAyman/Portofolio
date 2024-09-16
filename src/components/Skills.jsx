import SkillCard from "./SkillCard";
const skillItem = [
  {
    imgSrc: "/images/skills/figma.svg",
    label: "Figma",
    desc: "Design tool",
  },
  {
    imgSrc: "/images/skills/css3.svg",
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/skills/javascript.svg",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "/images/skills/nodejs.svg",
    label: "NodeJS",
    desc: "Web Server",
  },
  {
    imgSrc: "/images/skills/expressjs.svg",
    label: "ExpressJS",
    desc: "Node Framework",
  },
  {
    imgSrc: "/images/skills/mongodb.svg",
    label: "MongoDB",
    desc: "Database",
  },
  {
    imgSrc: "/images/skills/react.svg",
    label: "React",
    desc: "Framework",
  },
  {
    imgSrc: "/images/skills/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/skills/c++.svg",
    label: "C++",
    desc: "Programming Language",
  },
  {
    imgSrc: "/images/skills/wordpress.svg",
    label: "Word Press",
    desc: "CMS (Content Management System)",
  }
];
function Skills() {
  return (
    <section className="section">
      <div className="container">
        <h2 className={"headline-2"}>
          My Toolbox: Skills, Tools, and Technologies
        </h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[70ch]">
          Crafting efficient and scalable web solutions with a knack for
          problem-solving and a passion for innovative design. Dive into the
          skills that drive my work.
        </p>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(200px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard imgSrc={imgSrc} label={label} desc={desc} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
