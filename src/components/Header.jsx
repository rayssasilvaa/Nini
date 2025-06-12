import React, { useState } from 'react'

import { IoMenuSharp } from "react-icons/io5"

const Header = () => {
    //variavel isOpen para controlar o estado do menu
    const [isOpen, setIsOpen] = useState(false)

    //funcao para scroll suave
    const handleClick = (e, id) => {
        e.preventDefault;
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false); // fecha o menu ao clicar em um link
    }
    return (
        <header className='fixed top-0 left-0 w-full flex items-center justify-between p-6 z-50 text-red-900 bg-pink-50 shadow-md'>
            <h1 className='text-3xl md:text-4xl font-bold mx-auto font-sans tracking-wider text-red-900 select-none'
            >Nini</h1>

            {/* Botão para abrir o menu */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className='absolute right-6 top-6 text-4xl transition-transform duration-300 hover:scale-110 cursor-pointer"
                aria-label="Menu'
            >
                <IoMenuSharp className='text-4xl' />
            </button>

            {/* Menu */}
            {isOpen && (
                <div className='absolute top-23 right-6 bg-red-300 bg-opacity-90 text-white rounded-2xl shadow-2xl p-6 w-56 flex flex-col gap-4 items-start animate-fade-in'>
                    <ul className='w-full text-lg space-y-3 font-medium'>
                        <li>
                            <a href="#inicio"
                                onClick={(e) => handleClick(e, 'hero')}
                                className="hover:text-red-900 transition-colors"
                            >
                                Início
                            </a>
                        </li>
                        <li>
                            <a href="#historia"
                                onClick={(e) => handleClick(e, '#historia')}
                                className="hover:text-red-900 transition-colors"
                            >
                                Nossa História
                            </a>
                        </li>
                        <li>
                            <a href="#galeria"
                                onClick={(e) => handleClick(e, '#galeria')}
                                className="hover:text-red-900 transition-colors"
                            >
                                Galeria
                            </a>
                        </li>

                         <li>
                            <a href="#musicas"
                                onClick={(e) => handleClick(e, '#galeria')}
                                className="hover:text-red-900 transition-colors"
                            >
                                Músicas
                            </a>
                        </li>

                         <li>
                            <a href="#carta"
                                onClick={(e) => handleClick(e, '#galeria')}
                                className="hover:text-red-900 transition-colors"
                            >
                                Carta
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    )
}

export default Header
