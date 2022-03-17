
document.querySelector('.submit').addEventListener('click', sendMsg);//if button is clicked it will send the message

function sendMsg(param){
    const data = {
        //The variables should be the same it is in template and must be changed if the template is changed in emailJS
        from_name: document.querySelector('.name').value,//the person seniding the message
        to_name: document.querySelector('.email-to').value,//person recieving the message
        message: document.querySelector('.msg').value,//the message
        to_email: document.querySelector('.toEmail').value//reciever email
    };

    emailjs.send('MyGmail','MyDeafultTemplate', data)//takes three parameter first is service ID second is template id and third is the data
    .then(function(res){//if the email is sent sucess is alerted
        alert('sucess');
    })
    .catch(err => alert(err));//show if there is any error
}



    



