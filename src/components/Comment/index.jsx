import Head from "next/head";
import { useComment } from "src/hooks/useComment";
import { PostByCommentId } from "../Post/PostByCommentId";

export const Comment = () => {
  const { data, error, isLoading } = useComment();

  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{data?.name}</title>
      </Head>
      <p>name: {data?.name}</p>
      <p>email: {data?.email}</p>
      <p>body: {data?.body}</p>
      <h2>元の記事</h2>
      <PostByCommentId id={data.postId} />
    </div>
  );
};
