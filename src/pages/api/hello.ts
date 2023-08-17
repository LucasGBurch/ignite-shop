import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.json({ message: 'Hello World' });
}
// Exemplo de Código Server-Side dentro do Next.
// http://localhost:3000/api/hello
