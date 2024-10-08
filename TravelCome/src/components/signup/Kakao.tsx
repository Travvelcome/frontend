import React from "react";
import { getKakaoLogin } from "../../api/Auth";
import Loading from "../layout/Loading";

const Kakao = () => {
  const url = window.location.href;
  const code = url.split("=")[1];

  const kakaoLogin = async () => {
    try {
      const response = await getKakaoLogin(code);
      console.log("카카오 로그인하기 :", response);

      localStorage.setItem("token", response.id);
      localStorage.setItem("nickname", response.nickname);
      localStorage.setItem("email", response.email);
    } catch (error) {
      console.error("카카오 로그인 오류:", error);
    }
    /*
    if (response.code === 200) {
      console.log("카카오 로그인하기 :", response);
      localStorage.setItem("token", response.id);
      localStorage.setItem("name", response.nickname);
      localStorage.setItem("email", response.email);
      //window.location.href = "/frontend";
    } else {
      //window.location.href = "/frontend/onboarding";
    }
      */
  };
  kakaoLogin();

  return (
    <>
      <Loading />
    </>
  );
};

export default Kakao;
