import { Fragment } from 'react';
import Link from "next/link";
import { Title, NavList } from "@/lib/constants";
import { Separator } from "@/components/ui/separator"

export default function Footer() {
  return (
    <div className="border-t m-t6">
      <div className="wrap flex justify-between py-32">
        <h2 className="text-2xl"><Link href={Title.href}>{Title.text}</Link></h2>
        <div className="flex gap-20">
          {
            NavList.map((item,i) => (<Fragment key={i}>
               { i !== 0 && <Separator orientation="vertical" /> }
              <div>
                <span className="text-xl"><Link href={item.href}>{item.text}</Link></span>
                <ul className="my-4 space-y-4 ">
                  {
                    item.list.map((item,i) => <li key={i}><Link href={item.href}>{item.text}</Link></li>)
                  }
                </ul>
              </div>
            </Fragment>))
          }
        </div>
      </div>
    </div>
  )
}
