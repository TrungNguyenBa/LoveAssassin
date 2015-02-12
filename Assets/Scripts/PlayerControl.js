#pragma strict
private var re: GameObject;
private var delay : float;
private var target: Vector3;
private var isTele: boolean;
private var isBoom : boolean;
private var isNormal: boolean;
private var Slowcooldown: float;
function Awake () {
	re = GameObject.FindGameObjectWithTag("Respawn");
	delay = 0.0f;
	isTele=false;
	isBoom=false;
	isNormal=true;
	Slowcooldown = 5f;
}	

function Update () {
	if (Slowcooldown >0) {
		Slowcooldown-=Time.deltaTime;
	}
	if (delay<0) {
				
		if (Input.touchCount) {
			target=Input.GetTouch(0).position;
			target = Camera.main.ScreenToWorldPoint(target);
		
			if (target.y>-2) {
				if (this.isTele) {
					this.isTele =false;
					this.isNormal=true;
				}
				else if (this.isBoom) {
					re.SendMessage("makeBoom",target);
					this.isBoom = false;
					this.isNormal=true;
				
				}
				else if (this.isNormal){
					re.SendMessage("makeFI",target);
					
				}
				delay=1.0f;
			}
		}
	}
	else {
			delay-=Time.deltaTime;
	}
}
function OnGUI(){
	var telebutton = new Rect(0f,Screen.height-50f,50f,50f);
	var tele = new GUIStyle("box");
	tele.fontSize = 8;
	var boombutton = new Rect (50f,Screen.height-50f,50f,50f);
	var boom = new GUIStyle("box");
	boom.fontSize =8;
	var slowbutton = new Rect (100f,Screen.height-50f,50f,50f);
	var slow = new GUIStyle("box");
	slow.fontSize =8;
	if (GUI.Button(telebutton,"Tele",tele)) {
		if (R.Telecount>0) {
		this.isTele=true;
		this.isBoom=false;
		this.isNormal=false;
		}
		
	}
	if ((GUI.Button(boombutton,"BOOM",boom))) {
		if (R.Boomcount>0) {
			this.isBoom = true;
			this.isTele=false;
			this.isNormal=false;
		}	
	}
	if (GUI.Button(slowbutton,"Slow",slow)){
		if ((R.Slowcount>0)&&(Slowcooldown<=0)){
		R.Slowchange=0.4f;
		R.Slowdelay=10f;
		Slowcooldown=5f;
		this.isTele=false;
		this.isBoom=false;
		this.isNormal=true;
		}
	}
}
