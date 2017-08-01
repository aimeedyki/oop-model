class House {
  constructor(room, bathroom, parlour, floor, lease){
    this.rooms =room;
    this.bathrooms = bathroom;
    this.parlours = parlour;
    this.floors= floor;
    this._lease = lease;//encapsulation
  }
  
  addRooms(numRooms){
    this.rooms+= numRooms;
  }
  addBathrooms(numBathrooms){
    this.bathrooms += numBathrooms;
  }
  addParlours(numParlours){
    this.parlours+=parlours;
  }
  
  get parlours(){
    return this.parlours;
  }
  get rooms(){
    return this.rooms;
  }
  get bathrooms(){
    return this.bathrooms;
  }
   set parlours(newParlours){
    this.parlours= newParlours;
  }
  set rooms(newRooms){
    this.rooms = newRooms;
  }
  set bathrooms(newBathrooms){
    this.bathrooms = newBathrooms;
  }
  //
  //abstraction
  buildHouse(){
    return 'your house has been built';
  }
  
  houseFeatures(){
    console.log ("This house has"+this.rooms+" rooms, " + this.parlours+" parlors, and "+this.bathrooms+"bathrooms");
  }
  
}
//inheritance and polymorphism
class Bungalow extends House{
  constructor(rooms, bathrooms, parlours){
    
    super(rooms, bathrooms, parlours);
    
  }
  
  cleanRooms(){
    console.log(this.rooms+ " rooms have been cleaned");
  }
}


class StoryBuilding extends House{
    constructor(rooms, bathrooms, parlours, floors, pentHouse){
     super(rooms, bathrooms, parlours);
    this.floors= floors;
    this.pentHouse= pentHouse;
  }
  hasPenthouse(pentHouse){
    if (this.pentHouse === 0){
      return "no";
    }
    else{
      return this.pentHouse;
    }
  }
  houseFeatures(){
    console.log ("This house has"+this.rooms+" rooms, " + this.parlours+" parlors,"+this.bathrooms+"bathrooms and "+this.floors+" floors with "+ this.hasPenthouse(penthouse)+ " penthouse");
  }
  
  
}

class SelfContained extends Bungalow{
  constructor(rooms, bathrooms){
     super(rooms, bathrooms);
  }
}

let lakeview = new Bungalow(2,2,1);
let terrace = new StoryBuilding(4,6,1,1);
let boysQuarters = new SelfContained(1,1);
lakeview.rooms(addroom(2));
terrace.houseFeatures();
boysQuarters.bathrooms();