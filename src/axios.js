import axios from 'axios';

const instance = axios.create({
  //
  baseURL: 'http://localhost:4444', // делаем для того что б не пришлось дописывать весь путь к axios запросу
});

instance.get('/posts');

export default instance;
