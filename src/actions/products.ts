'use server'
import db from '@/lib/db';
import { Product, ProductsAciton } from '@/types/global'

export async function productsAciton(): Promise<ProductsAciton> {
  const res = (await db('SELECT * FROM products')) as Product[]
  return {
    status: 200,
    body: 'get products success',
    data: res
  }
}
