// Importa as bibliotecas React e useState
import React, { useState } from 'react';

// Importa os componentes necessários
import LoginForm from './components/LoginForm';
import FornecedorForm from './components/FornecedorForm';
import FornecedorList from './components/FornecedorList';
import Modal from './components/Modal';
import HelpModal from './components/HelpModal';

// Importa o arquivo de estilos CSS
import './App.css';

// Dados iniciais de fornecedores
const initialFornecedores = [
  {
    nome: 'Samuel e Filipe Lavanderia ME',
    CNPJ: '61.029.280/0001-55',
    dataDeCadastro: '2019-09-05',
    endereço: 'Aurélia da Silveira 124 - Piraquara',
    email: 'desenvolvimento@samuelefilipelavanderiame.com.br',
    telefone: '(41) 99479-1346'
  },
  {
    nome: 'Henrique e Betina Padaria Ltda',
    CNPJ: '62.734.624/0001-90',
    dataDeCadastro: '2014-06-21',
    endereço: 'Rua Brejinho Francisco Beltrão',
    email: 'posvenda@henriqueebetinapadarialtda.com.br',
    telefone: '(46) 99855-8264'
  }
];

// Componente principal do aplicativo
const App = () => {
  // Estado para controlar se o usuário está logado
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // Estado para armazenar a lista de fornecedores
  const [fornecedores, setFornecedores] = useState(initialFornecedores);
  
  // Estado para controlar a visibilidade do modal de fornecedor
  const [showModal, setShowModal] = useState(false);
  
  // Estado para controlar a visibilidade do modal de ajuda
  const [showHelpModal, setShowHelpModal] = useState(false);
  
  // Estado para armazenar o fornecedor que está sendo editado
  const [fornecedorEdit, setFornecedorEdit] = useState(null);

  // Função chamada ao fazer login
  const handleLogin = (loggedIn) => {
    setIsLoggedIn(loggedIn);
  };

  // Função chamada ao adicionar um novo fornecedor
  const handleAddFornecedor = (fornecedor) => {
    setFornecedores([...fornecedores, fornecedor]);
    setShowModal(false); // Fecha o modal após adicionar o fornecedor
  };

  // Função chamada ao atualizar um fornecedor existente
  const handleUpdateFornecedor = (fornecedor) => {
    const updatedFornecedores = fornecedores.map((item) =>
      item === fornecedorEdit ? { ...fornecedor } : item
    );
    setFornecedores(updatedFornecedores);
    setFornecedorEdit(null);
    setShowModal(false); // Fecha o modal após atualizar o fornecedor
  };

  // Função chamada ao deletar um fornecedor
  const handleDeleteFornecedor = (index) => {
    const updatedFornecedores = [...fornecedores];
    updatedFornecedores.splice(index, 1);
    setFornecedores(updatedFornecedores);
  };

  // Função para alternar a visibilidade do modal de fornecedor
  const toggleModal = () => {
    setShowModal(!showModal);
    setFornecedorEdit(null); // Limpa o estado de fornecedorEdit ao abrir o modal
  };

  // Função para alternar a visibilidade do modal de ajuda
  const toggleHelpModal = () => {
    setShowHelpModal(!showHelpModal);
  };

  // Função chamada ao editar um fornecedor
  const handleEditFornecedor = (fornecedor) => {
    setFornecedorEdit(fornecedor);
    setShowModal(true); // Abre o modal com as informações do fornecedor para edição
  };

  // Renderização do componente
  return (
    <div className="App">
      {!isLoggedIn ? (
        // Tela de login
        <div className="login-container">
          <LoginForm onLogin={handleLogin} />
        </div>
      ) : (
        // Tela principal após login
        <div className="main-container">
          <div className="form-container">
            <h1>Cadastro de Fornecedor</h1>
            <button onClick={toggleModal}>Novo Fornecedor</button>
            <button onClick={toggleHelpModal} className="help-button">
              Ajuda
            </button>
            {showModal && (
              <Modal onClose={toggleModal}>
                <FornecedorForm
                  onAddFornecedor={handleAddFornecedor}
                  onUpdateFornecedor={handleUpdateFornecedor}
                  fornecedorEdit={fornecedorEdit}
                />
              </Modal>
            )}
            {showHelpModal && (
              <HelpModal isOpen={showHelpModal} onClose={toggleHelpModal} />
            )}
          </div>
          <div className="list-container">
            <FornecedorList
              fornecedores={fornecedores}
              onDeleteFornecedor={handleDeleteFornecedor}
              onEditFornecedor={handleEditFornecedor}
            />
          </div>
        </div>
      )}
    </div>
  );
};


export default App;
