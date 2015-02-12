#pragma strict
public var Target : GameObject[];
public var Couple: GameObject;
public var FI: GameObject;
public var Boom: GameObject;
private var delay: float;
private var rand : int;
private var pl : GameObject;
function Awake () {
	delay = 1.1f;
	this.pl = GameObject.FindGameObjectWithTag("Player");
}
function Update () {
	if (delay <0 ) {
		rand = Random.Range(0,6);
		var tars : GameObject[];
		tars = new GameObject[3];
		var NewCouple : GameObject;
		if (rand <3) {
			tars[0]=Target[3];
			tars[1]=Target[4];
			tars[2]=Target[5];
			
			
		}
		else {
			tars[0]=Target[0];
			tars[1]=Target[1];
			tars[2]=Target[2];
			
		
		}
		NewCouple = GameObject.Instantiate(Couple,Target[rand].transform.position,Quaternion.identity);
		NewCouple.SendMessage("setTarget",tars);
		NewCouple.SendMessage("setIndex",this.rand);
		delay=1.1f/R.Slowchange;
	}
	else {
		delay-=Time.deltaTime;
	}	
}
function makeFI(tar: Vector3) {
	var newFI = GameObject.Instantiate(this.FI, this.pl.transform.position,Quaternion.identity);
	newFI.SendMessage("getTar",tar);
}
function makeBoom(tar : Vector3) {
	var newBoom = GameObject.Instantiate(this.Boom,this.pl.transform.position,Quaternion.identity);
	newBoom.SendMessage("getTar",tar);
}