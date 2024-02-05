import React, { Fragment } from 'react'
import { Card, CardActionArea, CardContent, Typography } from '@mui/material'

function CustomCards({ }) {
    return (
        <Fragment>
            <Card sx={{ maxWidth: 345, margin: 1, padding: 3 }}>
                <CardActionArea>

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Fragment>
    )
}

export default CustomCards