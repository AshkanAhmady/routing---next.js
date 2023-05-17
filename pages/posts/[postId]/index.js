import { useRouter } from "next/router";

const SinglePost = () => {
  const router = useRouter();
  const { postId } = router.query;

  return <h1>the single post with id: {postId}</h1>;
};

export default SinglePost;
