import { Container } from "./styles";
import Image from "next/image";
import { useTheme } from "styled-components";
import { Product } from "../../types/Product";
import { useRouter } from "next/router";
import { priceFormatter } from "../../utils/priceFormatter";

type ProductProps = {
  product: Product;
};

const Product = ({ product }: ProductProps) => {
  const theme = useTheme();
  const router = useRouter();

  return (
    <Container onClick={() => router.push(`/products/${product.id}`)}>
      <div>
        {/* Tive que recorrer ao clodinary pois o next não permite imagens fora do domínio localhost ou de prod */}
        {/* Talvez a imagem demore alguns segundos a mais para carregar, mas apenas na primeira vez */}
        <Image
          src={"https://res.cloudinary.com/demo/image/fetch/" + product.image}
          alt={product.name + " " + product.brand}
          width={210}
          height={210}
        />
      </div>
      <p style={theme.text.default}>{product.name}</p>
      <p style={theme.text.brand}>{product.brand}</p>
      <p style={theme.text.price}>{priceFormatter(product.price)}</p>
    </Container>
  );
};

export default Product;
