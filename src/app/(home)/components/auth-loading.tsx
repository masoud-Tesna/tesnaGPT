import { Skeleton } from '@nextui-org/skeleton';

const AuthLoading = () => {
  return (
    <div className="w-full space-y-[10vh] p-32">
      <div className="space-y-3 center flex-col">
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
        </Skeleton>
      </div>
      
      <div className="grid gap-16 grid-cols-3">
        <Skeleton className="rounded-16">
          <div className="h-56 rounded-16 bg-default-300"></div>
        </Skeleton>
        
        <Skeleton className="rounded-16">
          <div className="h-56 rounded-16 bg-default-300"></div>
        </Skeleton>
        
        <Skeleton className="rounded-16">
          <div className="h-56 rounded-16 bg-default-300"></div>
        </Skeleton>
      </div>
      
      <div className="grid gap-8 grid-cols-1">
        <Skeleton className="w-2/5 rounded-lg">
          <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        
        <Skeleton className="rounded-16">
          <div className="h-[33px] rounded-16 bg-default-300"></div>
        </Skeleton>
        
        <Skeleton className="rounded-16 mt-24">
          <div className="h-[50px] rounded-16 bg-default-300"></div>
        </Skeleton>
      </div>
      
      <div className="center">
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
        </Skeleton>
      </div>
    </div>
  );
};

export default AuthLoading;
