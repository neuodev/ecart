# Wallet

- E-commerce platform that gives the client good sopping experience
- Shopping cart, wishlist, search, advanced filters, checkout, payment, REST API, Auth

<p align="center">
    <img src="./wallet.png" alt="Wallet" title="Wallet"/>
</p>

<h1 align="center">
    <a href="https://walletecommerce.herokuapp.com/">Live Preview 👀</a>
</h1>

## Screenshots 📺

![Home Page](/client/public/images/e-commerce-1.png)

![Search Page](/client/public/images/e-commerce-2.png)

![Checkout page](/client/public/images/e-commerce-3.png)

# API

For full documentaiton try to import [this collection](./Wallet%20e-commerce.postman_collection.json) into your postman

## User API

### Admin Only

<details>
<summary>PUT /api/v1/users/:id  </summary>

### Request

```json
{
  "isAdmin": true
}
```

### Response

```json
{
  "_id": "6326a3633979c3a722be8411",
  "firstName": "Jane",
  "lastName": "Doe",
  "email": "jane@wallet.io",
  "isAdmin": true
}
```

</details>
<details>
<summary>GET /api/v1/users </summary>

### Request

`Authorization: Bearer <TOKEN>`

### Response

```json
{
  "users": [
    {
      "_id": "6326a3633979c3a722be8411",
      "firstName": "Jane",
      "lastName": "Doe",
      "email": "jane@wallet.io",
      "password": "$2a$10$eajsr5X/E3D2B8N8anLa8O3LlF7Sj/sCquBs2xPH.n7wXBai4viI2",
      "isAdmin": false,
      "createdAt": "2022-09-18T04:49:39.687Z",
      "updatedAt": "2022-09-18T04:49:39.687Z",
      "__v": 0
    },
    {
      "_id": "6326a4fda8012c4bc02d6368",
      "firstName": "Jone",
      "lastName": "Doe",
      "email": "jone@wallet.io",
      "password": "$2a$10$wKNngaZrvxMsTRQajNfzjekiLhTSZRSdAWdWkrJ1U3D8gCE9nQoZ2",
      "isAdmin": true,
      "createdAt": "2022-09-18T04:56:29.313Z",
      "updatedAt": "2022-09-18T05:29:13.020Z",
      "__v": 0
    }
  ],
  "count": 2
}
```

</details>

<details>
<summary>DELETE /api/v1/users/:id </summary>

### Request

`Authorization: Bearer <TOKEN>`

### Response

```json
{
  "message": "User removed"
}
```

</details>
<details>
<summary>DELETE /api/v1/users/account </summary>

### Request

`Authorization: Bearer <TOKEN>`

### Response

```json
{
  "message": "User removed"
}
```

</details>

<details>
<summary>GET /api/v1/users/:id </summary>

### Request

`Authorization: Bearer <TOKEN>`

### Response

```json
{
  "_id": "6326a3633979c3a722be8411",
  "firstName": "Jane",
  "lastName": "Doe",
  "email": "jane@wallet.io",
  "isAdmin": false,
  "createdAt": "2022-09-18T04:49:39.687Z",
  "updatedAt": "2022-09-18T04:49:39.687Z",
  "__v": 0
}
```

</details>

### Admin/users

<details>
<summary>POST /api/v1/users/login</summary>

### Request

```json
{
  "email": "jone@wallet.io",
  "password": "1234567"
}
```

### Response

```json
{
  "_id": "6326a4fda8012c4bc02d6368",
  "firstName": "Jone",
  "lastName": "Doe",
  "email": "jone@wallet.io",
  "isAdmin": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjZhNGZkYTgwMTJjNGJjMDJkNjM2OCIsImlhdCI6MTY2MzQ4MDk4NCwiZXhwIjoxNjY2MDcyOTg0fQ.rv7FZMh_ScxkdvYHfBC03cEajFuViXoEtwN74FYmkRQ"
}
```

</details>

<details>
<summary>POST /api/v1/users</summary>

### Request

```json
{
  "firstName": "Joen",
  "lastName": "Doe",
  "email": "jone@wallet.io",
  "password": "1234567"
}
```

### Response

