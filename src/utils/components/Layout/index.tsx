import { Container, Grid } from "@mui/material";
import type { FunctionComponent } from "react";
import Header from "./Header";
import { Outlet } from "react-router";


const Layout: FunctionComponent = () => {
    return (
        <Container maxWidth="sm">
            <Grid container direction="column" >
                <Header />
                <Outlet />
            </Grid>
        </Container>
    )
}

export default Layout