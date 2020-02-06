import {handleCors, handleBodyRequestParsing, handleCommpression} from './common'
import { handleAPIDoc } from "./apiDocs";

export default [handleCors, handleBodyRequestParsing, handleCommpression, handleAPIDoc];