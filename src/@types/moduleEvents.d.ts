import { DialogflowEventsNames, DialogflowInfo } from './Dialogflow'

export interface RandomContext {
  [key: string]: any
}
export interface ChatRequestData {
  text: string
  context?: RandomContext
}
export interface ChatInitData {
  moduleInfo?: DialogflowInfo
  clientConfig: RandomContext
}
export interface SetInfoData {
  sessionId?: string
  sessionPath?: string
  projectId?: string
}
export interface ChatEventData {
  eventName: string
  context?: RandomContext
}
export interface ResetData {
  moduleInfo?: DialogflowInfo
  clientConfig: RandomContext
}

export type ModuleEventsNames = 'chatInit' | 'chatRequest' | 'setInfo' | 'chatEvent' | 'reset'

export type ModuleEventsData = ChatRequestData | ChatEventData | ChatInitData | SetInfoData | ResetData
