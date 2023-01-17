import React from "react";
import AdminSection from "../AdminSection";
import DeleteNew from "./DeleteNew";
import HandleNew from "./HandleNew";

const MainNews = () => {
  return (
    <AdminSection title="News">
      <>
        <HandleNew />
        <DeleteNew />
      </>
    </AdminSection>
  );
};

export default MainNews;
