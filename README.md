<h1 align="center"><code>ft_github</code></h1>

<div align="center">
  <sub>Created by <a href="https://github.com/jgengo">Jordane Gengo (Titus)</a></sub>
</div>
<div align="center">
  <sub>From <a href="https://hive.fi">Hive Helsinki</a></sub>
</div>

<br><br>

# Introduction

![sign in page](./.github/docs/sign_in.png)
![once logged in](./.github/docs/logged_in.png)

<br>

`ft_github` is a small side-project that allows Github education managers (of the 42 network) to enable their students to generate activation links for accessing Github's student benefits.

We already have a Ruby on Rails version of this site running at [@HiveHelsinki](https://github.com/hivehelsinki), but I wanted to experiment with NextJS and Tailwind to compare project sizes.

Please note that if you are not a school maintainer recognized by Github, you may not have the necessary secrets to run the application. However, you can still use this project as an example to log in via 42 OAuth.

<br>

# Getting Started

First, You will need to create an intra API app from [https://profile.intra.42.fr/oauth/applications/new](https://profile.intra.42.fr/oauth/applications/new)

Then, create a .env file and fill the information inside.

```bash
cp .env.sample .env
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
