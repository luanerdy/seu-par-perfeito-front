import styled from "styled-components";

const StyledForm = styled.form`
    width: ${props => props.width ? props.width : '100%'};
    height: ${props => props.height ? props.height : 'initial'};
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
`;

export { StyledForm };