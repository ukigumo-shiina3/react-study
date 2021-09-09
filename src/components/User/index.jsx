import Head from "next/head";
import { useUser } from "src/hooks/useUser";
import { PostsByUserId } from "src/components/Posts/PostsByUserId";

export const User = () => {
  const { data, error, isLoading } = useUser();

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
        <h2>詳細</h2>
      </Head>
      <h1>{data?.name}</h1>
      <p>email: {data?.email}</p>
      <p>city: {data?.address.city}</p>
      <p>phone: {data?.phone}</p>
      <p>website: {data?.website}</p>
      <p>company: {data?.company.name}</p>
      <h2>投稿</h2>
      <PostsByUserId id={data.id} />
    </div>
  );
};
