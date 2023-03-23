import { useState } from "react";
import { FormValues } from "./components/form";
import { Header } from "./components/header";
import { ListValues } from "./components/listValues";

function App() {
  const [listTransactions, setListTransactions] = useState([{}]);

  return (
    <>
      <Header />
      <main>
        <FormValues setListTransactions={setListTransactions} listTransactions={listTransactions} />
        <ListValues  />
      </main>
    </>
  );
}

export default App;
