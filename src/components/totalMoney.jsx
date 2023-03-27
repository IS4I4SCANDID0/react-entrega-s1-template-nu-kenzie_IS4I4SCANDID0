
export function TotalMoney({ totalValue }) {
  return (
    <div className="container__value">
      <div className="value__description">
        <h2>
          Valor total: 
        </h2>
          <span>R$ {totalValue},00</span>
      </div>
      <span>O valor se refere ao saldo</span>
    </div>
  );
}

