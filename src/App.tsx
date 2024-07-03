import { useState } from 'react';
import Input from './Components/Input';
import { USER_GET } from './EndPoints/endPoints';
import useFetch from './Hooks/useFetch';
import useForm from './Hooks/useForm';

interface User {
  id: number;
  name: string;
  email: string;
}

function App() {
  // const senha = useForm('buceta','senha','password');
  // const pass = useForm('pass','pass','number');
  const { data, loading, error, request } = useFetch();



  async function handleSubmit(event) {

    event.preventDefault();
    const { url, options } = USER_GET();
     await request(url, options);
 
  }


  return (
    <>
      {/* <Input {...senha}  />
      <Input {...pass}  /> */}

      <button onClick={handleSubmit}>aaaa</button>
      {data.map((item:User) => (
            <li key={item.id}>
              {item.name}
            </li>
          ))}
          
    </>
  );
}

export default App;
