/*
    Author: Bruno DaSilva
    Homework: W07D2 Tic Tac Toe
*/
$(() => {
  ///////////////////////////////
  //// variables
  //////////////////////////////
  let playerOne = 1;
  let $playerMove = $(".playerMove");
  //Modals
  const $modalP1 = $("#modal");
  const $modalText = $("#modal-textbox");
  const $modalP2 = $("#modal2");
  const $modalText2 = $("#modal-textbox2");
  const $modal3 = $("#modal3");
  const $modalText3 = $("#modal-textbox3");
  const $modal4 = $("#modal4");
  const $modalText4 = $("#modal-textbox4");
  //BTNs
  const $closeBtn = $("#close");
  const $closeBtn2 = $("#close2");
  const $closeBtn3 = $("#close3");
  const $closeBtn4 = $("#close4");

  const scoreTrack = [];
  ///////////////////////////////
  //// END - Variables
  //////////////////////////////
  //
  //
  ///////////////////////////////
  //// Modal Open Close
  //////////////////////////////

  const openModal = player => {
    //Setting CSS to display
    player.css("display", "block");
    //Hide CSS ON CLICK by Passing an anonymous function
    $closeBtn.on("click", () => {
      $modalP1.css("display", "none");
      $modalText.css("display", "block");
      $(".playerMove").removeClass("x");
      $(".playerMove").removeClass("o");
    });
    //Hide CSS ON CLICK by Passing an anonymous function
    $closeBtn2.on("click", () => {
      $modalP2.css("display", "none");
      $modalText2.css("display", "block");
      $(".playerMove").removeClass("x");
      $(".playerMove").removeClass("o");
    });
    //Hide CSS ON CLICK by Passing an anonymous function
    $closeBtn3.on("click", () => {
      $modal3.css("display", "none");
      $modalText3.css("display", "block");
    });
    //TIE
    $closeBtn4.on("click", () => {
      $modal4.css("display", "none");
      $modalText4.css("display", "block");
      $(".playerMove").removeClass("x");
      $(".playerMove").removeClass("o");
    });
  };

  ///////////////////////////////
  //// END - Modal Open Close
  /////////////////////////////
  //
  //
  ////////////////////////////
  //// Check a TIE
  ///////////////////////////
  const checkTie = () => {
    if ($(".x").length + $(".o").length === 9) {
      openModal($modal4);
    }
  };
  //////////////////////////
  //// end- Check a TIE
  /////////////////////////

  // //TRACK SCORE  FUNCTION
  // const trackScore = event => {
  // //   let points = 0;
  // //   scoreTrack.push((points = +1));
  // //   console.log(scoreTrack);
  // // };

  // // =>END - TRACK SCORE  FUNCTION

  //// => Game logic ///

  $($playerMove).on("click", event => {
    let divSelected = $(event.currentTarget);

    if (divSelected.hasClass("x") || divSelected.hasClass("o")) {
      openModal($modal3);
    } else {
      if (playerOne === 1) {
        divSelected.addClass("x");
        checkTie();
        if (checkWinner("x")) {
          // FUNC keep score
          // trackScore();

          openModal($modalP1);
        } else {
          playerOne = 2;
        }
      } else {
        divSelected.addClass("o");
        checkTie();
        if (checkWinner("o")) {
          // trackScore();
          openModal($modalP2);
        } else {
          playerOne = 1;
        }
      }
    }
  });

  ///////////////////////////////
  //// CheckWinner Function
  //////////////////////////////

  const checkWinner = move => {
    //Check the Three main row
    if (
      $("#1").hasClass(move) &&
      $("#2").hasClass(move) &&
      $("#3").hasClass(move)
    ) {
      return true;
    } else if (
      $("#4").hasClass(move) &&
      $("#5").hasClass(move) &&
      $("#6").hasClass(move)
    ) {
      return true;
    } else if (
      $("#7").hasClass(move) &&
      $("#8").hasClass(move) &&
      $("#9").hasClass(move)
    ) {
      return true;
    } //check the main column
    else if (
      $("#1").hasClass(move) &&
      $("#4").hasClass(move) &&
      $("#7").hasClass(move)
    ) {
      return true;
    } else if (
      $("#2").hasClass(move) &&
      $("#5").hasClass(move) &&
      $("#8").hasClass(move)
    ) {
      return true;
    } else if (
      $("#3").hasClass(move) &&
      $("#6").hasClass(move) &&
      $("#9").hasClass(move)
    ) {
      return true;
    } //Check diagonal
    else if (
      $("#1").hasClass(move) &&
      $("#5").hasClass(move) &&
      $("#9").hasClass(move)
    ) {
      return true;
    } else if (
      $("#3").hasClass(move) &&
      $("#5").hasClass(move) &&
      $("#7").hasClass(move)
    ) {
      return true;
    }
    //if TIE -> but I could not get it to work
    else if (
      $("#1").hasClass(move) &&
      $("#2").hasClass(move) &&
      $("#3").hasClass(move) &&
      $("#4").hasClass(move) &&
      $("#5").hasClass(move) &&
      $("#6").hasClass(move) &&
      $("#7").hasClass(move) &&
      $("#8").hasClass(move) &&
      $("#9").hasClass(move)
    ) {
      alert("tie");
    } else {
      return false;
    }
  };
  ///////////////////////////////
  //// END- CheckWinner Function
  //////////////////////////////
  checkTie();
});
