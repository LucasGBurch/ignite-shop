import { ImageContainer } from '@/styles/pages/success';
import { SuccessContainer } from '@/styles/pages/success';
import Link from 'next/link';

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Compra efetuada!</h1>

      <ImageContainer>

      </ImageContainer>

      <p>
        Uhuul <strong>Nome</strong>, sua camiseta <strong>NomeCamiseta</strong> já está a caminho da sua casa
      </p>

      <Link href='/'>
        Voltar ao catálogo
      </Link>
    </SuccessContainer>
  );
}