import ProjectCard from "./ProjectCard";
const works = [
  {
    imgSrc: "/images/projects/Roshta.png",
    title: "Roshta",
    tags: ["API", "MVC", "Development", "TailwindCSS"],
    projectLink: "https://github.com/NeVeDlE/Roshta/tree/front-end",
  },
  {
    imgSrc: "/images/projects/Go-On.png",
    title: "Go On Adevrtising",
    tags: ["Front-end", "HTML", "CSS", "JS"],
    projectLink: "http://mahmoudayman.me/GoOnads/",
  },
  {
    imgSrc: "/images/projects/Natours.png",
    title: "Natours Tours",
    tags: ["MongoDB", "NodeJS", "ExpressJS"],
    projectLink: "",
  },
  {
    imgSrc: "/images/projects/pop-corn.png",
    title: "Pop Corn Movies",
    tags: ["Web-design", "Development"],
    projectLink: "http://mahmoudayman.me/Pop-Corn/",
  },
  {
    imgSrc: "/images/projects/MKH.png",
    title: "MKH - Engineering Services",
    tags: ["Wordpress", "Elementor" , "Plugins"],
    projectLink: "https://mkh-engineering.com/",
  }
];
function Work() {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-4 reveal-up">Highlights</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,1fr))]">
            {
                works.map(({imgSrc , title , tags, projectLink} , key)=> (
                    <ProjectCard key ={key} imgSrc={imgSrc} title={title} tags={tags} projectLink={projectLink} classes="project-card reveal-up" />
                ))
            }
        </div>
      </div>
    </section>
  );
}
export default Work;
