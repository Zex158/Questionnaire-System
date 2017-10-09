import Question from 'model/Question';
import Qpage from 'model/Qpage';
import Option from 'model/Option';

let page = new Qpage('zx', Date.now, 'a test page');

let q1 = new Question('simple', 'how are you');
q1.addOption(new Option('fine'));
q1.addOption(new Option('bad'));

page.addQuestion(q1);
console.log(page);