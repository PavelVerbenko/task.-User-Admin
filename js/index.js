class User {
  constructor(firstName, lastName, age, userType){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.userType = userType;
  }
    
  getFullName() {
    return `${this.firstName} ${this.lastName} `;
  }
    
  canVote() {
    return this.age >= 18;
  }
  }
    
    
  class Admin extends User {
  getFullName() {
      return `${this.firstName} ${this.lastName} [${this.userType}]`;
    }
    
  updateConfig() {
      return "Config updated";
    }
  }
    
    
// Sample usage - do not modify
const user = new User("Sam", "Green", 17, "user");
console.log(user.canVote()); // false
console.log(user.getFullName()); // "Sam Green"
    
const admin = new Admin("Alex", "Blue", 20, "admin");
console.log(admin.canVote()); // true
console.log(admin.getFullName()); // "Alex Blue [admin]"
console.log(admin.updateConfig()); // "Config updated"