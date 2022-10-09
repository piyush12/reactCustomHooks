export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'centered',
  viewMode: 'docs',
  docs: {
    // Opt-out of inline rendering
    inlineStories: false,
  },
}