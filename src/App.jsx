import { useState } from "react";
import { MainForm } from "./components/form";
import { Header } from "./components/header";
import { ListValues } from "./components/listValues";

function App() {
  const [listTransactions, setListTransactions] = useState();

  return (
    <>
      <Header />
      <main>
        <MainForm />
        <ListValues />
      </main>
    </>
  );
}

export default App;
