import { SetInfoData, ChatInitData, ChatRequestData, ChatEventData, ResetData } from '../@types/moduleEvents'
import { DialogflowModule } from '../@types/dialogflow'
import { resultControl } from '../utils/resultControl'
import { postFetch } from '../utils/fetch'
import { ChatInitFetch, ChatRequestFetch, ChatEventFetch } from '../@types/common'

export const setInfo = (module: DialogflowModule, data: SetInfoData) => {
  const { sessionPath, sessionId, projectId } = data
  if (sessionPath) module.info.sessionPath = sessionPath
  if (sessionId) module.info.sessionId = sessionId
  if (projectId) module.info.projectId = projectId
}
export const reset = async (module: DialogflowModule, data: ResetData) => {
  module.moduleDispatcher('chatInit', data)
}
export const chatInit = async (module: DialogflowModule, data: ChatInitData) => {
  const { sessionId, projectId } = module.info
  const eventName = module.events.ready
  const { infApiUrl } = module.api
  const initData: ChatInitFetch = {
    sessionId,
    projectId,
  }
  const url = `${infApiUrl}/ckWebhook/dialogFLow/chatInit`
  const result = await postFetch(initData, url)
  module.moduleDispatcher('setInfo', result)
  const eventData = {
    eventName,
    context: data.clientConfig,
  }
    module.moduleDispatcher('chatEvent', eventData)
}

export const chatRequest = async (module: DialogflowModule, data: ChatRequestData) => {
  const { sessionPath } = module.info
  const { infApiUrl } = module.api
  const { text, context } = data
  const languageCode = context?.env_sitelang ? context?.env_sitelang : 'ru'
  const requestData: ChatRequestFetch = {
    sessionPath,
    text,
    languageCode,
  }
  const url = `${infApiUrl}/ckWebhook/dialogFLow/chatRequest`
  const result = await postFetch(requestData, url)
  resultControl(module, result)
}
export const chatEvent = async (module: DialogflowModule, data: ChatEventData) => {
  const { sessionPath } = module.info
  const { infApiUrl } = module.api
  const { eventName, context } = data
  const languageCode = context?.env_sitelang ? context?.env_sitelang : 'ru'
  const requestData: ChatEventFetch = {
    sessionPath,
    eventName,
    languageCode,
  }
  const url = `${infApiUrl}/ckWebhook/dialogFLow/chatEvent`
  const result = await postFetch(requestData, url)
  resultControl(module, result)
}
