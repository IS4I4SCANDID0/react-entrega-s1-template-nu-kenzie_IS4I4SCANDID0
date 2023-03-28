import "./../styles/listCards.css";

export function ListValues({ listTransactions, removeToListTransactions }) {
  return (
    <section className="container__transactionValue">
      <h3>Resumo financeiro</h3>
      {listTransactions.length === 0 ? (
        <h3>Você ainda não possui nenhum lançamento</h3>
      ) : (
        <ul className="transactionValue__list">
          {listTransactions.map((transaction) => (
            <li key={transaction.id} className={transaction.negotiationType === "entrada" ? "listItem__positive" : "listItem__negative"}>
              {transaction.negotiationType === "entrada" ? (
                <>
                  <div className="positive__desc">
                    <h3>{transaction.description}</h3>
                    <span>{transaction.negotiationType}</span>
                  </div>
                  <div className="positive__value">
                    <span>R$ {transaction.transactionValue},00</span>
                    <button onClick={() => removeToListTransactions(transaction.id)}>Excluir</button>
                  </div>
                </>
              ) : (
                <>
                  <div className="negative__desc">
                    <h3>{transaction.description}</h3>
                    <span>{transaction.negotiationType}</span>
                  </div>
                  <div className="negative__value">
                    <span>R$ {transaction.transactionValue},00</span>
                    <button onClick={() => removeToListTransactions(transaction.id)}>Excluir</button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
