import NavLinks from "./NavLinks";
import styles from "../../styles/NavBar.module.scss";
import { Container } from "@mantine/core";

const navigation = {
    links: [
        { name: "Sports Tracker", to: "/" },
        { name: "Leagues", to: "/Leagues" },
        { name: "Profile", to: "/Profile" },
        { name: "Players", to: "/Players" },
        { name: "Teams", to: "/Teams" },
    ]
}
const { links } = navigation;


const NavBar = (): JSX.Element => {
    console.log(links);
    return (
        <div>
            <NavLinks links={links} />
        </div>
    );
};
export default NavBar;

