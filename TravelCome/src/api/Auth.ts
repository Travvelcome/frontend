import { request } from "./client";

export const getKakaoLogin = async (code: string) => {
  try {
    const res = await request.get({
      url: `/callback?code=${code}`,
      params: {},
    });
    console.log("카카오 로그인 완료", res);
    return res;
  } catch (error) {
    console.error("카카오 로그인 오류:", error);
    throw error;
  }
};

export const postKaKaoUnlink = async (accessToken: string | null) => {
  try {
    const res = await request.post({
      url: `/unlink?accessToken=${accessToken}`,
      params: {},
    });
    console.log("카카오 계정탈퇴 완료", res);
    return res;
  } catch (error) {
    console.error("카카오 계정탈퇴 오류:", error);
    throw error;
  }
};

export const postKaKaoLogout = async (accessToken: string | null) => {
  try {
    const res = await request.post({
      url: `/logout?accessToken=${accessToken}`,
      params: {},
    });
    console.log("카카오 로그아웃 완료", res);
    return res;
  } catch (error) {
    console.error("카카오 로그아웃 오류:", error);
    throw error;
  }
};
