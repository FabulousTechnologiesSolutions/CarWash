$(".center").slick({
    dots: true,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });
  function displayFileName(input) {
    const fileName = input.files[0].name;
    document.getElementById(
      "selectedFileName"
    ).textContent = `Selected File: ${fileName}`;
  }