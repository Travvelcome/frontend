import { request } from "./client";

export const getLandmarkFind = async () => {
  console.log("랜드마크 발견하기:");
  try {
    const res = await request.get({
      url: "/landmarks/find/1",
      params: {},
    });
    console.log("랜드마크 발견 성공", res);
    return res;
  } catch (error) {
    console.error("랜드마크 발견 오류:", error);
    throw error;
  }
};
