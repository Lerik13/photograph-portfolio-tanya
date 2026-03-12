import { defineConfig } from "astro/config";
import tailwind from "@tailwindcss/vite";
import icon from "astro-icon";

export default defineConfig({
  vite: {
    plugins: [tailwind()],
  },
  integrations: [
    icon({
      include: {
        lucide: ["arrow-right"],
				ri: ["phone-fill", "instagram-line", "facebook-line", "vk-line"],
				"simple-icons": ["vk"],
      },
    }),
  ],
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
});
