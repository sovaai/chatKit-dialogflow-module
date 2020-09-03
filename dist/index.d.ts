import { DialogflowInfo, ModuleEvents, UiEvents, DialogflowConfig, DialogflowApi, DialogFlowEvents } from "../@types/dialogflow";
import { ChatInitData, ChatEventData, ChatRequestData, SetInfoData, ModuleEventsNames } from "../@types/moduleEvents";
import { UiEventsNames, UiEventsData } from "../@types/uiEvents";
import { DialogflowConfig as DialogflowConfig$0 } from './@types/dialogflow';
declare class DialogflowModule {
    name: string;
    info: DialogflowInfo;
    moduleEvents: ModuleEvents;
    uiEvents: UiEvents;
    api: DialogflowApi;
    events: DialogFlowEvents;
    constructor(config: DialogflowConfig);
    moduleDispatcher: (event: ModuleEventsNames, data?: SetInfoData | import("@types/moduleEvents").ResetData | ChatInitData | ChatRequestData | ChatEventData | undefined) => Promise<void>;
    uiDispatcher: (event: UiEventsNames, data: UiEventsData) => void;
}
declare const ckModuleInit: (config: DialogflowConfig$0) => DialogflowModule;
export { ckModuleInit as default };
