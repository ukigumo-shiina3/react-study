import Head from "next/head";
import { useComment } from "src/hooks/useComment";

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
    </div>
  );
};
