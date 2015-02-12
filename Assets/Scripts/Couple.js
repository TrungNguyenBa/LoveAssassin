#pragma strict
var target : GameObject[];
var xVelo: float;
var yVelo: float;
var index: int;
var rand : int;
function Awake() {
	xVelo = Random.Range(3f,6f);
	target=new GameObject[3];
	
}
function Start () {
	this.yVelo=0f;
	rand = Random.Range(0,3);
	if (this.index >2 ) {
		this.xVelo= -this.xVelo;
	} 
	var xdistance = target[rand].transform.position.x-this.transform.position.x;
	var ydistance = target[rand].transform.position.y-this.transform.position.y;
	this.yVelo=ydistance*this.xVelo/(xdistance);
}

function FixedUpdate(){
	this.transform.Translate((Vector3.right*this.xVelo+Vector3.up*this.yVelo)*Time.fixedDeltaTime*R.Slowchange);
	
}
function setTarget(tar:GameObject[]) {
		
		target[0]=tar[0];
		target[1]=tar[1];
		target[2]=tar[2];
	
}
function setIndex(ind:int) {
	this.index =ind;
}
function OnTriggerEnter2D(col: Collider2D) {
	if (col.tag =="Destroys") {
		
		GameObject.Destroy(this.gameObject);
	}
}
