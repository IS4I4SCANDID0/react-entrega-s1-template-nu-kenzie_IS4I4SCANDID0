export function MainForm() {
  return (
    <>
      <section className="spendingContainer">
        <form>
          <label className="mainLabel" htmlFor="description">
            Descrição
          </label>
          <input placeholder="Digite aqui sua descrição" type="text" />
          <span>Ex: Compra de Roupas</span>
          <label className="mainLabel" htmlFor="value">
            Valor (R$)
          </label>
          <input placeholder="R$ 1,00" type="text" />
          <label className="mainLabel" htmlFor="inputValue/outputValue">
            Tipo de valor
          </label>
          <select name="">
            <option value="">Escolha o tipo</option>
            {/* <option value="outputValue">Saída</option> */}
          </select>
          <button type="submit">Inserir valor</button>
        </form>
        <div className="containerValue">
          <div>
            <h2>Valor total: <span>R$ 0,00</span></h2>
          </div>
          <span>O valor se refere ao saldo</span>
        </div>
      </section>
    </>
  );
}
       
          


