import Hero from "./Hero";
import Sobre from "./Sobre";
import Projetos from "./Projetos";
import Contato from "./Contato";


export default function Main() {
  return (
    <main className="bg-background text-default">
      <Hero />
      <Sobre />
      <Projetos />
      <Contato />
    </main>
  );
}
