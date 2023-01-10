import * as Components from "../../components/Admin";

const Admin = () => {
  return (
    <div>
      <div>
        {" "}
        <h2> Noticias </h2>{" "}
      </div>
      <hr />
      <div>
        {" "}
        <h2> Partidos </h2>{" "}
      </div>
      <hr />
      <Components.MainYoutube />
      <hr />
      <div>
        {" "}
        <h2> Newsletter </h2>{" "}
      </div>
      <hr />
    </div>
  );
};

export default Admin;
