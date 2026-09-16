export type RoadmapNodeStatus = 'not-started' | 'learning' | 'mastered'

export type RoadmapTopic = {
  id: string
  title: string
  description: string
  level: string
  category: string
  prerequisites: string[]
  difficulty: string
  learnToComplete: string[]
  practice: string[]
  azureServices: string[]
}
