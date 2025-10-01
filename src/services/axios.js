import axios from 'axios';

export default axios.create({
  baseURL: 'http:localhost:3002' // Substitua pela URL da sua API
});
