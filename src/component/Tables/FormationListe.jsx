import React, {useState, useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from "axios";

function FormationListe() {
  const [formationData, setFormationData] = useState([]);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "libelle", headerName: "Libelle", width: 130 },
    { field: "lieu", headerName: "Lieu", width: 130 },
    { field: "datedebut", headerName: "Date de début", width: 130 },
    { field: "datefin", headerName: "Date de fin", width: 130 },
    { field: "agence_id", headerName: "Agences", width: 130 },
    { field: "salle_id", headerName: "Salles", width: 130 },
    { field: "personnel_id", headerName: "Personnels", width: 130 },
  ];

  function getData() {
    axios.get("http://localhost:8000/api/formations").then((res) => {
      setFormationData(res.data);
      console.log("Les données de la formation: ", res.data);
    });
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div style={{ height: 400, width: '100%' }}>
    <DataGrid
      rows={formationData}
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

export default FormationListe