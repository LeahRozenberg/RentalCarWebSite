import { Box, Button } from "@mui/material";
import { AddCar } from "./AddCar";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Outlet } from "react-router";

export const Manager = () => {
    const [open, setOpen] = useState(false);
    const nav = useNavigate();
    
    return (
        <>
            <Box 
                sx={{
                    display: "flex",
                    flexDirection: "column", 
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#fff5f5",
                    borderRadius: 3,
                    boxShadow: 4, 
                    maxWidth: 400,
                    mx: "auto",
                    my: 5,
                    p: 4,
                }}
            >
                <Button 
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{
                        mt: 2,
                        borderRadius: 2,
                        backgroundColor: '#f44336', 
                        '&:hover': {
                            backgroundColor: '#d32f2f', 
                        },
                        transition: "background-color 0.3s",
                    }}
                    onClick={() => setOpen(true)}
                >
                    הוספת רכב
                </Button>
                {open && <AddCar isOpen={open} setOpen={setOpen} />}
                
                <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{
                        mt: 2,
                        borderRadius: 2,
                        backgroundColor: '#e57373',
                        '&:hover': {
                            backgroundColor: '#d32f2f',
                        },
                        transition: "background-color 0.3s",
                    }}
                    onClick={() => nav('/users')}
                >
                    משתמשים
                </Button>

                <Button 
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{
                        mt: 2,
                        borderRadius: 2,
                        backgroundColor: '#ef5350', 
                        '&:hover': {
                            backgroundColor: '#c62828', 
                        },
                        transition: "background-color 0.3s",
                    }}
                    onClick={() => nav('/VehicleMenu')}
                >
                    רכבים
                </Button>

                <Button 
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{
                        mt: 2,
                        borderRadius: 2,
                        backgroundColor: '#ff7043', 
                        '&:hover': {
                            backgroundColor: '#d84315', 
                        },
                        transition: "background-color 0.3s",
                    }}
                    onClick={() => nav('/myRent')}
                >
                    השאלות
                </Button>
            </Box>
            <Outlet />
        </>
    );
};
