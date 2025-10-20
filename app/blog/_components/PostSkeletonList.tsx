const PAGE_SIZE = parseInt(process.env.PAGE_SIZE || "5", 10);
import { SkeletonPost } from "./SkeletonPost";

export function PostSkeletonList() {
  return (
    <div className="space-y-4">
      <ul className="space-y-3">
        {Array.from({ length: PAGE_SIZE }).map((_, i) => (
          <SkeletonPost key={i} />
        ))}
      </ul>
    </div>
  );
}
