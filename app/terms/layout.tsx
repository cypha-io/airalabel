import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Read Airalabel terms for purchases, payments, returns, and service usage.',
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
