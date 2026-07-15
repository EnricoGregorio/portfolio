import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faMobileScreenButton,
  faGamepad,
  faGear,
  faCodeBranch,
  faObjectGroup,
} from "@fortawesome/free-solid-svg-icons";

export default function Sobre() {
  // Array com os dados de cada serviço/habilidade.
  const servicos = [
    {
      titulo: "Desenvolvimento Web",
      icone: faCode,
      descricao:
        "Construção de interfaces modernas, dashboards dinâmicos e sistemas de alta performance utilizando Next.js e React.",
    },
    {
      titulo: "Desenvolvimento Mobile",
      icone: faMobileScreenButton,
      descricao:
        "Criação de APIs robustas e arquiteturas limpas para integração fluida com aplicativos móveis e serviços de terceiros.",
    },
    {
      titulo: "Desenvolvimento de Jogos",
      icone: faGamepad,
      descricao:
        "Aplicação avançada de Orientação a Objetos e modelagem UML para criação de lógicas complexas e sistemas em Java.",
    },
    {
      titulo: "Suporte Técnico",
      icone: faGear,
      descricao:
        "Manutenção de sistemas, resolução de bugs de arquitetura e refatoração de código para garantir estabilidade contínua.",
    },
    {
      titulo: "Versionamento de Projetos",
      icone: faCodeBranch,
      descricao:
        "Controle rigoroso de código utilizando Git e repositórios como GitHub, garantindo entregas contínuas e versionamento seguro.",
    },
    {
      titulo: "Web Design Responsivo",
      icone: faObjectGroup,
      descricao:
        "Componentização eficiente e estilização adaptável com Tailwind CSS, garantindo usabilidade em qualquer tamanho de tela.",
    },
  ];

  return (
    <section id="sobre" className="py-24 px-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Cabeçalho da seção. */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-xl tracking-wider">
            Sobre
          </span>
          <h2 className="text-default text-4xl md:text-5xl font-bold mt-2">
            O que eu faço
          </h2>
        </div>

        {/* Grade de Cards (CSS Grid) */}
        {/* grid-cols-1 (mobile), md:grid-cols-2 (tablet), lg:grid-cols-3 (desktop). */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* O map() percorre a lista e cria um card para cada item. */}
          {servicos.map((servico, index) => (
            <div
              key={index}
              className="bg-secondary p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 shadow-lg shadow-secondary"
            >
              <FontAwesomeIcon
                icon={servico.icone}
                className="text-primary text-4xl mb-6"
              />
              <h3 className="text-default text-2xl font-bold mb-4">
                {servico.titulo}
              </h3>
              <p className="text-default/80 leading-relaxed text-justify">
                {servico.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
