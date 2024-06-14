import Footer from "@/components/Footer";
import Header1 from "@/components/Header1";
import Header2 from "@/components/Header2";
import Header3 from "@/components/Header3";
import Header4 from "@/components/Header4";
import Head from "next/head";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <Head>
        <title>
          OYO : India's best online hotel booking site for sanitized stay
        </title>
        <meta
          name="description"
          content="India's best online hotel booking site for sanitized stay"
        />
        <link rel="shortcut icon" href="/icon.png" type="image/x-icon" />
      </Head>
      <Header1 />
      <Header2 />
      <Header3 />
      <div className="mx-20">
        <div className="my-14">
          <Image
            src={"/banner1.avif"}
            alt="banner1"
            width={200}
            height={200}
            className="h-50 w-full my-[60px]"
          />
          <Image
            src={"/banner2.avif"}
            alt="banner1"
            width={200}
            height={200}
            className="h-fit w-full my-[60px] mb-14"
          />
        </div>
        <Header4 />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
