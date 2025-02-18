import { GraphQLClient } from 'graphql-request';

const api_url = localStorage.getItem('APP_BASE_URL') || import.meta.env.VITE_APP_BASE_URL;

// 创建 GraphQL 客户端实例
const client = new GraphQLClient(api_url, {
  headers: {
    // 在此处添加默认的请求头（例如 Authorization 等）
    Authorization: '', // 例如用 Token 认证
  }
});

export default client;