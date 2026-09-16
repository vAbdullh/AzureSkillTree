export type RoadmapNodeStatus = 'not-started' | 'learning' | 'mastered'

export type RoadmapTopic = {
  nodeId: string
  title: string
  category: string
  description: string
  prerequisites: string[]
}

// Topics will live alongside this contract as static TypeScript data.
// Firestore stores user progress only, keyed by nodeId.
