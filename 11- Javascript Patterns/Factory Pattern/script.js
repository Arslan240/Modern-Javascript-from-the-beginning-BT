// Factory Pattern works on the functinos when we need to create something from scratch

function MemberFactory(){
  this.createMember = function(name, type) {
    let member;

    if(type === 'simple') {
      member = new SimpleMembership(name);
    } else if(type === 'standard') {
      member = new StandarMembership(name);
    } else if(type === 'super') {
      member = new SuperMembership(name);
    }

    // we'll set member's type 
    member.type = type;

    // one method will be related to this factory.
    // this method returns every thing related to a member.
    member.define = function() {
      console.log(`${this.name} (${this.type}: ${this.cost})`);
    }

    return member;
  }
}

const SimpleMembership = function(name) {
  this.name = name;
  this.cost = '$5';
}

const StandarMembership = function (name) {
  this.name = name;
  this.cost = '$15';
}

const SuperMembership = function(name)  {
  this.name = name;
  this.cost = '$25';
}

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember('John Doe', 'simple'));
members.push(factory.createMember('Chris Jackson', 'super'));
members.push(factory.createMember('Jannice Griffith', 'standard'));

// console.log(members);

members.forEach((member) => {
  member.define();
})