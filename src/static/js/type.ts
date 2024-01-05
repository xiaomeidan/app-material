export const MEMBER_TYPE = {
  MONTH: 1, // 月度会员
  QUARTER: 2, // 季度会员
  YEAR: 3, // 年度会员
  LASTING: 4, // 永久会员
}

export type MemberType = keyof typeof MEMBER_TYPE;