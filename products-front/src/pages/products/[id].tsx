import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { useTheme } from "styled-components";
import { baseUrl } from "../../config";
import { Product } from "../../types/Product";
import { priceFormatter } from "../../utils/priceFormatter";
import { Container, CustomButton } from "./styles";

type ProductDetailsProps = {
  product: Product;
};

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const theme = useTheme();
  const router = useRouter();
  const [fields, setFields] = useState<Partial<Product>>();
  const brandRef = useRef<HTMLSpanElement>(null);
  const nameRef = useRef<HTMLSpanElement>(null);

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  const handleUpdateFields = (
    fieldName: keyof Product,
    fieldValue: string | number | undefined
  ) => {
    setFields((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue || undefined,
    }));
  };

  const handleUpdateProduct = async () => {
    const newProduct = { ...fields };

    try {
      const response = await fetch(`${baseUrl}/products/${product.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(newProduct),
      });
      if (response.ok) {
        toast.success("Product updated successfully");
        router.push("/");
      } else {
        const { error } = await response.json();
        throw new Error(error);
      }
    } catch (error: any) {
      toast.error(error.message);
      return;
    }
  };

  return (
    <Container>
      <CustomButton
        outlined
        onClick={() => router.back()}
        style={theme.text.brand}
      >
        Go back
      </CustomButton>
      <p style={theme.text.default}>
        You can edit &quot;brand&quot; and &quot;name&quot; if you want! Just
        click and edit!
      </p>
      {/* Tive que recorrer ao clodinary pois o next não permite imagens fora do domínio localhost ou de prod */}
      {/* Talvez a imagem demore alguns segundos a mais para carregar, mas apenas na primeira vez */}
      <Image
        src={"https://res.cloudinary.com/demo/image/fetch/" + product.image}
        alt={product.name + " " + product.brand}
        width={300}
        height={300}
      />
      <h1 style={theme.text.price}>
        Name:{" "}
        <span
          contentEditable
          suppressContentEditableWarning={true}
          ref={nameRef}
          onBlur={() => handleUpdateFields("name", nameRef.current?.innerText)}
        >
          {product.name}
        </span>
      </h1>
      <p style={theme.text.default}>
        Brand:{" "}
        <span
          contentEditable
          onBlur={() =>
            handleUpdateFields("brand", brandRef.current?.innerText)
          }
          suppressContentEditableWarning={true}
          ref={brandRef}
        >
          {product.brand}
        </span>
      </p>
      <p style={theme.text.default}>Price: {priceFormatter(product.price)}</p>
      <p style={theme.text.default}>
        Created at:{" "}
        {new Date(product.createdAt).toLocaleDateString() +
          " " +
          new Date(product.createdAt).toLocaleTimeString()}
      </p>

      <CustomButton
        outlined
        onClick={() => handleUpdateProduct()}
        style={theme.text.brand}
      >
        save
      </CustomButton>
    </Container>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`${baseUrl}/products`);
  const data = await response.json();
  const paths = data.map((product: Product) => ({
    params: { id: String(product.id) },
  }));

  return {
    paths: paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const params = context.params;

  if (!params?.id) {
    return {
      props: {},
    };
  }

  const { id } = params;

  const response = await fetch(`${baseUrl}/products/${id}`);
  const data = await response.json();

  return {
    props: {
      product: data,
    },
  };
};

export default ProductDetails;
