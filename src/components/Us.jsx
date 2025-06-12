const Us = ({ scrollRef, isVisible }) => {
  return (
    <section
      ref={scrollRef}
      id="historia"
      className={`w-full min-h-screen flex flex-col md:flex-row items-center justify-center bg-red-50 text-black p-6 gap-8 
      transition-all duration-700 ease-in-out 
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      {/* Texto à esquerda */}
      <div className="max-w-xl text-justify md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Nossa História</h2>
        <p className="text-lg md:text-xl">
          Nossa história começou em 2020, quando nos conhecemos através de uma amiga em comum.
          Aos poucos, nos tornamos grandes amigas, sempre compartilhando risadas e momentos especiais.
          Em 2022, essa amizade se transformou em algo ainda maior: um amor incrível.
          Desde então, temos vivido inúmeras aventuras juntas, construindo uma relação baseada no carinho,
          respeito e companheirismo. Cada dia ao seu lado é único e especial, e mal podemos esperar por todas
          as novas histórias que ainda vamos escrever juntas.
        </p>
      </div>

      {/* Imagem à direita */}
      <div>
        <img
          src="/assets/img3.webp"
          alt="Duas garotas sentadas na praia"
          className="w-full h-auto max-w-md rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default Us;
