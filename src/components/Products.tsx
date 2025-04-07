'use client'
import { useSortStore } from '@/store/'
import { Product } from '@/types/global'
import Image from 'next/image'

export default function Products( {data} : {data:Product[]} ) {
  const { sort } = useSortStore()
  const products = [...data]

  // 列表排序
  if(sort !== 'latest'){
    products.sort((a , b) => (sort === 'low') ? a.price - b.price : b.price - a.price)
  }

  return (
    <div className="flex-1 py-9">
      <h2 className="mb-8 text-4xl">All product,{sort}</h2>
      <div className="grid grid-cols-3 gap-4">
        {
          products.map((item:Product) => (
            <div key={item.id} className="bg-slate-50 p-4 rounded-lg shadow-md hover:bg-slate-200 cursor-pointer duration-300">
              <Image src={item.image} alt={item.name} width={300} height={375} priority className="w-full h-auto" />
              <div className="flex items-center justify-between mt-4">
                <h3 className="flex-2xl text-slate-700">{item.name}</h3>
                <div className="text-lg font-bold text-red-400 ">${item.price}</div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
