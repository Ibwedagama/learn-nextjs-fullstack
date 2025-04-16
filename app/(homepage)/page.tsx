import Post from '../_components/Post'

import prisma from '@/lib/prisma'

async function getPosts() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true }
      }
    }
  })

  return posts
}

export default async function Home() {
  const posts = await getPosts()
  return (
    <main className="flex flex-col max-w-3xl mx-auto py-10">
      <h1 className="text-xl font-bold mb-10">Feed</h1>
      <ul>
        {posts.map((post) => (
          <Post
            key={post.id}
            authorName={post.author?.name || ''}
            title={post.title}
            content={post.content || ''}
          />
        ))}
      </ul>
    </main>
  )
}
