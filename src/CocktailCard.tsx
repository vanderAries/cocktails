import { Cocktail } from './types';
import CocktailChart from './CocktailChart';
import { Stack, Typography } from '@mui/material';

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
    <Stack alignItems="center" justifyContent="center"  paddingLeft={4} paddingRight={30} paddingY={4} sx={{
        backgroundColor: "#4F8496",
        borderRadius: 4,
    }}>
      <Typography variant="h4" marginBottom={2} color="#BAE0EB">
        {cocktail.name}
      </Typography>
      <CocktailChart data={data} />
    </Stack>
  );
}
