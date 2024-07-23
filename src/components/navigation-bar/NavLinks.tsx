import { NavLink, UnstyledButton, Group } from "@mantine/core";
import classes from '../../styles/NavLinks.module.css';
import { IconBallBasketball } from "@tabler/icons-react";

export interface NavLink {
    name: string,
    to: string,
}

export interface NavLinksProps {
    links: NavLink[];
}

const NavLinks = ({ links }: NavLinksProps): JSX.Element => (
    <>
        <Group className={classes.linkGroup} px={10}>
    
            <UnstyledButton key="Profile">
                <li className={classes.li}>
                    <a href="/" className={classes.link}>
                        <IconBallBasketball size={40} className={classes.logoIcon}/>
                        NBA Tracker
                    </a>

                </li>
            </UnstyledButton>

            {links.map(link => (
                <UnstyledButton key={link.name}>
                    <li className={classes.li}>
                        <a href={link.to} className={classes.link}>{link.name}</a>
                    </li>
                </UnstyledButton>
            ))}
            
             <UnstyledButton key="Profile">
                    <li className={classes.li}>
                        <a href="/Profile" className={classes.profileLink}>Profile</a>
                    </li>
            </UnstyledButton>
        </Group>
    </>


);

export default NavLinks;
