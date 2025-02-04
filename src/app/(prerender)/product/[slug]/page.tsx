import RandomText from "./_components/RandomText";

interface PageProps {
  params: Promise<{ slug: string }>
}

export default function Page({ params }: PageProps) {
  return <RandomText params={params} />
}
