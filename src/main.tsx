import ReactDOM from "react-dom/client";
import "./components/App/App.module.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from "./components/App/App";
import "modern-normalize/modern-normalize.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

const apiKey = import.meta.env.VITE_TMDB_TOKEN;

fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
  .then((res) => res.json())
  .then((data) => console.log(data));
