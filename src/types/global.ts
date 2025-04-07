export type SortValue = 'latest' | 'low' | 'higt'

export type Product = {
  id: number
  name: string
  price: number
  description: string
  image: string
  variant: string[]
}

export type ProductsAciton = {
  status: number
  body: string
  data: Product[]
}

