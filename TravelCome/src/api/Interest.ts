import { request } from "./client";

export const getInterest = async (userId: string | null) => {
  console.log("현재 관심사 출력 :");
  try {
    const res = await request.get({
      url: `/interest?userId=${userId}`,
      params: {},
    });
    console.log("현재 관심사 출력 성공", res);
    return res;
  } catch (error) {
    console.error("현재 관심사 출력 오류:", error);
    throw error;
  }
};

export const postInterest = async (
  userId: string | null,
  data: ({ category: string } | undefined)[]
) => {
  console.log("최초 관심사 등록 :");
  try {
    const res = await request.post({
      url: `/interest?userId=${userId}`,
      data: data,
    });
    console.log("최초 관심사 등록 성공", res);
    return res;
  } catch (error) {
    console.error("최초 관심사 등록 오류:", error);
    throw error;
  }
};

export const deleteInterest = async (userId: string | null) => {
  console.log("현재 관심사 전체 선택 해제 :");
  try {
    const res = await request.post({
      url: `/interest?userId=${userId}`,
      params: {},
    });
    console.log("현재 관심사 전체 선택 해제 성공", res);
    return res;
  } catch (error) {
    console.error("현재 관심사 전체 선택 해제 오류:", error);
    throw error;
  }
};
