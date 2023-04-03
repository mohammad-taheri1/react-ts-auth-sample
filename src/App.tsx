import Navbar from "./components/navbar/Navbar.component";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <div className="app">
        <Navbar />
       <div className="wrapper">
       <AppRoutes />
       </div>
    </div>
 );
}

export default App