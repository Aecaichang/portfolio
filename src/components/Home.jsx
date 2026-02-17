
import Header from './Header';
import Hero from './Hero';
import AboutMe from './AboutMe';
import Experience from './Experience';
import Education from './Education';
import Certifications from './Certifications';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Footer from './Footer';

const Home = () => {
  return (
    <div className="App min-h-screen bg-background text-foreground transition-colors duration-300 max-w-[1920px] mx-auto xl:border-x xl:border-border/40 xl:shadow-2xl">
      <Header />
      <Hero />
      <main>
        <AboutMe />
        <Experience />
        <Education />
        <Certifications />
        <Skills />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
