import autoprefixer from "autoprefixer";
import postcssNested from "postcss-nested";
import tailwindcss from "tailwindcss";

export default {
  plugins: [tailwindcss(), autoprefixer(), postcssNested()],
};
