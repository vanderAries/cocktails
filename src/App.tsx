import { Grid, Stack } from '@mui/material';
import { coctailList } from './data';
import CocktailCard from './CocktailCard';

function App() {
  return (
      <Stack
        sx={{ backgroundColor: '#F0E6CF'}}
      >
        {coctailList.map((cocktail) => (
     
            <CocktailCard cocktail={cocktail} />

        ))}
      </Stack>
  );
}

export default App;
