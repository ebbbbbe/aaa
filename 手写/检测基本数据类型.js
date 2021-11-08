function checkType(o){
    return Object.prototype.toString.call(o).toLowerCase().slice(8,-1);
}