# Solidus NextJS Storefront

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Development

### Starting the server

```
  npm run dev
```

### Running the linter

Solidus NextJS Frontent uses StandardJS library as style guide, linter and formatter.
It works as a standlone system and doens't need an `.eslintrc` file.

```
  npm run lint
  npm run lint --fix # Automatically fixes all the offences
```

**Important:** install the standardjs extension for you editor [here](https://standardjs.com/#are-there-text-editor-plugins)

### Running the storybook

You can check the application components locally running the storybook server with this command:

```
  npm run storybook
```

and visiting the http://localhost:6006 page.

![storybook](https://user-images.githubusercontent.com/9986708/90254316-d3bfed80-de42-11ea-9162-8608e5e2a099.png)

### Creating a component

- Each component must be added under the `components` directory
- Create the directory with the name of the component (e.g. button)
- The `index.js` file contains the component
- The `index.stories.js` file containes the component definition for the story book
- The `__mock__` directory will contains the Apollo queries and mutations mock that should be used from the story book and the test as well
- The `queries.js` file should export all the components `queries`
- The `mutations.js` file should export all the components `mutations`
- Follow the style of the button component and the products_list one
- Each component must have the `propsTypes` and the `defaultProps`
