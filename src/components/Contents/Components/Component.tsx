import { useLocation } from "react-router-dom";

export function Component() {
  const { pathname } = useLocation();
  console.log(pathname);
  return <div>comp</div>;
}
