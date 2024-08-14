import React, {useState, useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from "axios";

function VoitureListe() {
  const [voitureData, setVoitureData] = useState([]);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "libelle", headerName: "Libelle", width: 130 },
    { field: "nombreplace", headerName: "Nombre de place", width: 130 },
    { field: "marque", headerName: "Marque", width: 130 },
    { field: "couleur", headerName: "Couleur", width: 130 },
    { field: "matricule", headerName: "Matricule", width: 130 },
    { field: "agence_id", headerName: "Agence", width: 130 },
    { field: "personnel_id", headerName: "Personnels", width: 130 },
  ];

  function getData() {
    axios.get("http://localhost:8000/api/voitures").then((res) => {
      setVoitureData(res.data);
      console.log("Les données de la voiture: ", res.data);
    });
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div style={{ height: 400, width: '100%' }}>
    <DataGrid
      rows={voitureData}
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

export default VoitureListe