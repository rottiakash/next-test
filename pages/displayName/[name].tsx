import { useRouter } from "next/router";
export interface DisplayProps {}

const Display: React.SFC<DisplayProps> = () => {
  const router = useRouter();
  const { name } = router.query;
  return <h1>Hello, {name}</h1>;
};

export default Display;