```json
{
  "_id": "6326a4fda8012c4bc02d6368",
  "firstName": "Joen",
  "lastName": "Doe",
  "email": "jone@wallet.io",
  "isAdmin": false,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjZhNGZkYTgwMTJjNGJjMDJkNjM2OCIsImlhdCI6MTY2MzQ3Njk4OSwiZXhwIjoxNjY2MDY4OTg5fQ.wxPGnDLvZYqyXXC5YIaUJoJqfxdeZlb96xi4Jvgtj80"
}
```

</details>

<details>
<summary>GET /api/v1/users/account</summary>

### Request

`Authorization: Bearer <TOKEN>`

### Response

```json
{
  "_id": "6326a4fda8012c4bc02d6368",
  "firstName": "Joen",
  "lastName": "Doe",
  "email": "jone@wallet.io",
  "isAdmin": false,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjZhNGZkYTgwMTJjNGJjMDJkNjM2OCIsImlhdCI6MTY2MzQ3Njk4OSwiZXhwIjoxNjY2MDY4OTg5fQ.wxPGnDLvZYqyXXC5YIaUJoJqfxdeZlb96xi4Jvgtj80"
}
```

</details>

<details>
<summary>PUT /api/v1/account </summary>

### Request

`Authorization: Bearer <TOKEN>`

### Response

```json
{
  "_id": "6326a4fda8012c4bc02d6368",
  "firstName": "Jone",
  "lastName": "Doe",
  "email": "jone@wallet.io",
  "isAdmin": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjZhNGZkYTgwMTJjNGJjMDJkNjM2OCIsImlhdCI6MTY2MzQ3ODk1MywiZXhwIjoxNjY2MDcwOTUzfQ.5KCy_rocdxUDcLRVEgJdcJmAHKfP4gIOWEy9Mra4V6M"
}
```

</details>

<details>
<summary>POST /api/v1/users/forgetpassword</summary>

### Request

`Authorization: Bearer <TOKEN>`

### Response

```json
{
  "success": true,
  "data": "Email sent"
}
```

</details>

# Product API

### Admin Only

<details>
<summary>PUT /api/v1/products/:id</summary>

Update a product by `id`

### Request

```json
{
  "price": 1200.0,
  "images": ["img_3.png", "img_4.png"]
}
```

### Response

```json
{
  "_id": "6327fa179b841ab4ec957660",
  "user": "6326a4fda8012c4bc02d6368",
  "name": "iPhone 13 pro max",
  "images": ["img_1.png", "img_3.png", "img_4.png"],
  "brand": "Apple",
  "category": [],
  "description": "The most powerful phone on the planet earth",
  "rating": 0,
  "numReviews": 0,
  "discount": 2,
  "price": 1200,
  "countInStock": 2000,
  "reviews": [],
  "createdAt": "2022-09-19T05:11:51.150Z",
  "updatedAt": "2022-09-19T05:20:08.235Z",
  "__v": 1
}
```

</details>

<details>
<summary>POST /api/v1/products</summary>

Create new product

### Request

```json
{
  "name": "iPhone 13 pro max",
  "images": ["img_1.png"],
  "brand": "Apple",
  "caregory": ["phones"],
  "description": "The most powerful phone on the planet earth",
  "discount": 2,
  "price": 1000.0,
  "countInStock": 2000
}
```

### Response

```json
{
  "user": "6326a4fda8012c4bc02d6368",
  "name": "iPhone 13 pro max",
  "images": ["img_1.png"],
  "brand": "Apple",
  "category": [],
  "description": "The most powerful phone on the planet earth",
  "rating": 0,
  "numReviews": 0,
  "discount": 2,
  "price": 1000,
  "countInStock": 2000,
  "_id": "6327fa179b841ab4ec957660",
  "reviews": [],
  "createdAt": "2022-09-19T05:11:51.150Z",
  "updatedAt": "2022-09-19T05:11:51.150Z",
  "__v": 0
}
```

</details>

<details>
<summary>DELETE /api/v1/products/:id</summary>

Delete a product by `ID`

### Headers

`Authorization: Bearer <TOKEN>`

### Responst

```json
{
  "messages": "Product Removed"
}
```

</details>

### Users/Admins

<details>
<summary>GET /api/v1/products</summary>

Get all products

### Response

