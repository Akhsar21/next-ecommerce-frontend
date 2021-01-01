import { useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import HeaderContext from "../contexts/HeaderContext";

export default function Navigation() {
  const router = useRouter();
  const { menuItems } = useContext(HeaderContext);
  return (
    <ul>
      {menuItems.map((item) => (
        <li key={item.id}>
          <Link href={item.slug}>
            <a className={router.pathname === item.slug ? "active" : ""}>
              {item.title}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
