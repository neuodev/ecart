# eCart

- E-commerce platform that gives the client good sopping experience
- Shopping cart, wishlist, search, advanced filters, checkout, payment, REST API, Auth

<p align="center">
    <img src="./wallet.png" alt="Wallet" title="Wallet"/>
</p>

<h1 align="center">
    <a href="https://walletecommerce.herokuapp.com/">Live Preview 👀</a>
</h1>

## Preview 📺

![Home](./preview/wallet_1.png)
![Product](./preview/wallet_2.png)
![Wishlist](./preview/wallet_3.png)
![Cart](./preview/wallet_4.png)

<details> 
<summary>See more...</summary>

![Checkout](./preview/wallet_5.png)
![Cart Dialog](./preview/wallet_6.png)
![Payment](./preview/wallet_7.png)
![Payment](./preview/wallet_8.png)
![Orders](./preview/wallet_9.png)

</details>

# API

For full documentaiton try to import **[this collection](./Wallet%20e-commerce.postman_collection.json)** into your **[postman](https://www.postman.com/)**

# User

<details>
<summary>PUT /api/v1/users/:id</summary>

<br />

Update user info by the `admin`

<br />

**Description:** Update user account

**Access:** Private/Admin

### Request

```ts
type body = {
  firstName?: string;
  lastName?: string;
  email?: string;
  isAmdin?: boolean;
};
```

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

<br />

**Description:** Get all users

**Access:** Private/Admin

### Request

#### Headers

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

<br />

**Description:** Delete a user by `id`

**Access:** Private/Admin

### Request

#### Headers

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

<br />

**Description:** Delete user account by the user itself

**Access:** Private/user

### Request

#### Headers

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

<br />

**Description:** Get user by Id

**Access:** Private/Admin

### Request

#### Headers

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

<details>
<summary>POST /api/v1/users/login</summary>

<br />

**Description:** Authorize user for login

**Access:** Public

### Request

```ts
type Body = {
  email: string;
  password: string;
};
```

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

<br />

**Description:** Register a new user

**Access:** Public

### Request

```json
{
  "firstName": "Joen",
  "lastName": "Doe",
  "email": "jone_1@wallet.io",
  "password": "1234567"
}
```

### Response

```json
{
  "_id": "633d4c6abd2e35a18c53e777",
  "firstName": "Joen",
  "lastName": "Doe",
  "email": "jone_3@wallet.io",
  "isAdmin": false,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzM2Q0YzZhYmQyZTM1YTE4YzUzZTc3NyIsImlhdCI6MTY2NDk2MTY0MiwiZXhwIjoxNjY3NTUzNjQyfQ.OgnvSKOiyoCziTcU9q6yElFpd0REM2BBuP6L53Loz8Q"
}
```

</details>

<details>
<summary>GET /api/v1/users/account</summary>

<br />

**Description:** Get user account

**Access:** Private/user

### Request

#### Headers

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

<br />

**Description:** Update user account

**Access:** Private/user

### Request

#### Headers

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

<br />

**Description:** An endpoint to send an email to user incase he forget the password

**Access:** Public

### Request

#### Headers

`Authorization: Bearer <TOKEN>`

### Response

```json
{
  "success": true,
  "data": "Email sent"
}
```

</details>

<br />

# Product

<details>
<summary>PUT /api/v1/products/:id</summary>

<br />

**Description:** UUpdate a product by `id`

**Access:** Private/Admin

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

<br />

**Description:** Create new product

**Access:** Private/Admin

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

<br />

**Description:** Delete a product by `ID`

**Access:** Private/Admin

### Headers

`Authorization: Bearer <TOKEN>`

### Responst

```json
{
  "messages": "Product Removed"
}
```

</details>

<details>
<summary>GET /api/v1/products</summary>

<br />

**Description:** Get all products

**Access:** Public

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

<br />

**Description:** Get product by `id`

**Access:** Public

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

<br />

**Description:** Get top rated products

**Access:** Public

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

<br />

**Description:** Get new published products

**Access:** Public

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

<br />

# Reviews

<details>
<summary>POST /api/v1/products/:id/reviews</summary>

<br />

**Description:** Add product review

**Access:** Private/user

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

<br />

**Description:** Update product review by the user

**Access:** Private/user

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

<br />

**Description:** Delete product review by the user

**Access:** Private/user

### Response

```json
{
  "message": "Review Deleted"
}
```

</details>

<details>
<summary>DELTE /api/v1/products/:productId/reviews/:reviewId</summary>

<br />

**Description:** Delete product review by the admin

**Access:** Private/admin

### Response

```json
{
  "message": "Review Removed"
}
```

</details>

<br />

# Orders

<details>
<summary>POST /api/v1/orders</summary>

<br />

**Description:** Create new order

**Access:** Private/user

### Request

```json
{
  "orderItems": [
    {
      "name": "iPhone 13 pro max",
      "qty": 1,
      "image": "img.png",
      "price": 1200.0,
      "product": "6327dea49a70962f67219b8e"
    }
  ],
  "shippingMethod": {
    "name": "internation shipping",
    "cost": 20.0
  },
  "shippingAddress": {
    "address": "some address",
    "city": "New York",
    "postalCode": 1234,
    "country": "US",
    "apartment": "apartment",
    "firstName": "Jone",
    "lastName": "Doe"
  },
  "paymentMethod": "PAYPAL",
  "txPrice": 200.0,
  "shippingPrice": 250.0,
  "totalPrice": 450.0
}
```

### Response

```json
{
  "user": "6326a4fda8012c4bc02d6368",
  "orderItems": [
    {
      "name": "iPhone 13 pro max",
      "qty": 1,
      "image": "img.png",
      "price": 1200,
      "product": "6327dea49a70962f67219b8e",
      "_id": "632814179b841ab4ec957692"
    }
  ],
  "shippingAddress": {
    "address": "some address",
    "city": "New York",
    "postalCode": "1234",
    "country": "US",
    "apartment": "apartment",
    "firstName": "Jone",
    "lastName": "Doe"
  },
  "paymentMethod": "PAYPAL",
  "shippingMethod": {
    "name": "internation shipping",
    "cost": 20
  },
  "taxPrice": 0,
  "shippingPrice": 250,
  "totalPrice": 450,
  "isPaid": false,
  "isDelivered": false,
  "_id": "632814179b841ab4ec957691",
  "createdAt": "2022-09-19T07:02:47.399Z",
  "updatedAt": "2022-09-19T07:02:47.399Z",
  "__v": 0
}
```

</details>

<details>
<summary>GET /api/v1/orders/:id</summary>

<br />

**Description:** Get order by `id`

**Access:** Private/user

### Response

```json
{
  "shippingAddress": {
    "address": "some address",
    "city": "New York",
    "postalCode": "1234",
    "country": "US",
    "apartment": "apartment",
    "firstName": "Jone",
    "lastName": "Doe"
  },
  "shippingMethod": {
    "name": "internation shipping",
    "cost": 20
  },
  "paymentResult": {
    "id": "6327f1aebc834eab1742347a",
    "status": "success",
    "update_time": "9/19/20222 6:54 am",
    "email_address": "jone@test.com"
  },
  "_id": "6327f1aebc834eab1742347a",
  "user": {
    "_id": "6326a4fda8012c4bc02d6368",
    "email": "jone@wallet.io"
  },
  "orderItems": [
    {
      "name": "iPhone 13 pro max",
      "qty": 1,
      "image": "img.png",
      "price": 1200,
      "product": "6327dea49a70962f67219b8e",
      "_id": "6327f1aebc834eab1742347b"
    }
  ],
  "paymentMethod": "PAYPAL",
  "taxPrice": 0,
  "shippingPrice": 250,
  "totalPrice": 450,
  "isPaid": true,
  "isDelivered": true,
  "createdAt": "2022-09-19T04:35:58.585Z",
  "updatedAt": "2022-09-19T04:57:19.635Z",
  "__v": 0,
  "paidAt": "2022-09-19T04:55:03.472Z",
  "deliveredAt": "2022-09-19T04:57:19.629Z"
}
```

</details>

<details>
<summary>PUT /api/v1/orders/:id/pay</summary>

<br />

<br />

**Description:** Pay an order

**Access:** Private/user

### Request

```json
{
  "id": "6327f1aebc834eab1742347a",
  "status": "success",
  "update_time": "9/19/20222 6:54 am",
  "payer": {
    "email_address": "jone@test.com"
  }
}
```

### Response

```json
{
  "shippingAddress": {
    "address": "some address",
    "city": "New York",
    "postalCode": "1234",
    "country": "US",
    "apartment": "apartment",
    "firstName": "Jone",
    "lastName": "Doe"
  },
  "shippingMethod": {
    "name": "internation shipping",
    "cost": 20
  },
  "paymentResult": {
    "id": "6327f1aebc834eab1742347a",
    "status": "success",
    "update_time": "9/19/20222 6:54 am",
    "email_address": "jone@test.com"
  },
  "_id": "6327f1aebc834eab1742347a",
  "user": "6326a4fda8012c4bc02d6368",
  "orderItems": [
    {
      "name": "iPhone 13 pro max",
      "qty": 1,
      "image": "img.png",
      "price": 1200,
      "product": "6327dea49a70962f67219b8e",
      "_id": "6327f1aebc834eab1742347b"
    }
  ],
  "paymentMethod": "PAYPAL",
  "taxPrice": 0,
  "shippingPrice": 250,
  "totalPrice": 450,
  "isPaid": true,
  "isDelivered": true,
  "createdAt": "2022-09-19T04:35:58.585Z",
  "updatedAt": "2022-09-19T07:06:27.877Z",
  "__v": 0,
  "paidAt": "2022-09-19T07:06:27.873Z",
  "deliveredAt": "2022-09-19T04:57:19.629Z"
}
```

</details>

<details>
<summary>GET /api/v1/orders/:id/deliver</summary>

<br />

<br />

**Description:** Set an order to be **delivered**

**Access:** Private/admin

### Response

```json
{
  "shippingAddress": {
    "address": "some address",
    "city": "New York",
    "postalCode": "1234",
    "country": "US",
    "apartment": "apartment",
    "firstName": "Jone",
    "lastName": "Doe"
  },
  "shippingMethod": {
    "name": "internation shipping",
    "cost": 20
  },
  "paymentResult": {
    "id": "6327f1aebc834eab1742347a",
    "status": "success",
    "update_time": "9/19/20222 6:54 am",
    "email_address": "jone@test.com"
  },
  "_id": "6327f1aebc834eab1742347a",
  "user": "6326a4fda8012c4bc02d6368",
  "orderItems": [
    {
      "name": "iPhone 13 pro max",
      "qty": 1,
      "image": "img.png",
      "price": 1200,
      "product": "6327dea49a70962f67219b8e",
      "_id": "6327f1aebc834eab1742347b"
    }
  ],
  "paymentMethod": "PAYPAL",
  "taxPrice": 0,
  "shippingPrice": 250,
  "totalPrice": 450,
  "isPaid": true,
  "isDelivered": true,
  "createdAt": "2022-09-19T04:35:58.585Z",
  "updatedAt": "2022-09-19T07:07:33.406Z",
  "__v": 0,
  "paidAt": "2022-09-19T07:06:27.873Z",
  "deliveredAt": "2022-09-19T07:07:33.405Z"
}
```

</details>

<details>
<summary>GET /api/v1/orders/myorder</summary>

<br />

<br />

**Description:** Get user orders

**Access:** Private/user

### Response

```json
[
  {
    "shippingAddress": {
      "address": "some address",
      "city": "New York",
      "postalCode": "1234",
      "country": "US",
      "apartment": "apartment",
      "firstName": "Jone",
      "lastName": "Doe"
    },
    "shippingMethod": {
      "name": "internation shipping",
      "cost": 20
    },
    "_id": "6327f0ca1ad2cab4387e6024",
    "user": "6326a4fda8012c4bc02d6368",
    "orderItems": [],
    "paymentMethod": "PAYPAL",
    "taxPrice": 0,
    "shippingPrice": 250,
    "totalPrice": 450,
    "isPaid": false,
    "isDelivered": false,
    "createdAt": "2022-09-19T04:32:10.723Z",
    "updatedAt": "2022-09-19T04:32:10.723Z",
    "__v": 0
  },
  {
    "shippingAddress": {
      "address": "some address",
      "city": "New York",
      "postalCode": "1234",
      "country": "US",
      "apartment": "apartment",
      "firstName": "Jone",
      "lastName": "Doe"
    },
    "shippingMethod": {
      "name": "internation shipping",
      "cost": 20
    },
    "paymentResult": {
      "id": "6327f1aebc834eab1742347a",
      "status": "success",
      "update_time": "9/19/20222 6:54 am",
      "email_address": "jone@test.com"
    },
    "_id": "6327f1aebc834eab1742347a",
    "user": "6326a4fda8012c4bc02d6368",
    "orderItems": [
      {
        "name": "iPhone 13 pro max",
        "qty": 1,
        "image": "img.png",
        "price": 1200,
        "product": "6327dea49a70962f67219b8e",
        "_id": "6327f1aebc834eab1742347b"
      }
    ],
    "paymentMethod": "PAYPAL",
    "taxPrice": 0,
    "shippingPrice": 250,
    "totalPrice": 450,
    "isPaid": true,
    "isDelivered": true,
    "createdAt": "2022-09-19T04:35:58.585Z",
    "updatedAt": "2022-09-19T07:07:33.406Z",
    "__v": 0,
    "paidAt": "2022-09-19T07:06:27.873Z",
    "deliveredAt": "2022-09-19T07:07:33.405Z"
  },
  {
    "shippingAddress": {
      "address": "some address",
      "city": "New York",
      "postalCode": "1234",
      "country": "US",
      "apartment": "apartment",
      "firstName": "Jone",
      "lastName": "Doe"
    },
    "shippingMethod": {
      "name": "internation shipping",
      "cost": 20
    },
    "_id": "632814179b841ab4ec957691",
    "user": "6326a4fda8012c4bc02d6368",
    "orderItems": [
      {
        "name": "iPhone 13 pro max",
        "qty": 1,
        "image": "img.png",
        "price": 1200,
        "product": "6327dea49a70962f67219b8e",
        "_id": "632814179b841ab4ec957692"
      }
    ],
    "paymentMethod": "PAYPAL",
    "taxPrice": 0,
    "shippingPrice": 250,
    "totalPrice": 450,
    "isPaid": false,
    "isDelivered": false,
    "createdAt": "2022-09-19T07:02:47.399Z",
    "updatedAt": "2022-09-19T07:02:47.399Z",
    "__v": 0
  }
]
```

</details>

<details>
<summary>GET /api/v1/orders</summary>

<br />

<br />

**Description:** Get all orders

**Access:** Private/admin

### Response

```json
{
  "success": true,
  "count": 3,
  "orders": [
    {
      "shippingAddress": {
        "address": "some address",
        "city": "New York",
        "postalCode": "1234",
        "country": "US",
        "apartment": "apartment",
        "firstName": "Jone",
        "lastName": "Doe"
      },
      "shippingMethod": {
        "name": "internation shipping",
        "cost": 20
      },
      "_id": "6327f0ca1ad2cab4387e6024",
      "user": {
        "_id": "6326a4fda8012c4bc02d6368"
      },
      "orderItems": [],
      "paymentMethod": "PAYPAL",
      "taxPrice": 0,
      "shippingPrice": 250,
      "totalPrice": 450,
      "isPaid": false,
      "isDelivered": false,
      "createdAt": "2022-09-19T04:32:10.723Z",
      "updatedAt": "2022-09-19T04:32:10.723Z",
      "__v": 0
    },
    {
      "shippingAddress": {
        "address": "some address",
        "city": "New York",
        "postalCode": "1234",
        "country": "US",
        "apartment": "apartment",
        "firstName": "Jone",
        "lastName": "Doe"
      },
      "shippingMethod": {
        "name": "internation shipping",
        "cost": 20
      },
      "paymentResult": {
        "id": "6327f1aebc834eab1742347a",
        "status": "success",
        "update_time": "9/19/20222 6:54 am",
        "email_address": "jone@test.com"
      },
      "_id": "6327f1aebc834eab1742347a",
      "user": {
        "_id": "6326a4fda8012c4bc02d6368"
      },
      "orderItems": [
        {
          "name": "iPhone 13 pro max",
          "qty": 1,
          "image": "img.png",
          "price": 1200,
          "product": "6327dea49a70962f67219b8e",
          "_id": "6327f1aebc834eab1742347b"
        }
      ],
      "paymentMethod": "PAYPAL",
      "taxPrice": 0,
      "shippingPrice": 250,
      "totalPrice": 450,
      "isPaid": true,
      "isDelivered": true,
      "createdAt": "2022-09-19T04:35:58.585Z",
      "updatedAt": "2022-09-19T07:07:33.406Z",
      "__v": 0,
      "paidAt": "2022-09-19T07:06:27.873Z",
      "deliveredAt": "2022-09-19T07:07:33.405Z"
    },
    {
      "shippingAddress": {
        "address": "some address",
        "city": "New York",
        "postalCode": "1234",
        "country": "US",
        "apartment": "apartment",
        "firstName": "Jone",
        "lastName": "Doe"
      },
      "shippingMethod": {
        "name": "internation shipping",
        "cost": 20
      },
      "_id": "632814179b841ab4ec957691",
      "user": {
        "_id": "6326a4fda8012c4bc02d6368"
      },
      "orderItems": [
        {
          "name": "iPhone 13 pro max",
          "qty": 1,
          "image": "img.png",
          "price": 1200,
          "product": "6327dea49a70962f67219b8e",
          "_id": "632814179b841ab4ec957692"
        }
      ],
      "paymentMethod": "PAYPAL",
      "taxPrice": 0,
      "shippingPrice": 250,
      "totalPrice": 450,
      "isPaid": false,
      "isDelivered": false,
      "createdAt": "2022-09-19T07:02:47.399Z",
      "updatedAt": "2022-09-19T07:02:47.399Z",
      "__v": 0
    }
  ]
}
```

</details>

<br />

# Database Model

## User

```ts
type User = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  isAdmin: boolean;
  resetPasswordToken: string;
  resetPasswordExpire: string;
  createAt: Date;
  updatedAt: Date;
};
```

## Product

```ts
type Product = {
  user: User;
  name: string;
  images: string[];
  brand: string;
  category: string[];
  description: string;
  reviews: Reviews[];
  rating: number;
  numReviews: number;
  discount: number;
  price: number;
  countInStock: number;
  createdAt: Date;
  updatedAt: Date;
};
```

## Review

```ts
type Reivew = {
  name: string;
  rating: number;
  comment: string;
  user: User;
  createdAt: Date;
  updatedAt: Date;
};
```

## Order

```ts
type OrderItem = {
  name: string;
  qty: number;
  image: string;
  price: number;
  product: Product;
};
type Order = {
  user: User;
  orderItems: OrderItem[];
  shippingAddress: {
    address: string;
    city: string;
    postalCode: string;
    country: string;
    apartment: string;
    firstName: string;
    lastName: string;
  };
  paymentMethod: string;
  shippingMethod: {
    name: string;
    cost: string;
  };
  paymentResult: {
    id: string;
    status: string;
    update_time: Date;
    email_address: string;
  };
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
  isPaid: boolean;
  paidAt: Date;
  isDelivered: boolean;
  deliveredAt: Date;
  createdAt: Date;
  updatedAt: Date;
};
```
