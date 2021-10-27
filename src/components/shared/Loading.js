import React from 'react';
import styled from '@emotion/styled'
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const LoadingBox = styled(Box)({
    height: "400px",
    width: "90%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
})

const Loading = () => {
    return (
        <LoadingBox>
            <CircularProgress />
        </LoadingBox>)
}

export default Loading;