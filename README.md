## Full stack ecommerce store

For demo, use [Stripe Testing Cards](https://stripe.com/docs/testing)

This is a repository for a full stack ecommerce dashboard and CMS built with Next.js 13, App Router, React, Tailwind, Prisma, and MySQL.

- [Ecommerce Admin - Repository](https://github.com/BlakeZajac/full-stack-ecommerce-admin)
- [Ecommerce Admin - Demo](https://full-stack-ecommerce-admin.vercel.app/)
- [Ecommerce Store - Repository](https://github.com/BlakeZajac/full-stack-ecommerce-store)
- [Ecommerce Store - Demo](https://full-stack-ecommerce-store-bay.vercel.app/)

Features:

- Headless admin components built with shadcn/ui
- Admin dashboard serves as both a CMS, admin and API
- Create and manage multiple vendors/stores through a single CMS. Each generating their own API routes individually
- Create/update/delete categories
- Create/update/delete products
- Create/update/delete filters such as color, size and match them in the product creation form
- Create/update/delete billboards, which are the announcements at the top of the page. These can be attached to single categories, or use them standalone. The admin generates API for all of those cases.
- Image upload via Cloudinary CDN
- Search through categories, products, sizes, colors, billboards, with included pagination
- Control which products are "featured" so they show on the home page
- See your orders, sales, graphs of your revenue on the dashboard page
- Authentication via Clerk
- Order creation
- Stripe checkout and webhooks
- MySQL, Prisma and Planetscale database

### Prerequisites

**Node version 14.x**

### Cloning the repository

```shell
git clone https://github.com/BlakeZajac/full-stack-ecommerce-store.git
```

### Install packages

```shell
npm i
```

### Setup .env file

```js
NEXT_PUBLIC_API_URL=
```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command | description                              |
| :------ | :--------------------------------------- |
| `dev`   | Starts a development instance of the app |
