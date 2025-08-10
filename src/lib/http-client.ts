import ky from 'ky';

const httpClient = ky.create({
  prefixUrl: 'https://pokeapi.co/api/v2',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

export { httpClient };
