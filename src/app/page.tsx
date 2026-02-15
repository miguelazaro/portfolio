import { Navbar } from "../components/layout";
import { Hero, About, Projects, Experience, Contact } from "../components/sections";
import { WhatsAppButton, InstallPrompt } from "../components/ui";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <WhatsAppButton />
      <InstallPrompt />
    </main>
  );
}