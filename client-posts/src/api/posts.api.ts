import axios from "axios";

const postApiBaseUrl = axios.create({
  baseURL: "http://localhost:8000/posts/api/v1/posts",
});

export const getAllPosts = () => {
  // return axios.get("http://localhost:8000/posts/api/v1/");
  return postApiBaseUrl.get("/");
};

export const getPost = (id) => {
  // return axios.get("http://localhost:8000/posts/api/v1/");
  return postApiBaseUrl.get(`/${id}/`);
};

export const createPost = (post) => {
  return postApiBaseUrl.post("/", post);
};

export const deletePost = (id) => {
  return postApiBaseUrl.delete(`/${id}`);
};

export const updatePost = (id, post) => {
  return postApiBaseUrl.put(`/${id}/`, post);
};
