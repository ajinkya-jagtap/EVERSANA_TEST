function PaginationComponent({ selectValues, setSelectValues }) {
  return (
    <select
      onChange={(e) => {
        setSelectValues(e.target.value);
      }}
      value={selectValues}
      style={{
        padding: "5px",
      }}
    >
      {[5, 10, 20, 50, 100].map((vv) => {
        return (
          <option value={vv} key={vv}>
            {vv}
          </option>
        );
      })}
    </select>
  );
}

export default PaginationComponent;
