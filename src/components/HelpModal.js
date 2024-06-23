// HelpModal.js
import React from 'react';
import Modal from './Modal';

const HelpModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="help-content">
        <h2>Como o sistema funciona?</h2>
        <p>Neste sistemas voce pode cadastrar fprnecedores.</p>
        <p>Clique em Novo Fornecedor para cadastrar.</p>
        <ul>
          <li>Nome.Coloque o nome fantasia da empresa/fornecedor.</li>
          <li>Endereço.Indique o endereço do fornecedor se possivel ao fim a cidade.</li>
          <li>Telefone.Telefone para contato.</li>
          <li>Email para contato.</li>
          <li>CNPJ do fornecedor.</li>
          <li>Indique a data que está realizando o cadastros.</li>
        </ul>
      </div>
    </Modal>
  );
};

export default HelpModal;
