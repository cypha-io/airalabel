import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Airalabel for support and assistance with your orders.',
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
