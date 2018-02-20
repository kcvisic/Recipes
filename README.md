# Installation

## Cloning the repo
```bash
git clone git@github.com:kcvisic/Recipes.git
```

## Install npm packages
```bash
npm install

```
## Create a config.json file
```bash
sequelize init:config
```

# Database Configuration

## Creating the Database
```bash
mysql -u [USERNAME] --password=[PASSWORD] < db/schema.sql
```

## Seed the Database
```bash
mysql -u [USERNAME] --password=[PASSWORD] < db/seeds.sql
```


# Running


## Starting the server
```bash
npm start
```

## Viewing the app

Open your browser and type the following URL `http://localhost:8080`

## See the link here: https://recipes-service-kc.herokuapp.com/
