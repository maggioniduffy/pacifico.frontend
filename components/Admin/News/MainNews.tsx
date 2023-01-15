import React from "react";
import AdminSection from "../AdminSection";
import AddNew from "./AddNew";
import DeleteNew from "./DeleteNew";

const MainNews = () => {
  return (
    <AdminSection title="News">
      <>
        <AddNew />
        <DeleteNew />
      </>
    </AdminSection>
  );
};

export default MainNews;
