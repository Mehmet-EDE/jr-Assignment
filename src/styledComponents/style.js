import { styled } from '@mui/system';
import { Box, AppBar, Toolbar } from '@mui/material'
import { Colors } from '../constants/colorPalette';

export const StyledBox = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
});
export const StyledHeader = styled(AppBar)({
    width: '100%',
    position: 'static',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: Colors.HeaderColor,

})
export const StyledToolbar = styled(Toolbar)({
    width: '100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
})