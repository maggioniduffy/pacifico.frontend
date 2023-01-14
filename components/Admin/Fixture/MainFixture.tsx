import React from "react";
import AdminSection from "../AdminSection";
import AddFixture from "./AddFixture";
import HandleFixture from "./HandleFixture";

const MainFixture = () => {
  return (
    <AdminSection title="Fixture">
      <>
        <AddFixture />
        <HandleFixture />
      </>
    </AdminSection>
  );
};

export default MainFixture;
