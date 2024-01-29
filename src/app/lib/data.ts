import { config } from 'dotenv';
config();

import { sql } from '@vercel/postgres';
import { ICard } from '../types/types';
import { db } from '@vercel/postgres';

export async function fetchQuestions() {
  try {
    console.log('Process Env:', process.env.POSTGRES_URL);
    const data = await sql<ICard>`SELECT * FROM questions`;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error(`Alarm ${error}`);
  }

}