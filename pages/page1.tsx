import Link from "next/link";

export interface Page1Props {}

const Page1: React.SFC<Page1Props> = () => {
  return (
    <>
      <h1>This is page 1</h1>
      <Link href="/">
        <a>Go to home</a>
      </Link>
    </>
  );
};

export default Page1;
