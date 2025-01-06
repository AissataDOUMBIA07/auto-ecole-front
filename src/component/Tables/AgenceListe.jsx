import React, { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { IconButton, Modal, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function AgenceListe() {
  const [agenceData, setAgenceData] = useState([]);
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
    { field: "fullname", headerName: "Fullname", width: 130 },
    { field: "email", headerName: "Email", width: 130 },
    { field: "adresse", headerName: "Adresse", width: 130 },
    { field: "inmmatriculation", headerName: "Immatriculation", width: 130 },
    { field: "phone", headerName: "Phone", width: 130 },
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
    axios.get("http://localhost:8000/api/agence").then((res) => {
      setAgenceData(res.data);
      console.log("Les données de l'agence: ", res.data);
    });
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div style={{ height: 500, width: "100%" }}>
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
