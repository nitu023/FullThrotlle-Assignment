import React, {useState} from "react"
import data from "../../Asset/testData.json"
import Modal from 'react-modal'
import CalenderWidget from "../CalenderWidget"
import { withStyles } from '@material-ui/core/styles'
import { Button, Paper, TableRow, TableHead, TableContainer, TableCell, TableBody, Table } from "@material-ui/core"


export default function UserList() {

  const [modalIsOpen, setIsModalOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const openModal = (ind) => {
    setIsModalOpen(true);
    setIdx(ind);
  };

  function closeModal() {
    setIsModalOpen(false);
  }
  function handleCloseModal () {
    setIsModalOpen(false)
  }

  const ModalWin = () => (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      ariaHideApp={false}
    >
      <CalenderWidget idx={idx} />
      <Button variant="contained" color="primary" style={{marginTop:"50px", marginLeft:"50%" }}  onClick={handleCloseModal}>close</Button>
    </Modal>
  );
  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: "blue",
      marginTop:"50px",
      color: theme.palette.common.white,
      fontSize: "20px",
      textShadow: "10px white",
      fontWeight: "bold"
    },
    body: {
      fontSize: 15,
      fontWeight: "bold"
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  


  return (
    <div>
      {modalIsOpen && ModalWin()}
      <TableContainer component={Paper}>
      <Table  aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">#ID</StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">TIme Zone</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.members.map((row,i) => (
            <StyledTableRow key={i} onClick={() => openModal(i)}>
              <StyledTableCell align="center">{row.id}</StyledTableCell>
              <StyledTableCell align="center">{row.real_name}</StyledTableCell>
              <StyledTableCell align="center">{row.tz}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}
