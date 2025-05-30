import {NextResponse} from 'next/server';
import {Op} from "sequelize";

import Item from '@/models/item';
import sequelize from "@/lib/sequelize";


export async function GET(request: Request): Promise<NextResponse> {
    const { searchParams } = new URL(request.url)

    const mbti = `%${searchParams.get('mbti') || ''}%`;
    const offset = Number.parseInt(searchParams.get('offset') || '0');
    const limit = Number.parseInt(searchParams.get('limit') || '10');

    await sequelize.sync();
    const {count, rows: items}= await Item.findAndCountAll({
        order: [['id', 'DESC']],
        offset,
        limit,
        where: {
            mbti: {
                [Op.like]: mbti
            }
        }
    });
    const nextURL = new URL(request.url);
    nextURL.searchParams.set('offset', String(Math.min(offset + limit, count)));

    return NextResponse.json({count: count, next: nextURL.toString(), previous: request.url, results: items});
}

export async function POST(request: Request) {
    await sequelize.sync();

    const {mbti, colorCode} = await request.json();
    const newItem = await Item.create({mbti, colorCode});

    return NextResponse.json(newItem, { status: 201 });
}
