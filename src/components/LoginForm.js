import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === '20210313' && password === '20210313') {
      onLogin(true);
      setError('');
    } else {
      setError('Credenciais inválidas!');
    }
  };

  return (
    <div className="login-container">
      <h2>Cadastros de Fornecedores</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
      <p style={{ position: 'absolute', bottom: 10, left: 10 }}>Antonio</p>
    </div>
  );
};

export default LoginForm;
