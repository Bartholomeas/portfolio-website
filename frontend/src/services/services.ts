import axios from 'axios';

import { API_URL } from '../utils/variables';

const api = axios.create({ baseURL: API_URL });

export const getAllPosts = () =>
  api
    .get('/api/blog-posts?populate[0]=blogCategories&populate[1]=headerImg')
    .then(({ data }) => data);
