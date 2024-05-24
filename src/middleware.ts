import {
  clerkMiddleware,
  createRouteMatcher
} from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

const isPublicRoutes = createRouteMatcher([
  '/',
  '/sign-in',
  '/sign-up'
]);

export default clerkMiddleware((auth, req) => {
  if (!isPublicRoutes(req)) {
    auth().protect();
  }
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};