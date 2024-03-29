// 本文件为ORM数据结构定义
// 本文件由toolchain/code_generator/service_orm/build自动生成,请勿手动修改

interface AuthCustomerSession {
  /**
   * sessionId
   */
  id?: string;
  /**
   * 代理人用户ID
   */
  userId?: string;
  /**
   * 客户id
   */
  customerId?: string;
  /**
   * 时间
   */
  createdAt?: number;
  [k: string]: any;
}

interface AuthSession {
  /**
   * sessionId
   */
  id: string;
  userName: string;
  coreAccountId: string;
  /**
   * 用户ID
   */
  userId: string;
  type: 1 | 2;
  /**
   * 时间
   */
  createdAt: number;
  /**
   * 1-移动端, 2-管理端
   */
  from?: number;
  [k: string]: any;
}

interface AuthTokenPermission {
  /**
   * token
   */
  id?: string;
  /**
   * 对应的系统用户id
   */
  userId?: string;
  /**
   * 过期时间
   */
  expiredAt?: number;
  [k: string]: any;
}

interface AuthUserIdSessionId {
  id: string;
  sessionId: string;
  /**
   * 时间
   */
  createdAt: number;
}

interface AuthWechatAccessToken {
  /**
   * 微信openid
   */
  id: string;
  accessToken: string;
  /**
   * 时间
   */
  createdAt: number;
}

