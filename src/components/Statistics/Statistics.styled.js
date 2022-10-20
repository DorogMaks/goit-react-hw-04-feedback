import styled from 'styled-components';

export const StatisticsList = styled.ul`
  margin-bottom: 20px;
`;

export const StatisticsItem = styled.li`
  font-size: 18px;
  text-align: center;
  text-transform: capitalize;

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const AdditionalStatistics = styled.div``;

export const AdditionalStatisticsText = styled.p`
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  text-decoration: overline;

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;
