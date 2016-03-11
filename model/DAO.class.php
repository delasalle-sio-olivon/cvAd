<?php
// inclusion des paramètres de l'application
include_once ('include.parametres.php');

// début de la classe DAO (Data Access Object)
class DAO
{
	// ------------------------------------------------------------------------------------------------------
	// ---------------------------------- Membres privés de la classe ---------------------------------------
	// ------------------------------------------------------------------------------------------------------
		
	private $cnx;				// la connexion à la base de données
	
	// ------------------------------------------------------------------------------------------------------
	// ---------------------------------- Constructeur et destructeur ---------------------------------------
	// ------------------------------------------------------------------------------------------------------
	public function __construct() {
		global $PARAM_HOTE, $PARAM_PORT, $PARAM_BDD, $PARAM_USER, $PARAM_PWD;
		try
		{	$this->cnx = new PDO ("mysql:host=" . $PARAM_HOTE . ";port=" . $PARAM_PORT . ";dbname=" . $PARAM_BDD,
							$PARAM_USER,
							$PARAM_PWD);
			return true;
		}
		catch (Exception $ex)
		{	
		}
	}
	
	public function __destruct() {
		unset($this->cnx);
	}
	
	public function getData()
	{	
		$txt_req = "Select cat.id AS catid, cat.name AS catName, cat.title AS catTitle, section.id AS sId, section.ic AS sIc, section.name AS sName, li.id AS liId, li.ic As liIc, li.content As liContent from cat, section, li where cat.id=section.cat AND section.id=li.section ORDER BY cat.id, section.id, li.id";
		
		$req = $this->cnx->prepare($txt_req);
		
		// exécution de la requete
		$req->execute();
		$i=-1;
		$j=-1;
		while ($uneLigne = $req->fetch(PDO::FETCH_OBJ)){
			if ($i==$uneLigne->catName){
				if ($j==$uneLigne->sId){

				}else{
					$j=$uneLigne->sId;
					$section['id'] = $uneLigne->sId;
					$section['ic'] = $uneLigne->sIc;
					$section['name'] = $uneLigne->sName;
					$return[$i]["section"][$j]=$section;
				}
				$li["id"]=$uneLigne->liId;
				$li["ic"]=$uneLigne->liIc;
				$li["content"]=$uneLigne->liContent;
				$return[$i]["section"][$j]["li"][$li["id"]]=$li;
			}else{
				$i=$uneLigne->catName;
				$cat["id"]=$uneLigne->catid;
				$cat["name"]=$uneLigne->catName;
				$cat["title"]=$uneLigne->catTitle;
				$return[$i]=$cat;
				
				$j=$uneLigne->sId;
				$section['id'] = $uneLigne->sId;
				$section['ic'] = $uneLigne->sIc;
				$section['name'] = $uneLigne->sName;
				$return[$i]["section"][$j]=$section;
				
				$li["id"]=$uneLigne->liId;
				$li["ic"]=$uneLigne->liIc;
				$li["content"]=$uneLigne->liContent;
				$return[$i]["section"][$j]["li"][$li["id"]]=$li;
			}			
		}
		// libère les ressources du jeu de données
		$req->closeCursor();
		echo str_replace('\\','',json_encode($return));
	}
	
	
} // fin de la classe DAO

// ATTENTION : on ne met pas de balise de fin de script pour ne pas prendre le risque
// d'enregistrer d'espaces après la balise de fin de script !!!!!!!!!!!!