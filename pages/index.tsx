import type { NextPage } from "next";
import Head from "next/head";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const Home: NextPage = () => {
  const onDrop = useCallback((acceptedFiles: any) => {}, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  return (
    <div {...getRootProps()}>
      <Head>
        <title>Upload images for free</title>
      </Head>

      <main>
        <h1 className="mt-32 text-center text-4xl font-extrabold md:text-6xl lg:text-7xl">
          Image Uploader
        </h1>
      </main>
    </div>
  );
};

export default Home;
