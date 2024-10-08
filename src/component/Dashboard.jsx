import React from "react";
import Typography from "@mui/material/Typography";
import Title from "./Title";

function Dashboard() {
  return (
    <>
      <Title>Recent Deposits</Title>
      <Typography component="p" variant="h4">
        $3,024.00
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 March, 2019
      </Typography>
    </>
  );
}

export default Dashboard;
