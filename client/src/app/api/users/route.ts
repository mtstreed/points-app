import IPlayer from '../../types/IPlayer';


export async function GET(): Promise<Response> {
    const res: Response = await fetch('http://localhost:3030/users', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		}
	});
	return res;
}


export async function POST(req: Request): Promise<Response> {
	const res: Response = await fetch('http://localhost:3030/users', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(req.body),
	});
	return res;
}