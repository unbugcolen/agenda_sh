// 本文件由toolchain/code_generator/service/build自动生成,请勿手动修改

interface AccountCreateRequest {
  /**
   * 上级ID
   */
  superiorId: string;
  /**
   * {"ORGANIZATION":1,"PERSONNEL":2}
   */
  type: 1 | 2;
}

interface AccountCreateResponse {
  /**
   * {"SUCCESS":0,"REACH_LIMIT":1,"NO_SUCH_SUPERIOR":2}
   */
  ret?: 0 | 1 | 2;
  /**
   * 所创建的下级ID
   */
  subordinateId?: string;
  [k: string]: any;
}

