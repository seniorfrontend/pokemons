import React from 'react'
import { Global, css } from '@emotion/react'

const GlobalStyles = () => {
    return <Global
        styles={css`
            ul {
                padding-left: 0;
            }
        `}
    />
}

export default GlobalStyles