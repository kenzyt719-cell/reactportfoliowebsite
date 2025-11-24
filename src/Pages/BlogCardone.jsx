 import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Layout/Footer";
import CardSwap from "../Components/Layout/CardSwap";
import AnimatedContent from "../Components/Layout/AnimatedContent";
import SplashCursorEffect from "../Components/Layout/SplashCursor";
import MiddleTitle from "../Components/Common/MiddleTitle";
import Nav from "../Components/Layout/Nav"; // ← IMPORTANT

const BlogCardone = () => {
  const navigate = useNavigate();

  const handleFirstFeaturedClick = () => {
    navigate("/BlogCardone/1");
  };

  return (
    <>
      <SplashCursorEffect />
      <Nav />

      <MiddleTitle title="View Details" />

      <AnimatedContent distance={50} delay={1.4}>
        <Footer />
      </AnimatedContent>
    </>
  );
};

export default BlogCardone;