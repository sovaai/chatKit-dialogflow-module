**ck-dialogflow** is separate module that connects to the widget. It is used to describe scripts and dialog rules.

## Install
For install `ck-dialogflow` enter next command:
```javascript
npm i ck-dialogflow
```

## Quick start
For quick start `ck-dialogflow` enter next command:
```
import ckModuleInit from 'ck-dialogflow'
const DialogflowModule = ckDialogflowInit(dialogflowConfig) 
 ```
 

# Description
## Dialogflow config
Configuration file includes:   
```javascript
const rasaConfig = {
  info: {
    projectId: string
    sessionId: string
  }
  api?: {
    infApiUrl: string,
  },
  events?: {
    ready?: string,
  },
  moduleEvents?: ModuleEvents
  uiEvents?: UiEventsList
  }
  moduleEvents?: {
    chatInit: (module: DialogflowModule, data: ChatInitData) => void
    chatRequest: (module: DialogflowModule, data: ChatRequestData) => void
    chatEvent: (module: DialogflowModule, data: ChatEventData) => void
    setInfo: (module: DialogflowModule, data: SetInfoData) => void
    reset: (module: DialogflowModule, data: ResetData) => void
  },
  uiEvents?: {
    sendMessage: (data: SendMessageData) => void
    uiManagment: (uiManagmentEvent: uiManagmentEvents, data: UIManagmentData) => void
    notifications: (notificationsEvent: NotificationsEvents, data: NotificationsData) => void
    modules: (modulesEvent: ModulesEvents, data: ModulesData) => void
  }
}
 ```

## API methods
`ck-dialogflow` has next API methods:

| API method                                                                                                                              |                                  | 
|-----------------------------------------------------------------------------------------------------------------------------------------|----------------------------------| 
| [chatInit](https://github.com/sovaai/chatKit-dialogflow-module/blob/master/docs/apimethods/chatInit.md "Read about this method")        | Dialog Initialization            |
| [chatRequest](https://github.com/sovaai/chatKit-dialogflow-module/blob/master/docs/apimethods/chatRequest.md "Read about this method")  | Sending user messages            |
| [chatEvent](https://github.com/sovaai/chatKit-dialogflow-module/blob/master/docs/apimethods/chatEvent.md "Read about this method")      | Chat events                      |
| [setInfo](https://github.com/sovaai/chatKit-dialogflow-module/blob/master/docs/apimethods/setInfo.md "Read about this method")          | Settings information             |
| [reset](https://github.com/sovaai/chatKit-dialogflow-module/blob/master/docs/apimethods/reset.md "Read about this method")              | Reset dialogue                   |


## Dialogflow.ModuleDispatcher
`moduleDispatcher` - method of event management.   
`moduleDispatcher` select method and transmits necessary data to it.  

For example: 
```javascript
import moduleInit from 'ck-dialogflow'   
const ckDialogflow = moduleInit(dlConfig)   
ckDialogflow.moduleDispatcher('chatInit', { clientConfig: { siteLang: 'ru' } })
```
