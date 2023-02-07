import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CardComponent from "./components/CardComponent";
import FooterComponent from "./components/FooterComponent";
import MainComponent from "./components/MainComponent";
import NavComponent from "./components/NavComponent";
import TableComponent from "./components/TableComponent";

function App() {
  return (
    <>
      <NavComponent />
      <MainComponent
        img="https://images.alphacoders.com/102/thumb-1920-1026345.jpg"
        height="250px"
      />
      <CardComponent />
      <TableComponent />
      <FooterComponent />
    </>
  );
}

export default App;
