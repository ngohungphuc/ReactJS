import http from "http";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
mongoose.connect("mongodb://localhost/local");

const articleSchema = {
  articleTitle: String,
  articleContent: String
};
const Article = mongoose.model("Article", articleSchema, "articles");
const app = express();
app.server = http.createServer(app);

// CORS - 3rd party middleware
app.use(cors());
// This is required by falcor-express middleware
//to work correctly with falcor-browser
app.use(bodyParser.json({ extended: false }));
app.use(express.static("dist"));
app.get("/", (req, res) => {
  Article.find((err, articlesDocs) => {
    const ourArticles = articlesDocs
      .map(articleItem => {
        return `${articleItem.articleTitle}</h2> ${articleItem.articleContent}`;
      })
      .join("<br/>");
    res.send(`<h1>Publishing App Initial Application!</h1>${ourArticles}`);
  });
});

app.server.listen(process.env.PORT || 3000);

console.log(`Started on port ${app.server.address().port}`);

export default app;
