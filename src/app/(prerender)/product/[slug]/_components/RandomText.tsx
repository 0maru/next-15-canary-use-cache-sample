'use cache'

interface RandomTextProps {
  params: Promise<{ slug: string }>
}

const getRandomNumber = async (slug: string): Promise<string> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return Math.floor(Math.random() * 100).toString() + `slug: ${slug}`;
};

export default async function RandomText({ params }: RandomTextProps) {

  const { slug } = await params;
  const randomNumber = await getRandomNumber(slug);
  return <div>/(prerender)/product/[slug] {randomNumber}</div>
}