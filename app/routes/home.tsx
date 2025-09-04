import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "User Directory Viewer" },
    { name: "description", content: "Welcome to User Directory Viewer!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
