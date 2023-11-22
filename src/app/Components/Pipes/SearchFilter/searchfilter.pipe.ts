import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(value: [], args: string):any[]{
    if(!value){
      return [];
    }
    if(!args){
      return value;
    }

    return value.filter((item:any)=>{
      return item.title.toLowerCase().includes(args.toLowerCase())
    })
  }

}
