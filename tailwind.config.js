module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
  
	script: {
	"build:tailwind": "tailwindcss --input input.css --output tailwind.css --no-autoprefixer && tailwind-rn",
	"dev:tailwind": "concurrently \"tailwindcss --input input.css --output tailwind.css --no-autoprefixer --watch\" \"tailwind-rn --watch\""
	}


}
