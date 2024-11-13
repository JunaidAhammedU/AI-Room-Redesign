import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[100px] w-full sm:h-[125px] sm:w-[100%] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-3/4 sm:w-[100%]" />
        <Skeleton className="h-4 w-1/2 sm:w-[80%]" />
      </div>
    </div>
  );
}
