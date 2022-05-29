var letter_a = document.getElementById("letter_a")
var letter_b = document.getElementById("letter_b")
var letter_c = document.getElementById("letter_c")
var letter_d = document.getElementById("letter_d")
var letter_e = document.getElementById("letter_e")
var letter_f = document.getElementById("letter_f")
var letter_g = document.getElementById("letter_g")
var letter_h = document.getElementById("letter_h")
var letter_i = document.getElementById("letter_i")
var letter_j = document.getElementById("letter_j")
var letter_k = document.getElementById("letter_k")
var letter_l = document.getElementById("letter_l")
var letter_m = document.getElementById("letter_m")
var letter_n = document.getElementById("letter_n")
var letter_o = document.getElementById("letter_o")
var letter_p = document.getElementById("letter_p")
var letter_q = document.getElementById("letter_q")
var letter_r = document.getElementById("letter_r")
var letter_s = document.getElementById("letter_s")
var letter_t = document.getElementById("letter_t")
var letter_u = document.getElementById("letter_u")
var letter_v = document.getElementById("letter_v")
var letter_w = document.getElementById("letter_w")
var letter_x = document.getElementById("letter_x")
var letter_y = document.getElementById("letter_y")
var letter_z = document.getElementById("letter_z")
var word = null;
var word_splitted = null;
var letterIndex = null;
var letterPressed = null;
var word_under = null;
var lives = 10;

letter_a.addEventListener("click",letter_a_pressed)
letter_b.addEventListener("click",letter_b_pressed)
letter_c.addEventListener("click",letter_c_pressed)
letter_d.addEventListener("click",letter_d_pressed)
letter_e.addEventListener("click",letter_e_pressed)
letter_f.addEventListener("click",letter_f_pressed)
letter_g.addEventListener("click",letter_g_pressed)
letter_h.addEventListener("click",letter_h_pressed)
letter_i.addEventListener("click",letter_i_pressed)
letter_j.addEventListener("click",letter_j_pressed)
letter_k.addEventListener("click",letter_k_pressed)
letter_l.addEventListener("click",letter_l_pressed)
letter_m.addEventListener("click",letter_m_pressed)
letter_n.addEventListener("click",letter_n_pressed)
letter_o.addEventListener("click",letter_o_pressed)
letter_p.addEventListener("click",letter_p_pressed)
letter_q.addEventListener("click",letter_q_pressed)
letter_r.addEventListener("click",letter_r_pressed)
letter_s.addEventListener("click",letter_s_pressed)
letter_t.addEventListener("click",letter_t_pressed)
letter_u.addEventListener("click",letter_u_pressed)
letter_v.addEventListener("click",letter_v_pressed)
letter_w.addEventListener("click",letter_w_pressed)
letter_x.addEventListener("click",letter_x_pressed)
letter_y.addEventListener("click",letter_y_pressed)
letter_z.addEventListener("click",letter_z_pressed)

function letter_a_pressed() {
    console.log("letter_a_pressed");
    evaluate_letter("a");
}
function letter_b_pressed() {
    console.log("letter_b_pressed");
    evaluate_letter("b");
}
function letter_c_pressed() {
    console.log("letter_c_pressed");
    evaluate_letter("c");
}
function letter_d_pressed() {
    console.log("letter_d_pressed");
    evaluate_letter("d");
}
function letter_e_pressed() {
    console.log("letter_e_pressed");
    evaluate_letter("e");
}
function letter_f_pressed() {
    console.log("letter_f_pressed");
    evaluate_letter("f");
}
function letter_g_pressed() {
    console.log("letter_g_pressed");
    evaluate_letter("g");
}
function letter_h_pressed() {
    console.log("letter_h_pressed");
    evaluate_letter("h");
}
function letter_i_pressed() {
    console.log("letter_i_pressed");
    evaluate_letter("i");
}
function letter_j_pressed() {
    console.log("letter_j_pressed");
    evaluate_letter("j");
}
function letter_k_pressed() {
    console.log("letter_k_pressed");
    evaluate_letter("k");
}
function letter_l_pressed() {
    console.log("letter_l_pressed");
    evaluate_letter("l");
}
function letter_m_pressed() {
    console.log("letter_m_pressed");
    evaluate_letter("m");
}
function letter_n_pressed() {
    console.log("letter_n_pressed");
    evaluate_letter("n");
}
function letter_o_pressed() {
    console.log("letter_o_pressed");
    evaluate_letter("o");
}
function letter_p_pressed() {
    console.log("letter_p_pressed");
    evaluate_letter("p");
}
function letter_q_pressed() {
    console.log("letter_q_pressed");
    evaluate_letter("q");
}
function letter_r_pressed() {
    console.log("letter_r_pressed");
    evaluate_letter("r");
}
function letter_s_pressed() {
    console.log("letter_s_pressed");
    evaluate_letter("s");
}
function letter_t_pressed() {
    console.log("letter_t_pressed");
    evaluate_letter("t");
}
function letter_u_pressed() {
    console.log("letter_u_pressed");
    evaluate_letter("u");
}
function letter_v_pressed() {
    console.log("letter_v_pressed");
    evaluate_letter("v");
}
function letter_w_pressed() {
    console.log("letter_w_pressed");
    evaluate_letter("w");
}
function letter_x_pressed() {
    console.log("letter_x_pressed");
    evaluate_letter("x");
}
function letter_y_pressed() {
    console.log("letter_y_pressed");
    evaluate_letter("y");
}
function letter_z_pressed() {
    console.log("letter_z_pressed");
    evaluate_letter("z");
}

function generateWordUnderlines(){
    word = "DUQUEDECAXIAS"
    word_under = "_".repeat(word.length);
    word_under = word_under.split("");
    word_under = word_under.join(" ");
    document.getElementById("letters_space").innerHTML = word_under;
    document.getElementById("htmlLives").innerHTML = `You have ${lives} lives`;
}

function getIndexesLetter(item){
    if (item === letterPressed){
        console.log(item,letterIndex,letterPressed);
        console.log(word_under)
        word_under = word_under.split(" ");
        word_under = word_under.join("");
        word_under = word_under.substring(0,letterIndex) + letterPressed + word_under.substring(letterIndex + letterPressed.length);
        word_under = word_under.split("");
        word_under = word_under.join(" ");
        console.log(word_under);
        document.getElementById("letters_space").innerHTML = word_under;
    }
    letterIndex++;
}

function evaluate_letter(letter_pressed){
    letter_pressed = letter_pressed.toUpperCase();
    letterPressed = letter_pressed;
    if (word.includes(letter_pressed) === true){
        word_splitted = word.split("");
        letterIndex = 0;
        word_splitted.forEach(getIndexesLetter);
    } else{
        lives--;
        if(lives === 0 | lives < 0){
            document.getElementById("htmlLives").innerHTML = `You was hanged!! :(`;
            if(lives===0){
                $("#htmlLives").after("<button>Try again!</button>");
            }
        } else{
            document.getElementById("htmlLives").innerHTML = `You have ${lives} lives`;
        }
        

    }
    console.log(word.includes(letter_pressed),word,word.indexOf(letter_pressed));
}

generateWordUnderlines();