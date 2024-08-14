import React, {useState, useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from "axios";

function ExamenListe() {
  const [examenData, setExamenData] = useState([]);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "type", headerName: "Type", width: 130 },
    { field: "lieu", headerName: "Lieu", width: 130 },
    { field: "heure", headerName: "Heure", width: 130 },
    { field: "date", headerName: "Date", width: 130 },
    { field: "agence_id", headerName: "Agence", width: 130 },
  ];

  function getData() {
    axios.get("http://localhost:8000/api/examens").then((res) => {
      setExamenData(res.data);
      console.log("Les données de l'examen: ", res.data);
    });
  }

  useEffect(() => {
    getData();
  }, [])


  return (
    <div style={{ height: 400, width: '100%' }}>
    <DataGrid
      rows={examenData}
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

export default ExamenListe