import "./style.css";
import billingsSreen from "../../assets/billingsScreen.svg";
import customersSettings from "../../assets/customersSettings.svg";
import TableCobrancasExib from "../../components/ComponentsClients/TableCobrancasExib";
import useGlobal from "../../hooks/useGlobal";
import useFunctions from "../../hooks/useFunctions";
import { Paper, InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect } from "react";
import ToastAlert from "../../components/ComponentsGlobal/ToastAlert";

function Charge() {
  const { searchCharge, setSearchCharge, inputValue, setInputValue } =
    useGlobal();
  const { chargeData } = useFunctions();

  useEffect(() => {
    setSearchCharge(chargeData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchCharge]);

  function handleSearch(e) {
    setInputValue(e.target.value);
  }

  function handleClickSearch(e) {
    e.preventDefault();
    const cliente = [];
    // eslint-disable-next-line
    chargeData.filter((client) => {
      if (inputValue === "") {
        setSearchCharge(chargeData);
        // eslint-disable-next-line
        return;
      } else if (
        client.cliente.nome.toLowerCase().includes(inputValue.toLowerCase()) ||
        client.id.toString().includes(inputValue)
      ) {
        cliente.push(client);
      }
      setInputValue("");
      setSearchCharge(cliente);
    });
  }

  return (
    <div className="container-cobrancas">
      <div className="menu-cobrancas">
        <div className="name-cobranca">
          <img src={billingsSreen} alt="Customers" />
          <span>Cobranças</span>
        </div>
        <div className="settings-cobrancas">
          <div
            onClick={() => setSearchCharge(chargeData)}
            className="imagem-filtro"
          >
            <img src={customersSettings} alt="Search" />
          </div>

          <Paper
            component="form"
            sx={{
              p: "7px 4px",
              display: "flex",
              alignItems: "center",
              width: 318,
              height: 39,
              borderRadius: "10px",
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1, fontSize: "14px", fontFamily: "Nunito" }}
              placeholder="Pesquisar"
              inputProps={{ "aria-label": "pesquisar" }}
              value={inputValue}
              onChange={handleSearch}
            />
            <IconButton
              onClick={handleClickSearch}
              type="submit"
              sx={{ p: "0px" }}
              aria-label="search"
            >
              <SearchIcon sx={{ width: "3rem", height: "3rem" }} />
            </IconButton>
          </Paper>
        </div>
      </div>
      <div className="card">
        <TableCobrancasExib />
        <ToastAlert />
      </div>
    </div>
  );
}

export default Charge;
