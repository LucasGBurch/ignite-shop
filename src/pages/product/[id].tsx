import { ImageContainer, ProductContainer, ProductDetails } from '@/styles/pages/product';
import { useRouter } from "next/router";

export default function Product() {
  const { query } = useRouter();

  return (
    <ProductContainer>
      <ImageContainer>

      </ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>Aliqua adipisicing culpa velit dolor sunt pariatur occaecat esse. Cillum ipsum qui duis cillum veniam. Anim laborum sint culpa nulla do exercitation occaecat culpa consectetur nostrud culpa est et. Lorem Lorem aute cillum eu amet ut velit ullamco ea consequat esse enim. Voluptate occaecat exercitation aliqua mollit eu ea sint. Duis ipsum ipsum eu ad eiusmod adipisicing. Ipsum ut irure amet ex adipisicing aliquip enim.</p>

        <button>
          Comprar agora
        </button>
      </ProductDetails>
    </ProductContainer>
  );
}