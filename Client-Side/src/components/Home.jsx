import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { Nav } from "../routing/Nav";
export const Home = () => {
    return <>
        <div>
            <Box
                sx={{
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    color: "white",
                    textAlign: "center",
                    py: 10,
                }}
            >
                <Typography variant="h3" sx={{ fontWeight: "bold", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
                    השכרת רכבים לכל מטרה
                </Typography>
                <Button
                    variant="contained"
                    sx={{
                        mt: 4,
                        backgroundColor: "#e50914",
                        "&:hover": { backgroundColor: "#c40812" },
                        px: 4,
                        py: 1.5,
                        fontSize: "1rem",
                        color: "white",
                    }}
                >
                    הזמינו עכשיו
                </Button>
            </Box>

                    
            <Box sx={{ backgroundColor: "#333", color: "white", textAlign: "center", py: 3 }}>
                <Typography>כל הזכויות שמורות &copy; AVIS ישראל</Typography>
                <Box sx={{ display: "flex", justifyContent: "center", gap: 3, mt: 1 }}>
                    <Link href="#" underline="none" sx={{ color: "white", fontSize: "0.9rem", "&:hover": { textDecoration: "underline" } }}>
                        תנאים
                    </Link>
                    <Link href="#" underline="none" sx={{ color: "white", fontSize: "0.9rem", "&:hover": { textDecoration: "underline" } }}>
                        מדיניות פרטיות
                    </Link>
                </Box>
            </Box>
        </div>
    </>
}
