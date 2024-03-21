"use client";
import { usePathname } from "next/navigation";

const SinglePostPage = () => {
  const path = usePathname();
  return <div>{path}</div>;
};

export default SinglePostPage;
