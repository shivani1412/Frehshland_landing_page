import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "./components/header";
import Item from "./components/Items";
import Deadline from "./components/deadline";
import Seasonal from "./components/seasonal";
import Impact from "./components/Impact";
import Newsletter from "./components/newsletter";
import Prices from "./components/prices";
import Footer from "./components/footer";
function App() {
  return (
    <>
      <div>
        <Header />
        <Item />
        <Deadline />
        <Seasonal />
        <Impact />
        <Newsletter />
        <Prices />
        <Footer />
      </div>
    </>
  );
}

export default App;
