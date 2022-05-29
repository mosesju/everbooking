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


export default function SimpleTable ({ data, caption, headings }) {
    
    useEffect(()=>{
        // getColumnHeaders()
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