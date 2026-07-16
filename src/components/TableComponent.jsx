// import { FixedSizeList as List } from "react-window";

function TableComponent({ itemsList }) {
  return (
    <div>
      <table style={{ border: "1px solid grey", width: "100%" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid green", width: "33%" }}>Title</th>
            <th style={{ border: "1px solid green", width: "33%" }}>Brand</th>
            <th style={{ border: "1px solid green", width: "33%" }}>Price</th>
          </tr>
        </thead>
        <tbody>
          {itemsList.map((item) => {
            return (
              //   <List
              //     height={400}
              //     itemCount={itemsList.length}
              //     itemSize={35} // Explicit row height in pixels
              //     width="100%"
              //     itemData={item}
              //     // outerElementType={TableOuterElement}
              //     // innerElementType={TableInnerElement}
              //   >
              //     {
              //       <tr key={item.id}>
              //         <td style={{ border: "1px solid grey" }}>{item.title}</td>
              //         <td style={{ border: "1px solid grey" }}>
              //           {item.brand ? item.brand : "NA"}
              //         </td>
              //         <td style={{ border: "1px solid grey" }}>{item.price}</td>
              //       </tr>
              //     }
              //   </List>
              <tr key={item.id}>
                <td style={{ border: "1px solid grey" }}>{item.title}</td>
                <td style={{ border: "1px solid grey" }}>
                  {item.brand ? item.brand : "NA"}
                </td>
                <td style={{ border: "1px solid grey" }}>{item.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TableComponent;
