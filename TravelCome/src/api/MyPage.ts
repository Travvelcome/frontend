import { request } from "./client";

export const getMyPageStamp = async (userId: string | null) => {
  try {
    const res = await request.get({
      url: `/mypage/stamp?userId=${userId}`,
      params: {},
    });
    console.log("스탬프 개수 조회 완료", res);
    return res;
  } catch (error) {
    console.error("스탬프 개수 조회 오류:", error);
    throw error;
  }
};

export const putMyPageInterest = async (
  categories: string,
  userId: string | null
) => {
  try {
    const res = await request.put({
      url: `/mypage/interest?${categories}&userId=${userId}`,
      params: {},
    });
    console.log("유저 관심사 수정 완료", res);
    return res;
  } catch (error) {
    console.error("유저 관심사 수정 오류:", error);
    throw error;
  }
};
