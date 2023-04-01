import Layout from "./layout";
import ShareLayoutNavBar from '../ui/navbar/shareLayoutNavBar';
import { ReactNode } from "react";


export default function ShereLayout ({ children }: { children: ReactNode }) {
  return <Layout NavBar={<ShareLayoutNavBar />}>{children}</Layout>;
}