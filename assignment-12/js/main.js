$("#home span").click(() => {
  $("#home span").animate({ marginLeft: "20%" }, 800);
  $(".menu").animate({ left: "0" }, 800);
  console.log("hello");
});

$(".menu li:first-child").click(() => {
  $("#home span").animate({ marginLeft: "0%" }, 800);
  $(".menu").animate({ left: "-20%" }, 800);
});

$(".singer-slider h3").click((e) => {
  $(".singer-slider p").not($(e.target).next()).slideUp(1000);
  $(e.target).next().slideToggle(1000);
});

const countDown = (event) => {
  const eventDate = new Date(event);
  const now = new Date();
  const remainig = (eventDate - now) / 1000;
  const days = Math.floor(remainig / (60 * 60 * 24));
  const hours = Math.floor((remainig % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((remainig % (60 * 60)) / 60);
  const seconds = Math.floor(remainig % 60);
  $(".time-days").text(`${days} D`);
  $(".time-hour").text(`${hours} H`);
  $(".time-min").text(`${minutes} M`);
  $(".time-sec").text(`${seconds} S`);
};

countDown("1 decmber 2023 12:00:am");

setInterval(() => {
  countDown("1 decmber 2023 12:00:am");
}, 1000);

$("textarea").keydown((e) => {
  const remainig = 100 - $("textarea").val().length-1;
  $(".length").text(
    remainig > 0 ? remainig : "your available character finished"
  );
});
