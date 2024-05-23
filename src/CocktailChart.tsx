import { Stack } from '@mui/material';
import { PieChart } from '@mui/x-charts';

interface CocktailChartProps {
  data: { value: number; label: string; color: string }[];
}

export default function CocktailChart({ data }: CocktailChartProps) {
  return (
    <Stack
      height={200}
      width={200}
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
        height={180}
        width={180}
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
              outerRadius: 98,
              innerRadius: 2,
              paddingAngle: 2,
              cx: 70,
              highlightScope: { faded: 'global', highlighted: 'item' },
              faded: { additionalRadius: -20, color: 'gray' },
            },
          ]}
          height={200}
          width={450}
          slotProps={{
            legend: {
            seriesToDisplay: data.map((d) => ({ color: d.color, label: `${d.value} x ${d.label} `, id: d.label})),
              labelStyle: {
                fill: '#BAE0EB',
              },
              direction: 'column',
              position: { vertical: 'top', horizontal: 'right' },
            },
          }}
        />
      </Stack>
    </Stack>
  );
}
