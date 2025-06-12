const Gallery = ({ scrollRef, isVisible }) => {
    const images = [
        { src: "/assets/img5.webp", text: "Te vivo" },
        { src: "/assets/img6.webp", text: "Você é a garota dos meus sonhos" },
        { src: "/assets/img2.webp", text: "A vida ficou melhor com você" },
        { src: "/assets/img1.webp", text: "Cada momento com você é único" },
        { src: "/assets/img4.webp", text: "Eu te amo" },
    ];

    return (
        <section
            ref={scrollRef}
            className={`w-full min-h-screen bg-pink-50 p-8 transition-opacity duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } transform`}
            id='galeria'
        >
            <div className="mb-12 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-2">Galeria</h2>
                <div className="w-24 h-1 mx-auto bg-pink-300 rounded shadow-md"></div>
            </div>

            <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
                {images.map((item, index) => (
                    <div
                        key={index}
                        className={`relative break-inside-avoid overflow-hidden bg-white p-2 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 ${index % 2 === 0 ? 'rotate-2' : '-rotate-2'
                            }`}
                    >
                        <img
                            src={item.src}
                            alt="imagem de duas garotas"
                            className="w-full h-auto rounded-md"
                        />

                        {/* Texto sempre visível abaixo da imagem */}
                        <p className="mt-2 text-center text-lg font-medium">
                            {item.text}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;
