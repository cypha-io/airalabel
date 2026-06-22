import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Shop Girls Clothing & Fashion',
  description: 'Browse Airalabel\'s collection of trendy girls clothing, dresses, tops, and fashion styles. Find the perfect outfit for any occasion.',
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
