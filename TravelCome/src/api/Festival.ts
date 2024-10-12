import { request } from "./client";

export const getFestivals = async () => {
  try {
    const res = await request.get({
      url: `/festivals`,
      params: {},
    });
    console.log("행사 정보 조회 완료", res);
    return res;
  } catch (error) {
    console.error("행사 정보 조회 오류:", error);
    throw error;
  }
};
