import {Dropdown, Text} from '@nextui-org/react';
import React, {useState} from 'react';
import {AcmeIcon} from '../icons/acme-icon';
import {AcmeLogo} from '../icons/acmelogo';
import {BottomIcon} from '../icons/sidebar/bottom-icon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

interface Category {
   name: string;
   description: string;
   icon: React.ReactNode;
}

const climatization = {
   name: 'Climatização',
   description: 'Ares-Condicionados',
   icon: <AcmeIcon />,
};

const entrance = {
   name: 'Entradas',
   description: 'Portas',
   icon: <AcmeIcon />,
};

const lights = {
   name: 'Iluminação',
   description: 'Lâmpadas',
   icon: <AcmeIcon />,
};

const irrigation = {
   name: 'Irrigação',
   description: 'Irrigadores',
   icon: <AcmeIcon />,
};

export const CategoriesDropdown = () => {
   const [company, setCompany] = useState<Category>(climatization);

   return (
      <Dropdown placement="bottom-right" borderWeight={'extrabold'}>
         <Dropdown.Trigger css={{cursor: 'pointer'}}>
            <Box>
               <Flex align={'center'} css={{gap: '$7'}}>
                  {company.icon}
                  <Box>
                     <Text
                        h3
                        size={'$xl'}
                        weight={'medium'}
                        css={{
                           m: 0,
                           color: '$accents9',
                           lineHeight: '$lg',
                           mb: '-$5',
                        }}
                     >
                        {company.name}
                     </Text>
                     <Text
                        span
                        weight={'medium'}
                        size={'$xs'}
                        css={{color: '$accents8'}}
                     >
                        {company.description}
                     </Text>
                  </Box>
                  <BottomIcon />
               </Flex>
            </Box>
         </Dropdown.Trigger>
         <Dropdown.Menu
            onAction={(e) => {
               if (e === '1') {
                  setCompany(lights);
               }
               if (e === '2') {
                  setCompany(entrance);
               }
               if (e === '3') {
                  setCompany(irrigation);
               }
               if (e === '4') {
                  setCompany(climatization);
               }
            }}
            aria-label="Avatar Actions"
            css={{
               '$$dropdownMenuWidth': '340px',
               '$$dropdownItemHeight': '60px',
               '& .nextui-dropdown-item': {
                  'py': '$2',
                  // dropdown item left icon
                  'svg': {
                     color: '$secondary',
                     mr: '$4',
                  },
                  // dropdown item title
                  '& .nextui-dropdown-item-content': {
                     w: '100%',
                     fontWeight: '$semibold',
                  },
               },
            }}
         >
            <Dropdown.Section title="Companies">
               <Dropdown.Item
                  key="1"
                  icon={<AcmeIcon />}
                  description={lights.description}
               >
                  {lights.name}
               </Dropdown.Item>
               <Dropdown.Item
                  key="2"
                  icon={<AcmeLogo />}
                  description={entrance.description}
               >
                  {entrance.name}
               </Dropdown.Item>
               <Dropdown.Item
                  key="3"
                  icon={<AcmeIcon />}
                  description={irrigation.description}
               >
                  {irrigation.name}
               </Dropdown.Item>
               <Dropdown.Item
                  key="4"
                  icon={<AcmeIcon />}
                  description={climatization.description}
               >
                  {climatization.name}
               </Dropdown.Item>
            </Dropdown.Section>
         </Dropdown.Menu>
      </Dropdown>
   );
};
