import NavLinks from "./NavLinks";
import { Container, Group } from '@mantine/core';

const navigation = {
    links: [
        { name: "Leagues", to: "/Leagues" },
        { name: "Profile", to: "/Profile" },
        { name: "Players", to: "/Players" },
        { name: "Teams", to: "/Teams" },
    ]
}
const { links } = navigation;


const NavBar = (): JSX.Element => {
    return (
        <Container  fluid>
            <NavLinks links={links} />
        </Container>
    );
};
export default NavBar;

