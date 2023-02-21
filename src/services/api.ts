import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://foxprocessorapi-env.eba-mj2pdf8b.us-east-1.elasticbeanstalk.com',
});
