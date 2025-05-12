const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}',
    ),
    ...createGlobPatternsForDependencies(__dirname),
    '../../libs/shared-ui/src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui'],
      },
      borderWidth: {
        '1': '1px',
      },
      spacing: {
        'todo-add-input': 'calc(100% - 7.12rem)',
      },
      fontSize: {
        xxs: '0.65rem'
      },
      colors: {
        crimson: {
          100: '#F8D7DA',
          500: '#DC143C',
        },
        amber: {
          100: '#FFF3CD',
          500: '#FFBF00',
        },
        teal: {
          100: '#D1FAF9',
          500: '#008080',
        },
      },
      height: {
        'list-area': 'calc(100vh - 6.5rem)',
      },
      maxHeight: {
        'list-container': 'calc(100% - 6.0rem)',
      },

    },
  },
  plugins: [],
};
