import styled from "styled-components"

export const DropDownContainer = styled.div`
     width: 200px;
     height: 50px;
`;

export const DropDownHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    margin-bottom: 10px;
    padding: 10px 10px 10px 15px;
    color: var(--color-text);
    background: var(--color-alternative);
    box-shadow: var(--shadow);
    border-radius: var(--br-radius);
    cursor: pointer;
`;

export const DropDownList = styled.ul`
    background-color: var(--color-alternative);
    color: var(--color-text);
    border-radius: var(--br-radius);
    cursor: pointer;
`;

export const ListItem = styled.li`
    list-style: none;
    transition: all 0.5s ease;
    padding: 10px;
    border-radius: var(--br-radius);

    &:hover{
       box-shadow: var(--shadow);
    }
`;