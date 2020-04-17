import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContentText,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Typography,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Autocomplete from "@material-ui/lab/Autocomplete";
import DoneIcon from "@material-ui/icons/Done";
import { SectionHeader } from "../styles";

function Tasks() {
  return (
    <>
      <SectionHeader justify="right" style={{ marginTop: 14, marginBottom: 8 }}>
        <Typography variant="subtitle2">Tarefas</Typography>
        <IconButton
          aria-label="account of current user"
          aria-haspopup="true"
          color="primary"
        >
          <AddIcon />
        </IconButton>
      </SectionHeader>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Tarefa</TableCell>
              <TableCell>Responsável</TableCell>
              <TableCell align="right">Situação</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[1, 2, 3, 4, 5].map((el) => (
              <TableRow key={el}>
                <TableCell component="th" scope="row">
                  Lorem Ipsum
                </TableCell>
                <TableCell>Lorem Ipsum</TableCell>
                <TableCell align="right">Disponivel</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default function Form({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Criar Etapa de Produção
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Para controlar o processo de produção você deve informar...
          </DialogContentText>
          <Autocomplete
            style={{ marginTop: 14, marginBottom: 8 }}
            id="products-input"
            options={[
              "Vinho Tipo 1",
              "Vinho Tipo 2",
              "Vinho Tipo 3",
              "Vinho Tipo 4",
              "Vinho Tipo 5",
            ]}
            getOptionLabel={(option) => option}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Produto produzido"
                variant="outlined"
                fullWidth
              />
            )}
          />
          <TextField
            style={{ marginTop: 14, marginBottom: 8 }}
            margin="dense"
            id="qtd-input"
            label="Quantidade"
            type="number"
            size="medium"
            variant="outlined"
            fullWidth
          />
          <Tasks style={{ marginTop: 14, marginBottom: 8 }} />
          <TextField
            style={{ marginTop: 14, marginBottom: 8 }}
            margin="dense"
            id="obs-input"
            label="Observações"
            type="text"
            size="medium"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={handleClose}
            color="primary"
            startIcon={<DoneIcon />}
          >
            Criar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
