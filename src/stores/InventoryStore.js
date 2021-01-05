import {Item} from "./ItemStore"
import { makeObservable, observable, action, computed } from 'mobx'

export class InventoryStore {
    constructor() {
        this.items = []
        this.numTables = 10

        makeObservable(this, {
            items: observable,
            numTables: observable,
            addItem: action, 
            buyItem: action,
            changePrice: action,
            numItems: computed
        })
    }

    addItem = (name, price, quantity) => {
        const item = this.items.find(i => i.name === name)
        if(item){
            item.quantity += 1
        }else{
            this.items.push(new Item(name, price, quantity))
        }
    } 
    
    buyItem = (name) => {
        const itemIndex = this.items.findIndex(i => i.name === name)
        const item = this.items[itemIndex]
        if(item.quantity > 0){
            item.quantity -= 1
        }else{
            this.items.splice(itemIndex, 1)
        }
    }

    changePrice = (name, price) => this.items.find(i => i.name === name).price = price

    get numItems(){
        return this.items.length
    }
}