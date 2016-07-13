var TestObject = function(param){
    
    this.testVal=2;
    this.testVal2 = param;
    
}//js因為彈性很大，在物件導向上並不是使用一般概念上的class，而是用類似function宣告的方式去做物件的實體
// 也就是說在js中會有function定義包住funtcion定義的情況
// 但是這樣會浪費過多的空間，可以改用prototype的方式將共用函示寫在其中
TestObject.prototype = {
    
    testFunction1 :function(){
        this.testVal3=10;
        return this.testVal3;
    },
    testFunction2 :function(){
        this.testVal4=20;
        return this.testVal4;
    }
    // 要注意的是因為是定義在prototype中，實際上要使用,隔開複數function的定義
    
}
TestObject.prototype.testFunction3 = function(){
    this.testVal5=100;
    return this.testVal5;
}
TestObject.prototype.testFunction4 = function(){
    this.testVal6=150;
    return this.testVal6;
}//如果需要回傳值，記得要return
//js沒有繼承這個東西