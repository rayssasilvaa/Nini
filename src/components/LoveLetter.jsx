import { useState } from "react";

// Sobreposição ao fundo com desfoque e escurecimento
function Overlay({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="inset-0 bg-opacity-40 backdrop-blur-sm transition-opacity duration-300 z-20"
    />
  );
}

// Componente do envelope com animação ao abrir
function Envelope({ isOpen, onOpen }) {
  return (
    <div
      id="carta"
      onClick={onOpen}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onOpen()}
      className="relative w-[300px] h-[200px] cursor-pointer select-none flex flex-col items-center justify-center perspective-1000"
    >
      {/* Parte superior da tampa do envelope - primeira dobra */}
      <div
        className={`lid one absolute top-0 left-0 w-full h-full
          border-r-[150px] border-b-[100px] border-l-[150px] border-transparent
          border-t-[100px] border-t-red-500 transition-transform duration-500 origin-top
          ${isOpen ? "rotate-x-[90deg]" : "rotate-x-0"}
        `}
        style={{ transformOrigin: "top" }}
      />


      {/* Corpo do envelope */}
      <div
        className="envelope absolute top-0 left-0 w-full h-full
          border-t-[100px] border-transparent border-r-[150px] border-b-[100px] border-l-[150px]
          border-r-red-200 border-b-red-200 border-l-red-300
          rounded-b-md cursor-pointer z-10"
      />
    </div>
  );
}

// Modal da carta com animação ao aparecer
function LoveLetterModal({ onClose }) {
  return (
    <div
      className="fixed top-1/2 left-1/2 z-10 w-[90%] max-w-xl max-h-[80vh] -translate-x-1/2 -translate-y-1/2
    bg-white rounded-[15px] p-6 shadow-xl overflow-y-auto animate-fadeInScaleSlow"
    >
      <button
        onClick={onClose}
        className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 font-bold text-xl cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded"
      >
        &times;
      </button>
      <p className="text-gray-800 text-lg leading-relaxed whitespace-pre-line font-serif tracking-wide">
        Meu amor, quero agradecer por cada momento ao seu lado.{"\n"}
        Você é uma pessoa incrível, extraordinária, linda e cheia de cuidado.{"\n"}
        É única, e foi justamente por tudo isso que me apaixonei e quis compartilhar a vida com você.{"\n"}
        Estou ansiosa para realizar todos os nossos sonhos e planos juntas.{"\n"}
        A vida é muito melhor com você ao meu lado.{"\n"}
        Obrigado por tudo, eu te amo muito. 💖
      </p>
    </div>
  );
}

// Componente principal com sombras superior e inferior
export default function LoveLetter({ scrollRef, isVisible }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && <Overlay onClick={() => setIsOpen(false)} />}

      <section
        ref={scrollRef}
        className={`relative min-h-screen flex flex-col items-center justify-center
        bg-gradient-to-b from-white to-red-100 p-6 transition-all duration-700 ease-in-out
        overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-16 before:bg-gradient-to-b before:from-black/10 before:to-transparent
        after:absolute after:inset-x-0 after:bottom-0 after:h-16 after:bg-gradient-to-t after:from-black/10 after:to-transparent
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        {!isOpen && (
          <h1 className="mb-8 text-red-600 text-4xl font-bold drop-shadow-lg select-none animate-fadeIn">
            Clique para Abrir 💌
          </h1>
        )}

        <Envelope isOpen={isOpen} onOpen={() => setIsOpen(true)} />
        {isOpen && <LoveLetterModal onClose={() => setIsOpen(false)} />}
      </section>
    </>
  );
}
