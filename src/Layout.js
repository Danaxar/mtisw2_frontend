import Menu from "./components/Menu";

// El children es la página que va a estar activa en nuestra página
const Layout = ({children}) => {
    return (
        <>
            <Menu/>
            <main>{children}</main>
        </>
    )
};

export default Layout;