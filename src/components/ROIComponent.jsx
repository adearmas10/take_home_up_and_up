import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Container from '@material-ui/core/Container';
import numeral from 'numeral';

import {
  ColoredSpan,
  ColumnGrid, LightText, OwnershipValue, SliderAmount,
  SliderTitle,
  StyledCard,
  StyledHeader,
  StyledHeaderColumnTitle,
} from './styled_components';

const formatCurrency = num => numeral(num).format('$0,0');

export const ROIComponent = () => {
  const [monthlyRent] = useState(1200);
  const [initialInvestment, setInitialInvestment] = useState(2400);
  const [monthlyInvestment, setMonthlyInvestment] = useState(0);
  const [years, setYears] = useState(5);

  return (
    <Container maxWidth="md">
      <StyledCard>
        <StyledHeader id="component-header">It pays to rent with up&up</StyledHeader>
        <Grid spacing={3} container>
          <Grid item xs={12}>
            <StyledHeaderColumnTitle id="monthly-payment-title">Monthly Payment</StyledHeaderColumnTitle>
          </Grid>
          <ColumnGrid item xs={12}>
            <span id="monthly-payment-rent">{`${formatCurrency(monthlyRent)} rent + `}</span>
            <ColoredSpan id="monthly-investment">{`${formatCurrency(monthlyInvestment)} investment`}</ColoredSpan>
          </ColumnGrid>
          <hr />
          <Grid item xs={12}>
            <SliderTitle id="initial-investment-title">Initial Investment</SliderTitle>
            <SliderAmount id="initial-investment-value">{formatCurrency(initialInvestment)}</SliderAmount>
            <Slider
              id="ii-slider"
              value={initialInvestment}
              onChange={(e, val) => setInitialInvestment(val)}
              min={monthlyRent * 2}
              max={13000}
              step={25}
            />
          </Grid>
          <Grid item xs={12}>
            <SliderTitle id="monthly-investment-title">Monthly Investment</SliderTitle>
            <SliderAmount id="monthly-investment-value">{formatCurrency(monthlyInvestment)}</SliderAmount>
            <Slider
              id="mi-slider"
              value={monthlyInvestment}
              onChange={(e, val) => setMonthlyInvestment(val)}
              min={0}
              max={500}
              step={5}
            />
          </Grid>
          <Grid item xs={12}>
            <SliderTitle id="year-title">Years with up&up</SliderTitle>
            <SliderAmount id="years">{years}</SliderAmount>
            <Slider
              id="year-slider"
              value={years}
              onChange={(e, val) => setYears(val)}
              min={1}
              max={10}
            />
          </Grid>
          <Grid item xs={12}>
            <SliderTitle id="ownership-title">Ownership Value</SliderTitle>
            <OwnershipValue id="ownership-value">{formatCurrency(initialInvestment + ((monthlyRent + monthlyInvestment) * (years * 12)))}</OwnershipValue>
          </Grid>
          <Grid item xs={12}>
            <LightText>
              {`Use your ${formatCurrency(initialInvestment + ((monthlyRent + monthlyInvestment) * (years * 12)))} ownership stake as a down payment on any home, transfer it to your next up&up rental, or cash out.`}
            </LightText>
          </Grid>
        </Grid>
      </StyledCard>
    </Container>
  );
};

export default ROIComponent;
