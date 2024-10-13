import { request } from "./client";

export const getLandmarkFind = async (landmarks: number) => {
  console.log("랜드마크 발견 페이지 조회:");
  try {
    const res = await request.get({
      url: `/landmarks/find/${landmarks}`,
      params: {},
    });
    console.log("랜드마크 발견 페이지 성공", res);
    return res;
  } catch (error) {
    console.error("랜드마크 발견 페이지 오류:", error);
    throw error;
  }
};

export const postLandmarkFind = async (
  landmarks: number,
  userId: string | null
) => {
  console.log("랜드마크 발견하기 :");
  try {
    const res = await request.post({
      url: `/landmarks/find/${landmarks}?userId=${userId}`,
      params: {},
    });
    console.log("랜드마크 발견하기 성공", res);
    return res;
  } catch (error) {
    console.error("랜드마크 발견하기 오류:", error);
    throw error;
  }
};

export const getLandmarks = async () => {
  console.log("랜드마크 목록 조회:");
  try {
    const res = await request.get({
      url: `/landmarks`,
      params: {},
    });
    console.log("랜드마크 목록 조회 성공", res);
    return res;
  } catch (error) {
    console.error("랜드마크 목록 조회 오류:", error);
    throw error;
  }
};

export const getLandmarksThema = async (category: string) => {
  console.log("랜드마크 테마별 목록 조회:");
  try {
    const res = await request.get({
      url: `/landmarks?category=${category}`,
      params: {},
    });
    console.log("랜드마크 테마별 목록 조회 성공", res);
    return res;
  } catch (error) {
    console.error("랜드마크 테마별 목록 조회 오류:", error);
    throw error;
  }
};

export const getLandmarkSearch = async (keyword: string) => {
  console.log("랜드마크 검색:");
  try {
    const res = await request.get({
      url: `/landmarks/search?keyword=${keyword}`,
      params: {},
    });
    console.log("랜드마크 검색 성공", res);
    return res;
  } catch (error) {
    console.error("랜드마크 검색 오류:", error);
    throw error;
  }
};
export const getLandmarkRecommend = async (
  mapX: number,
  mapY: number,
  userId: string | null
) => {
  console.log("랜드마크 추천 조회:");
  try {
    const res = await request.get({
      url: `/landmarks/recommend?mapX=${mapX}&mapY=${mapY}&userId=${userId}`,
      params: {},
    });
    console.log("랜드마크 추천 성공", res);
    return res;
  } catch (error) {
    console.error("랜드마크 추천 오류:", error);
    throw error;
  }
};
export const getLandmarkMap = async (userId: string | null) => {
  console.log("지도 랜드마크 조회:");
  try {
    const res = await request.get({
      url: `/landmarks/map?userId=${userId}`,
      params: {},
    });
    console.log("지도 랜드마크 조회 성공", res);
    return res;
  } catch (error) {
    console.error("지도 랜드마크 조회 오류:", error);
    throw error;
  }
};
export const getLandmarkMapCategory = async (
  category: string,
  userId: string | null
) => {
  console.log("카테고리별 지도 랜드마크 조회:");
  try {
    const res = await request.get({
      url: `/landmarks/map/category?category=${category}&userId=${userId}`,
      params: {},
    });
    console.log("카테고리별 지도 랜드마크 조회 성공", res);
    return res;
  } catch (error) {
    console.error("카테고리별 지도 랜드마크 조회 오류:", error);
    throw error;
  }
};
export const getLandmarkClose = async (mapX: number, mapY: number) => {
  console.log("위치기반 랜드마크 조회:");
  try {
    const res = await request.get({
      url: `/landmarks/close?mapX=${mapX}&mapY=${mapY}`,
      params: {},
    });
    console.log("위치기반 랜드마크 조회 성공", res);
    return res;
  } catch (error) {
    console.error("위치기반 랜드마크 조회 오류:", error);
    throw error;
  }
};
export const getLandmarkCategory = async (category: string) => {
  console.log("랜드마크 카테고리 검색:");
  try {
    const res = await request.get({
      url: `/landmarks/category?category=${category}`,
      params: {},
    });
    console.log("랜드마크 카테고리 검색 성공", res);
    return res;
  } catch (error) {
    console.error("랜드마크 카테고리 검색 오류:", error);
    throw error;
  }
};
