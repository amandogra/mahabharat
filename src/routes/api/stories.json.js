// stories.json.js
export const get = async () => {
  const allStoryFiles = import.meta.glob('../stories/*.md')
  const iterableStoryFiles = Object.entries(allStoryFiles)

  const allStories = await Promise.all(
    iterableStoryFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver()
      const storyPath = path.slice(2, -3)

      return {
        meta: metadata,
        path: storyPath,
      }
    })
  )

  const sortedStories = allStories.sort((a, b) => {
    return new Date(a.meta.date) - new Date(b.meta.date)
  })

  return {
    body: sortedStories
  }
}
