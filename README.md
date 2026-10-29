# Pursuit Practice

Smaller exercises from the Pursuit Fellowship, kept in one place and ordered by date. These are the reps behind my bigger projects. My full timeline is at https://cornell-robertson.vercel.app

| When | Folder | What I practiced |
| --- | --- | --- |
| Nov 2024 | [express-routes](2024-11-express-routes) | First Express server: route parameters and index routes |
| Jan 2025 | [anime-api](2025-01-anime-api) | Express + PostgreSQL CRUD API with pg-promise, schema and seed files |
| Mar 2025 | [web-fundamentals](2025-03-web-fundamentals) | CSS Grid, DOM practice, forms, AJAX with XMLHttpRequest, Fetch, Promises, a small Express endpoint, and a Python CRUD script |
| Mar 2025 | [es-modules](2025-03-es-modules) | Splitting code into ES modules with `import` / `export` |
| Mar 2025 | [react-hooks-context-router](2025-03-react-hooks-context-router) | `useState`, `useEffect`, `useContext`, `useReducer`, Context providers, React Router, fetching data, conditional rendering |
| Mar 2025 | [react-forms](2025-03-react-forms) | Controlled inputs and form submission in React |
| Mar 2025 | [react-router](2025-03-react-router) | Client-side routing with React Router |
| Nov 2025 | [express-starter](2025-11-express-starter) | Express middleware, routers, and controllers |

## Running an exercise

Each folder is its own project. `cd` into one, run `npm install` if it has a `package.json`, then `npm start` (React) or `node server.js` (Express).

The API folders need PostgreSQL. Copy `.env.example` to `.env` and run the `schema.sql` and `seed.sql` files with `psql`.
