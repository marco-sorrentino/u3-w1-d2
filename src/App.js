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
        img="https://blog.eliflab.com/wp-content/uploads/2022/07/library2.jpg"
        height="350px"
        books="Books"
      />
      <CardComponent />
      <TableComponent />
      <FooterComponent />
    </>
  );
}

export default App;
