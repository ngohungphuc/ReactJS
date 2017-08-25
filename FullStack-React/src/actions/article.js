export default {
  articleList: response => {
    return {
      type: "ARTICLES_LIST_ADD",
      payload: { response: response }
    };
  }
};
