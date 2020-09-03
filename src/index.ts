import { DialogflowModule } from './module/dialogflow'
import { DialogflowConfig } from './@types/dialogflow'
const ckModuleInit = (config: DialogflowConfig) => new DialogflowModule(config)
export default ckModuleInit
