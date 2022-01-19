import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import styled from "styled-components";

const Container = styled.div``;

const PriceChartWeeks = styled.ul``;

const PriceChartDay = styled.ul`
  display: flex;
`;

const PriceInfo = styled.li``;

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

interface ChartProps {
  coinId: string;
}
function Price({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(
    ["ohlcvPrice", coinId],
    () => fetchCoinHistory(coinId),
    {
      refetchInterval: 5000,
    }
  );
  return (
    <Container>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <PriceChartWeeks>
          {data?.map((price) => (
            <PriceChartDay>
              <div>
                {Object.keys(price).map((dayPrice) => (
                  <div>{dayPrice}</div>
                ))}
              </div>
              <div>
                {Object.values(price).map((dayPrice) => (
                  <div>{dayPrice}</div>
                ))}
              </div>
            </PriceChartDay>
          ))}
        </PriceChartWeeks>
      )}
    </Container>
  );
}

export default Price;
