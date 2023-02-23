<h1 align="center"><code>ft_github</code></h1>

<div align="center">
  <sub>Created by <a href="https://github.com/jgengo">Jordane Gengo (Titus)</a></sub>
</div>
<div align="center">
  <sub>From <a href="https://hive.fi">Hive Helsinki</a></sub>
</div>

---

![sign in page](./.github/docs/sign_in.png)
![once logged in](./.github/docs/logged_in.png)

<br>

`ft_github` is a small side-project I created to experiment with NextJS. We already have running [@HiveHelsinki](https://github.com/hivehelsinki) a Ruby on Rails version of this site but wanted to give a shot with NextJS to compare the projects size.

## Getting Started

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

## Good to know

If you are not a school maintainer recognized by Github, you might not have the secrets needed to run the application, but you can at least use this project as an example to log in via 42 OAuth.
