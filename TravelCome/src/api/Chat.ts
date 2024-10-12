import { request } from "./client";

export const getChatHistory = async (
  landmarkId: number,
  userId: string | null
) => {
  try {
    const res = await request.get({
      url: `/chat?landmarkId=${landmarkId}&userId=${userId}`,
      params: {},
    });
    console.log("챗봇 대화 내역 완료", res);
    return res;
  } catch (error) {
    console.error("챗봇 대화 내역 오류:", error);
    throw error;
  }
};

export const postChat = async (
  landmarkId: number,
  userId: string | null,
  data: { sent: string; landmarkId: string }
) => {
  try {
    const res = await request.post({
      url: `/chat?landmarkId=${landmarkId}&userId=${userId}`,
      data: data,
    });
    console.log("챗봇 대화 내역 완료", res);
    return res;
  } catch (error) {
    console.error("챗봇 대화 내역 오류:", error);
    throw error;
  }
};

export const getChatTopic = async (
  landmarkId: number,
  userId: string | null
) => {
  try {
    const res = await request.get({
      url: `/chat/topic?landmarkId=${landmarkId}&userId=${userId}`,
      params: {},
    });
    console.log("질문 추천 카테고리 조회 완료", res);
    return res;
  } catch (error) {
    console.error("질문 추천 카테고리 조회 오류:", error);
    throw error;
  }
};

export const postChatTopic = async (
  landmarkId: number,
  userId: string | null,
  selectedTopic: string
) => {
  try {
    const res = await request.post({
      url: `/chat/topic?landmarkId=${landmarkId}&userId=${userId}&selectedTopic=${selectedTopic}`,
      data: {},
    });
    console.log("추천 카테고리 질문 완료", res);
    return res;
  } catch (error) {
    console.error("추천 카테고리 질문 오류:", error);
    throw error;
  }
};

export const getChatSearch = async (
  landmarkId: number,
  text: string,
  userId: string | null
) => {
  try {
    const res = await request.get({
      url: `/chat/search?landmarkId=${landmarkId}&text=${text}&userId=${userId}`,
      params: {},
    });
    console.log("챗봇 대화 내역 검색 완료", res);
    return res;
  } catch (error) {
    console.error("챗봇 대화 내역 검색 오류:", error);
    throw error;
  }
};

// ?? 우선 생략
export const getChatSearchWord = async (
  landmarkId: number,
  text: string,
  userId: string | null
) => {
  try {
    const res = await request.get({
      url: `/chat/search/word?landmarkId=${landmarkId}&text=${text}&userId=${userId}`,
      params: {},
    });
    console.log("챗봇 대화 내역 검색(대화추출)  완료", res);
    return res;
  } catch (error) {
    console.error("챗봇 대화 내역 검색(대화추출) 오류:", error);
    throw error;
  }
};

export const getChatList = async (userId: string | null) => {
  try {
    const res = await request.get({
      url: `/chat/list?userId=${userId}`,
      params: {},
    });
    console.log("최근 대화 챗봇 목록 완료", res);
    return res;
  } catch (error) {
    console.error("최근 대화 챗봇 목록 오류:", error);
    throw error;
  }
};

export const getChatListSearch = async (
  title: string,
  userId: string | null
) => {
  try {
    const res = await request.get({
      url: `/chat/list/search?title=${title}&userId=${userId}`,
      params: {},
    });
    console.log("챗봇 대화 목록 검색 완료", res);
    return res;
  } catch (error) {
    console.error("챗봇 대화 목록 검색 오류:", error);
    throw error;
  }
};
