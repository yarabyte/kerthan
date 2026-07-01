import { SitePage } from "@/components/site/site-page";
import { getSiteContent } from "@/lib/content";

export default async function HomePage() {
  const content = await getSiteContent();
  return <SitePage content={content} />;
}
