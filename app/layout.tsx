import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sadu Partners | شركة سدو بارتنرز',
  description:
    'Certified Public Accountants & Auditors in Riyadh, Saudi Arabia | محاسبون ومراجعون قانونيون في الرياض',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar">
      <body>{children}</body>
    </html>
  );
}
