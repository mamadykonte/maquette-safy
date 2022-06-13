
        
        let slideIndex = 1;
        const next = document.querySelector('.next');
        const prev = document.querySelector('.prev');
        const dots = document.querySelectorAll('.badge');
        
        showDivs(slideIndex);
        
        function plusDivs(n) {
          showDivs(slideIndex += n);
        }
        
        function currentDiv(n) {
          showDivs(slideIndex = n);
        }
        
        function showDivs(n) {
          let i;
          const x = document.getElementsByClassName("mySlides__img");
          const dots = document.getElementsByClassName("badge");
          if (n > x.length) {slideIndex = 1}
          if (n < 1) {slideIndex = x.length}
          for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";  
          }
          for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" badge--selected", "");
          }
          x[slideIndex-1].style.display = "block";  
          dots[slideIndex-1].className += " badge--selected";
        }

        

        window.onload = function() {

        next.addEventListener('click', function() { 
            plusDivs(-1);
        });
        prev.addEventListener('click', function() {
            plusDivs(1);
        });

        next.addEventListener('mouseover', function() {
            next.classList.add('next--hover');
        } );
        next.addEventListener('mouseout', function() {
            next.classList.remove('next--hover');
        } );

        next.addEventListener('mousedown', function() {
            next.classList.add('next--selected');
        }
        );
        next.addEventListener('mouseup', function() {
            next.classList.remove('next--selected');
        });
    
        prev.addEventListener('mouseover', function() {
            prev.classList.add('prev--hover');
        } );

        prev.addEventListener('mouseout', function() {
            prev.classList.remove('prev--hover');
        } );
        prev.addEventListener('mousedown', function() {
            prev.classList.add('prev--selected');
        }
        );
        prev.addEventListener('mouseup', function() {
            prev.classList.remove('prev--selected');
        });

        

        dots.forEach(dot => {
            dot.addEventListener('click', function() {
                currentDiv(this.dataset.index);
            });

            dot.addEventListener('mouseover', function() {
                this.classList.add('badge--hover');
            })
            dot.addEventListener('mouseout', function() {
                this.classList.remove('badge--hover');
            })   
        })
    }


        
