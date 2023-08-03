import { styled } from '..';

export const HomeContainer = styled('main', {
  display: 'flex',
  gap: '3rem',
  // backgroundColor: 'red', // só para visualizar o Container durante as mudanças abaixo:

  // Forma do container das camisetas/produtos cobrir do centro para a direita da tela, para podermos aplicar o carrossel
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
  minHeight: 656,
});

export const Product = styled('a', {
  background: 'linear-gradient(100deg, #1EA483 0%, #7465D4 100%)',
  borderRadius: 8,
  padding: '0.25rem',
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden', // Para não enxergar o footer fora no efeito hover

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover'
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '2rem',

    borderRadius: 6,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: 'rgba(0, 0, 0, 0.6)',

    transform: 'translateY(110%)', // para sair da tela
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    strong: {
      fontSize: '$lg',
    },

    span: {
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$green300',
    }
  },

  // Esse Hover é combinado com o transform e opacity e transition feitos no footer, para dar um efeito de sobe/desce no footer de preço (com overflow hidden tb)!
  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    }
  }
});
