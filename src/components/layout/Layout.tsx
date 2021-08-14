import { ReactElement, ReactNode } from "react";
import Header from "./header/Header";
import Nav from "./Nav";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps): ReactElement {
  return (
    <>
      <Header />
      <Nav />
      <main>{children}</main>
    </>
  );
}
