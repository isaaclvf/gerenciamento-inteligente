import {Col, Row, User, Text, Tooltip} from '@nextui-org/react';
import React from 'react';
import {DeleteIcon} from '../icons/table/delete-icon';
import {EditIcon} from '../icons/table/edit-icon';
import {EyeIcon} from '../icons/table/eye-icon';
import {users} from './data';
import {IconButton, StyledBadge} from './table.styled';

interface Props {
   user: typeof users[number];
   columnKey: string | React.Key;
}

type Status = "success" | "warning" | "error" | "default" | "primary" | "secondary" | "gradient" | undefined;

function getColor(str: string): Status {
   if (str === 'ligado') {
      return 'success';
   }
   if (str === 'desligado') {
      return 'warning';
   }

   if (str === 'reparo') {
      return 'error';
   }

   return undefined;
}

export const RenderCell = ({user, columnKey}: Props) => {
   // @ts-ignore
   const cellValue = user[columnKey];
   switch (columnKey) {
      case 'name':
         return (
            <User name={cellValue} css={{p: 0}} size='xs' color={getColor(user.status)}>
               {user.email}
            </User>
         );
      case 'role':
         return (
            <Col>
               <Row>
                  <Text b size={14} css={{tt: 'capitalize'}}>
                     {cellValue}
                  </Text>
               </Row>
               <Row>
                  <Text
                     b
                     size={13}
                     css={{tt: 'capitalize', color: '$accents7'}}
                  >
                     {user.team}
                  </Text>
               </Row>
            </Col>
         );
      case 'status':
         return (
            // @ts-ignore
            <StyledBadge type={String(user.status)}>{cellValue}</StyledBadge>
         );

      case 'actions':
         return (
            <Row
               justify="center"
               align="center"
               css={{'gap': '$8', '@md': {gap: 0}}}
            >
               <Col css={{d: 'flex'}}>
                  <Tooltip content="Detalhes">
                     <IconButton
                        onClick={() => console.log('Ver mais informações', user.id)}
                     >
                        <EyeIcon size={20} fill="#979797" />
                     </IconButton>
                  </Tooltip>
               </Col>
               <Col css={{d: 'flex'}}>
                  <Tooltip content="Editar informações">
                     <IconButton
                        onClick={() => console.log('Editar informações', user.id)}
                     >
                        <EditIcon size={20} fill="#979797" />
                     </IconButton>
                  </Tooltip>
               </Col>
               <Col css={{d: 'flex'}}>
                  <Tooltip
                     content="Delete user"
                     color="error"
                     onClick={() => console.log('Delete user', user.id)}
                  >
                     <IconButton>
                        {/* <DeleteIcon size={20} fill="#FF0080" /> */}

                     </IconButton>
                  </Tooltip>
               </Col>
            </Row>
         );
      default:
         return cellValue;
   }
};
