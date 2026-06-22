import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Learn about Airalabel\'s cookie policy and how we use cookies to enhance your shopping experience for girls fashion and clothing.',
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
