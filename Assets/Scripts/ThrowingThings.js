#pragma strict
var tar : Vector3;
var xVelo: float;
var yVelo: float;
function Start () {
	xVelo = 0f;
	yVelo = 5f;
	var xdistance = tar.x-this.transform.position.x;
	var ydistance = tar.y-this.transform.position.y;
	this.xVelo=xdistance*this.yVelo/(ydistance);
}

function FixedUpdate () {
	this.transform.Translate((Vector3.right*this.xVelo+Vector3.up*this.yVelo)*Time.fixedDeltaTime);
}
function getTar( t : Vector3) {
	tar = t;
}
function OnTriggerEnter2D(col: Collider2D) {
	if (col.tag == "Couple") {
		GameObject.Destroy(col.gameObject);
		GameObject.Destroy(this.gameObject);
	}
	if (col.tag=="Destroys") {
		GameObject.Destroy(this.gameObject);
	}
}