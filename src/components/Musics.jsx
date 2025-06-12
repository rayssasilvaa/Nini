import { useEffect, useState } from 'react';

export default function Musics({ scrollRef, isVisible }) {
    const [songs, setSongs] = useState([]); // Armazena as músicas carregadas do JSON
    const [playingId, setPlayingId] = useState(null); // qual música está tocando

    useEffect(() => {
        fetch('/music.json') // Carrega o arquivo JSON com as músicas
            .then(res => {
                if (!res.ok) throw new Error('Erro no fetch: ' + res.status);
                return res.json();
            })
            .then(data => setSongs(data))
            .catch(err => console.error('Erro ao carregar músicas:', err));
    }, []);

    const getThumbnail = (youtubeId) =>
        `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;

    return (
        <section
            id="musicas"
            ref={scrollRef}
            className={`max-w-4xl mx-auto px-6 py-10 transform transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
        >
            <hr className="border-t-2 border-red-500 mb-8" />

            <h2 className="text-3xl font-bold mb-8 text-center text-red-600">
                Algumas das músicas que me lembram você 💖
            </h2>

            {songs.length === 0 ? (
                <p className="text-center text-gray-500">Carregando músicas...</p>
            ) : (
                <div className="space-y-8">
                    {songs.map(({ id, title, artist, youtubeId }, index) => (
                        <div
                            key={id}
                            className="flex flex-col sm:flex-row items-center bg-white rounded-lg shadow-md overflow-hidden"
                        >
                            {/* Thumbnail com botão play */}
                            <div className="relative cursor-pointer flex-shrink-0 w-full sm:w-48 h-28 sm:h-28">
                                <img
                                    src={getThumbnail(youtubeId)}
                                    alt={`${title} thumbnail`}
                                    className="w-full h-full object-cover"
                                    onClick={() =>
                                        setPlayingId(playingId === id ? null : id)
                                    }
                                />

                                {/* Overlay play */}
                                <div
                                    onClick={() =>
                                        setPlayingId(playingId === id ? null : id)
                                    }
                                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
                                >
                                    <svg
                                        className="w-12 h-12 text-white"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>

                            {/* Info e player */}
                            <div className="flex-1 p-4">
                                <h3 className="text-xl font-semibold">{title}</h3>
                                <p className="text-gray-600 mb-4">{artist}</p>

                                {playingId === id && (
                                    <div className="aspect-w-16 aspect-h-9 rounded overflow-hidden shadow-lg">
                                        <iframe
                                            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
                                            title={title}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                            className="w-full h-full"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}
