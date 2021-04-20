const me = {
    first: 'Tina',
    last: 'Xing', getFullName: function () {
        return this.first + ' ' + this.last;
    }
}
const log = function (height, weight) { // ‘this’ refers to the invoker
    console.log(this.getFullName() + height + ' ' + weight);
}
const logMe = log.bind(me);
logMe('180cm‘, "70kg"); // Tina Xing 180cm 70kg
    log.call(me, "180cm", '70kg'); // Tina Xing 180cm 70kg 
log.apply(me, ['180cm', '70kg']); // Tina Xing 180cm 70kg 
log.bind(me, '180cm', '70kg’)(); 
    // Tina Xing 180cm 70kg