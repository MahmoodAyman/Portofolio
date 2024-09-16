import Header from "./components/Header";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Work from "./components/Work.jsx";
function App() {
    return (
        <>
            <Header/>
            <main>
                <Hero/>
                <About/>
                <Skills/>
                <Work/>
            </main>

        </>)
}

export default App;