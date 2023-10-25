import {Avatar, Dropdown, Navbar, Text} from '@nextui-org/react';
import React from 'react';
import {DarkModeSwitch} from './darkmodeswitch';

export const UserDropdown = () => {
   return (
      <Dropdown placement="bottom-right">
         <Navbar.Item>
            <Dropdown.Trigger>
               <Avatar
                  bordered
                  as="button"
                  color="secondary"
                  size="md"
                  src="https://i.pravatar.cc/150?img=68"
               />
            </Dropdown.Trigger>
         </Navbar.Item>
         <Dropdown.Menu
            aria-label="User menu actions"
            onAction={(actionKey) => console.log({actionKey})}
         >
            <Dropdown.Item key="profile" css={{height: '$18'}}>
               <Text b color="inherit" css={{d: 'flex'}}>
                  Logado como
               </Text>
               <Text b color="inherit" css={{d: 'flex'}}>
                  usuario@exemplo.com
               </Text>
            </Dropdown.Item>
            <Dropdown.Item key="settings" withDivider>
               Configurações da conta
            </Dropdown.Item>
            <Dropdown.Item key="analytics" withDivider>
               Estatísticas
            </Dropdown.Item>
            <Dropdown.Item key="system">Sistema</Dropdown.Item>
            <Dropdown.Item key="configurations">Configurações</Dropdown.Item>
            <Dropdown.Item key="help_and_feedback" withDivider>
               Ajuda & Feedback
            </Dropdown.Item>
            <Dropdown.Item key="logout" withDivider color="error">
               Sair
            </Dropdown.Item>
            <Dropdown.Item key="switch" withDivider>
               <DarkModeSwitch /> 
            </Dropdown.Item>
         </Dropdown.Menu>
      </Dropdown>
   );
};
