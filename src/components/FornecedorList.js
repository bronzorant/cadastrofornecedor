// FornecedorList.js

// Importa a biblioteca React
import React from 'react';

// Importa o arquivo de estilos CSS específico para este componente
import './FornecedorList.css';

// Define o componente FornecedorList
const FornecedorList = ({ fornecedores, onDeleteFornecedor, onEditFornecedor }) => {
  return (
    <div>
      {/* Mapeia o array de fornecedores para renderizar cada fornecedor como um item separado */}
      {fornecedores.map((fornecedor, index) => (
        // Usa o índice do array como a chave única para cada item (não é o ideal para listas dinâmicas, mas aceitável para exemplos simples)
        <div key={index} className="fornecedor-item">
          {/* Exibe as informações do fornecedor */}
          <div>
            <strong>Nome:</strong> {fornecedor.nome}
          </div>
          <div>
            <strong>Endereço:</strong> {fornecedor.endereço}
          </div>
          <div>
            <strong>Telefone:</strong> {fornecedor.telefone}
          </div>
          <div>
            <strong>Email:</strong> {fornecedor.email}
          </div>
          <div>
            <strong>CNPJ:</strong> {fornecedor.CNPJ}
          </div>
          <div>
            <strong>Data de Cadastro:</strong> {fornecedor.dataDeCadastro}
          </div>
          {/* Contêiner para os botões de ação */}
          <div className="buttons-container">
            {/* Botão para deletar o fornecedor, chama a função onDeleteFornecedor passando o índice do fornecedor */}
            <button onClick={() => onDeleteFornecedor(index)}>Deletar</button>
            {/* Botão para editar o fornecedor, chama a função onEditFornecedor passando o objeto fornecedor */}
            <button onClick={() => onEditFornecedor(fornecedor)}>Editar</button>
          </div>
        </div>
      ))}
    </div>
  );
};


export default FornecedorList;
