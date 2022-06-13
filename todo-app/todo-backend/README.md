# Express application

Install dependencies with `npm install`

Run with `npm start`

Or in development mode with `npm run dev`

# Visit counter

When running the server, visit http://localhost:3000 to see visit counter, or give environment variable `PORT` to change the port.

# MongoDB

The application has /todos crud which requires a MongoDB. Pass connection url with env `MONGO_URL`

# Redis

Pass connection url with env `REDIS_URL`

# Docker instructions


Run these docker commands in terminal, navigate to [localhost:3000](http://localhost:3000), visits counter should increment
```
docker build -t todo-backend-dev .

docker run -p 3000:3000 todo-backend-dev
````

Faster alternative, use docker compose
```
docker-compose up   # build and run the application
docker-compose up --build   # rebuild the application
docker-compose up -d    # run the application in the background
docker-compose down   # close the application
```

Containers in development

The syntax is: container run -v FILE-IN-HOST:FILE-IN-CONTAINER

-f flag to specify a file
```
docker-compose -f docker-compose.dev.yml down --volumes   #ensures nothing is left and starts from a clean slate
docker-compose -f docker-compose.dev.yml up   # initialize the db
MONGO_URL=mongodb://the_username:the_password@localhost:3456/the_database npm run dev
```
[localhost:3000/todos](http://localhost:3000/todos) will return list of todos, can add/delete a todo

