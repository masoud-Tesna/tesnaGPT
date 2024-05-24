import { SignedIn, UserButton } from '@clerk/nextjs';

const ChatPage = () => {
  return (
    <div>
      <SignedIn>
        <UserButton afterSignOutUrl='/' />
      </SignedIn>
      
      ChatPage
    </div>
  );
};

export default ChatPage;
