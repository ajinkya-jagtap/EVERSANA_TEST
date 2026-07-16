import axios from "axios";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import useDebounce from "../hooks/useDebounce";
import PaginationComponent from "./PaginationComponent";
import TableComponent from "./TableComponent";

function RenderLargeList() {
  const [itemsList, setItemsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [selectValues, setSelectValues] = useState(5);

  const text = useDebounce(searchInput);

  //   const filtered = useMemo(() => {
  //     return itemsList.filter((vv) => vv.title.toLowerCase().includes(text));
  //   }, [itemsList, text]);

  useEffect(() => {
    const getItems = async () => {
      try {
        const url = `https://dummyjson.com/products?limit=${selectValues}&search=${text}`;
        const response = await axios.get(url);
        console.log("response", response);
        if (response.data?.products?.length > 0) {
          setItemsList(response.data.products);
        }
      } catch (error) {
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    };

    getItems();
  }, [text, selectValues]);

  return (
    <div>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div style={{ border: "solid grey" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              padding: "10px",
            }}
          >
            <SearchBar
              setSearchInput={setSearchInput}
              searchInput={searchInput}
            />
          </div>
          <TableComponent itemsList={itemsList} />
          <div
            style={{ display: "flex", justifyContent: "end", padding: "10px" }}
          >
            <PaginationComponent
              selectValues={selectValues}
              setSelectValues={setSelectValues}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default RenderLargeList;
