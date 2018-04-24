import { renderDom } from './helpers';
import add from "./add";
import person from "./person";



renderDom('<hr>');


const Jeanpaul = new SuperPerson('JeanPaul');
const cherry = new SuperPerson('susan');

renderDom(Jeanpaul.speak('THIS IS SO SLOW'));
renderDom(cherry.speak('hello bum'));
renderDom(Jeanpaul.xray());

