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

export const patchUpvote = async (article_id) => {
  const { data } = await ncNewsApi.patch(`/articles/${article_id}`, {
    inc_votes: 1,
  });
  return data;
};

export const patchDownvote = async (article_id) => {
  const { data } = await ncNewsApi.patch(`/articles/${article_id}`, {
    inc_votes: -1,
  });
  return data;
};
export const postArticleComment = async (article_id, newCommentBody, user) => {
  console.log(newCommentBody);
  const { data } = await ncNewsApi.post(`/articles/${article_id}/comments`, {
    body: newCommentBody,
    username: user,
  });

  return data;
};

export const getSortArticle = async (sorter) => {
  const { data } = await ncNewsApi.get(`/articles?sort_by=${sorter}`);
  return data;
};

export const getSortByAscDesc = async (order) => {
  const { data } = await ncNewsApi.get(`/articles?order=${order}`);
  return data;
};

export const deleteComment = async (id) => {
  const { data } = await ncNewsApi.delete(`/comments/${id}`);
  return data;
};

export const getTopics = async () => {
  const { data } = await ncNewsApi.get(`/topics`);
  return data;
};

export const getSortedTopics = async (topic) => {
  const { data } = await ncNewsApi.get(`/articles?topic=${topic}`);
  console.log(topic);
  return data;
};

export const getSingleComment = async (comment_id) => {
  const { data } = await ncNewsApi.get(`/comments/${comment_id}`);
  return data;
};
