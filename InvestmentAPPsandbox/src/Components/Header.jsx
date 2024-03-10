import Logo from "../assets/investment-calculator-logo.png";

export default function header() {
  return (
    <header id="header">
      <img src={Logo} alt="Logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
