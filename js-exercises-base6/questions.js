var CreationTableauLangages = function () {
	return langages = ["Html", "CSS", "Java", "PHP"];
}

var CreationTableauNombres = function () {
	return nombres = [0, 1, 2, 3, 4, 5];
}

var RemplacementElement = function (langages) {
	langages[2] = "Javascript";
	return langages;
}

var AjoutElementLangages = function (langages) {
	langages.push("Ruby", "Python");
	return langages;
}

var AjoutElementNombres = function (nombres) {
	nombres.unshift(-2, -1);
	return nombres;
}

var SuppressionPremierElement = function (langages) {
	langages.shift();
	return langages;
}

var SuppressionDernierElement = function (langages) {
	langages.pop();
	return langages;
}

var ConversionChaineTableau = function (reseaux_sociaux_chaine) {
	return reseaux_sociaux_chaine.split(",");
}

var ConversionTableauChaine = function (langages) {
	return langages.join();
}

var TriTableau = function (reseaux_sociaux) {
	return reseaux_sociaux.sort();
}

var InversionTableau = function (reseaux_sociaux){
	var i = reseaux_sociaux.length;
	var inverse = [];

	while (i > 0) {
		inverse.push(reseaux_sociaux[i-1]);
		i--;
	}

	return inverse;
}
