import IPlayer from '../../types/IPlayer';
export async function GET() {
    const res = await fetch('http://localhost:3030/users');
    const data: IPlayer[] = await res.json();
   
    return Response.json({ data });
  }