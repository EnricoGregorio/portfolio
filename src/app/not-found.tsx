import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons"; // Ícone de casa para voltar.

export default function NotFound() {
  return (
    // min-h-screen e flexbox para centralizar tudo na tela.
    <main className="bg-background text-default min-h-screen flex flex-col items-center justify-center p-8 text-center">
      {/* 404 Grande, em destaque com a cor primária e fonte mono. */}
      <h1 className="text-8xl md:text-9xl font-mono font-bold text-primary mb-4 animate-pulse">
        404
      </h1>

      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Rota não encontrada
      </h2>

      <p className="text-default/80 text-lg max-w-md mb-10 leading-relaxed">
        Parece que você fez uma requisição para um endpoint que não existe no
        meu servidor. Que tal voltarmos para a página inicial?
      </p>

      {/* O componente Link do Next.js garante uma navegação instantânea no lado do cliente (SPA). */}
      <Link
        href="/"
        className="flex items-center gap-3 bg-secondary text-primary px-8 py-4 rounded-2xl font-bold hover:bg-primary hover:text-default hover:-translate-y-1 transition-all duration-300 shadow-lg"
      >
        <FontAwesomeIcon icon={faHouse} className="w-5 h-5" />
        Voltar para o Início
      </Link>
    </main>
  );
}
