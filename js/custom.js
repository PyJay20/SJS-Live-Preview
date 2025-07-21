// navigation  menu js
function openNav() {
    $("#myNav").addClass("menu_width");
    $(".menu_btn-style").fadeIn();
}

function closeNav() {
    $("#myNav").removeClass("menu_width");
    $(".menu_btn-style").fadeOut();
}


// get current year

function displayYear() {
    var d = new Date();
    var currentYear = d.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}
displayYear();


// owl carousel slider js
$('.team_carousel').owlCarousel({
    loop: true,
    margin: 0,
    dots: true,
    autoplay: true,
    autoplayHoverPause: true,
    center: true,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 2
        },
        768: {
            items: 3
        },
        1000: {
            items: 5
        }
    }

    $(document).ready(function() {

        $("[unique-script-id='w-w-dm-id'] .btn-box").click(function() {
          $(this).parent().children(".overlay").show();
      
        });
      
      
        $("[unique-script-id='w-w-dm-id'] .close").click(function() {
          $(".overlay").hide();
        });
      
        $("[unique-script-id='w-w-dm-id'] .list").click(function() {
          const value = $(this).attr('data-filter');
          if (value == 'all') {
            $("[unique-script-id='w-w-dm-id'] .squareImg").show('1000');
          } else {
            $("[unique-script-id='w-w-dm-id'] .squareImg").not('.' + value).hide('1000');
            $("[unique-script-id='w-w-dm-id'] .squareImg").filter('.' + value).show('1000');
          }
        })
        $("[unique-script-id='w-w-dm-id'] .list").click(function() {
          $(this).addClass('active').siblings().removeClass('active');
        })
      })


      <script>
  const buttons = document.querySelectorAll('.gallery-btn');
  const projects = document.querySelectorAll('.project');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelector('.gallery-btn.active')?.classList.remove('active');
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      projects.forEach(project => {
        const img = project.querySelector('img');
        const matches = img.classList.contains(filter);
        if (filter === 'all' || matches) {
          project.style.display = 'block';
        } else {
          project.style.display = 'none';
        }
      });
    });
  });
</script>
