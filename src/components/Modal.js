// Importa a biblioteca React
import React from 'react';

// Define o componente Modal
const Modal = ({ onClose, children }) => {
  return (
    // Contêiner principal do modal
    <div className="modal">
      {/* Conteúdo do modal */}
      <div className="modal-content">
        {/* Botão de fechar o modal */}
        <span className="close" onClick={onClose}>&times;</span>
        {/* Conteúdo passado para o modal */}
        {children}
      </div>
    </div>
  );
};

export default Modal;
