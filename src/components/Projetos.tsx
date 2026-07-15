import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Projetos() {
  const projetos = [
    {
      id: 1,
      titulo: "Meu Website",
      imagem: "/projects/meusite-v1.png",
      tecnologias: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/EnricoGregorio/meu-site",
    },
    {
      id: 2,
      titulo: "Site NetPará",
      imagem: "/projects/netpara.png",
      tecnologias: ["HTML5", "CSS3", "JavaScript", "EmailJS", "Figma"],
      github: "https://github.com/EnricoGregorio/netpara",
    },
    {
      id: 3,
      titulo: "Jogo DodgingGame",
      imagem: "/projects/dg-game.png",
      tecnologias: ["Java"],
      github: "https://github.com/EnricoGregorio/dodgingGame",
    },
    {
      id: 4,
      titulo: "Baixador de Músicas do Spotify",
      imagem: "/projects/smd.png",
      tecnologias: ["Python", "Flask"],
      github: "https://github.com/EnricoGregorio/SpotifyMusicsDownload",
    },
    {
      id: 5,
      titulo: "Jogo Pong",
      imagem: "/projects/pong.png",
      tecnologias: ["Java"],
      github: "https://github.com/EnricoGregorio/Game-Pong",
    },
  ];

  return (
    <section id="projetos" className="bg-background py-24 px-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-xl tracking-wider">
            Projetos
          </span>
          <h2 className="text-default text-4xl md:text-5xl font-bold mt-2">
            Meu portfólio
          </h2>
        </div>

        {/* Grelha de Projetos (3 colunas no desktop, 2 no tablet, 1 no celular). */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projetos.map((projeto) => (
            <div
              key={projeto.id}
              className="bg-secondary p-6 rounded-2xl flex flex-col gap-6 group hover:-translate-y-2 transition-all duration-300 shadow-lg"
            >
              {/* Contentor da Imagem com Aspect Ratio 16:9. */}
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-background">
                {/* O group-hover:scale-110 cria um efeito de zoom suave ao passar o mouse. */}
                <Image
                  src={projeto.imagem}
                  alt={`Captura de ecrã do projeto ${projeto.titulo}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="flex flex-col gap-4 flex-1">
                {/* Pílulas de Tecnologia. */}
                <div className="flex flex-wrap gap-2">
                  {projeto.tecnologias.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-background border border-primary hover:bg-primary transition-all duration-300 px-3 py-1 rounded-full text-default font-mono text-xs font-bold tracking-wide shadow-md cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Título do Projeto */}
                <h3 className="text-default text-2xl font-bold mt-auto">
                  {projeto.titulo}
                </h3>
                <a
                  href={projeto.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex items-center justify-center w-6 h-6"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-xl hover:text-primary transition-colors"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
