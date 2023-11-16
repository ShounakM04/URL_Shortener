async function shortURL(){
    const url = document.getElementById("shortener1").value;
    const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`);

    if(url===""){
        alert("Please enter link first!");
    }
    else if(response.ok){
        const data = await response.text();
        document.getElementById('shortener2').value = data;
    } 
    else{   
        document.getElementById('shortener2').placeholder = "Error shortening";
    }
}

function copyToClipboard(){
    const shortURLInput = document.getElementById("shortener2");
    shortURLInput.select();
    document.execCommand("copy");
    alert("Copied the shortened URL to clipboard!");
}
