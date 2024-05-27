import { Stack, Box, Typography } from "@mui/material";

interface CocktailLegendProps {
    data: { value: number; label: string; color: string }[];
  }

export default function CocktailLegend({ data }: CocktailLegendProps) {

    return (
        <Stack >
            {data.map((item) => (
                <Stack
                    direction="row"
                    key={item.label}
                    alignItems="center"
                    padding={1}
                >
                    <Stack direction="row" alignItems="center">
                        <Box
                            sx={{
                                width: 20,
                                height: 20,
                                borderRadius: '50%',
                                backgroundColor: item.color,
                            }}
                        />
                        <Typography variant="body1">{item.value}</Typography>
                    </Stack>
                    <Typography variant="body1">{item.label}</Typography>
                </Stack>
            ))}
        </Stack>
    )

}

