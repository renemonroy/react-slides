# ⎅ React Slides

Creates slides from data (WIP). Depends on React (obviously), React Spring, react-use-gesture and Styled Components.

## Usage

Suppose you have a beautiful `MovieCard` component for some fav movies that need to be rendered as slideshow:

```JSX
const cardsMovieData = [
  { title: "La vita è bella", origin: "Italy" },
  { title: "Okuribito", origin: "Japan" }, 
  { title: "Capernaum", origin: "Lebanon" },
  { title: "La Jetée", origin: "France" },
  { title: "Roma", origin: "Mexico" },
];

function MovieSlides() {
  return (
    <Slides items={cardsMovieData} disableDots>
      {(movieData) => (
        <MovieCard {...movieData} />
      )}
    </Slides>
  );
}
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the dev server with Storybook. Open [http://localhost:6006](http://localhost:6006/?path=/story/main-components-slides--with-gap) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

This is a screenshot example:
<img width="689" alt="CleanShot 2021-04-06 at 00 28 20@2x" src="https://user-images.githubusercontent.com/106011/113663114-143cd780-966f-11eb-9811-51fedb0662e9.png">


### `yarn build`

Uses Rollup to build the app for production to the `build` folder. The build is minified and the filenames include the hashes.
