import Link from "next/link";

export interface IndexProps {}

const Index: React.SFC<IndexProps> = () => {
  return (
    <>
      <h1>Hello World</h1>
      <Link href="/page1">
        <a>Go to Page 1</a>
      </Link>
    </>
  );
};

export default Index;
