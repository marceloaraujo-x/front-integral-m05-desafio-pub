import "./style.css";
import billingsSreen from "../../assets/billingsScreen.svg";
import customersSettings from "../../assets/customersSettings.svg";
import search from "../../assets/search.svg";
import TableCobrancasExib from "../../components/ComponentsClients/TableCobrancasExib";

function Charge() {
  return (
    <div className="container-cobrancas">
      <div className="menu-cobrancas">
        <div className="name-cobranca">
          <img src={billingsSreen} alt="Customers" />
          <span>Cobranças</span>
        </div>
        <div className="settings-cobrancas">
          <div className="imagem-filtro">
            <img src={customersSettings} alt="Search" />
          </div>
          <div className="input-search">
            <span>Pesquisar</span>
            <img src={search} alt="Search" />
          </div>
        </div>
      </div>
      <div className="card">
        <TableCobrancasExib />
      </div>
    </div>
  );
}

export default Charge;
