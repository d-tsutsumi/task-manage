import { ReactNode } from 'react';
import Layout from './layout';
import LoginLayoutNavbar from './../ui/navbar/loginLayoutNavbar';

export default function LoginLayout({ children }: { children: ReactNode }) {
  return <Layout NavBar={<LoginLayoutNavbar />}>{children}</Layout>;
}
