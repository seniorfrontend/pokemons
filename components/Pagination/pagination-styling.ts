import styled from "@emotion/styled"

export const Container = styled.ul``

interface IpaginationItemProps {
    isActive?: boolean;
}

export const Item = styled.li<IpaginationItemProps>`
    background-color: ${props => props.isActive ? "red" : "blue"}
`