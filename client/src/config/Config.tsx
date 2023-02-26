export let BASE_URL: string;

if (import.meta.env.MODE === "development") {
  BASE_URL = import.meta.env.VITE_DEVELOPMENT_URL;
}
if (import.meta.env.MODE === "production") {
  BASE_URL = import.meta.env.VITE_PROUDCTION_URL;
}
