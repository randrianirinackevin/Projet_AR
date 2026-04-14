AFRAME.registerComponent('simulation-logic', {
  schema: {
    etapeActuelle: { type: 'int', default: 1 }
  },

  init: function () {
    console.log("Simulation initialisée. Étape 1 : Brancher le câble.");
  },

  // Fonction pour valider une étape et passer à la suivante
  validerEtape: function (numeroEtape) {
    if (this.data.etapeActuelle === numeroEtape) {
      this.data.etapeActuelle++;
      console.log("Étape " + numeroEtape + " terminée. Prochaine : " + this.data.etapeActuelle);
      return true;
    }
    console.warn("Action effectuée au mauvais moment !");
    return false;
  }
});