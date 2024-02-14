// Implement the SocialNetwork class here
class SocialNetwork {

  constructor() {
    this.users = {};
    this.follows = {};
    this.currentID = 0;

  }

  addUser(name) {
  // Your code here
  this.currentID++

  let newUser = {id: this.currentID, name: name}
  this.follows[newUser.id] = new Set()
  this.users[newUser.id] = newUser

  return newUser.id
  }

  getUser(userID) {
    // Your code here
    if(!this.users[userID])return null;
    else return this.users[userID]
  }

  follow(userID1, userID2) {
    // Your code here
    if(!(this.users[userID2]) || !(this.users[userID1]))return false;
    let follower = this.follows[userID1].add(userID2);
    if(follower.has(userID2))return true;


  }

  getFollows(userID) {
    // Your code here
    return this.follows[userID]
  }

  getFollowers(userID) {
    // Your code here
    let newSet = new Set()

    for(let key in this.follows){
      //console.log(this.follows[key])
      if(this.follows[key].has(userID)){
        newSet.add(parseInt(key))

      }
    }
    console.log(userID)
    return newSet
  }

  getRecommendedFollows(userID, degrees) {
    // Your code here
    let q = [[userID]];
    let recommended = []
    let visted = new Set().add(userID);
    while(q.length){
      let cur = q.shift()
    let curPath = cur[cur.length-1]
    if(curPath.length > degrees+2){
      
    }



    }
  }
}

module.exports = SocialNetwork;
