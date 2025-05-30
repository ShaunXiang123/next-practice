'use client'

import { useSortStore } from '@/store/'
import { ToggleGroup, ToggleGroupItem, } from "@/components/ui/toggle-group"
import { SortTitle, SortList } from "@/lib/constants"
import { SortValue } from "@/types/global"



export default function Sort() {
  const { setSort } = useSortStore()

  const handleChange = function(value: SortValue){
    // console.log(value)
    setSort(value)
  }

  return (
    <div className="w-64 py-4">
      <h3 className="my-5 text-xl">{SortTitle}</h3>
      <ToggleGroup className="flex-col gap-3 items-start" type="single" defaultValue={SortList[0].value} onValueChange={handleChange}> 
        {
          SortList.map((item,i) => <ToggleGroupItem key={i} value={item.value}>{item.text}</ToggleGroupItem>)
        }
      </ToggleGroup>
    </div>
  )
}
