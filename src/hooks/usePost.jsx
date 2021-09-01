import { useRouter } from "next/router";
import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";
// const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const usePost = () => {
  const router = useRouter();
  const { data: post, error: postError } = useSWR(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/posts/${router.query.id}`
      : null,
    fetcher
  );

  const { data: user, error: userError } = useSWR(
    post?.userId
      ? `https://jsonplaceholder.typicode.com/users/${post.userId}`
      : null,
    fetcher
  );
  return {
    post,
    user,
    error: postError || userError,
    isLoading: !user && !userError,
  };
};
