## tailwind preset

A tailwind preset mostly focused spacing and typography.

### Spacing

Some defaults for spacing and font sizes that don't require memorizing the `m-1` scale and instead can use `m-4px`.

See the [theme](https://github.com/alexanderchan/preset-tailwind/blob/main/src/theme.js)

### Typography

[typography](https://github.com/alexanderchan/preset-tailwind/blob/main/src/typography.js)
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
