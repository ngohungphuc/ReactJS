const PublishingAppRoutes = [
  {
    route: "articles.length",
    get: () => {
      const articlesCountInDb = 2;
      return {
        path: ["articles", "length"],
        value: articlesCountInDb
      };
    }
  }
];

export default PublishingAppRoutes;
