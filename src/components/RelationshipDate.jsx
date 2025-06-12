import { useEffect, useState } from "react";

// Componente principal para mostrar o calendário e o tempo de namoro
const RelationshipDate = () => {
  // Define a data de início do relacionamento
  const startDate = new Date("2022-10-17T00:00:00");

  // Estado para armazenar os dias, horas, minutos e segundos passados
  const [elapsed, setElapsed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // useEffect para atualizar o tempo passado a cada segundo
  useEffect(() => {
    // Função para calcular a diferença de tempo
    const updateElapsed = () => {
      const now = new Date();
      const diff = now - startDate;

      // Cálculo do tempo decorrido
      const days = Math.floor(diff / (1000 * 60 * 60 * 24)); // Total de dias
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24); // Horas restantes após calcular os dias
      const minutes = Math.floor((diff / (1000 * 60)) % 60); // Minutos restantes após calcular as horas
      const seconds = Math.floor((diff / 1000) % 60); // Segundos restantes após calcular os minutos

      // Atualiza o estado com os novos valores
      setElapsed({ days, hours, minutes, seconds });
    };

    // Chama a função assim que o componente monta
    updateElapsed();

    // Configura um intervalo para atualizar a cada 1 segundo
    const interval = setInterval(updateElapsed, 1000);

    // Limpa o intervalo quando o componente for desmontado
    return () => clearInterval(interval);
  }, []);

  // Dias da semana para o cabeçalho do calendário
  const daysOfWeek = ["D", "S", "T", "Q", "Q", "S", "S"];

  // Número total de dias no mês de outubro de 2022
  const daysInMonth = 31;

  // Índice do dia da semana do primeiro dia do mês (0 = domingo, 6 = sábado)
  const firstDayIndex = new Date(2022, 9, 1).getDay();

  // Array com espaços vazios até o primeiro dia do mês + dias do mês
  const daysArray = Array(firstDayIndex).fill(null).concat(
    Array.from({ length: daysInMonth }, (_, i) => i + 1)
  );

  return (
    <section
      id="calendario"
      className="bg-white w-full max-w-lg mx-auto shadow-md p-6 flex flex-col items-center gap-6 rounded-lg"
    >
      {/* Linha divisória com título */}
      <div className="w-full flex items-center">
        <div className="flex-grow border-t-2 border-red-300"></div>
        <span className="mx-4 text-black font-semibold">Nosso Tempo</span>
        <div className="flex-grow border-t-2 border-red-300"></div>
      </div>

      {/* Título do mês */}
      <h2 className="text-2xl font-bold text-black">Outubro 2022</h2>

      {/* Calendário: cabeçalho com dias da semana */}
      <div className="grid grid-cols-7 gap-2">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="text-center font-semibold">
            {day}
          </div>
        ))}

        {/* Dias do mês + destaque para o dia 17 */}
        {daysArray.map((day, idx) => (
          <div
            key={idx}
            className={`w-10 h-10 flex items-center justify-center rounded-md ${
              day === 17 ? "bg-red-400 text-white font-bold" : "text-gray-700"
            }`}
          >
            {day ? day : ""}
          </div>
        ))}
      </div>

      {/* Texto com o tempo decorrido */}
      <p className="text-lg text-gray-800 text-center">
        Estamos juntas há:{" "}
        <span className="font-semibold text-red-900">
          {elapsed.days} dias, {elapsed.hours} horas, {elapsed.minutes} minutos e {elapsed.seconds} segundos ❤️
        </span>
      </p>
    </section>
  );
};

export default RelationshipDate;
