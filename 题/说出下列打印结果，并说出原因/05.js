var a = 2;
var obj = {
    a: 3,
    fn: function() {
        // this === obj
        const a = () => {
            console.log(this.a); //obj.a => 3
        }
        const b = function() {
            console.log(this.b); //window.a => 2
        }
        a(); //3
        b(); //2
    }
}
obj.fn();