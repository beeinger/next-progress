import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Something that takes a long time, simulating a heavy page
  await new Promise((resolve) => setTimeout(resolve, 10000));

  return {
    props: {},
  };
};
