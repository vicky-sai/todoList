import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'LockFilter'
})

export class SearchPipe implements PipeTransform {
    transform(value: any, srchWord?: any): any {

        if(!value)return null;
        if(!srchWord)return value;

        srchWord = srchWord.toLowerCase();

        return value.filter(function(item){
            return JSON.stringify(item).toLowerCase().includes(srchWord);
        });
    }
}