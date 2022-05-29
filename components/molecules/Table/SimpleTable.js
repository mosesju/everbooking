import { useEffect, useState } from "react";
import {
    Table,
    TableContainer,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    chakra,
    Button
  } from "@chakra-ui/react";
import TableHeadline from "../../atoms/Table/TableHeadline";
// import { useTable, useSortBy, Column } from "react-table";
// import {
//     TriangleDownIcon,
//     TriangleUpIcon
// } from "@chakra-ui/icons";

export default function SimpleTable ({ data, caption, headings }) {
    const [cols, setCols] = useState([])
    // const [data, setData] = useState([])

    // const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    // useTable({ columns, data }, useSortBy)


    const getColumnHeaders = () => {
        console.log(headings)
        // const item = data[0]
        // const columnArray = Object.keys(item)
        // setCols(columnArray)
        // console.log(columnArray)
    }
    useEffect(()=>{
        getColumnHeaders()
    },[data])
    return (
        <div>
            <TableContainer>
                <Table>
                    <TableHeadline caption={caption} />
                    <Thead>
                        {
                            headings?.map((header) =>(
                                <Th>
                                    { header }
                                </Th>
                            ))
                        }
                    </Thead>
                    <Tbody>
                        
                        {
                            data.map((item)=>(
                                <Tr>
                                    <Td>
                                        { item.event_name }
                                    </Td>
                                    <Td>
                                        { item.venue }
                                    </Td>
                                    <Td>
                                        { item.date }
                                    </Td>
                                    <Td>
                                        <Button >Details</Button>
                                    </Td>
                                </Tr>
                            
                                
                            ))
                        }
                        
                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    )
}