#pragma strict

public static var Boomcount : int ;
public static var Telecount  : int ;
public static var Trapcount : int ;
public static var Slowcount : int ;
public static var Slowchange : float;
public static var Slowdelay : float;
function Awake(){
	this.Boomcount = 5;
	this.Telecount =5 ;
	this.Trapcount =5 ;
	this.Slowcount = 5;
	this.Slowchange = 1.0f;
	this.Slowdelay=0.0f;
}
function Update () {
	if (Slowdelay >  0 ) {
		Slowdelay-=Time.fixedDeltaTime;
	}
	else {
		Slowchange=1.0f;
		Slowdelay=0.0f;
	}
}
