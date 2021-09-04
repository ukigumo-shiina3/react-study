import Head from "next/head";
import { useComment } from "src/hooks/useComment";

export const Comment = () => {
  const { comment, error, isLoading } = useComment();

  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{comment?.name}</title>
      </Head>
      <p>name: {comment?.name}</p>
      <p>email: {comment?.email}</p>
      <p>body: {comment?.body}</p>
    </div>
  );
};
