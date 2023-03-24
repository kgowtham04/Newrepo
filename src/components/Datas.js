import React, { useEffect, useState } from "react";
import "./Form.css";
import Paginate from "./Paginate";
const Datas = () => {
  const [value, setValue] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [datasPerPage, setDataPerPage] = useState(3);
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((data) => {
          return data.json();
        })
        .then((response) => {
          setValue(response.slice(0, 6));
          setLoading(false);
        });
  }, []);
  const indexofLastData = currentPage * datasPerPage;
  const indexofFirstData = indexofLastData - datasPerPage;
  const currentDatas = value.slice(indexofFirstData, indexofLastData);
  const totalDatas = value.length;
  const Pagination = (num) => {
    setCurrentPage(num);
  };
  if (loading) {
    return <p style={{color:"green" ,fontSize:"25px"}}>Loading...</p>;
  }
  return (
    <div>
      <h1>REST API datas</h1>
      <table>
        <tr>
          <th>TITLE</th>
          <th>DESCRIPTION</th>
        </tr>
          {currentDatas.map((val) => {
            return (
              <tr key={val.id}>
                <td>{val.title}</td>
                <td>{val.body}</td>
              </tr>
            );
          })}
        
      </table>
      <Paginate
        totalDatas={totalDatas}
        datasPerPage={datasPerPage}
        Pagination={Pagination}
      />
    </div>
  );
};
export default Datas;
