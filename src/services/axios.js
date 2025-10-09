import axios from 'axios';

export default axios.create({
  baseURL: 'https://backport.tudovoip.com.br/' // Substitua pela URL da sua API
});
