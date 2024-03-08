// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};


const pAequorFactory = (specimenNum, dna) =>{

  return{
    specimenNum: specimenNum,
    dna: dna,

    mutate(){
      const randomIndex = Math.floor(Math.random()*this.dna.length);

      let newBase = returnRandBase();

      while(newBase===this.dna[randomIndex]){
        newBase = returnRandBase();
    }
    this.dna[randomIndex] = newBase;
    return newBase;
  },
  compareDNA(pAequorObject){
    const similarities = this.dna.reduce((acc, curr, idx, arr) => {
      if (arr[idx] === otherOrg.dna[idx]) {
        return acc + 1;
      } else {
        return acc;
      }
    }, 0);
    const percentOfDNAshared = (similarities / this.dna.length) * 100;
    const percentageTo2Deci = percentOfDNAshared.toFixed(2);
    console.log(`${this.specimanNum} and ${otherOrg.specimanNum} have ${percentageTo2Deci}% DNA in common.`);
  },
  willLikelySurvive(){
    const cOrG = this.dna.filter(el => el === "C" || el === "G");
      return cOrG.length / this.dna.length >= 0.6;
  }
}}
;
console.log(mockUpStrand());







