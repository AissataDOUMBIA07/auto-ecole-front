import React, {useState, useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from "axios";
import { IconButton, Modal, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


function PersonnelListe() {
  const [personnelData, setPersonnelData] = useState([]);
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
    { field: "adresse", headerName: "Adresse", width: 130 },
    { field: "phone", headerName: "Phone", width: 130 },
    { field: "email", headerName: "Email", width: 130 },
    { field: "agence_id", headerName: "Agences", width: 130 },
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
    axios.get("http://localhost:8000/api/personnels").then((res) => {
      setPersonnelData(res.data);
      console.log("Les données du personnel: ", res.data);
    });
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div style={{ height: 400, width: '100%' }}>
    <DataGrid
      rows={personnelData}
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

export default PersonnelListe