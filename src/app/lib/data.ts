import { sql } from '@vercel/postgres';
import { ICard } from '../types/types';



export async function fetchQuestions() {
    
    try {
      const data = await sql<ICard>`SELECT * FROM questions`;
      return data.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error(`Alarm ${error}`);
    }
  }