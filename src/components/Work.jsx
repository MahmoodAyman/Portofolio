import ProjectCard from "./ProjectCard";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef, useLayoutEffect } from "react";
gsap.registerPlugin( ScrollTrigger);
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
    tags: ["Wordpress", "Elementor", "Plugins"],
    projectLink: "https://mkh-engineering.com/",
  },
];
function Work() {
  const container = useRef();
  const slider = useRef();
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      let slides = gsap.utils.toArray(".slide");
      gsap.to(slides, {
        xPercent: -100 * (slides.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          start: "100% 80%",
          end: () => "+=" + container.current.offsetWidth,
          scrub: true,
          pin: true,
          snap: 1 / (slides.length - 1),
          pinSpacing: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="work" className="section overflow-hidden">
      <div className="container" ref={container}>
        <h2 className="headline-2 mb-8 reveal-up">Highlights</h2>
        <div className="flex items-stretch gap-5 w-1/3" ref={slider}>
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="slide project-card"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
