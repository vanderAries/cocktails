import { Cocktail } from './types';
import CocktailChart from './CocktailChart';
import { Box, Stack, Typography } from '@mui/material';
import CocktailLegend from './CocktailLegend';

interface CocktailCardProps {
  cocktail: Cocktail;
}

export default function CocktailCard({ cocktail }: CocktailCardProps) {
  const data = cocktail.ingredients.map((ingredient) => ({
    value: ingredient.quantity,
    label: ingredient.name,
    color: ingredient.color,
  }));

  return (
    <Stack direction="row">
      <Box width={4} sx={{ backgroundColor: 'black' }} />
      <Stack padding={4}>
        <Typography variant="h4" marginBottom={2}>
          {cocktail.name}
        </Typography>
        <Stack direction="row" justifyContent="space-between">
          <CocktailChart data={data} />
          <CocktailLegend data={data} />
        </Stack>
      </Stack>
    </Stack>
  );
}
