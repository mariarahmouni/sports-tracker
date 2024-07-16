import React from "react";
import { Group, Container, UnstyledButton, NavLink, Button, ButtonGroup } from "@mantine/core";
import { IconHome2 } from '@tabler/icons-react';

export interface NavLink {
    name: string,
    to: string,
}

export interface NavLinksProps {
    links: NavLink[];
}

const col = {
    bg: 'var(--mantine-color-gray-3)',
}

const NavLinks = ({ links }: NavLinksProps): JSX.Element => (
    <Container fluid>
        <ButtonGroup style={{gap: 40}}>
            {links.map(link => (
                <Button key={link.name} {...col} style={{width: '100%'}}>
                    <a href={link.to}>{link.name}</a>
                </Button>

            ))}
        </ButtonGroup>
    </Container>


);

export default NavLinks;