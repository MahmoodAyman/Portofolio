function About(){
    const aboutItems = [
        {
            label: 'Project done',
            number: 10
        },
        {
            label: 'Years of experience',
            number: 1
        }
    ];
    return (
       <section id="about" className="section">
           <div className="container">
               <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 ">
                   <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl">I&apos;m Mahmoud Ayman, a Software Engineer with a strong background in designing and implementing highly efficient web applications. Holding a Bachelor&apos;s degree in Computer Science, I have hands-on experience with a diverse range of web development technologies, including React, Node.js, Tailwind CSS, and many more. Beyond development, I am also passionate about teaching, with expertise in programming and computer science fundamentals such as Object-Oriented Programming (OOP), Databases, Algorithms, and Data Structures. Whether I&apos;m building robust web solutions or guiding others through the complexities of coding, I bring dedication and innovation to every project I undertake.</p>
               <div className={"flex flex-wrap items-center gap-4 md:gap-7 md:flex-nowrap"}>
                   {
                       aboutItems.map((item, key)=>(
                           <div key={key}>
                               <div className="flex items-center gap-2 md:mb-2 ">
                                   <span className="text-2xl md-text-4xl font-semibold">{item.number}</span>
                                   <span className={'text-red-400 font-semibold md:text-3xl '}>+</span>
                               </div>
                               <p className="text-sm text-zinc-400">{item.label}</p>
                           </div>
                       ))
                   }
                   <img src="/images/MALogo.png"
                        width={30}
                        height={30}
                        alt="Mahmoud Ayman Logo"
                        className="ml-auto md:w-[40px] md:h-[40px] "/>
               </div>
               </div>
           </div>
       </section>
    )
}
export default About;