## Installation

```sh
yarn add -D @alexmchan/preset-tailwind @tailwindcss/typography
```

example `tailwind.config.js` next config

```tsx
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@alexmchan/preset-tailwind')],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: ['@tailwindcss/typography'],
}
```
