# ServiceNow Incident Overview

This project uses [Next.js 13](https://nextjs.org/) with the yet beta and experimental `/app` directory and [React Server Components](https://nextjs.org/docs/advanced-features/react-18/server-components)

Data is pulled from your ServiceNow instance using [Table API](https://developer.servicenow.com/dev.do#!/reference/api/tokyo/rest/c_TableAPI). We're using `[incident]` table here, but feel free to change it to whatever table you want to experiment with.

## Built with

- [Next.js](https://nextjs.org/)
- [React.js](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)

![sn-incident-overview demo showcase](/public/sn-incident-overview.jpg?raw=true 'Demo')

## Getting Started

### Environment variables

You can take a look at `.env.example` file. This app uses 3 environment variables:

- `SN_INSTANCE_URL` = your instance base URL
- `SN_INSTANCE_USERNAME` = your username
- `SN_INSTANCE_PWD` = your password

> Using Basic Authentication here

### How to run the app

First, create `.env.local` file where you will store your environment variables:

```bash
$ cp .env.example .env.local
```

And change the example values to your values

Then install all dependencies:

```bash
$ npm install
# or
$ yarn
```

Last run the development server:

```bash
$ npm run dev
# or
$ yarn dev
```

> **Warning**
> While running in dev server, error may occur when rendering the Incident detail. I wasn't yet able to solve it. You can use a workaround and build the application. This error does not occur in production build

```bash
$ npm run build && npm run start
# or
$ yarn build && yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
