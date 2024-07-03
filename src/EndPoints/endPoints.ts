
export const API_URL = 'https://jsonplaceholder.typicode.com/';



    export function USER_GET() {
      return {
        url: API_URL + '/users',
        options: {
          method: 'GET',
        },
      };
    }
  


