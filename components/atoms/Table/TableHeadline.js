import { TableCaption } from "@chakra-ui/react";


export default function TableHeadline ({ caption }) {
    return (
        <div>
            <TableCaption>
                { caption }
            </TableCaption>
        </div>
    )
}