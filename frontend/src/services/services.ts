import axios from 'axios';
import { API_URL } from '../utils/variables';

const api = axios.create({ baseURL: API_URL });

export const getAllPosts = () =>
  api
    .get(
      '/api/blog-posts?fields[0]=readTime&fields[1]=createdAt&populate=blogCategories'
    )
    .then(({ data }) => data);

// GET /api/users?fields[0]=title&fields[1]=body
