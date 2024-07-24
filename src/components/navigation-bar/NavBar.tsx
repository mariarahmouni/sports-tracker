import NavLinks from "./NavLinks";
import {IconBallBasketball} from '@tabler/icons-react'

const navigation = {
    links: [
        { name: "Games", to: "/Games" },
        { name: "Players", to: "/Players" },
        { name: "Teams", to: "/Teams" },
    ]
}
const { links } = navigation;


const NavBar = (): JSX.Element => {
    return (
            <NavLinks links={links} />    
    );
};
export default NavBar;

