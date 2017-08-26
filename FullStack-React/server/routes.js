import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/local");

const articleSchema = {
  articleTitle: String,
  articleContent: String
};

const Article = mongoose.model("Article", articleSchema, "articles");

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
  },
  {
    route: 'articles[{intergers}]["id","articleTitle","articleContent"]',
    get: pathSet => {
      const articlesIndex = pathSet[1];

      return Article.find(
        {},
        (err, articlesDocs) => articlesDocs
      ).then(articlesArrayFromDb => {
        let results = [];

        articlesIndex.forEach(index => {
          const singleArticleObject = articlesArrayFromDb[index].toObject();
          const falcorSingleArticleResult = {
            path: ["articles", index],
            value: singleArticleObject
          };

          results.push(falcorSingleArticleResult);
        });

        return results;
      });
    }
  }
];

export default PublishingAppRoutes;
