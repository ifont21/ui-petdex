import React, { useState } from "react";
import {
  IBreedListSettingProps,
  Props,
} from "../../pages/Admin/BreedsListSetting/BreedListSetting";
import "./BreedsGrid.scss";
import { createData, getColumns } from "./dataSource";
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  makeStyles,
} from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import HourglassFullIcon from "@material-ui/icons/HourglassFull";
import EditIcon from "@material-ui/icons/Edit";
import { useHistory, useRouteMatch } from "react-router";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 480,
  },
});

const BreedsGrid = ({ breeds }: IBreedListSettingProps) => {
  const data = createData(breeds);
  const columns = getColumns();
  const classes = useStyles();
  const history = useHistory();
  const { url } = useRouteMatch();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const rowsRange = data.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleEditPage = (id: string) => () => {
    history.push(`${url}/${id}`);
  };

  const renderColumnValue = (row: Props, column: Props) => {
    const value = row[column.id];

    if (column.id === "status") {
      return (
        <TableCell key={column?.id}>
          {value === "completed" ? (
            <CheckCircleIcon className="completed" />
          ) : (
            <HourglassFullIcon className="not-completed" />
          )}
        </TableCell>
      );
    }

    if (column.id === "edition") {
      return (
        <TableCell key={column?.id}>
          <EditIcon
            className="breeds-grid__icon-edit"
            onClick={handleEditPage(row.id)}
          />
        </TableCell>
      );
    }

    return (
      <TableCell className={column?.id} key={column?.id}>
        {value}
      </TableCell>
    );
  };

  return (
    <div className="breeds-grid">
      <Paper>
        <TableContainer className={classes.container}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.id}>{column?.label}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rowsRange.map((row: Props) => (
                <TableRow hover tabIndex={-1} key={row.id}>
                  {columns.map((column) => renderColumnValue(row, column))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowPerPage}
        />
      </Paper>
    </div>
  );
};

export default BreedsGrid;
