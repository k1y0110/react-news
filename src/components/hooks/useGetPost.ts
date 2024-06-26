import { useState, useEffect } from 'react'
import { Category, PostItem } from './interface'
import { createPosts } from './getAsyncPosts'


interface getPostsProps {
  isLoading: boolean
  textCategory: string
  categories: Category
  postDatas: PostItem[]
  setCategory: React.Dispatch<React.SetStateAction<string>>
}

export const useGetPosts = (): getPostsProps => {

  const [isLoading, setIsLoading] = useState(true)

  const [category, setCategory] = useState('top')

  const postDataKey: PostItem[] = []
  const [postDatas, setPosts] = useState(postDataKey)

  const loadPosts = () => {
    const fetch = async (): Promise<void> => {
      setIsLoading(true)
      const response = await createPosts(category)
      setPosts(response)
      setIsLoading(false)
    }

    fetch()
      .catch((error: Error) => {
        console.error(error.message)
      })
  }

  useEffect(loadPosts, [category])

  const categories: Category = {
    top: 'top',
    new: 'new',
    best: 'best'
  }

  var textCategory = categories[category]
  return { isLoading, textCategory, categories, postDatas, setCategory }
}
