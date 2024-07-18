import { NavLink, UnstyledButton, Group } from "@mantine/core";
import classes from '../../styles/NavLinks.module.css';

export interface NavLink {
    name: string,
    to: string,
}

export interface NavLinksProps {
    links: NavLink[];
}

const NavLinks = ({ links }: NavLinksProps): JSX.Element => (
    <>
        <Group>
            <a href={'/'} className={classes.logo}>{'Sports Tracker'}</a>
        </Group>
        <Group className={classes.linkGroup}>
            {links.map(link => (
                <UnstyledButton key={link.name} className={classes.button}>
                    <li className={classes.li}>
                        <a href={link.to} className={classes.link}>{link.name}</a>

                    </li>
                </UnstyledButton>
            ))}
        </Group>
       
    </>

);

export default NavLinks;