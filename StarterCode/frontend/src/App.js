import React, { useEffect, useState } from 'react';
import { 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  Typography, 
  Button, 
  CardMedia,
  Snackbar 
} from '@mui/material';

// API base URL
const API_URL = 'http://localhost:3001'; // Changed from 5000 to 3001

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'info' });

  const closeSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await fetch(`${API_URL}/api/products`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      setProducts(data);
      
      setSnackbar({
        open: true,
        message: 'Products loaded successfully',
        severity: 'success'
      });

    } catch (error) {
      console.error('Error details:', error);
      
      let errorMessage = 'Failed to fetch products. ';
      if (error.message.includes('Failed to fetch')) {
        errorMessage += `Please check if the backend server is running on ${API_URL}`;
      } else {
        errorMessage += error.message;
      }
      
      setError(errorMessage);
      setSnackbar({
        open: true,
        message: errorMessage,
        severity: 'error'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${API_URL}/api/products/${id}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
        },
      });
      
      if (!response.ok) {
        throw new Error(`Server returned ${response.status}: ${response.statusText}`);
      }
      
      setProducts(prevProducts => 
        prevProducts.filter(product => product.id !== id)
      );

      setSnackbar({
        open: true,
        message: 'Product deleted successfully',
        severity: 'success'
      });
      
    } catch (error) {
      console.error('Error deleting product:', error);
      setSnackbar({
        open: true,
        message: `Failed to delete product: ${error.message}`,
        severity: 'error'
      });
    }
  };

  if (error) {
    return (
      <Container>
        <Typography 
          variant="h6" 
          align="center" 
          color="error"
          sx={{ mt: 4 }}
        >
          Error: {error}
        </Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 4 }}>
      <Grid container spacing={3} justifyContent="center">
        {isLoading ? (
          <Grid item xs={12}>
            <Typography variant="h6" align="center">
              Loading products...
            </Typography>
          </Grid>
        ) : products.length === 0 ? (
          <Grid item xs={12}>
            <Typography variant="h6" align="center">
              No products available
            </Typography>
          </Grid>
        ) : (
          products.map((product) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              md={4} 
              lg={3} 
              key={product.id}
              sx={{
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <Card sx={{ width: '100%', maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt={product.name}
                  height="140"
                  image={product.image}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/150';
                    e.target.onerror = null;
                  }}
                />
                <CardContent>
                  <Typography variant="h5" component="div" gutterBottom>
                    {product.name}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary" 
                    gutterBottom
                  >
                    {product.description}
                  </Typography>
                  <Typography 
                    variant="h6" 
                    color="text.primary" 
                    gutterBottom
                  >
                    {product.price}
                  </Typography>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleDelete(product.id)}
                    sx={{ mt: 1 }}
                  >
                    Delete
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
}

export default App;
