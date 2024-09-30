import { request } from "./client";

export const getKakaoLogin = async (code: string) => {
  try {
    const res = await request.get({
      url: `/user/kakao?code=${code}`,
      params: {},
    });
    console.log("카카오 로그인 완료", res);
    return res;
  } catch (error) {
    console.error("카카오 로그인 오류:", error);
    throw error;
  }
};
