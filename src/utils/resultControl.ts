import { DialogflowModule } from '../@types/dialogflow'
import { SendMessageData, UIManagmentData } from '../@types/uiEvents'
import { msgPrepare } from './regExp'

export const resultControl = async (module: DialogflowModule, result: any) => {
  const {queryResult} = result[0]
  if (queryResult?.fulfillmentText) {
    const text = msgPrepare(queryResult?.fulfillmentText)
    const data: SendMessageData = {
      text: text? text: 'что-то не так',
      sender: 'request',
      showRate: result?.text?.showRate,
      type: 'text',
      module: module.name
    }
  text && (await module.uiDispatcher('sendMessage', data))
  }
  if (result?.text?.showRate) {
    const data: UIManagmentData = {
      uiManagmentEvent: 'showRate',
      data: true,
    }
    await module.uiDispatcher('uiManagment', data)
  }
}
