'use client';

import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

export default function SeeMore() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Se o usuário rolar mais de 50 pixels para baixo, a variável vira false.
      if (window.scrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Limpa o monitoramento quando o componente não estiver na tela.
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      href="#sobre"
      /* O 'absolute' e 'bottom-10' posicionam o botão no rodapé da seção inicial.
         O 'left-1/2 -translate-x-1/2' garante que ele fique perfeitamente centralizado.
         O 'transition-opacity duration-500' cria o efeito de esmaecer (fade out) suave. 
         A classe 'animate-bounce' do Tailwind cria o efeito de flutuar nativamente! */
      className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary hover:text-primary/80 transition-all duration-500 ${
        isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      } animate-bounce`}
    >
      <span className="text-xl font-light tracking-wider">Veja mais</span>
      <FontAwesomeIcon icon={faArrowDown} className="w-5 h-5" />
    </a>
  );
}
