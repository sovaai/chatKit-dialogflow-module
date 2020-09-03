import {
  DialogflowInfo,
  ModuleEvents,
  UiEvents,
  DialogflowConfig,
  DialogflowApi,
  DialogFlowEvents,
} from '../@types/dialogflow'

import {
  ModuleEventsData,
  ChatInitData,
  ChatEventData,
  ChatRequestData,
  SetInfoData,
  ModuleEventsNames,
} from '../@types/moduleEvents'
import {
  UiEventsNames,
  UiEventsData,
  SendMessageData,
  UIManagmentData,
  NotificationsData,
  ModulesData,
} from '../@types/uiEvents'
import { defaultSendMessage, defaultUIManagment, defaultNotifications, defaultModules } from '../events/defaultUiEvents'
import { setInfo, chatInit, chatEvent, chatRequest, reset } from '../events/moduleEvents'
const { INF_API_URL } = process.env
class DialogflowModule {
  name: string
  info: DialogflowInfo
  moduleEvents: ModuleEvents
  uiEvents: UiEvents
  api: DialogflowApi
  events: DialogFlowEvents
  constructor(config: DialogflowConfig) {
    const { info, moduleEvents, uiEvents, api, events } = config
    this.name = 'dialogflow'
    this.info = {
      sessionId: info.sessionId,
      projectId: info.projectId,
      sessionPath: '',
    }
    this.events = {
      ready: events?.ready ? events.ready : 'ready',
    }
    this.api = {
      infApiUrl: api?.infApiUrl || INF_API_URL || '',
    }
    this.uiEvents = {
      sendMessage: uiEvents?.sendMessage || defaultSendMessage,
      uiManagment: uiEvents?.uiManagment || defaultUIManagment,
      notifications: uiEvents?.notifications || defaultNotifications,
      modules: uiEvents?.modules || defaultModules,
    }
    this.moduleEvents = {
      setInfo: moduleEvents?.setInfo || setInfo,
      chatInit: moduleEvents?.chatInit || chatInit,
      chatEvent: moduleEvents?.chatEvent || chatEvent,
      chatRequest: moduleEvents?.chatRequest || chatRequest,
      reset: moduleEvents?.reset || reset,
    }
  }
  moduleDispatcher = async (event: ModuleEventsNames, data?: ModuleEventsData) => {
    event === 'chatInit' && data && (await this.moduleEvents[event](this, data as ChatInitData))
    event === 'chatEvent' && data && (await this.moduleEvents[event](this, data as ChatEventData))
    event === 'chatRequest' && data && (await this.moduleEvents[event](this, data as ChatRequestData))
    event === 'setInfo' && data && (await this.moduleEvents[event](this, data as SetInfoData))
    event === 'reset' && data && (await this.moduleEvents[event](this, data as ChatInitData))
  }
  uiDispatcher = (event: UiEventsNames, data: UiEventsData) => {
    event === 'sendMessage' && this.uiEvents[event](data as SendMessageData)
    event === 'uiManagment' &&
      this.uiEvents[event]((data as UIManagmentData).uiManagmentEvent, (data as UIManagmentData).data)
    event === 'notifications' &&
      this.uiEvents[event]((data as NotificationsData).notificationEvent, (data as NotificationsData).data)
    event === 'modules' && this.uiEvents[event]((data as ModulesData).modulesEvent, (data as ModulesData).data)
  }
}
export { DialogflowModule }
