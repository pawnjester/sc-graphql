## SC-BACKEND

### This is a backend application using Graphql.
- It is hosted on `https://scoutbase-backend.herokuapp.com/`

### Technologies
- NodeJs
- Postgres DB (Sequelize ORM )
- GraphQl

### Getting Started on development
- Clone this repository
- Run `npm install` to install the dependencies
- Create an `.env` file using the format in  `.env.sample` in the root folder.
- Create your Postgres database with the details given in `.env`  file.
- Run  ` sequelize db:migrate ` to run migrations on the database.
- Run  `sequelize db:migrate:undo:all` to undo migrations if need be
- Run  `npm run seeders` to run seeders to the database.
- Run  `npm start` to start the development server.




### Functionalities
- Create User
```mutation {
  createUser(data: {
    username: "username",
    password: "password"
  }) {
    token
    user{
      id
      name
    }
  }
}
```

- Login User
```
mutation{
  login(data: {
    username: "username",
    password: "password"
  }) {
    token
    user {
      id
      name
    }
  }
}
```
- Query for Movies
- Query For Actors
- Query for Directors
```
query{
  movies {
    title
    year
    scoutbase_rating (only authenticated users)
    rating
    actors {
      name
      birthday
      country
      directors {
        name
        birthday
        country
      }
    }
  }

}
```
### Authentication
- Use
```
{
  "Authorization": "Bearer ***************token***********"
}

```

### Author
- Okonji Emmanuel
