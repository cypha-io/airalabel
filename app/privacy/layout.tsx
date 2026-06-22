import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Review how Airalabel collects, uses, and protects your personal and order information.',
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
