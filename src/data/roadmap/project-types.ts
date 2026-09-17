export type NodeKind = 'level' | 'concept' | 'challenge'
export type ConceptCode = 'COM' | 'NET' | 'WEB' | 'IAM' | 'CLI' | 'STO' | 'DAT' | 'KEY' | 'APP' | 'OBS' | 'IAC' | 'CICD' | 'CON' | 'HA' | 'DR' | 'GOV' | 'SEC' | 'ARC' | 'OPT'
export interface LearningLevel {
  id: string
  kind: 'level'
  number: number
  title: string
  description: string
}
export interface LearningConcept {
  id: string
  kind: 'concept'
  levelId: string
  code: ConceptCode
  title: string
  description: string
}
export interface Challenge {
  id: string
  kind: 'challenge'
  title: string
  levelId: string
  conceptId: string
  scenario: string
  mission: string
  guidance: string[]
  continuesFrom: string[]
  prerequisites: string[]
  learnToComplete: string[]
  requirements: string[]
  doneWhen: string[]
  evidence: string[]
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Capstone'
  estimatedHours: string
  starterAsset?: { type: string; description: string; generatePrompt: string }
  capstone?: boolean
  failureDemonstration?: string[]
}
export type LearningNode = LearningLevel | LearningConcept | Challenge
