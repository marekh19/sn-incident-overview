# ServiceNow Incident Overview

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This project is built with Next.js 13 using the yet experimental `/app` directory and [React Server Components](https://nextjs.org/docs/advanced-features/react-18/server-components)

## Getting Started

### Environment variables

You can take a look at `.env.example` file. This app uses 3 environment variables:

- `SN_INSTANCE_URL` = your instance base URL
- `SN_INSTANCE_USERNAME` = your username
- `SN_INSTANCE_PWD` = your password

> Using Basic Authentication here

### How to run the app

First, create `.env.local` file where you will store your environment variables

```bash
cp .env.example .env.local
```

And change the example values to your values

Then run the development server:

```bash
npm run dev
# or
yarn dev
```

> **Note**
> While running in dev server, error may occur when rendering the Incident detail. I wasn't yet able to solve it. You can use a workaround and build the application. This error does not occur in production build

```bash
npm run build
npm run start
# or
yarn build
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
