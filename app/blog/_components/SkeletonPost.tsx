import { ArrowRight } from "lucide-react";

export function SkeletonPost() {
  return (
    <li className="list-none">
      {" "}
      <div className="block bg-white border border-gray-300 rounded-lg p-5">
        {" "}
        <div className="flex items-center gap-4">
          {" "}
          <div className="flex-shrink-0 w-10 h-10 rounded bg-gray-200 border border-gray-300 animate-pulse"></div>{" "}
          <div className="flex-1 min-w-0">
            {" "}
            <div className="h-7 bg-gray-200 rounded mb-0.5 animate-pulse"></div>{" "}
            <div className="h-5 bg-gray-200 rounded w-3/4 animate-pulse"></div>{" "}
          </div>{" "}
          <ArrowRight className="mr-2 h-4 w-4 text-gray-400" />{" "}
        </div>{" "}
      </div>{" "}
    </li>
  );
}
