import React, {useState, useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from "axios";
import { IconButton, Modal, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


function FormationListe() {
  const [formationData, setFormationData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleEdit = (row) => {
    setSelectedRow(row);
  };

  const handleDelete = (id) => {
    console.log(`Supprimer la voiture avec ID: ${id}`);
  };

  const handleCloseModal = () => {
    console.log("top")
  };

  const columns = [
    { field: "libelle", headerName: "Libelle", width: 130 },
    { field: "lieu", headerName: "Lieu", width: 130 },
    { field: "datedebut", headerName: "Date de début", width: 130 },
    { field: "datefin", headerName: "Date de fin", width: 130 },
    { field: "agence_id", headerName: "Agences", width: 130 },
    { field: "salle_id", headerName: "Salles", width: 130 },
    { field: "personnel_id", headerName: "Personnels", width: 130 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => (
        <>
          <IconButton
            color="primary"
            onClick={() => handleEdit(params.row)}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            color="secondary"
            onClick={() => handleDelete(params.row.id)}
          >
            <DeleteIcon />
          </IconButton>
        </>
      ),
    },
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