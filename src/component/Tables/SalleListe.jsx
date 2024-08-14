import React, {useState, useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from "axios";

function SalleListe() {
  const [salleData, setSalleData] = useState([]);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "libelle", headerName: "Libelle", width: 130 },
    { field: "nombreplace", headerName: "Nombre de place", width: 130 },
    { field: "agence_id", headerName: "Agence", width: 130 },
  ];

  function getData() {
    axios.get("http://localhost:8000/api/salles").then((res) => {
      setSalleData(res.data);
      console.log("Les données de la salle: ", res.data);
    });
  }

  useEffect(() => {
    getData();
  }, [])


  return (
    <div style={{ height: 400, width: '100%' }}>
    <DataGrid
      rows={salleData}
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

export default SalleListe