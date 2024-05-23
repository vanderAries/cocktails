import { Grid } from '@mui/material';
import { coctailList } from './data';
import CocktailCard from './CocktailCard';

function App() {
  return (
      <Grid
        container
        spacing={4}
        padding={4}
        sx={{ backgroundColor: '#5999AD', color: '#BAE0EB' }}
      >
        {coctailList.map((cocktail) => (
          <Grid item xs key={cocktail.id}>
            <CocktailCard cocktail={cocktail} />
          </Grid>
        ))}
      </Grid>
  );
}

export default App;
