import React from 'react';
import {StyledForm} from './styles';

const Form = (props) => {
    const { children, disabled } = props;
    const elements = React.Children.toArray(children);

    return (
        <StyledForm {...props}>
            {elements.map(e => React.cloneElement(e, {disabled}))}
        </StyledForm>
    );
}

export { Form };
