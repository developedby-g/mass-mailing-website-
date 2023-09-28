
const fileInput = document.getElementById('csvFileInput');
const container = document.getElementById('csvContainer');

fileInput.addEventListener('change', handleFileUpload);

function handleFileUpload() {
  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    const contents = e.target.result;
    const lines = contents.split('\n');
    container.innerHTML = ''; 

    const invalidEmails = [];
    const validEmails = [];

    lines.forEach(function (line) {
      const emails = line.split(',');

      emails.forEach(function (email) {//using validator.js library
        const trimmedEmail = email.trim();
        if (!validator.isEmail(trimmedEmail)) {
          invalidEmails.push(trimmedEmail);
        } else {
          validEmails.push(trimmedEmail);
        }
      });
    });

    const emailContainer = document.createElement('div'); 
    const validContainer=document.createElement('div');
    validContainer.setAttribute('class','valid-container');
    const invalidContainer=document.createElement('div');
    invalidContainer.setAttribute('class','invalid-container');

    if (invalidEmails.length > 0) {
      const invalidHeading = document.createElement('h3');
      
      invalidHeading.textContent = 'Invalid Email Addresses';
      invalidHeading.style.fontFamily="'Roboto',sans-serif";
      invalidHeading.style.fontSize="40px";
      invalidHeading.style.color="#0C6A28";
      invalidContainer.appendChild(invalidHeading);

      const invalidEmailsList = document.createElement('ol');
      invalidEmailsList.setAttribute('class','scroll');
      

      invalidEmails.forEach(function (email) {
        const listItem = document.createElement('li');
        listItem.textContent = email;
        invalidEmailsList.appendChild(listItem);
      });

      
      invalidContainer.appendChild(invalidEmailsList);
    } else {
      invalidContainer.innerHTML += '<p>No invalid emails found.</p>';
    }

    if (validEmails.length > 0) {
      const validHeading = document.createElement('h3');
      validHeading.textContent = 'Valid Email Addresses';
      validHeading.style.fontFamily="'Roboto',sans-serif";
      validHeading.style.fontSize="40px";
      validHeading.style.color="#0C6A28";
      validContainer.appendChild(validHeading);

      const validEmailsList = document.createElement('ol');
      validEmailsList.setAttribute('class','scroll');

      validEmails.forEach(function (email) {
        const listItem = document.createElement('li');
        listItem.textContent = email;
        validEmailsList.appendChild(listItem);
      });

      validContainer.appendChild(validEmailsList);
    } else {
      validContainer.innerHTML += '<p>No valid emails found.</p>';
    }

    container.appendChild(invalidContainer);
    container.appendChild(validContainer); 
  };

  reader.readAsText(file);
}

document.getElementById('send-mail').addEventListener('click',function(event){
          const myEmail=document.getElementById('email').value;
          const checkEmail=validator.isEmail(myEmail);
          if(!checkEmail){
            document.getElementById('email').style.border="1px solid red";
            document.getElementById('warning').classList.remove('error');
          }
          else {
            document.getElementById('email').classList.remove('error-border');
            document.getElementById('warning').classList.add('error');
          }
          if(checkEmail){
            animItem.goToAndPlay(0,true);
          }

})
document.getElementById('email').addEventListener('input',function(){
    document.getElementById('warning').classList.add('error');
    document.getElementById('email').style.border="none";
})
 
const play=document.getElementById('send-mail');
const svgContainer=document.getElementById('svg-container');
const animItem = bodymovin.loadAnimation({
    wrapper: svgContainer,
    animType: "svg",
    loop: false,
    autoplay: false,
    path: "https://assets2.lottiefiles.com/packages/lf20_NU3Nmy.json"
  });
 const content=document.getElementById('mail-content').value;
 console.log(content);

 
 

