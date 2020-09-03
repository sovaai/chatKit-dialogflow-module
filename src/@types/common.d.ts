export interface ChatInitFetch {
  sessionId: string
  projectId: string
}
export interface ChatRequestFetch {
  text: string
  languageCode: string
  sessionPath: string
}
export interface ChatEventFetch {
  eventName: string
  languageCode: string
  sessionPath: string
}