```json
{
  "success": true,
  "count": 2,
  "products": [
    {
      "_id": "6327fa179b841ab4ec957660",
      "user": "6326a4fda8012c4bc02d6368",
      "name": "iPhone 13 pro max",
      "images": ["img_1.png"],
      "brand": "Apple",
      "category": [],
      "description": "The most powerful phone on the planet earth",
      "rating": 0,
      "numReviews": 0,
      "discount": 2,
      "price": 1000,
      "countInStock": 2000,
      "reviews": [],
      "createdAt": "2022-09-19T05:11:51.150Z",
      "updatedAt": "2022-09-19T05:11:51.150Z",
      "__v": 0
    },
    {
      "_id": "6327dea49a70962f67219b8e",
      "user": "6326a4fda8012c4bc02d6368",
      "name": "iPhone 13 pro max",
      "images": [
        "img_1.png",
        "img_2.png",
        "img_3.png",
        "img_3.png",
        "img_4.png"
      ],
      "brand": "Apple",
      "category": [],
      "description": "The most powerful phone on the planet earth",
      "rating": 0,
      "numReviews": 0,
      "discount": 2,
      "price": 1200,
      "countInStock": 2000,
      "reviews": [],
      "createdAt": "2022-09-19T03:14:44.403Z",
      "updatedAt": "2022-09-19T03:59:29.317Z",
      "__v": 7
    }
  ]
}
```

</details>

<details>
<summary>GET /api/v1/products/:id</summary>

Get product by `id`

### Response

```json
{
  "_id": "6327fa179b841ab4ec957660",
  "user": "6326a4fda8012c4bc02d6368",
  "name": "iPhone 13 pro max",
  "images": ["img_1.png"],
  "brand": "Apple",
  "category": [],
  "description": "The most powerful phone on the planet earth",
  "rating": 0,
  "numReviews": 0,
  "discount": 2,
  "price": 1000,
  "countInStock": 2000,
  "reviews": [],
  "createdAt": "2022-09-19T05:11:51.150Z",
  "updatedAt": "2022-09-19T05:11:51.150Z",
  "__v": 0
}
```

</details>

<details>
<summary>GET /api/v1/products/top</summary>

Get top rated products

### Response

```json
[
  {
    "_id": "6327fa179b841ab4ec957660",
    "user": "6326a4fda8012c4bc02d6368",
    "name": "iPhone 13 pro max",
    "images": ["img_1.png", "img_3.png", "img_4.png"],
    "brand": "Apple",
    "category": [],
    "description": "The most powerful phone on the planet earth",
    "rating": 0,
    "numReviews": 0,
    "discount": 2,
    "price": 1200,
    "countInStock": 2000,
    "reviews": [],
    "createdAt": "2022-09-19T05:11:51.150Z",
    "updatedAt": "2022-09-19T05:20:08.235Z",
    "__v": 1
  }
]
```

</details>

<details>
<summary>GET /api/v1/products/new</summary>

Get new published products

### Response

```json
[
  {
    "_id": "6327fa179b841ab4ec957660",
    "user": "6326a4fda8012c4bc02d6368",
    "name": "iPhone 13 pro max",
    "images": ["img_1.png", "img_3.png", "img_4.png"],
    "brand": "Apple",
    "category": [],
    "description": "The most powerful phone on the planet earth",
    "rating": 0,
    "numReviews": 0,
    "discount": 2,
    "price": 1200,
    "countInStock": 2000,
    "reviews": [],
    "createdAt": "2022-09-19T05:11:51.150Z",
    "updatedAt": "2022-09-19T05:20:08.235Z",
    "__v": 1
  }
]
```

</details>

# Reviews API

<details>
<summary>POST /api/v1/products/:id/reviews</summary>

Add product review

### Request

```json
{
  "rating": 5,
  "comment": "Very cool!"
}
```

### Response

```json
{
  "message": "Review added"
}
```

</details>

<details>
<summary>PUT /api/v1/products/:id/reviews</summary>

Update product review by the user

### Request

```json
{
  "comment": "Super cool!"
}
```

### Response

```json
{
  "message": "Review Updated"
}
```

</details>

<details>
<summary>DELETE /api/v1/products/:id/reviews</summary>

Delete product review by the user

### Response

```json
{
  "message": "Review Deleted"
}
```

</details>

<details>
<summary>DELTE /api/v1/products/:productId/reviews/:reviewId</summary>

Delete product review by the admin

### Response

```json
{
  "message": "Review Removed"
}
```

</details>
