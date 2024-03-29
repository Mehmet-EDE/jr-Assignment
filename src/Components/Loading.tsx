import React from 'react'
import { Backdrop, CircularProgress } from "@mui/material";
import { LoadingProps } from '../Assets/interfaces';
function Loading({ open }: LoadingProps) {
    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}

export default Loading