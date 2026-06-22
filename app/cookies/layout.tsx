import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Understand how Airalabel uses cookies to improve your browsing and account experience.',
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
