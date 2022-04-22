import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";
import styles from "~/styles/root.css";
import { IoMoonOutline } from "react-icons/io5";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

function Document({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

function Layout({ children }) {
  return (
    <main className="main_layout">
      <nav className="navbar">
        <div className="navbar_itens">
          <h2> Where in the World? </h2>
          <button className="dark_mode_button">
            <span>
              <IoMoonOutline className="moon_icon" />
            </span>
            <p>Dark Mode</p>
          </button>
        </div>
      </nav>
      <section>{children}</section>
    </main>
  );
}
