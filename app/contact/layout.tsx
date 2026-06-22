import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Airalabel for customer support, fashion inquiries, and order assistance. We\'re here to help with your girls clothing purchase.',
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
