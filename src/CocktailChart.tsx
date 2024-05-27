import { Stack } from '@mui/material';
import { PieChart } from '@mui/x-charts';

interface CocktailChartProps {
  data: { value: number; label: string; color: string }[];
}

export default function CocktailChart({ data }: CocktailChartProps) {
  return (
    <Stack
      height={120}
      width={120}
      alignItems="center"
      justifyContent="center"
      borderRadius="50%"
      boxSizing="content-box"
      sx={{
        backgroundColor: 'LightSteelBlue',
        border: 2,
        borderColor: 'white',
      }}
    >
      <Stack
        height={115}
        width={115}
        borderRadius="50%"
        boxSizing="content-box"
        sx={{
          backgroundColor: 'white',
        }}
      >
        <PieChart
          series={[
            {
              data,
              outerRadius: 56,
              innerRadius: 2,
              paddingAngle: 2,
              cx: 52,
              highlightScope: { faded: 'global', highlighted: 'item' },
              faded: { additionalRadius: -20, color: 'gray' },
            },
          ]}

          slotProps={{
            legend: { hidden: true },
          }}
        />
      </Stack>
    </Stack>
  );
}
