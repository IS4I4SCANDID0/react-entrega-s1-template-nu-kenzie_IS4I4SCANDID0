export function ListValues({ listTransactions, removeToListTransactions }) {
  return (
    <>
      <ul>
        <h3>Resumo financeiro</h3>
        {listTransactions.map(transaction => 
          <li key={transaction.id}>
            <div>
              <p>
                {transaction.description}
              </p>
              <span>
                {transaction.negotiationType}
              </span>
            </div>
            <div>
              <span>
               R$ {transaction.transactionValue},00 
              </span>
              <button onClick={() => removeToListTransactions(transaction.id)}>Excluir</button>
            </div>
          </li>
        )}
      </ul>
    </>
  );
}



              
