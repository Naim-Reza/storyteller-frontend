import Api from "./client";

const rootEndPoint = "/stories";
const recentStoryEndPoint = "/web/recent_stories";
const webStoriesEndPoing = "/web/stories";

const getUserStories = () =>
  Api.get(rootEndPoint)
    .then((response) => response)
    .catch((error) => error);

const getWebStories = () =>
  Api.get(webStoriesEndPoing)
    .then((response) => response)
    .catch((error) => error);

const getRecentStories = () =>
  Api.get(recentStoryEndPoint)
    .then((response) => response)
    .catch((error) => error);

const postStory = (values) =>
  Api.post(rootEndPoint, values)
    .then((response) => response)
    .catch((error) => error);

const updateStory = (values, id) =>
  Api.put(`${rootEndPoint}/${id}`, values)
    .then((response) => response)
    .catch((error) => error);

const deleteStory = (id) =>
  Api.delete(`${rootEndPoint}/${id}`)
    .then((response) => response)
    .catch((error) => error);

const getStory = (id) =>
  Api.get(`${rootEndPoint}/${id}`)
    .then((response) => response)
    .catch((error) => error);

export {
  getUserStories,
  postStory,
  updateStory,
  deleteStory,
  getStory,
  getRecentStories,
  getWebStories,
};
