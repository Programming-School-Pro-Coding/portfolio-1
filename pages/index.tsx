import type { GetStaticProps, NextPage } from "next";
import { HomePageCollection } from "types/directus";

import Hero from "@/components/Home/Hero";
import getAssetUrl from "@/utils/getAssetUrl";
import getPreviewImageUrl from "@/utils/getPreviewImageURL";

import directus from "lib/directus";

interface HomePageProps {
  content: HomePageCollection;
}

const HomePage: NextPage<HomePageProps> = ({ content }) => {
  return (
    <Hero
      heroHeading={content.heroHeading}
      heroText={content.heroText}
      image={content.heroImage}
    />
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await directus.singleton("homePage").read({
    fields:
      "heroHeading, heroText, heroImage.id, heroImage.height, heroImage.width",
  });

  data.heroImage.url = getAssetUrl(data.heroImage.id);

  data.heroImage.previewURL = await getPreviewImageUrl(data.heroImage.url);

  console.log(data);
  return {
    props: { content: data },
  };
};

export default HomePage;
