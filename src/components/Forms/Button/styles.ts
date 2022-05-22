import styled from "styled-components/native";
import { RectButton} from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import theme from 'styled-components'


export const Container = styled(RectButton)`
    width: 100%;
    
    border-radius: 5px;
    
    align-items: center;
    
    background-color: ${({ theme }) => theme.colors.secondary};  
`;

export const Title = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({theme}) => theme.fonts.medium };
    
    color: ${({ theme }) => theme.colors.shape};

    padding: 18px;
    
`;