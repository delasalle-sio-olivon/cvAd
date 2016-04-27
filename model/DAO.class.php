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
		{	$this->cnx = new PDO ("mysql:host=" . $PARAM_HOTE . ";port=" . $PARAM_PORT . ";dbname=" . $PARAM_BDD.';charset=utf8',
							$PARAM_USER,
							$PARAM_PWD);
			return true;
		}
		catch (Exception $ex)
		{	
			echo $ex;
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
		$return['main']["id"]=1;
		$return['cv']["id"]=2;
		$return['pres']["id"]=3;
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
		
		
		echo str_replace('','',json_encode($return));

	}
	
	public function setData($data)
	{
		if (isset($_SESSION["logged"])){
			//var_dump($data);
			if (isset($data->section)){
				foreach ($data->section as $section){
					if(isset($section->li)){
						
						if(isset($section->li->new)){
							echo $section->id;
							$txt_req = "INSERT INTO li(ic,content,section) VALUES(:ic,:content,:section)";
							$req = $this->cnx->prepare($txt_req);
							$req->bindParam(':ic',$section->li->new->ic, PDO::PARAM_STR);
							$req->bindParam(':content',$section->li->new->content , PDO::PARAM_STR);
							$req->bindParam(':section', $section->id, PDO::PARAM_STR);
							$req->execute();
							$req->closeCursor();
						}
						
						foreach($section->li as $li){
							$txt_req = "UPDATE li SET ic=:ic,content=:content WHERE id=:id";
							$req = $this->cnx->prepare($txt_req);
							$req->bindParam(':content',$li->content, PDO::PARAM_STR);
							$req->bindParam(':id', $li->id, PDO::PARAM_INT);
							$req->bindParam(':ic', $li->ic, PDO::PARAM_INT);
							$req->execute();
						}
					}
					$txt_req = "UPDATE section SET ic=:ic,name=:name WHERE id=:id";
					$req = $this->cnx->prepare($txt_req);
					$req->bindParam(':name', $section->name, PDO::PARAM_STR);
					$req->bindParam(':id', $section->id, PDO::PARAM_INT);
					$req->bindParam(':ic', $section->ic, PDO::PARAM_INT);
					$req->execute();
					
				}
				$txt_req = "UPDATE cat SET title=:title WHERE id=:id";
				$req = $this->cnx->prepare($txt_req);
				$req->bindParam(':title', $data->title, PDO::PARAM_STR);
				$req->bindParam(':id', $data->id, PDO::PARAM_INT);
				$req->execute();
				$req->closeCursor();
			}
			if(isset($data->new->true)){
				$txt_req = "INSERT INTO section VALUES(:id,:ic,:name,:cat)";
				$req = $this->cnx->prepare($txt_req);
				$req->bindParam(':id', $data->new->id, PDO::PARAM_STR);
				$req->bindParam(':ic', $data->new->ic, PDO::PARAM_STR);
				$req->bindParam(':name', $data->new->name, PDO::PARAM_STR);
				$req->bindParam(':cat', $data->id, PDO::PARAM_INT);
				$req->execute();
			
				$txt_req = "INSERT INTO li(ic,content,section) VALUES(:ic,:content,:section)";
				$req = $this->cnx->prepare($txt_req);
				$req->bindParam(':ic',$data->new->liIc, PDO::PARAM_STR);
				$req->bindParam(':content',$data->new->liContent , PDO::PARAM_STR);
				$req->bindParam(':section', $data->new->id, PDO::PARAM_STR);
				$req->execute();
				$req->closeCursor();
			}
		}else{
			echo 'Ouè ouè casses toi';
		}

	}
	
	
} // fin de la classe DAO

// ATTENTION : on ne met pas de balise de fin de script pour ne pas prendre le risque
// d'enregistrer d'espaces après la balise de fin de script !!!!!!!!!!!!