import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://tavelar-app.herokuapp.com/api/",
});

export const getArticles = async () => {
  const { data } = await ncNewsApi.get("/articles/");

  return data;
};

export const getUsers = async () => {
  const { data } = await ncNewsApi.get("/users/");

  return data;
};
