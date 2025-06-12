const Hero = ({ scrollRef, isVisible }) => {
  return (
    <section
      ref={scrollRef}
      id="hero"
      className={`w-full max-w-full mt-20 shadow-md p-6 flex flex-col md:flex-row items-center gap-8
      transition-all duration-700 ease-in-out bg-red-100
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ minHeight: '300px' }}
    >
      {/* Foto menor à esquerda */}
      <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center">
        <img
          src="/assets/img7.webp"
          alt="Imagem de casal"
          className="rounded-lg object-cover w-[300px] md:w-[400px] shadow-lg"
        />
      </div>

      {/* Nomes centralizados na direita */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-black leading-tight">
          Ingrid & Rayssa
        </h1>
      </div>
    </section>
  );
};

export default Hero;
