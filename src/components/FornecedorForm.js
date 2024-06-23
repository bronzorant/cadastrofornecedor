import React, { useState, useEffect } from 'react';
import MaskedInput from 'react-input-mask';

// Define o componente FornecedorForm
const FornecedorForm = ({ onAddFornecedor, onUpdateFornecedor, fornecedorEdit }) => {
  // Define o estado inicial do formulário com campos vazios
  const [fornecedor, setFornecedor] = useState({
    nome: '',
    endereço: '',
    telefone: '',
    email: '',
    CNPJ: '',
    dataDeCadastro: ''
  });

  // useEffect para carregar os dados do fornecedor a ser editado
  useEffect(() => {
    if (fornecedorEdit) {
      setFornecedor(fornecedorEdit);
    }
  }, [fornecedorEdit]); // Executa o efeito quando fornecedorEdit muda

  // Manipula as mudanças nos campos de entrada
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFornecedor({ ...fornecedor, [name]: value });
  };

  // Manipula o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    if (fornecedorEdit) {
      onUpdateFornecedor(fornecedor); // Atualiza fornecedor existente
    } else {
      onAddFornecedor(fornecedor); // Adiciona novo fornecedor
    }
    clearForm(); // Limpa o formulário após envio
  };

  // Limpa o formulário redefinindo o estado inicial
  const clearForm = () => {
    setFornecedor({
      nome: '',
      endereço: '',
      telefone: '',
      email: '',
      CNPJ: '',
      dataDeCadastro: ''
    });
  };

  // Renderiza o formulário
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nome"
        placeholder="Nome do fornecedor"
        value={fornecedor.nome}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="endereço"
        placeholder="Endereço"
        value={fornecedor.endereço}
        onChange={handleChange}
        required
      />
      <MaskedInput
        mask="(99) 9999-9999"
        type="tel"
        name="telefone"
        placeholder="Telefone"
        value={fornecedor.telefone}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={fornecedor.email}
        onChange={handleChange}
        required
      />
      <MaskedInput
        mask="99.999.999/9999-99"
        name="CNPJ"
        placeholder="CNPJ"
        value={fornecedor.CNPJ}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="dataDeCadastro"
        value={fornecedor.dataDeCadastro}
        onChange={handleChange}
        required
      />
      <button type="submit">{fornecedorEdit ? 'Salvar' : 'Cadastrar'}</button>
    </form>
  );
};


export default FornecedorForm;
