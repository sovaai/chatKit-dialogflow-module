import {
  ModuleEventsData,
  ChatInitData,
  ChatRequestData,
  ChatEventData,
  SetInfoData,
  ChatRateData,
  ChatTrackData,
  NotificationDisplayData,
  ChatTimerAnnouncementsRequestData,
  ModuleEventsNames,
  ResetData,
} from './moduleEvents'
import {
  SendMessageData,
  UiData,
  NotificationsEvents,
  NotificationsData,
  UIManagmentData,
  ModulesEvents,
  ModulesData,
} from './uiEvents'
import { CKModule, InitConfig, UiEventsList } from './module'
export interface DialogflowInfo {
  sessionId: string
  projectId: string
  sessionPath: string
}
export interface DialogflowApi {
  infApiUrl: string
}
export interface DialogFlowEvents {
  ready: string
}

export interface ModuleEvents {
  chatInit: (module: DialogflowModule, data: ChatInitData) => void
  chatRequest: (module: DialogflowModule, data: ChatRequestData) => void
  chatEvent: (module: DialogflowModule, data: ChatEventData) => void
  setInfo: (module: DialogflowModule, data: SetInfoData) => void
  reset: (module: DialogflowModule, data: ResetData) => void
}
export interface UiEvents {
  sendMessage: (data: SendMessageData) => void
  uiManagment: (uiManagmentEvent: uiManagmentEvents, data: UIManagmentData) => void
  notifications: (notificationsEvent: NotificationsEvents, data: NotificationsData) => void
  modules: (modulesEvent: ModulesEvents, data: ModulesData) => void
}
export interface DialogflowModule extends CKModule {
  info: DialogflowInfo
  api: DialogflowApi
  events: DialogFlowEvents
  moduleEvents: ModuleEvents
  uiEvents: UiEvents
  moduleDispatcher: (event: ModuleEventsNames, data?: ModuleEventsData) => void
}
export interface DialogflowConfig {
  info: {
    projectId: string
    sessionId: string
  }
  api?: {
    infApiUrl: string
  }
  events?: {
    ready?: string
  }
  moduleEvents?: ModuleEvents
  uiEvents?: UiEventsList
}
