#pragma strict
var tar : Vector3;
var xVelo:float;
var yVelo:float;
var delay:float;
function Awake() {
	this.collider2D.enabled = false;
	delay = 0.2f;
}
function Start () {
	xVelo = 0f;
	yVelo = 3.4f;
	var xdistance = tar.x-this.transform.position.x;
	var ydistance = tar.y-this.transform.position.y;
	this.xVelo=xdistance*this.yVelo/(ydistance);

}

function FixedUpdate () {
	if (this.transform.position.y > tar.y) {
		this.collider2D.enabled=true;
		if (delay <0) {
			GameObject.Destroy(this.gameObject);
		}
		else {
			delay-=Time.fixedDeltaTime;
		}
	}
	else {
		this.transform.Translate((Vector3.right*this.xVelo+Vector3.up*this.yVelo)*Time.fixedDeltaTime);
	}
}
function getTar(t: Vector3) {
	tar=t;
}
function OnTriggerEnter2D(col : Collider2D) {
	if (col.tag=="Couple") {
		GameObject.Destroy(col.gameObject);
	}
}