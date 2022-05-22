import React from 'react';
import { 
    Container,
    Icon,
    Title,
    Button,
} from './styles';
import { RectButtonProps } from 'react-native-gesture-handler';


const icons = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle'
 }

interface Props extends RectButtonProps {
    type: 'up' | 'down';
    title: string;
    isActive: boolean;
}

export function TransactionTypeButton ({
    title,
    isActive,
    type,
    ...rest
} : Props){
    return(
        <Container 
        isActive={isActive}
        type={type}
        
         >
        <Button 
        {...rest}
        >
            <Icon 
            name={type === "up" ? icons.up : icons.down}
            type={type}
            />
            <Title>
                {title}
            </Title>
        </Button>
        </Container>
    )
}