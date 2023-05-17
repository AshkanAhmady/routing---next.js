import { useRouter } from "next/router";

const ReviewPost = () => {
  const router = useRouter();
  const { postId, reviewId } = router.query;

  return (
    <h1>
      review: {reviewId} for post: {postId}
    </h1>
  );
};

export default ReviewPost;
