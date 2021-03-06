import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  // Items accessable on the Description Tab
  descriptionItems = [
    {
      name: "Bobcat",
      description: "Heavy machinery with a scoop on the front"
    },
    {
      name: "Shovel",
      description: "A tool used to dig or transfer soil"
    },
    { name: "Rake",
      description: "A tool used for moving leaves or mulch"
    },
    {
      name: "Trencher",
      description: "Light machine that digs a narrow trench in the soil"
    }
  ];

  // Items accessable on the Shared Inventory Tab
  sharedInventoryItems = [
    {
      name: "Garden Hose",
      description: "100 ft hose"
    },
    {
      name: "Pruning Shears",
      description: "Cutting tool for removing twigs"
    }
  ]

  // Items in personal inventory - inactive
  personalInventoryItems = [
    {
      name: "Water Can",
      description: "1 gallon can with handle"
    },
    {
      name: "Hand Trowel",
      description: "Small hand shovel"
    }
  ]

  // Items in personal inventory - active
  activeInventoryItems = [

  ]

  // Email list for Social Sharing notifications
  emailList = ["jhubert1@maryville.edu", "jaybhubert@gmail.com"]


  constructor() { }

  // Getter functions
  getEmailList() {
    return this.emailList;
  }

  getDescriptionItems() {
    return this.descriptionItems;
  }
  
  getSharedInventoryItems() {
    return this.sharedInventoryItems;
  }

  getPersonalInventoryItems() {
    return this.personalInventoryItems;
  }

  getActiveInventoryItems() {
    return this.activeInventoryItems;
  }

  // Robust remove item function used in all tabs
  removeItem(item, inventory) {
    switch (inventory) {
      case 'shared':
        let indexA = this.sharedInventoryItems.indexOf(item);
        if (indexA !== -1) this.sharedInventoryItems.splice(indexA, 1);
        break;
      case 'personal':
        let indexB = this.personalInventoryItems.indexOf(item);
        if (indexB !== -1) this.personalInventoryItems.splice(indexB, 1);
        break;
      case 'active':
        let indexC = this.activeInventoryItems.indexOf(item);
        if (indexC !== -1) this.activeInventoryItems.splice(indexC, 1);
      case 'description':
        let indexD = this.descriptionItems.indexOf(item);
        if (indexD !== -1) this.descriptionItems.splice(indexD, 1);
    }
  }

  editItem(item,index) {
    this.descriptionItems[index] = item;
  }

  // Robust add item function used in all tabs
  addItem(item, inventory?) {
    if (inventory === 'shared') {
        this.sharedInventoryItems.push(item);
    }
    else if (inventory === 'personal') {
        this.personalInventoryItems.push(item);
    }      
    else if (inventory === 'active') {
        this.activeInventoryItems.push(item);
    }
    else {
        this.descriptionItems.push(item);
    }
    
  }

}
