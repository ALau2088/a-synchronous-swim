$('body').on('keydown', (event) => {
  var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
  if (arrowPress) {
    var direction = arrowPress[1];
    SwimTeam.move(direction.toLowerCase());
  }
  var Ajax=event.key.match(/a/)
  if (Ajax) {
    pressAButton(SwimTeam.move)

  }

});

console.log('Client is running in the browser!');
