# Create your own custom DAO using aragonOSx

This is a Next.JS boilerplate providing developers with everything they need to get up and running with creating a DAO using aragonOSx SDK.

## Getting Started

First, clone the repository locally by running:

```bash
git clone <github clone link> && cd .
```

Then, install all packages by running:

```bash
npm install
```

To see the code live in your browser, run:

```bash
npm run dev
```

Open http://localhost:3000 with your browser to see the result.

Then, to start editing the codebase - your entry point to the app is going to be `pages/index.tsx`.
By diving into the `LandingPage` page, you'll find the `CreateDAOForm` which is the form that will create your DAO.

## Repository Rundown

Currently, this boilerplate contains all the UI you will need to get up and running to create your own custom DAO.

Within `pages`, you will find:
- ___app__: this is the file where we set up our Ethereum connection.
- __index.tsx__: the entrypoint to the home of the app.
- __components folder__: containing the components we'll use throught the UI
- __LandingPage__: Landing page design containing the DAO creation form.

We also have a file called `strings/index.tsx`, where you can find all the strings used within the platform. That way, if you ever want to internationalize this repository, you can do so easier, as well as support platform performance.

## Tech Stack

- [aragonOSx](https://aragon.org): DAO framework, permission management protocol.
- [Alchemy](https://alchemy.com/): Web3 provider.
- [RainbowKit](https://rainbowkit.com): Customize the wallet connection flow.
- [wagmi](https://wagmi.sh): Ethereum interaction.
- [Next.js](https://nextjs.org/docs): Building a Next.js application.
- [TailwindCSS](https://tailwindcss.com/): CSS framework.

