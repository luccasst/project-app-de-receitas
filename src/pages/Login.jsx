import React from 'react';

export default function Login() {
  const [user, setUser] = React.useState({
    email: '',
    senha: '',
  });
  const [isDisabled, setIsDisabled] = React.useState(true);

  React.useEffect(() => {
    const email = /\w+@+\w+.com/.test(user.email);
    const senha = /[\w\W]{7}/.test(user.senha);
    setIsDisabled(!(email && senha));
  }, [user]);

  const handleChange = ({ target }) => {
    setUser({
      ...user,
      [target.name]: target.value,
    });
  };

  return (
    <div
      style={ {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      } }
    >
      <h1>Login</h1>
      <input
        data-testid="email-input"
        name="email"
        type="email"
        placeholder="E-mail"
        value={ user.email }
        onChange={ handleChange }
      />

      <input
        data-testid="password-input"
        name="senha"
        type="password"
        placeholder="Senha"
        value={ user.senha }
        onChange={ handleChange }
      />

      <button
        data-testid="login-submit-btn"
        type="button"
        disabled={ isDisabled }
        style={ {
          margin: '10px',
          width: '339px',
        } }
      >
        Enter
      </button>
    </div>
  );
}
