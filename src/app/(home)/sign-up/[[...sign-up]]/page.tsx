import { SignUp } from "@clerk/nextjs";
import { Suspense } from 'react';
import AuthLoading from '@/app/(home)/components/auth-loading';

export default function Page() {
  return (
    <Suspense fallback={<AuthLoading />}>
      <SignUp />
    </Suspense>
  )
}
