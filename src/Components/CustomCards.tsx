import { useEffect } from 'react'
import { Card, CardContent, CardActionArea, Typography } from '@mui/material'
import { Colors } from '../constants/colorPalette';
import { CardProps } from '../Assets/interfaces';


function CustomCards({ country, selectedCard, setSelectedCard }: CardProps) {



    const handleSelectCard = (code: string) => {
        if (selectedCard.length && selectedCard === code) {
            setSelectedCard("")
        } else setSelectedCard(code);
    }

    return (
        <Card
            key={country.code}
            sx={{
                maxWidth: 345,
                margin: 1,
                padding: 3,
                display: 'flex',
                justifyContent: "center",
                alignItems: 'center',
                backgroundColor: selectedCard === country.code ? Colors.selectedBG : Colors.defaulBG,
                borderRadius: 3,
                boxShadow: 15
            }}
        >
            <CardActionArea onClick={() => handleSelectCard(country.code)}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {country.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {country.native}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default CustomCards
