import React from 'react';
import Input from './Components/Input';
import useForm from './Hooks/useForm';

// interface User {
//   id: number;
//   name: string;
//   email: string;
// }

function App() {
  const email = useForm({ label: 'email', name: 'email', type: 'email' });
  const senha = useForm({ label: 'senha', name: 'senha', type: 'password' });
  // const { data, loading, error, request } = useFetch();

  async function handleSubmit(event: React.FormEvent<HTMLButtonElement>) {
    event.preventDefault();
    if (email.validate() || senha.validate()) {
      alert("Entrou");
    }
    // const { url, options } = USER_GET();
    // await request(url, options);
  }

  return (
    <>
      <Input {...email} />
      <Input {...senha} />
      <button onClick={handleSubmit}>OK</button>
      <p>{email.error}</p>
      <p>{senha.error}</p>

      {/* 
      <button onClick={handleSubmit}>aaaa</button>
      {data.map((item: User) => (
        <li key={item.id}>
          {item.name}
        </li>
      ))} */}
    </>
  );
}

export default App;
