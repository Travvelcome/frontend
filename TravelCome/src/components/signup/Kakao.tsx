import React from "react";
import { getKakaoLogin } from "../../api/Auth";
import Loading from "../layout/Loading";

const Kakao = () => {
  const url = window.location.href;
  const code = url.split("=")[1];

  const kakaoLogin = async () => {
    const response = await getKakaoLogin(code);
    if (response.code === 200) {
      localStorage.setItem("token", response.id);

      localStorage.setItem("name", response.nickname);
      localStorage.setItem("email", response.email);
      //window.location.href = "/frontend";
    } else {
      //window.location.href = "/frontend/onboarding";
    }
  };
  kakaoLogin();

  return (
    <>
      <Loading />
    </>
  );
};

export default Kakao;
