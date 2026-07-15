"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";

export default function Contato() {
  const form = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [msgStatus, setMsgStatus] = useState<string | null>(null);

  // Formata o texto assim que o usuário tira o foco do campo.
  const textFormat = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const text = e.target.value;
    if (text.length > 0) {
      // Pega a 1ª letra, deixa maiúscula, e junta com o resto da frase
      e.target.value = text.charAt(0).toUpperCase() + text.slice(1);
    }
  };

  const sendEmail = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    setSending(true);
    setMsgStatus(null);

    // Chaves do EmailJS.
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string,
      )
      .then(
        (result) => {
          console.log(result.text);
          setMsgStatus(
            "Mensagem enviada com sucesso! Entrarei em contato em breve.",
          );
          form.current?.reset(); // Limpa o formulário após o envio.
        },
        (error) => {
          console.log(error.text);
          setMsgStatus(
            "Ocorreu um erro ao enviar. Tente me contatar diretamente pelo e-mail.",
          );
        },
      )
      .finally(() => {
        setSending(false);
      });
  };
  return (
    <section
      id="contato"
      className="bg-background py-24 px-8 min-h-screen flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-xl tracking-wider">
            Contato
          </span>
          <h2 className="text-default text-4xl md:text-5xl font-bold mt-2">
            Vamos trabalhar juntos
          </h2>
        </div>

        {/* Grid de 2 Colunas */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Lado Esquerdo: Informações e Redes Sociais */}
          <div className="p-8 md:p-12 rounded-4xl flex flex-col lg:col-span-2 justify-between shadow-[0_0px_5px_rgba(243,243,243,0.15)]">
            <div>
              <h3 className="text-default text-4xl font-bold mb-6">
                Entre em contato
              </h3>
              <p className="text-default/80 text-lg leading-relaxed mb-6 text-justify">
                Eu estou sempre disposto à verificar novas oportunidades,
                projetos criativos ou parcerias. Assim que você tiver algum
                projeto específico em mente ou só querer explorar as
                possibilidades, eu adoraria o contato.
              </p>
              <p className="text-default/80 text-lg mb-12">
                E-mail:{" "}
                <a
                  href="mailto:enricocontatos@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  enricocontatos@gmail.com
                </a>
              </p>
              {/* O atributo 'download' força o navegador a baixar o arquivo.
                  O valor dentro dele ("Curriculo_Enrico.pdf") será o nome do arquivo salvo no PC da pessoa! */}
              <a
                href="/curriculo.pdf"
                download="a-curriculo_enrico.pdf"
                className="flex items-center justify-center gap-3 w-full bg-secondary text-primary font-bold py-4 rounded-xl hover:bg-primary hover:text-default transition-all duration-300 shadow-md mb-12"
              >
                <FontAwesomeIcon icon={faFileLines} className="text-lg" />
                Baixar meu CV
              </a>
            </div>

            <div>
              <h4 className="text-default text-xl font-bold mb-6">
                Minhas Redes Sociais
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/esg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-14 h-14 bg-secondary rounded-xl text-default hover:bg-primary hover:-translate-y-1 transition-all duration-300 shadow-md"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} className="text-2xl" />
                </a>
                <a
                  href="https://github.com/EnricoGregorio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-14 h-14 bg-secondary rounded-xl text-default hover:bg-primary hover:-translate-y-1 transition-all duration-300 shadow-md"
                >
                  <FontAwesomeIcon icon={faGithub} className="text-2xl" />
                </a>
                <a
                  href="https://x.com/enrico_zip"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-14 h-14 bg-secondary rounded-xl text-default hover:bg-primary hover:-translate-y-1 transition-all duration-300 shadow-md"
                >
                  <FontAwesomeIcon icon={faXTwitter} className="text-2xl" />
                </a>
                <a
                  href="https://www.instagram.com/enrico.zip/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-14 h-14 bg-secondary rounded-xl text-default hover:bg-primary hover:-translate-y-1 transition-all duration-300 shadow-md"
                >
                  <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Lado Direito: Formulário de Contato */}
          <div className="p-8 md:p-12 rounded-4xl lg:col-span-3 shadow-[0_0px_5px_rgba(243,243,243,0.15)]">
            <h3 className="text-default text-4xl font-bold mb-8">
              Envie uma mensagem
            </h3>
            {/* O preventDefault impede a página de recarregar ao clicar em enviar */}
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Seu nome"
                  required
                  onBlur={textFormat}
                  className="w-full bg-secondary text-default placeholder:text-default/40 px-6 py-4 rounded-xl outline-none border border-transparent focus:border-primary transition-colors"
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="email@email.com"
                  required
                  pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$" // <- Regex de validação estrita.
                  title="Por favor, insira um e-mail válido (exemplo: nome@dominio.com)" // <- Mensagem de erro do navegador.
                  className="w-full bg-secondary text-default placeholder:text-default/40 px-6 py-4 rounded-xl outline-none border border-transparent focus:border-primary transition-colors"
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Assunto"
                required
                onBlur={textFormat}
                className="w-full bg-secondary text-default placeholder:text-default/40 px-6 py-4 rounded-xl outline-none border border-transparent focus:border-primary transition-colors"
              />

              <textarea
                name="message"
                placeholder="Mensagem"
                required
                rows={6}
                onBlur={textFormat}
                className="w-full bg-secondary text-default placeholder:text-default/40 px-6 py-4 rounded-xl outline-none border border-transparent focus:border-primary transition-colors resize-none"
              ></textarea>

              <button
                type="submit"
                disabled={sending}
                className="w-full bg-secondary text-primary font-mono font-bold tracking-widest py-5 rounded-xl hover:bg-primary hover:text-default transition-all duration-300 mt-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {sending ? "ENVIANDO..." : "ENVIAR MENSAGEM"}
              </button>

              {/* Mensagem de Feedback (Sucesso ou Erro) */}
              {msgStatus && (
                <p
                  className={`text-center font-medium mt-4 ${msgStatus.includes("sucesso") ? "text-green-500" : "text-red-500"}`}
                >
                  {msgStatus}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
