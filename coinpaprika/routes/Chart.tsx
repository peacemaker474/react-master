import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from 'react-apexcharts';
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atoms";

interface ChartProps {
    coinId: string | undefined;
}

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

function Chart({ coinId }: ChartProps) {
    const isDark = useRecoilValue(isDarkAtom);
    const {isLoading, data} = useQuery<IHistorical[]>(
        ["ohlcv", coinId],
        () => fetchCoinHistory(coinId),
        {
            refetchInterval: 10000,
        }
    )
    return (
        <div>
            {isLoading ? (
            "Loading chart..." 
            ) : ( 
            <ApexChart 
                type="line"
                series={[
                    {
                        name: "Prices",
                        data: data?.map(price => price.close),
                    }
                ]}
                options={{
                    theme: {
                        mode: isDark ? "dark" : "light",
                    },
                    fill: {
                        type: "gradient",
                        gradient: {
                            gradientToColors: ["#0be881"],
                            stops: [0, 100],
                        },
                    },
                    colors: ["#0fbcf9"],
                    chart: {
                        height: 300,
                        width: 300,
                        background: "transparent",
                        toolbar: {
                            show: false,
                        }
                    },
                    tooltip: {
                        y: {
                            formatter: (value) => `$${value.toFixed(2)}`,
                        }
                    },
                    stroke: {
                        curve: "smooth",
                        width: 4,
                    },
                    grid: {
                        show: false,
                    },
                    yaxis: {
                        show: false,
                    },
                    xaxis: {
                        type: "datetime",
                        categories: data?.map(day => day.time_close),
                        labels: {
                            show: false
                        },
                        axisTicks: {
                            show: false,
                        },
                        axisBorder: {
                            show: false,
                        }
                    }
                }}
            />
            )}
        </div>
    )
}

export default Chart;