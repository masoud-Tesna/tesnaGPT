import { ReactNode } from 'react';
import Image from 'next/image';
import chatGPTLogo from '/public/images/icons/ChatGPT.svg';
import TypedTextDescription from '@/app/(home)/components/typed-text-description';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import AuthLoading from '@/app/(home)/components/auth-loading';

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  const { userId } : { userId: string | null } = auth();
  
  if (userId) {
    redirect('/chat')
  }
  
  return (
    <div className="bg-home min-h-screen">
      <div className="md:min-h-screen grid grid-cols-1 md:grid-cols-auth gap-4 content-stretch">
        <div className="p-16 lg:px-[6%] pt-80 space-y-32 max-md:hidden">
          <div className="flex gap-x-12 items-center text-black-100 font-bold text-regular-18">
            <Image src={ chatGPTLogo } alt="TesnaGPT" width={45} />
            
            <div>
              TesnaGPT
            </div>
          </div>
          
          <div className="text-regular-24">
            <TypedTextDescription />
          </div>
        </div>
        
        <div className='md:hidden mt-48 mb-64'>
          <div className="center flex-col gap-y-12 text-black-100 font-bold text-regular-18">
            <Image src={ chatGPTLogo } alt="TesnaGPT" width={65} />
            
            <div>
              TesnaGPT
            </div>
          </div>
        </div>
        
        <div className="md:m-16 md:rounded-32 md:bg-white-100 center">
          { children }
        </div>
      </div>
    </div>
  );
}
