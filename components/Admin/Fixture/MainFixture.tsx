import React from "react";
import AdminSection from "../AdminSection";
import AddFixture from "./AddFixture";
import DeleteFixture from "./DeleteFixture";

const MainFixture = () => {
  return (
    <AdminSection title="Fixture">
      <>
        <AddFixture />
        <DeleteFixture />
      </>
    </AdminSection>
  );
};

export default MainFixture;
