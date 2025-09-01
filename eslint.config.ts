import eslintConfig from "@krudi/eslint-config";
import { defineConfig } from "eslint/config";

export default defineConfig([
  eslintConfig.base,
  eslintConfig.prettier,
  eslintConfig.turbo,
]);
