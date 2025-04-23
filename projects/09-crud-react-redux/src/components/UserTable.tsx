import {
  Badge,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Title
} from '@tremor/react';
import { DeleteIcon, EditIcon } from './Icons';


const users: {
  id: number,
  name: string, 
  email: string,
  github: string
} []= [
  {
    id: 1,
    name: "Miguel Angel",
    email: "midu@gmail.com",
    github: "midudev"
  },
  {
    id: 2,
    name: "Renato Daniel Nani",
    email: "nani@gmail.com",
    github: "renatonani"
  },
  {
    id: 3,
    name: "Agustin Sbernini",
    email: "aguss@gmail.com",
    github: "agustinsbernini"
  },
  {
    id: 4,
    name: "Abril Uberti",
    email: "ubertiabril@gmail.com",
    github: "abriluberti"
  },
  {
    id: 4,
    name: "Patricio Perez Cardenal",
    email: "p4ttt0dev@gmail.com",
    github: "P4TTT0"
  },
];


export default function UserTable() {
  return (
    <Card className="shadow-md rounded-xl mt-4">
      <Title>
        Usuarios
        <Badge style={{ marginLeft: "8px", borderRadius: "20px" }}>{users.length}</Badge>
      </Title>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell> Id </TableHeaderCell>
            <TableHeaderCell> Nombre </TableHeaderCell>
            <TableHeaderCell> Email </TableHeaderCell>
            <TableHeaderCell> Acciones </TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {users.map((item) => (
            <TableRow key={item.name}>
              <TableCell>{item.id}</TableCell>
              <TableCell style={{ display: 'flex', alignItems: 'center' }}>
                <img
                  style={{
									  width: '32px',
									  height: '32px',
									  borderRadius: '50%',
									  marginRight: '8px'
                  }}
                  src={`https://unavatar.io/github/${item.github}`}
                  alt={item.name}
                />
                {item.name}
              </TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>
                  <button type='button'>
                    <EditIcon/>
                  </button>
                  <button type='button'>
                    <DeleteIcon/>
                  </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}
