import * as Components from "../../components/Admin";

const Admin = () => {
  return (
    <div>
      <Components.MainNews />
      <hr />
      <Components.MainFixture />
      <hr />
      <Components.MainYoutube />
      <hr />
      <Components.MainNewsletter />
      <hr />
    </div>
  );
};

export default Admin;
