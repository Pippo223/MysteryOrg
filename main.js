// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  function pAequorFactory(specimenNum, dna) {
    return {
      specimenNum,
      dna,
      mutate() {
        const randIndex = Math.floor(Math.random() * this.dna.length);
        let newBase = returnRandBase();
        while (this.dna[randIndex] === newBase) {
          newBase = returnRandBase();
        }
        this.dna[randIndex] = newBase;
        return this.dna;
      },
      compareDNA(nextOrg) {
        const similarities = this.dna.reduce((acc, curr, index, arr) => {
          if (arr[index] === nextOrg.dna[idx]) {
            return acc + 1;
          } else {
            return acc;
          }
        }, 0);
        const percentOfDNAshared = (similarities / this.dna.length) * 100;
        const percentageTo2Deci = percentOfDNAshared.toFixed(2);
        console.log(`${this.specimanNum} and ${otherOrg.specimanNum} have ${percentageTo2Deci}% DNA in common.`);
      },
      willLikelySurvive() {
        const cOrG = this.dna.filter(el => el === "C" || el === "G");
        return cOrG.length / this.dna.length >= 0.6;
      },
      }
  }
  const survivingSpecimen = [];
  let counter = 1;
  
  while (survivingSpecimen.length < 30) {
    let nextOrg = pAequorFactory(counter, mockUpStrand());
    if (nextOrg.willLikelySurvive()) {
      survivingSpecimen.push(nextOrg);
    }
    counter++;
  }
  
  console.log(survivingSpecimen)
  
  
  
  
  
  
  
  