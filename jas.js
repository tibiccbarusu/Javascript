"use strict"

/*-------------------------------------------------------------------------------------------------*/
/*汎用トリガー関数*/
/*-------------------------------------------------------------------------------------------------*/
function trigger(id,trigger,func) { //汎用トリガー関数,trigger(ID{input/buttonのid},トリガー,関数名)
    document.getElementById(id).addEventListener(trigger,function(){func();},false);
}

/*-------------------------------------------------------------------------------------------------*/
/*汎用乱数関数*/
/*-------------------------------------------------------------------------------------------------*/
function rand(min,max) { //汎用乱数関数,rand(最小値{実数},最大値{実数})
    if (min == null || max == null) {
        console.log("error:min or max is null.");
    } else {
        const minTypeof = typeof min;
        const maxTypeof = typeof max;
        if (minTypeof != "number" || maxTypeof != "number") {
            console.log("error:min or max is not number.");
            return 0;
        } else if (min > max) {
            console.log("error:min > max");
            return 0;
        } else {
            const random = Math.random();
            const rand = Math.round(((random * (max - min + 1)) + min) >= max + 0.5 ? min : (random * (max - min + 1)) + min);
            return rand;
        }
    }
}

/*-------------------------------------------------------------------------------------------------*/
/*汎用値取得関数*/
/*-------------------------------------------------------------------------------------------------*/
function getValueById(id) { //汎用値取得関数,getValueById(ID{input/textareaのid})
    const text = document.getElementById(id).value;
    const result = text == null ? "" : text;
    return result;
}

/*-------------------------------------------------------------------------------------------------*/
/*汎用要素変更関数*/
/*-------------------------------------------------------------------------------------------------*/
function replaceInnerHTML(id,text) { //汎用要素変更関数,replaceInnerHTML(ID{div,p,span,textarea等のid},text)
    if (text == null) {
        console.log("error:text is null.");
    } else {
        const element = document.getElementById(id);
        element.innerHTML = text;
    }
}

/*-------------------------------------------------------------------------------------------------*/
/*計算*/
/*-------------------------------------------------------------------------------------------------*/
function calculate() {
    const number0 = parseInt(getValueById("number0"));
    console.log("number0:" + number0);
    const number1 = parseInt(getValueById("number1"));
    console.log("number1:" + number1);
    const number2 = parseInt(getValueById("number2"));
    console.log("number2:" + number2);
    const number3 = parseInt(getValueById("number3"));
    console.log("number3:" + number3);
    const number4 = parseInt(getValueById("number4"));
    console.log("number4:" + number4);
    const number5 = parseInt(getValueById("number5"));
    console.log("number5:" + number5);
    const number6 = parseInt(getValueById("number6"));
    console.log("number6:" + number6);
    const number7 = parseInt(getValueById("number7"));
    console.log("number7:" + number7);
    const number8 = parseInt(getValueById("number8"));
    console.log("number8:" + number8);
    const number9 = parseInt(getValueById("number9"));
    console.log("number9:" + number9);
    const number10 = parseInt(getValueById("number10"));
    console.log("number10:" + number10);
    const number11 = parseInt(getValueById("number11"));
    console.log("number11:" + number11);
    const number12 = parseInt(getValueById("number12"));
    console.log("number12:" + number12);
    const number13 = parseInt(getValueById("number13"));
    console.log("number13:" + number13);
    const r1 = number1 == 0 ? 0 : 1 / (number0 * number1 * number10);
    console.log("r1:" + r1);
    const r2 = number2 == 0 ? 0 : (1 - r1) / (number0 * number2 * number10);
    console.log("r2:" + r2);
    const r12 = r1 + r2;
    const r3 = number3 == 0 ? 0 : ((1 - r12) * number3) / (number0 * number10);
    console.log("r3:" + r3);
    const r4 = number4 == 0 ? 0 : ((1 - r3) * number4) / (number0 * number10);
    console.log("r4:" + r4);
    const r1234 = r12 + r3 + r4;
    const r5 = number5 == 0 ? 0 : ((1 - r1234) * number5) / number10;
    console.log("r5:" + r5);
    const r6 = number6 == 0 ? 0 : ((1 - r5) * number6) / number10;
    console.log("r6:" + r6);
    const r7 = number7 == 0 ? 0 : ((1 - r6) * number7) / number10;
    console.log("r7:" + r7);
    const r8 = number8 == 0 ? 0 : ((1 - r7) * number8) / number10;
    console.log("r8:" + r8);
    const r9 = number9 == 0 ? 0 : ((1 - r8) * number9) / number10;
    console.log("r9:" + r9);
    const r123456789 = r1234 + r5 + r6 + r7 + r8 + r9;
    console.log("r123456789:" + r123456789);
    const br1 = number1 == 0 ? 0 : 1 / (number0 * number1);
    console.log("br1:" + br1);
    const br2 = number2 == 0 ? 0 : (1 - br1) / (number0 * number2);
    console.log("br2:" + br2);
    const br12 = br1 + br2;
    const br3 = number3 == 0 ? 0 : ((1 - br12) * number3) / number0;
    console.log("br3:" + br3);
    const br4 = number4 == 0 ? 0 : ((1 - br3) * number4) / number0;
    console.log("br4:" + br4);
    const br1234 = br12 + br3 + br4;
    const br5 = number5 == 0 ? 0 : number5 - br1234;
    console.log("br5:" + br5);
    const br6 = number6;
    console.log("br6:" + br6);
    const br7 = number7;
    console.log("br7:" + br7);
    const br8 = number8;
    console.log("br8:" + br8);
    const br9 = number9;
    console.log("br9:" + br9);
    const br123456789 = br1234 + br5 + br6 + br7 + br8 + br9;
    console.log("br123456789:" + br123456789);
    const n1 = number11 == 0 ? 0 : ((br3 * (number11 / (number11 + number12))) + br5 + br6 + br7) / number11;
    console.log("n1:" + n1);
    const n2 = number12 == 0 ? 0 : ((br3 * (number12 / (number11 + number12))) + br8) / number12;
    console.log("n2:" + n2);
    const n3 = number13 == 0 ? 0 : br9 / number13;
    console.log("n3:" + n3);
    replaceInnerHTML("d1",r1);
    replaceInnerHTML("d2",r2);
    replaceInnerHTML("d3",r3);
    replaceInnerHTML("d4",r4);
    replaceInnerHTML("d5",r5);
    replaceInnerHTML("d6",r6);
    replaceInnerHTML("d7",r7);
    replaceInnerHTML("d8",r8);
    replaceInnerHTML("d9",r9);
    replaceInnerHTML("d10",n1);
    replaceInnerHTML("d11",n2);
    replaceInnerHTML("d12",n3);
}

trigger("cal","click",calculate);