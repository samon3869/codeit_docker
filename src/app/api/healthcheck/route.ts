import {NextResponse} from 'next/server';


export async function GET(request: Request, response: Response): Promise<NextResponse> {
    return NextResponse.json({ status: 'ok' });
}