import React from "react";
import { Category, getMatchs } from "../../../utils/api";
import Fixture from "../../Fixture";

// export async function getStaticProps() {
//   const res = await getMatchs(0, 50);
//   const matchs = res?.map((r) => ({ ...r, time: new Date(r.time) }));
//   return {
//     props: {
//       matchs,
//     },
//     revalidate: 30,
//   };
// }

// interface Props {
//   matchs: Match[];
// }

// interface Match {
//   gender: "F" | "M";
//   category: Category;
//   tournament: string;
//   rival_name: string;
//   time: Date;
//   condition: "Local" | "Visita";
//   played: boolean;
//   rival_icon: string;
//   _id: string;
//   field: string;
//   stats_link?: string;
//   transmission_link?: string;
//   our_score?: number;
//   rival_score?: number;
// }

const HandleFixture = () => {
  return (
    <div className="w-10/12 m-auto">
      <Fixture canDelete canEdit />
    </div>
  );
};

export default HandleFixture;
