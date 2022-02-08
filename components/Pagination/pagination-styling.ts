import styled from "@emotion/styled"

export const Container = styled.ul`
    display: flex;
`

interface IpaginationItemProps {
    isActive?: boolean;
}

export const Item = styled.li<IpaginationItemProps>`
    background-color: ${props => props.isActive ? "#C4C4C4" : "#F0F2F4"};
    min-width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
    cursor: pointer;
    flex-shrink: 0;
    padding: 0 5px;

    &:last-child {
        margin-right: 0;
    }
`