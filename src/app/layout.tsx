import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Providers from '@/app/_providers';
import { ReactNode } from 'react';
import { ClerkProvider, SignedIn, UserButton, UserProfile } from '@clerk/nextjs';
import { dark } from '@clerk/themes';

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: 'TesnaGpt',
  description: 'Tesna chatGpt'
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        elements: {
          headerTitle: 'max-md:!hidden',
          cardBox: '!shadow-none !bg-transparent md:!bg-white-100  !border-0 !backdrop-blur-100 !rounded-none',
          footer: '!bg-none',
          card: '!bg-transparent !border-0 !rounded-none !shadow-none p-16 md:p-28',
          formButtonPrimary: 'rounded-16 bg-primary-brand py-16 px-24',
          socialButtons: 'gap-8 lg:gap-16 max-md:!grid-cols-3',
          socialButtonsIconButton: '!rounded-16 !p-16 !shadow-none',
          socialButtonsIconButton__google: '!bg-social-google hover:!bg-social-google/40',
          socialButtonsIconButton__facebook: '!bg-social-facebook hover:!bg-social-facebook/40',
          socialButtonsIconButton__microsoft: '!bg-social-microsoft hover:!bg-social-microsoft/40',
          socialButtonsProviderIcon: '!size-24'
        }
      }}
      afterSignOutUrl={'/'}
      signInUrl={'sign-in'}
      signUpUrl={'sign-up'}
    >
      <html suppressHydrationWarning lang="en" className='dark min-h-screen bg-white-100'>
      <body className={ poppins.className }>
      <Providers>
        { children }
      </Providers>
      </body>
      </html>
    </ClerkProvider>
  );
}
