# React + Docker + Travis CI Test Project

This project is a minimal React application designed to test the `.travis.yml`
configuration shown in the tutorial.

## Project flow

1. Travis CI starts Docker.
2. Travis builds `Dockerfile.dev`.
3. The Docker image installs the npm dependencies.
4. Travis starts a container from the image.
5. `npm run test` runs the React test suite with `CI=true`.

## Run locally

Build the image:

```bash
docker build -t ahmedgaml/docker-react -f Dockerfile.dev .
```

Run the tests:

```bash
docker run -e CI=true ahmedgaml/docker-react npm run test
```

Run the app:

```bash
docker run -p 3000:3000 ahmedgaml/docker-react
```

Then open http://localhost:3000.
