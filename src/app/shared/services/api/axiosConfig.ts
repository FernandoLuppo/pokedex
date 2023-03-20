import axios from "axios"

const url = process.env.BASE_URL

export const Api = axios.create({
  baseURL: url
})
