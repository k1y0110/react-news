import { PostItem } from './interface'
const URL_HEAD = 'https://hacker-news.firebaseio.com/v0'

export const createPosts = async (category: string): Promise<PostItem[]> => {
  const r: number[] = await (await fetch(`${URL_HEAD}/${category}stories.json`)).json()
  const posts = await pickupPosts(r)
  return posts
}

const limitPosts = 20
async function pickupPosts(getPosts: number[]): Promise<PostItem[]> {
  const postIds = getPosts
  if (postIds == null) return []

  const posts = []
  let newsCount = 0

  while (newsCount < limitPosts) {
    const post = getPostData(postIds[newsCount])
    posts.push(post)
    newsCount++
  }

  const items = await Promise.all(posts)
  const isNotNull = <T>(item: T | null): item is T => item != null
  return items.filter(isNotNull)
}

async function getPostData(id: number): Promise<PostItem | null> {
  try {
    const url = `${URL_HEAD}/item/${id}.json`
    const response = await window.fetch(url)
    const postData: PostItem = await response.json()
    return postData
  } catch (e) {
    console.error(e)
    return null
  }
}