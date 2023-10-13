function person() {
    this.firstName = "unknown";
    this.lastName = "unknown";
}
var person1 = new Person();
person1.firstName = "bhx";
person1.lastName = "bhavan";
person1.age= "21";
person1.profosional= "Cricketer";

console.log(person1.firstName + " " + person1.lastName+ " " + person1.age+ " " +person1.profosional);

var person2 = new Person();
person2.firstName = "kalai";
person2.lastName = "yarasan";
person2.age= "35";
person2.profosional= "School Secretary";

console.log(person2.firstName + " " + person2.lastName + " " + person2.age+ " " +person2.profosional);