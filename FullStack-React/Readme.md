> Chap 1 step

1. Fetches data from the DB using Falcor-Express and Falcor-Router.

2. The data moves from the backend (the source is MongoDB) to the frontend. We
populate Redux's src/reducers/article.js state tree.

3. We render the DOM elements based on our single state tree.

4. All these steps allow us to take all of the full-stack app's data from the database,
to the user's browser (so a user can see an article).