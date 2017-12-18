// Establishes material class, contains specimen data
// Currently hard-coded data, but will eventually be read in from database

class Material {
  constructor(name, crystalStructure, a, b, c, alpha, beta, gamma) {
    this.name=name;
    this.crystalStructure=crystalStructure;
    this.a=a;
    this.b=b;
    this.c=c;
    this.alpha=alpha;
    this.beta=beta;
    this.gamma=gamma;
  }
}
var silicon = new Material('silicon', 'diamond cube', .5431, .5431, .5431, 90, 90, 90);
var copper = new Material('copper', 'fcc', .361, .361, .361, 90, 90, 90);
var silver = new Material('silver', 'fcc', .409, .409, .409, 90, 90, 90);

var materialArray = [silicon, copper, silver];