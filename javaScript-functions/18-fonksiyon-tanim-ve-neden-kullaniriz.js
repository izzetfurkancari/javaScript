/**********************************************Ilk Fonksiyonumuzu Tanimlamak **********************************/ 

function hello (){
    console.log("hello");
    helloWorld()
}
function helloWorld(){
    console.log("helloWorld");
}
hello() // calistir.
hello() // calistir.


document.body.style.backgroundColor =  "black"
// userCheck (){
//     if (userName && age >= 18) {
//         info.innerHTML ="ehliyet alabilir";
//         console.log("ehliyet alabilir");
//     } else if (!userName) {
//         info.innerHTML ="kallanici adiniz yok";
//         console.log("kullanici adiniz yok"); 
//     } else if (!(age >= 18)) {
//         info.innerHTML ="yasınız uygun degil";
//         console.log("yasınız uygun degil");
//     }
// } //hatali fonksiyon

function printHello(name){                		 //name adında bir parametre aldı
    console.log("Merhaba " + name);  	
}
printHello("Şafak");  // bir argüman vererek fonksiyonu çağırdık. Çıktı: Merhaba Şafak

/*****************************************************************************/

function addition(sayi1,sayi2){  //function name and parameters
    console.log(sayi1+sayi2);     //body
}
addition() //Bu kodda fonksiyonunun adı addition. sayi1 ve sayi2 fonksiyonun almış olduğu parametreler oluyor. Fonksiyonun işlevi ise body kısmında console.log(sayı1+sayı2) belirtilmiş.

/*****************************************************************************/

function addition(sayi1,sayi2){
    return (sayi1+sayi2);
}
var add = addition(1,2);   //add değişkenine 1+2 değerini fonksiyon kullanarak atadık.
addition()

/*****************************************************************************/

var sayi1 = 5;
var sayi2 = 2;   
function addition(){
    var sayi3 = 3;             //sayi3 adında lokal bir değişken tanımlıyoruz
    return sayi1+sayi2+sayi3;  //Fonksiyon içinde global ve local değişkenleri kullanıyoruz
}

function multiplication(){
    return sayi1*sayi3;  
}
//Burada hata alıyoruz: bunun nedeni başka bir fonksiyonun içinde tanımlı olan sayi3 lokal değişkenini kapsamı dışında 
//kullanmaya çalışmamız. sayi1 değişkeni ise global olduğundan burada kullanılabilir

/*****************************************************************************/

function printScreen1 (){
    console.log("İlk ekran çıktısı");
}

function printScreen2 (){
   setTimeout(function(){
console.log("“İkinci ekran çıktısı”")  
},  3000);
}

function printScreen3 (){
    console.log("“Üçüncü ekran çıktısı”");
}
printScreen1();
printScreen2();
printScreen3();  //İlk ekran çıktısı - Üçüncü ekran çıktısı - İkinci ekran çıktısı

/*****************************************************************************/

function printScreen1() {
    console.log("İlk ekran çıktısı");
  }

  function printScreen2(callback1, callback2) {
    setTimeout(function () {
      callback1();
      console.log("İkinci ekran çıktısı")
      callback2();
    }, 3000);
  }

  function printScreen3() {
    console.log("Üçüncü ekran çıktısı");
  }


 printScreen2(printScreen1, printScreen3);

 /*****************************************************************************/

function mesajVer() {
alert( 'Herkese Merhabalar!' );
}
function mesajVer() {
    // setTimeout(function (){
    // mesajVer();
    alert( "Herkese Merhabalar!" );
// }, 8000);
    }
    mesajVer();
    mesajVer();

    function aturok(ad, soyad) {
  alert(`Merhaba ${ad} ${soyad}`);
}

aturok("Arturo", "Kelesoglu", "Mr."); /* çıktı: Merhaba Arturo Kelesoglu (Bu örnekte parametrelere geçilen argüman sayısı 3'tür(Arturo, Kelesoglu, Mr.). Parametre sayısı ise 2'dir(ad,soyad). Bu yüzden fazlalıklar(Mr.) önemsenmez.*/
aturok("Arturo"); /* çıktı: Merhaba Arturo undefined (Bu örnekte parametrelere geçilen argüman sayısı 1'dir.(Arturo). Parametre sayısı ise 2'dir(ad,soyad). Bu yüzden eksiklikler undefined döner. */
aturok(); // çıktı Merhaba undefined undefined (Yukarıdaki örnekle aynı mantıktadır.)

 /*****************************************************************************/

