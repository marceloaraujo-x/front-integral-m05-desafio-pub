import "./style.css";
import billingsSreen from "../../assets/billingsScreen.svg";
import customersSettings from "../../assets/customersSettings.svg";
import TableCobrancasExib from "../../components/ComponentsClients/TableCobrancasExib";
import useGlobal from '../../hooks/useGlobal'
import useFunctions from '../../hooks/useFunctions'
import { Paper, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect } from "react";

function Charge() {
  const { search, setSearch, inputValue, setInputValue } = useGlobal();
  const { loadAllBillings, chargeData, setChargeData } = useFunctions();


  useEffect(() => {
    loadAllBillings();
    setSearch(chargeData);
    // console.log(search)
  }, []);

  // const base = chargeData;

  function handleSearch(e) {
    setInputValue(e.target.value);
  }

  function handleClickSearch(e) {
    e.preventDefault();
    const cliente = [];
    chargeData.filter(client => {
      if (inputValue === '') {
        loadAllBillings();
        return;
      } else if (
        client.cliente.nome.toLowerCase().includes(inputValue.toLowerCase()) ||
        client.id.toString().includes(inputValue)
      ) {
        cliente.push(client);
        setChargeData(cliente);
      }
      setInputValue('');
    })
    // .map(client => (
    //   setChargeData(client)
    // ));
  }

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

          <Paper
            component="form"
            sx={{ p: '7px 4px', display: 'flex', alignItems: 'center', width: 318 }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1, fontSize: '14px', fontFamily: 'Nunito' }}
              placeholder="Pesquisar"
              inputProps={{ 'aria-label': 'pesquisar' }}
              value={inputValue}
              onChange={handleSearch}
            />
            <IconButton onClick={handleClickSearch} type="submit" sx={{ p: '0px' }} aria-label="search">
              <SearchIcon sx={{ width: '3rem', height: '3rem' }} />
            </IconButton>
          </Paper>
        </div>
      </div>
      <div className="card">
        <TableCobrancasExib />
      </div>
    </div >
  );
}

export default Charge;
