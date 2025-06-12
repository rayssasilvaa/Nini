import { useState } from "react";
import { HiCursorClick } from "react-icons/hi"; // Ícone de clique

const LoveSection = () => {
  const [count, setCount] = useState(0);
  const [fallingTexts, setFallingTexts] = useState([]);

  const handleClick = () => { // Função chamada ao clicar no botão
    setCount(count + 1);
    
    const newText = { 
      id: Date.now(), // Gera um ID único baseado no timestamp
      left: Math.random() * 90 + 5, // Posição aleatória entre 5% e 95% da largura da tela
    };

    setFallingTexts((prev) => [...prev, newText]); // Adiciona o novo texto à lista

    setTimeout(() => {
      setFallingTexts((prev) => prev.filter((t) => t.id !== newText.id)); // Remove o texto após 3 segundos
    }, 3000);
  };

  return (
    <>
      {fallingTexts.map((text) => (
        <span
          key={text.id}
          className="fixed text-red-800 font-bold text-xl animate-fall pointer-events-none select-none z-50"
          style={{ left: `${text.left}%`, top: 0 }}
        >
          eu te amo
        </span>
      ))}

      <div className="relative overflow-hidden py-20 flex flex-col items-center justify-center bg-pink-50">
        <button
          onClick={handleClick}
          className="relative px-10 py-4 text-white text-2xl rounded-full shadow-lg transition hover:scale-105 duration-300 bg-gradient-to-r from-red-900 via-red-600 to-red-800 cursor-pointer"
        >
          Clique aqui <HiCursorClick className="inline ml-2" />
        </button>

        {count > 0 && (
          <p className="mt-6 text-lg italic text-black font-light transition-opacity duration-500 opacity-100">
            Cada clique é um lembrete do quanto eu te amo.
          </p>
        )}
      </div>
    </>
  );
};

export default LoveSection;
