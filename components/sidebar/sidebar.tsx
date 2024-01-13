import React, { useState } from "react";
import { Box } from "../styles/box";
import { Sidebar } from "./sidebar.styles";
import { Avatar, Tooltip } from "@nextui-org/react";
import { Flex } from "../styles/flex";
import { CategoriesDropdown } from "./categories-dropdown";
import { HomeIcon } from "../icons/sidebar/home-icon";
import { PaymentsIcon } from "../icons/sidebar/payments-icon";
import { BalanceIcon } from "../icons/sidebar/balance-icon";
import { AccountsIcon } from "../icons/sidebar/accounts-icon";
import { CustomersIcon } from "../icons/sidebar/customers-icon";
import { ProductsIcon } from "../icons/sidebar/products-icon";
import { ReportsIcon } from "../icons/sidebar/reports-icon";
import { DevIcon } from "../icons/sidebar/dev-icon";
import { ViewIcon } from "../icons/sidebar/view-icon";
import { SettingsIcon } from "../icons/sidebar/settings-icon";
import { CollapseItems } from "./collapse-items";
import { SidebarItem } from "./sidebar-item";
import { SidebarMenu } from "./sidebar-menu";
import { FilterIcon } from "../icons/sidebar/filter-icon";
import { useSidebarContext } from "../layout/layout-context";
import { ChangeLogIcon } from "../icons/sidebar/changelog-icon";
import { useRouter } from "next/router";

export const SidebarWrapper = () => {
  const router = useRouter();
  const { collapsed, setCollapsed } = useSidebarContext();

  return (
    <Box
      as="aside"
      css={{
        height: "100vh",
        zIndex: 202,
        position: "sticky",
        top: "0",
      }}
    >
      {collapsed ? <Sidebar.Overlay onClick={setCollapsed} /> : null}

      <Sidebar collapsed={collapsed}>
        <Sidebar.Header>
          <CategoriesDropdown />
        </Sidebar.Header>
        <Flex direction={"column"} justify={"between"} css={{ height: "100%" }}>
          <Sidebar.Body className="body sidebar">
            <SidebarItem
              title="Home"
              icon={<HomeIcon />}
              isActive={router.pathname === "/"}
              href="/home"
            />
            <SidebarMenu title="Blocos">
              <SidebarItem
                isActive={router.pathname === "/control-panel"}
                title="Bloco A"
                icon={<AccountsIcon />}
                href="control-panel"
              />
              <SidebarItem
                isActive={router.pathname === "/bloco/b"}
                title="Bloco B"
                icon={<AccountsIcon />}
                href="control-panel"
              />
              <SidebarItem
                isActive={router.pathname === "/bloco/c"}
                title="Bloco C"
                icon={<AccountsIcon />}
                href="control-panel"
              />
              <SidebarItem
                isActive={router.pathname === "/bloco/d"}
                title="Bloco D"
                icon={<AccountsIcon />}
                href="control-panel"
              />
              {/* <SidebarItem
                isActive={router.pathname === "/payments"}
                title="Payments"
                icon={<PaymentsIcon />}
              /> */}
              <CollapseItems
                icon={<BalanceIcon />}
                items={["Salas", "Equipamentos", "Uso"]}
                title="Dados"
              />

              <SidebarItem
                isActive={router.pathname === "/customers"}
                title="Ocupação"
                icon={<CustomersIcon />}
              />
              <SidebarItem
                isActive={router.pathname === "/products"}
                title="Produtos"
                icon={<ProductsIcon />}
              />
            </SidebarMenu>

            <SidebarMenu title="Reportar">
              <SidebarItem
                isActive={router.pathname === "/reports"}
                title="Manutenção"
                icon={<ReportsIcon />}
              />
            </SidebarMenu>

            <SidebarMenu title="General">
              {/* <SidebarItem
                isActive={router.pathname === "/developers"}
                title="Developers"
                icon={<DevIcon />}
              /> */}
              <SidebarItem
                isActive={router.pathname === "/view"}
                title="Ver dados"
                icon={<ViewIcon />}
              />
              <SidebarItem
                isActive={router.pathname === "/settings"}
                title="Configurações"
                icon={<SettingsIcon />}
              />
            </SidebarMenu>

            <SidebarMenu title="Atualizações">
              <SidebarItem
                isActive={router.pathname === "/changelog"}
                title="Log de mudanças"
                icon={<ChangeLogIcon />}
              />
            </SidebarMenu>
          </Sidebar.Body>
          <Sidebar.Footer>
            <Tooltip content={"Settings"} rounded color="primary">
              <SettingsIcon />
            </Tooltip>
            <Tooltip content={"Adjustments"} rounded color="primary">
              <FilterIcon />
            </Tooltip>
            <Tooltip content={"Profile"} rounded color="primary">
              <Avatar
                src="https://i.pravatar.cc/150?img=68"
                size={"sm"}
              />
            </Tooltip>
          </Sidebar.Footer>
        </Flex>
      </Sidebar>
    </Box>
  );
};
