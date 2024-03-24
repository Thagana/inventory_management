# Inventory Managment API

## Project
I used Nestjs and robust node.js backend for scalable and maintainable system.. in the app you can:
- add,
- remove,
- view,
- update and
- export products

### build systems
The project has three branches
- dev - for developer where we can have breaking changes and developers are always working on features
- staging - stable environment where QA people can test and mocks production environment
- main - production ready environment where the application is ready for customers.

### Packages 
- uuid - for creading unique ID
- Nestjs - Nodejs backend framework


### Out standing 
- Authentication - the inventory solution need authentication to secure the data transactions to make sure the right people have access to the right resources
- Tests -  Unit testing to make sure the backend API does what is needs to do


### Docs

#### Get all products
```shell
curl --request GET \
  --url http://localhost:3000/products
```

#### Create a product
```shell
curl --request POST \
  --url http://localhost:3000/products \
  --header 'content-type: application/json' \
  --data '{
    "name": "Eggs",
    "price": 10,
    "quantity": 10,
    "categoryID": 2
}'
```

#### Get a products
```shell
curl --request GET \
  --url http://localhost:3000/products/{productID}
```

#### Delete a product
```shell
curl --request DELETE \
  --url http://localhost:3000/
```

#### Update a product
```shell
curl --request PUT \
  --url http://localhost:3000/products \
  --header 'content-type: application/json' \
  --data '{
 	"name": "Eggs 2",
    "price": 15,
  	"availability": "In Stock",
  	"productID": "aa4f6e0e-f9c9-4e71-ac27-8bf4047e3242"
}'
```