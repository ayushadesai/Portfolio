export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        geist: ['Geist', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['Inconsolata', 'ui-monospace', 'SFMono-Regular', 'monospace']
      }
    }
  },
  plugins: []
};
