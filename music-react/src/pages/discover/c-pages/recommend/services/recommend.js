import { request } from '@/services'

export function getbanner() {
  return request({
    url: "/banner",
    method: "GET"
  })
}