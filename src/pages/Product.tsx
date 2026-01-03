import { useEffect, useState } from "react";
import type { Product } from "./interface/Product";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Stack,
  Typography,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const saved: Product[] = JSON.parse(
      localStorage.getItem("products") || "[]"
    );
    setProducts(saved);
  }, []);

  const deleteProduct = (id: number) => {
    const updatedProducts = products.filter((p) => p.id !== id);
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ mb: 2 }}
      >
        <Box>
          <Typography variant="h4" fontWeight={700}>
            Products
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {products.length} item{products.length === 1 ? "" : "s"}
          </Typography>
        </Box>

        <Button component={Link} to="/add" variant="contained">
          Add Product
        </Button>
      </Stack>

      <Divider sx={{ mb: 3 }} />

      {products.length === 0 ? (
        <Box
          sx={{
            border: "1px dashed",
            borderColor: "divider",
            borderRadius: 2,
            p: 4,
            textAlign: "center",
          }}
        >
          <Typography variant="h6" sx={{ mb: 1 }}>
            No products yet
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Add your first product to see it here.
          </Typography>
          <Button component={Link} to="/add" variant="contained">
            Add Product
          </Button>
        </Box>
      ) : (
        // ✅ div-based layout instead of Grid
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          {products.map((product) => (
            <div key={product.id} style={{ width: 336 }}>
              <Card
                variant="outlined"
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={
                    product.image ||
                    "https://via.placeholder.com/600x360?text=No+Image"
                  }
                  alt={product.name}
                  sx={{ backgroundColor: "grey.100" }}
                />

                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" fontWeight={700} gutterBottom noWrap>
                    {product.name || "Untitled Product"}
                  </Typography>

                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography variant="body1" fontWeight={700}>
                      ₹{product.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product.category}
                    </Typography>
                  </Stack>
                </CardContent>

                <CardActions sx={{ px: 2, pb: 2, pt: 0 }}>
                  <Button
                    component={Link}
                    to={`/edit/${product.id}`}
                    variant="outlined"
                    fullWidth
                  >
                    Edit
                  </Button>

                  <Button
                    color="error"
                    variant="contained"
                    fullWidth
                    onClick={() => deleteProduct(product.id)}
                  >
                    Delete
                  </Button>
                </CardActions>
              </Card>
            </div>
          ))}
        </div>
      )}
    </Container>
  );
};

export default Products;