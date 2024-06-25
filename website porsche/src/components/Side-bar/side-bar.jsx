import React, { useState } from 'react';
import sideStyles from './side-bar.module.css';
import MenuIcon from '../../utils/img/menu.png'; // Importa a imagem do menu

function SidebarPage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div>
            {/* Ícone de abrir a sidebar, exibido apenas quando a sidebar está fechada */}
            {!isSidebarOpen && (
                <button
                    className={sideStyles.iconButton}
                    onClick={() => setIsSidebarOpen(true)}
                    aria-expanded={isSidebarOpen}
                >
                    <img src={MenuIcon} alt="Menu" className={sideStyles.menuIcon} />
                </button>
            )}
            {/* Sidebar e botão de fechar */}
            <div className={`${sideStyles.sidebar} ${isSidebarOpen ? sideStyles.sidebarOpen : ''}`}>
                {/* Botão de fechar, exibido dentro da sidebar */}
                <button
                    className={sideStyles.closeButton}
                    onClick={() => setIsSidebarOpen(false)}
                >
                    <img src={MenuIcon} alt="Menu" className={sideStyles.menuIcon} />
                </button>
                <ul>
                    <li>Modelos</li>
                    <li>Serviços</li>
                </ul>
            </div>
        </div>
    );
}

export default SidebarPage;
