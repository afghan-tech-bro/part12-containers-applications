# React application

This application is created from create-react-app.

Install dependencies with `npm install`

You can run the application in development mode with `npm start`

You can build static files for production release with `npm run build`

You can run tests with `npm run test`

## Environment variables

Use REACT_APP_BACKEND_URL to set where the backend for this application is.

## Docker

```
docker build -t todo-frontend-dev .
docker run -p 3001:80 todo-frontend-dev

docker build -f ./dev.Dockerfile -t hello-front-dev .
docker run -p 3000:3000 -v "$(pwd):/usr/src/app/" hello-front-dev

docker-compose up
docker exec hello-front-dev npm install axios # add to package.json and run docker build again
```