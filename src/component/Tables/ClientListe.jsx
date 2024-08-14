import React, { useState, useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from "axios";


function ClientListe() {
  const [clientData, setClientData] = useState([]);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "fullname", headerName: "Fullname", width: 130 },
    { field: "adresse", headerName: "Adresse", width: 130 },
    { field: "conatct", headerName: "Contact", width: 130 },
    { field: "age", headerName: "Age", width: 130 },
    { field: "agence_id", headerName: "Agences", width: 130 },
  ];

  function getData() {
    axios.get("http://localhost:8000/api/clients").then((res) => {
      setClientData(res.data);
      console.log("Les données du client: ", res.data);
    });
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div style={{ height: 400, width: '100%' }}>
    <DataGrid
      rows={clientData}
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

export default ClientListe;