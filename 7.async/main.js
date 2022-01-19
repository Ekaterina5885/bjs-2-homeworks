function testCase () {
    let phoneClock = new AlarmClock();
    phoneClock.addClock("08:20", () => console.log(`Первый звонок`), 1);

    phoneClock.addClock("08:21", () => { 
        console.log(`Второй звонок`);
        phoneClock.removeClock(2);
    }, 2);

    phoneClock.addClock(("08:22"), () => {
        console.log("Третий звонок");
        phoneClock.stop();
        phoneClock.clearAlarms();
        phoneClock.printAlarms();
    }, 3);

    phoneClock.printAlarms();

    phoneClock.start();
    
};
testCase();