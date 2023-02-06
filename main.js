let cnt = 1;

const magicButton = document.querySelector(".magic-button");
magicButton.addEventListener("click", function() {
    if (cnt % 2 == 1)
    {
    //color change
        document.querySelector(".header").style.backgroundColor = "#874356";
        document.querySelector("html").style.backgroundColor = "#DDC8CE";
        document.querySelector("html").style.color = "#000000";
    // text change
        let header_elements = document.querySelectorAll(".header-element");
        header_elements[0].innerHTML = "Home";
        header_elements[1].innerHTML = "About Us";
        header_elements[2].innerHTML = "Stories";
        header_elements[3].innerHTML = "Contact";
        document.querySelector(".welcome").innerHTML = "Welcome";

        let blog_containers = document.querySelectorAll(".blog-item");
        blog_containers[0].querySelector(".blog-title").innerHTML = "My story";
        blog_containers[0].querySelector(".blog-subtitle").innerHTML = "How I have become a NTHer?";
        blog_containers[1].querySelector(".blog-title").innerHTML = "NTH in 2010s";
        blog_containers[1].querySelector(".blog-subtitle").innerHTML = "Hien in the pass";
    
        document.querySelector(".footer-text").innerHTML = "Contact";
    }
    else {
        //color change
        document.querySelector(".header").style.backgroundColor = "#307AA4";
        document.querySelector("html").style.backgroundColor = "#307AA4";
        document.querySelector("html").style.color = "white";
        // text change
        let header_elements = document.querySelectorAll(".header-element");
        header_elements[0].innerHTML = "Trang chủ";
        header_elements[1].innerHTML = "Về mình";
        header_elements[2].innerHTML = "Câu chuyện";
        header_elements[3].innerHTML = "Liên hệ";
        document.querySelector(".welcome").innerHTML = "Chào mừng";
  
        let blog_containers = document.querySelectorAll(".blog-item");
        blog_containers[0].querySelector(".blog-title").innerHTML = "Câu chuyện của mình";
        blog_containers[0].querySelector(".blog-subtitle").innerHTML = "Hành trình trở thành học sinh của Hiền";
        blog_containers[1].querySelector(".blog-title").innerHTML = "Hiền những năm 2010";
        blog_containers[1].querySelector(".blog-subtitle").innerHTML = "Hiền của những ngày xưa xũ";
        
        document.querySelector(".footer-text").innerHTML = "Liên hệ";
    }
    cnt++;
});
