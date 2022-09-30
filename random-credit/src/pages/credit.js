//credit page 的table用了material UI的代码
import ResponsiveAppBar from "../components/navbar";
import { useEffect, useState } from "react";
import classes from "./credit.module.css";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function CreditPage() {
  const [credit, setcredit] = useState([]);
  const navigate = useNavigate();
  const fetchCredit = async () => {
    const response = await fetch("http://localhost:9999/credit", {
      credentials: "include",
      // body: JSON.stringify({id: parseInt(id), name: name})
    });
    const json = await response.json();
    if (json.msg === "please login first") {
      alert("your cookie is invalid, please login again");
      navigate("/");
    }
    console.log(json);

    setcredit(json.data);
  };
  useEffect(() => {
    fetchCredit();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <ResponsiveAppBar title="CREDIT"></ResponsiveAppBar>;
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>
                <b>lesson</b>
              </StyledTableCell>
              <StyledTableCell align="right">
                <b>credit</b>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {credit.map((c, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {c.name}
                </StyledTableCell>
                <StyledTableCell align="right">{c.credit}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <button
        className={classes.fetch}
        onClick={() => fetchCredit()}
        align="center"
      >
        fetch again
      </button>
    </div>
  );
}
export default CreditPage;
