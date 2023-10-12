const devBaseURL = "http://httpbin.org"
const proBaseURL = "http://production.org"

// process.env 环境变量配置
export const BASE_URL = process.env.NODE_ENV === "development" ? devBaseURL : proBaseURL


export const TIME_OUT = 5000