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

export const getArticleId = async (article_id) => {
  const { data } = await ncNewsApi.get(`/articles/${article_id}`);
  return data;
};

export const getComments = async (article_id) => {
  const { data } = await ncNewsApi.get(`/articles/${article_id}/comments`);

  return data;
};

// export const patchArticleId = async (article_id) => {
//   const { data } = await ncNewsApi.patch(`/articles/${article_id}`);
//   return data;
// };

// export const postArticleComment = async (article_id, newCommentBody) => {
//   const { data } = await ncNewsApi.post(
//     `/articles/${article_id}/comments`,
//     newCommentBody
//   );
//   console.log(data);
//   return data;
// };
