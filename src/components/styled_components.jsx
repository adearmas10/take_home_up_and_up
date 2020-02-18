import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';

export const StyledHeader = styled.h1`
    font-size: 25px;
    margin-bottom: 15px;
    text-align: center;
    font-weight: 400;
`;

export const StyledCard = styled(Card)`
    padding: 20px;
`;

export const FullHeightGrid = styled(Grid)`
    height: 100vh;
`;

export const StyledHeaderColumnTitle = styled.div`
    padding-bottom: .5rem;
    font-weight: 600;
    font-size: .75rem;
    color: #949494;
    text-transform: uppercase;
`;

export const ColumnGrid = styled(Grid)`
    font-weight: 600;
    font-size: 1.25rem;
`;

export const ColoredSpan = styled.span`
    color: #00CFCC;
`;

export const SliderTitle = styled.div`
    margin-left: 15px;
    font-size: .75rem;
    font-weight: 600;
    text-transform: uppercase;
    color: #949494;
`;

export const StrikeThroughTitle = styled(SliderTitle)`
    text-decoration: line-through;
`;

export const SliderAmount = styled.div`
    padding-top: .5rem;
    padding-bottom: 1rem;
    text-align: center;
    font-weight: 600;
    font-size: 1.2rem;
`;

export const OwnershipValue = styled.div`
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    color: #00CFCC;
`;

export const LightText = styled.div`
    font-weight: 300;
`;
