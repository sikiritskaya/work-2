import { useSelector } from "react-redux";

const HistoryTranslate = () => {
  const history = useSelector((state) => state);

  return (
    !!history && (
      <>
        <h2>Your history translate</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Languages</th>
              <th scope="col">From</th>
              <th scope="col">To</th>
            </tr>
          </thead>
          <tbody>
            {history.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{item.num}</th>
                  <td>
                    {item.languageFrom}-{item.languageTo}
                  </td>
                  <td>{item.from}</td>
                  <td>{/* {item.to} */}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    )
  );
};

export default HistoryTranslate;
