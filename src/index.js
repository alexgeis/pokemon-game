import "./style.css";
import { animate } from "./gameLogic";
import { initBattle, animateBattle } from "./battleScene";

animate();

const testBattle = () => {
	initBattle();
	animateBattle();
};
// testBattle();
