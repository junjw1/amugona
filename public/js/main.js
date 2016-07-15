var $window = $(window);

/* input */
var $inputEmail = $('#inputEmail');
var $inputBangName = $('#inputBangName');
var $inputBangAddr = $('#inputBangAddr');
var $inputUsername = $('#inputUsername');
var $inputMessage = $('#inputMessage');   // input message

/* edit */
var $editEmail = $('#editEmail');
var $editBangName = $('#editBangName');
var $editBangAddr = $('#editBangAddr');
var $editUsername = $('#editUsername');

/* variable init */
var BangName;
var BangAddr;
var Username;
var Email;

/* page */
var $mainPage = $('.mainPage');
var $createPage = $('.createPage');
var $namePage = $('.namePage');
var $bangPage = $('.bangPage');
var $detailPage = $('.detailPage');
var $bangChat = $('.bangChat'); // message page

/* message area */
var $messages = $('#messages');

/* focus input */
var $currentInput = $inputEmail.focus();

/* client socket */
var socket = io();

/* fucntion */

function cleanInput() {
    $inputMessage.val('');
}

// get message and emit 'send message'
function sendMessage() {
    var message = $inputMessage.val();
    cleanInput();

    //(챗-1)본인이 입력한 챗 메시지를 본인 화면에 출력
    addChatMessage({ username: Username, message: message });

    //(챗-2)서버에게 이벤트를 쏜다
    socket.emit('send message', { username: Username, message: message });
}

// get message and emit 'send message'
function sendMessage2() {
    var message = $inputMessage.val();
    cleanInput();

    //(챗-1)본인이 입력한 챗 메시지를 본인 화면에 출력
    addChatMessage2({ username: Username, message: message });

    //(챗-2)서버에게 이벤트를 쏜다
    socket.emit('send message2', { username: Username, message: message });
}

// create li element
function addChatMessage(data) {
    var $usernameDiv = $('<span>').text("[" + data.username + "] ");
    var $messageDiv = $('<span>').text(data.message);
    var $el = $('<li>').append($usernameDiv, $messageDiv);
    addMessageElement($el);
}

function addChatMessage2(data) {
    var $usernameDiv = $('<span>').text("[" + data.username + "] ");
    var $messageDiv = $('<span>').text(data.message);
    var $el = $('<li>').append($usernameDiv, $messageDiv);
    addMessageElement2($el);
}

// add messsage
function addMessageElement(el) {
    $messages.append(el);
    $(document).scrollTop($(document).height());
}

function addMessageElement2(el) {
    $('#messages2').append(el);
    $(document).scrollTop($(document).height());
}

function log(data) {
    var el = $('<li>').addClass('log').text(data);
    addMessageElement(el);
}

//환영합니다. 현재 n명 접속중입니다.(첫 접속시)
//(타사용자 접속시)000님이 접속하셨습니다.
function addParticipantMessage(data, msg) {
    var str = msg + data.numUsers + "명 접속중입니다.";
    log(str);
}

/* Modal */
var kanmagiNames = [".General", ".Random"];
$('#createKanmagi').click(function () {
    // hide modal
    $('#addKanmagi').modal('hide'); // data-dismiss="modal"

    //add Kanmagi
    var inputKanmagiName = $('#inputKanmagiName').val();
    kanmagiNames.push("." + inputKanmagiName);

    var $el = $('<a>').addClass(inputKanmagiName).text(inputKanmagiName);
    $('.kanmagi').append($('<li>').append($el));
    return false;
});

        /*
            <ul class="kanmagi">
                <li><a class="General">General</a></li>
                <li><a class="Random">Random</a></li>
            </ul>
        */
$(kanmagiNames[0]).click(function () {
    $('#messages').show();
    $('#messages2').hide();
    return false;
});

$(kanmagiNames[1]).click(function () {
    $('#messages').hide();
    $('#messages2').show();
    return false;
});

/* form submit */
$('#mainPage').submit(function () {
    Email = $inputEmail.val();

    $mainPage.fadeOut();
    $createPage.show();
    $currentInput = $inputBangName.focus();
    return false;
});

$('#bangPage').submit(function () {
    BangName = $inputBangName.val();
    BangAddr = $inputBangAddr.val();

    $namePage.show();
    $bangPage.fadeOut();
    $currentInput = $inputUsername.focus();
    return false;
});

$('#namePage').submit(function () {
    Username = $inputUsername.val();

    // set input
    $editEmail.val(Email);
    $editBangName.val(BangName);
    $editBangAddr.val(BangAddr);
    $editUsername.val(Username);

    $detailPage.show();
    $namePage.fadeOut();
    $currentInput = $('button').focus();
    return false;
});

$('#detailPage').submit(function () {
    $detailPage.fadeOut();
    $bangChat.show();

    //서버에 이름을 보낸다. emit으로 이벤트 발생 on으로 그 이벤트에 대한 처리
    socket.emit('add user', Username);

    //서버에 이메일 보낸다
    socket.emit('send email', Email);

    $currentInput = $inputMessage.focus();
    return false;
});

$('#chatPage').submit(function () {
    if($('#messages').css("display") == "none"){
        sendMessage2();
    } else if($('#messages2')){
        sendMessage();
    }

    return false;
});

// socket event
socket.on('user joined', function (data) {
    var msg = data.username + "님이 접속하셨습니다.";
    log(msg);
});

//(챗-4)남에게 온 챗 메시지를 출력
socket.on('send message', function (data) {
    addChatMessage(data);
});
//(챗-4)남에게 온 챗 메시지를 출력2
socket.on('send message2', function (data) {
    addChatMessage2(data);
});

socket.on('welcome', function (data) {
    var msg = Username + "님 환영합니다!";

    addParticipantMessage(data, msg);
});

socket.on('user left', function (data) {
    var msg = data.username + "님이 나가셨습니다.";
    addParticipantMessage(data, msg);
});
