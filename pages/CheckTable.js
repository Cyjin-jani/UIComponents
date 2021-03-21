import Checkbox from '@material-ui/core/Checkbox';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import { FiCheck } from 'react-icons/fi';
import styled from 'styled-components';

// TODO: 디자인 상담... 체크박스 아예 커스터마이징 해야할 거 같긴 함...
// 체크박스 체크되는 경우의 디자인이 없는 느낌...
// 테이블 헤더 부분 글자 폰트에 대해서도 문의하기.

const MuiTable = styled(Table)`
  border-top: 1px solid #e9ecef;
  .MuiTableCell-root {
    border-bottom: 1px solid #e9ecef;
  }
  .Mui-selected {
    background: none;
  }
`;
const BoxLayout = styled.div`
  border: 1px solid #ced4da;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1px;
`;
const CheckIcon = styled(FiCheck)`
  width: 70%;
  color: #adb5bd;
`;

const CheckTable = () => {
  const [selected, setSelected] = useState([]);
  console.log('어떤 게 선택 받았나', selected);

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  const rows = [
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Donut', 452, 25.0, 51, 4.9),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  ];
  

  const headCells = [
    { id: 'name', numeric: false, disablePadding: true, label: 'Dessert (100g serving)' },
    { id: 'calories', numeric: true, disablePadding: false, label: 'Calories' },
    { id: 'fat', numeric: true, disablePadding: false, label: 'Fat (g)' },
    { id: 'carbs', numeric: true, disablePadding: false, label: 'Carbs (g)' },
    { id: 'protein', numeric: true, disablePadding: false, label: 'Protein (g)' },
  ];
  
  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelectedItems = rows.map((item) => item.name);
      setSelected(newSelectedItems);
    } else {
      setSelected([]);
    }
  };

  
  const handleClick = (event, id) => {
    
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      // 선택된 아이가 selected 배열에 없는 경우, 기존 selected배열에 추가해 줌.
      newSelected = newSelected.concat(selected, id);
      console.log('기존에 존재하지 않으니 추가하기', newSelected);
    } else if (selectedIndex === 0) {
      // 선택된 아이가 기존 selected 배열에 존재하는 경우 다시 제거해주기.
      newSelected = newSelected.concat(selected.slice(1));
      console.log('기존에 존재하는 경우 제거', newSelected);
    } else if (selectedIndex === selected.length - 1) {
      // 선택된 아이가 기존 selected 배열에 맨 마지막에 존재하는 경우, 다시 제거해주기.
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  

  const numSelected = selected.length;
  const rowCount = rows.length;
  const onSelectAllClick = handleSelectAllClick;

  
  return (
    <TableContainer>
      <MuiTable>
        {/* table Header 부분 */}
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
                checked={rowCount > 0 && numSelected === rowCount}
                onChange={onSelectAllClick}
                icon={
                  <BoxLayout>
                    <CheckIcon />
                  </BoxLayout>
                }
              ></Checkbox>
            </TableCell>
            {headCells.map((headCell) => (
              <TableCell key={headCell.id} align="center">
                {headCell.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        {/* table body (rows) 부분 */}
        <TableBody>
          {rows.map((row, index) => {
            const isItemSelected = isSelected(row.name);

            return (
              <TableRow
                onClick={(event) => handleClick(event, row.name)}
                role="checkbox"
                tabIndex={-1}
                key={row.name}
                selected={isItemSelected}
              >
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={isItemSelected}
                    icon={
                      <BoxLayout>
                        <CheckIcon />
                      </BoxLayout>
                    }
                  />
                </TableCell>
                <TableCell
                  component="th"
                  id={'tempId' + index}
                  scope="row"
                  padding="none"
                  align="center"
                >
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.quantity}</TableCell>
                <TableCell align="center">{row.price}</TableCell>
                <TableCell align="center">{row.deliveryFee}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
};

export default CheckTable;