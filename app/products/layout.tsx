import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Products',
  description: 'Explore Airalabel premium products and solutions.',
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
