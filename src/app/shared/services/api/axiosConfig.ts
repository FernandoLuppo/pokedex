//  Dependencies
import axios from "axios"
//  Environment
import { Environment } from "../../environment"

export const Api = axios.create({
  baseURL: Environment.BASE_URL
})
