import ipConfig from '@/config/index'
import { postUtil } from '@/lib/request'

const { getUserInfoUrl } = ipConfig

export const getUserInfo = (userID) => {
  return postUtil(getUserInfoUrl, userID)
}
