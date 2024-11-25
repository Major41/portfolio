/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '475px', // Extra small devices
        sm: '640px', // Small devices (Tablets)
        md: '768px', // Medium devices (Small Laptops)
        lg: '1024px', // Large devices (Laptops and Desktops)
        xl: '1280px', // Extra large devices
        '2xl': '1536px', // Extra extra large devices
        // Custom breakpoints if needed
        '3xl': '1920px', // 4K screens
      },
    },
  },
  plugins: [],
};
