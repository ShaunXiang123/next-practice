import { Fragment } from 'react';
import Link from "next/link";
import { Title, MenuList } from "@/lib/constants";
import { Separator } from "@/components/ui/separator"

export default function Header() {
  return (
    <div className="border-b bg-white h-16 px-10">
      <div className="wrap flex justify-between items-center h-full ">
        <Link href={Title.href} className="text-2xl">{Title.text}</Link>
        <div className="flex justify-end text-sm space-x-4 h-1/3">
          {
            MenuList.map((item,i) => <Fragment  key={i}>
              { i !== 0 && <Separator orientation="vertical" /> }
              <Link href={item.href}>{item.text}</Link>
            </Fragment >)
          }
        </div>
      </div>
    </div>
  )
}