function topla(sayi1, sayi2) {
    return sayi1 + sayi2;
};

var sonuc = topla(10,20); //  30 döner.

function carp(sayi1, sayi2) {
    return sayi1 * sayi2;
};

result=carp(10,20); // undefined 
console.log(sonuc);
console.log(result);

 /*****************************************************************************/

var ekle = function topla(sayi1, sayi2) {
    return sayi1 + sayi2;
};

var sonuc1 = ekle(10,20); 
var sonuc2 = topla(10,20); // geçersiz
console.log(sonuc1);
console.log(sonuc2);

 /*****************************************************************************/

 let func = (param1, param2, param3) => expression;

 let functt = function (param1, param2, param3) {
    return expression;
  };
  console.log(functt);
  console.log(func);

  const carpim = (sayi7, sayi8) => sayi7 * sayi8; // kod bloğu basitçe param1,param2,param3 parametrelerini alan ve sağ taraftaki ifadeyi değerlendirip sonucunu döndüren bir fonksiyon oluşturur.
/*
    // Daha uzun hali ise;
    const carpim = function(sayi1,sayi2){
      return sayi1 * sayi2;
    }
  */

console.log(carpim(3, 5));

 /*****************************************************************************/

const karesiniAl = (sayi) => sayi * sayi;
//Hiç parametre olmadığı zaman ise
const hellloWorld = () => console.log('Hello World');
console.log(hellloWorld);


let experience = prompt('Kac yillik gelistirici tecrubeniz var', 4);

const developer =
  experience <= 5
    ? () => alert('Bir cok konuyu biliyorum')
    : () => alert('Hicbir sey bilmiyorum:)');

developer();

// parantezler bize birden fazla statement yazmamızı sağlar.
let toplam = (a, b) => {
    let result = a + b;
    return result;
  };

   /*****************************************************************************/

   // bir fonksiyon yazalım bu fonksiyon sayının kuvvetini alsın.
// pow(2,2) = 4
// pow(2,3) = 8
// pow(2,4) = 16 değerlerini verecek şekilde diyelim.

// 1.ci yol (recursion patterni ile düşünmeden)
function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

alert(pow(2, 3)); // 8
// recursion ile
function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}

alert(pow(2, 3)); // 8

//Aşağıdaki soruyu recursion ile arrow function ve if else clause kullanarak yeniden nasıl yazarız
function pow(x, n) {
    return n == 1 ? x : x * pow(x, n - 1);
  }

   /*****************************************************************************/

//Deneyip sonuçları görebilirsiniz.
{
    let message = 'Merhaba';
    console.log(message);
  }
//   console.log(message); // ??
  //Deneyip sonuçları görebilirsiniz.
  {
    let message = 'Merhaba';
    console.log(message);
  }
  
  {
    let message = 'Hello';
    console.log(message);
  }
  // Kod blokları kullanmadan da deneyebilirsiniz.


  if (true) {
    let aynen = 'sa';
    console.log(aynen);
  }
//   console.log(aynen); // ? merhaba mı verir yoksa bir hata mı?



  function stringFormat(str) {
    {
      let part1 = str.slice(0, 3);
      let part2 = str.slice(3);
      str = part1.toUpperCase() + part2; 
    }
    //part1 ve part2 kullanılamaz.
    //bir kosula baglı return edelim. basit olması acısından sadece true yazdım.
    if (str = part1.toUpperCase() + part2) {
      return str; 
     } 
    return str.slice(4);
  }

  /*****************************************************************************/

function programDetayi(bootcamp, organizasyon) {
  // nested yardımcı fonk
  const tumProgram = () => bootcamp + ' ' + organizasyon;

  console.log('Basladi, ' + tumProgram());
  consol.log('Bitti, ' + tumProgram());
}


function sayacartir() {
    let sayac = 0;
  
    return function () {
      return sayac++;
    };
  }
  
  let counter = sayacartir();
  
  console.log(counter()); // 0
  console.log(counter()); // 1
  console.log(counter()); //
  
  const decoratorDownlevelOutFile = join(distDir, 'legacy-decorator-downlevel-bundle.mjs');