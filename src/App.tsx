import Auth from "./features/auth/view/Auth.view";
import Navbar from "./components/shared/Navbar";

const App = () => {
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <Auth />
    </div>
  );
};

export default App;
