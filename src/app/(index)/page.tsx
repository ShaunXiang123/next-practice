import Sort from "@/components/Sort";
import Products from "@/components/Products";
import { productsAciton } from '@/actions/products';

export default async function Page() {
  const productsRes = await productsAciton();
  return (
    <div className="px-10">
      <div className="wrap py-6 flex">
        <Sort />
        <Products data={ productsRes.data } />
      </div>
    </div>
  )
}
