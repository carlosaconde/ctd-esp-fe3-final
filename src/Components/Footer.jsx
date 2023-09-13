import logo from "../images/logo-condev.png";

const Footer = () => {
  return (
    <div
      className="dark"
      style={{
        display: "flex",
        height: 150,
        width: "100vw",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2>Powered by</h2>
      <img style={{ width: 200, height: 150 }} src={logo} alt="ConDev" />
    </div>
  );
};

export default Footer;
