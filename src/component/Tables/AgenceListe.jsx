import React, { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";

function AgenceListe() {
  const [agenceData, setAgenceData] = useState([]);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "fullname", headerName: "Fullname", width: 130 },
    { field: "email", headerName: "Email", width: 130 },
    { field: "adresse", headerName: "Adresse", width: 130 },
    { field: "inmmatriculation", headerName: "Immatriculation", width: 130 },
    { field: "phone", headerName: "Phone", width: 130 },
  ];

  function getData() {
    axios.get("http://localhost:8000/api/agence").then((res) => {
      setAgenceData(res.data);
      console.log("Les données de l'agence: ", res.data);
    });
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={agenceData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}

export default AgenceListe;
