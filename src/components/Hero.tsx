import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faJava,
  faPython,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import VejaMais from "./SeeMore";

export default function Hero() {
  return (
    <section className="relative w-full min-h-dvh flex flex-col justify-center overflow-x-hidden pt-32 pb-40 lg:pt-0 lg:pb-0">
      {/* lg:flex-row para o side-by-side ativar apenas em telas maiores que 1024px. */}
      <div className="w-full max-w-6xl mx-auto px-6 flex flex-col lg:flex-row justify-between items-center gap-12 mt-4 lg:mt-0">
        {/* Textos e Botões */}
        <div className="flex-1 w-full text-center lg:text-left flex flex-col items-center lg:items-start">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Olá, eu sou o <span className="text-primary">Enrico</span>
            <br />
            Dev back-end
          </h1>
          <p className="mt-6 max-w-xl text-default/80 text-base sm:text-lg text-justify lg:text-left">
            Sou focado em construir sistemas robustos, escaláveis e de alta
            performance. Combino domínio em POO com o desenvolvimento de APIs
            eficientes e arquiteturas limpas, transformando regras de negócio
            complexas em códigos seguros e de alta qualidade.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-8 lg:gap-20 w-full justify-center lg:justify-start items-center lg:items-start">
            {/* Bloco Me encontre. */}
            <div className="flex flex-col gap-4 items-center lg:items-start">
              <h3 className="font-mono text-default text-base tracking-wide">
                Me encontre
              </h3>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/EnricoGregorio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-secondary rounded-2xl text-default hover:bg-primary hover:-translate-y-1 transition-all duration-300 shadow-lg"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-2xl md:text-3xl"
                  />
                </a>
                <a
                  href="https://linkedin.com/in/esg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-secondary rounded-2xl text-default hover:bg-primary hover:-translate-y-1 transition-all duration-300 shadow-lg"
                >
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className="text-2xl md:text-3xl"
                  />
                </a>
              </div>
            </div>

            {/* Bloco Principais tecnologias. */}
            <div className="flex flex-col gap-4 items-center lg:items-start">
              <h3 className="font-mono text-default text-base tracking-wide">
                Principais tecnologias
              </h3>
              <div className="flex items-center gap-3 md:gap-4">
                <div
                  className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-secondary rounded-2xl text-primary hover:bg-primary hover:text-default hover:-translate-y-1 transition-all duration-300 shadow-lg cursor-default"
                  title="Java"
                >
                  <FontAwesomeIcon
                    icon={faJava}
                    className="text-2xl md:text-3xl"
                  />
                </div>
                <div
                  className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-secondary rounded-2xl text-primary hover:bg-primary hover:text-default hover:-translate-y-1 transition-all duration-300 shadow-lg cursor-default"
                  title="TypeScript"
                >
                  <FontAwesomeIcon
                    icon={faNodeJs}
                    className="text-2xl md:text-3xl"
                  />
                </div>
                <div
                  className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-secondary rounded-2xl text-primary hover:bg-primary hover:text-default hover:-translate-y-1 transition-all duration-300 shadow-lg cursor-default"
                  title="Python"
                >
                  <FontAwesomeIcon
                    icon={faPython}
                    className="text-2xl md:text-3xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Foto */}
        <div className="relative w-64 h-80 sm:w-80 sm:h-95 lg:w-100 lg:h-125 shrink-0 mt-12 mb-12 lg:mt-0 flex items-end justify-center">
          <div className="absolute bottom-0 left-0 w-full h-[80%] bg-primary rounded-[3rem] rounded-tl-[6rem] rounded-br-[7rem] shadow-2xl shadow-primary/20"></div>
          <div className="absolute bottom-0 left-0 w-full h-full z-10 flex items-end justify-center">
            <Image
              src="/enrico.png"
              alt="Foto de Enrico"
              width={500}
              height={600}
              className="w-full h-auto drop-shadow-xl rounded-bl-[3rem] rounded-br-[7rem]"
              priority
            />
          </div>
        </div>
      </div>

      <VejaMais />
    </section>
  );
}
