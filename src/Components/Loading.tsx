import React from 'react'
import { Skeleton, Stack } from "@mui/material";
function Loading() {
    return (
        <Stack spacing={1} alignItems={"center"} justifyContent="center">
            <Skeleton animation="wave" variant="text" sx={{ fontSize: '1rem' }} />
            <Skeleton animation="wave" variant="circular" width={40} height={40} />
            <Skeleton animation="wave" variant="rectangular" width={210} height={60} />
            <Skeleton animation="wave" variant="rounded" width={210} height={60} />
        </Stack>
    )
}

export default Loading