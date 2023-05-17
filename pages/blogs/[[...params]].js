import { useRouter } from "next/router";

const blog = () => {
  const router = useRouter();
  const { params } = router.query;

  return <h1>optional catch all routes: {JSON.stringify(params)}</h1>;
};

export default blog;
