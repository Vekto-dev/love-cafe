import { getInstagramPosts } from "@/lib/instagram"
import { InstagramCarousel } from "./InstagramCarousel"

export async function InstagramFeed() {
  const posts = await getInstagramPosts()
  return <InstagramCarousel posts={posts} />
}
