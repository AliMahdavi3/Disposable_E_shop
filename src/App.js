import './App.css';
import { NavbarProvider } from './context/NavbarContext';
import Index from './layouts/Index';

function App() {
  return (
    <>
      <NavbarProvider>
        <Index />
      </NavbarProvider>
    </>
  );
}

export default App;

