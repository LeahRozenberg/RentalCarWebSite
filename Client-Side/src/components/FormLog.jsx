import { Directions } from "@mui/icons-material"
import { Box, Button, ButtonBase, Typography } from "@mui/material"
import { useDispatch } from "react-redux"
import { Login } from "./Login"
import { Register } from "./Register"
import { useState } from "react"

export const Form = () => {
    let nav = useDispatch()
    const [login, setLogin] = useState(true)
    const [register, setRegister] = useState(false)
    return <>
        <Box>
            <div style={{ flexDirection: 'column', display: 'flex', boxSizing: 'border-box' }}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "white",
                        borderRadius: 2,
                        boxShadow: 3,
                        maxWidth: 400,
                        mx: "auto",
                        my: 5,
                        p: 3,
                    }}
                >
                    <Box
                        component="img"
                        src={`${process.env.PUBLIC_URL}/cars/download.svg`}
                        alt="logo"
                        sx={{
                            height: 80,
                            marginBottom: 2,

                        }}
                    />

                    <Typography variant="h5" color="red" gutterBottom>
                        כיף שבאת!
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                        הרשם כעת והתחל את המסע שלך
                    </Typography>
                    <Box sx={
                        {
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "white",
                            borderRadius: 2,
                            boxShadow: 3,
                            mx: "auto",
                            my: 5,
                            p: 1
                        }}>
                        <Button sx={{
                            padding: "5px",
                            width: "100%",
                            border: "1px solid #f1f1f1",
                            boxShadow: " 0 0 10px #00000014",
                            borderRadius: "32p",
                            backgroundColor: login ? 'red' : 'white',
                            color: login ? 'white' : 'red'
                        }}
                            onClick={() => {
                                setLogin(true); setRegister(false)
                            }
                            }>
                            הרשמה</Button>
                        <Button sx={{
                            padding: "5px",
                            width: "100%",
                            border: "1px solid #f1f1f1",
                            boxShadow: " 0 0 10px #00000014",
                            borderRadius: "32p",
                            backgroundColor: register ? 'red' : 'white',
                            color: register ? 'white' : 'red'
                        }}
                            onClick={() => {
                                setRegister(true);
                                setLogin(false)

                            }
                            }>
                            התחברות</Button>
                    </Box>
                    {login == true && <Login></Login>}
                    {register == true && <Register></Register>}
                </Box>
            </div>
        </Box>
    </>
}