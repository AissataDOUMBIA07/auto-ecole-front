import React, {useState, useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from "axios";

function PermisListe() {
  const [permisData, setPermisData] = useState([]);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "tye", headerName: "Type", width: 130 },
    { field: "date", headerName: "Date", width: 130 },
    { field: "agence_id", headerName: "Agences", width: 130 },
    { field: "client_id", headerName: "Clients", width: 130 },
  ];

  function getData() {
    axios.get("http://localhost:8000/api/permis").then((res) => {
      setPermisData(res.data);
      console.log("Les données du permis: ", res.data);
    });
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div style={{ height: 400, width: '100%' }}>
    <DataGrid
      rows={permisData}
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
    
  )
}

export default PermisListe