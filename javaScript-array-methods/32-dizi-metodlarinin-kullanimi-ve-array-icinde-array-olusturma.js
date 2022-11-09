/*********************** Cok Kullanilan Array(dizi) Metodlari ve Array Icinde Array **************************************/


let items = [1, 2, 3, 4, 5]
// Array Icinde Array
let femaleUsers = ["Ayse", "Hulya", "Merve"]
let maleUsers = ["Ahmet", "Hasan", "Mehmet"]

items.unshift(femaleUsers)
console.log(items);

items.push(maleUsers)
console.log(items);

console.log(items.length);
console.log(items[0].length); // Array Icerisindeki Istedigimiz Array'in  length bilgisini aldik
console.log(items[0][0]); // Ayse Bilgisine Ulastik :)

// Array Icerisinden Oge Ayirmak -> splice(pos,item?)
let newItems = items.splice(1,5)

console.log("newItems: ", newItems);
console.log("items: ",items);
// Array Icerisindeki Ogenin Index Bilgisini Bulmak -> indexOf("value")
items.unshift("lorem")
items.push("ipsum")
console.log(items);
console.log( items.indexOf("lorem") );
console.log(items[items.indexOf("lorem")]);

// Array Kopyalamak -> slice, [...ES6]
let copyItems = items
console.log(items);

copyItems.pop() // son ogeyi cikarttik
console.log("copyItems: ", copyItems);
console.log("items: ", items); // biz bu itemlari esitlesekte yeni bir tane yapi olusmuyor bunu yapmak icin :

console.log(items);
console.log("kopyalandiktan sonraki hali:");
copyItems = items.slice() // slice() -> kopyalama yapti
copyItems.pop() // son ogeyi cikarttik
console.log("2  copyItems: ", copyItems);
console.log("2 items: ", items);

const alisverisListeme = ["elma", "ekmek", "süt"];

const yeniAlisverisListeme = alisverisListeme.slice(0,2);
// "elma"dan başlayıp "süt"e kadar olan elemanları kopyala."süt" dahil değil.

console.log("alisveris listeme: ",yeniAlisverisListeme);
// ["elma", "ekmek"] görmeyi bekleriz.

let es6Items = [...items] // es6 ve sonrasinda gelen kopyalama islemi
console.log(es6Items);

// Iki Array Bilgisini Birlestirmek -> [...ES6, ...ES6] yada concat()

let allUsers = [...femaleUsers, ...maleUsers] //es6 array yapisini birlestirmek
console.log(allUsers);

// Bu metot farklı dizileri birleştirip tek bir diziye çevirmemizi sağlıyor. -> concat()

const yiyecekler = ["pasta", "baklava", "puding"];
const icecekler = ["su", "kahve"];

const menu = yiyecekler.concat(icecekler);
console.log("menuler : ",menu); // Çıktıda ["pasta", "baklava", "puding", "su", "kahve"] bekleriz.

// Array Icerisindeki Bilgiyi String'e Cevirmek -> toString, join
console.log(allUsers.toString());
console.log(allUsers.join(" --- "));

// Istedigimiz Index Bilgisine Oge Eklemek -> splice (index, 0, value)
allUsers.splice(allUsers.length -1, 0, "melissa")
allUsers.splice(Math.ceil(allUsers.length / 2), 0, "lorem")
console.log(allUsers.toString());

// bir elemanın dizi içerisinde bulunup bulunmadığını kontrol eder. Boolean (true/false) olarak çıktı alınır. -> includes()
const alisverisListem = ["elma", "ekmek", "süt"];

// const elmaVar = alisverisListem.includes("elma");
console.log(alisverisListem.includes("elma")); // Dizi içerisinde elma olduğu için true yazdırmasını bekleriz.

alisverisListem.pop()

console.log(alisverisListem.includes("süt")); // Dizi içerisinde son oge silindikten sonra sut olmadığı için ekrana false yazdırmasını bekleriz.

console.log(alisverisListem);

// forEach() Malzemeler dizisindeki her bir malzemeyi ve onun indeksini konsola yazdıran bir kod yazalım:

const malzemeler = ["yumurta", "un", "süt"];

malzemeler.forEach(function(malzeme, malzemeIndeksi) {
    console.log(malzeme, malzemeIndeksi);
}); // console.log() fonksiyonu her bir malzeme için ayrı ayrı çalışacağından çıktı olarak tüm malzemeleri (ve indekslerini) alt alta görürüz.

//map() metodu da forEach gibi kendisine verilen fonksiyonu dizinin her elemanı için uygular fakat forEach'ten farklı olarak sonucu yeni bir dizide tutar. Orijinal dizi olduğu gibi kalır.

const sayilar = [1,2,3]; // Bir dizideki sayıların 5 katından oluşan başka bir dizi oluşturalım:

let sayilarin5kati = sayilar.map(function(sayi) {
    return sayi*5;
});

console.log(sayilarin5kati); // Çıktı olarak [5,10,15] görmeyi bekleriz.

console.log(sayilar); // Çıktı olarak [1,2,3] görmeyi bekleriz. Orijinal dizimiz aynı kalır.

// some() bir array içerisinde belirtilen koşullara uygun bir eleman varsa, sonucumuz true dönecektir. Eğer yoksa da false değeri dönecektir.

const sayilara = [4,5,6];


const sonuc1 = sayilara.some(function(sayi) {
    return sayi > 5 ;
}); // sonucu görebilmek çıktıyı sonuc1 adlı değişkende tutalım:

console.log(sonuc1); // Dizi içerisinde 5'ten büyük bir eleman bulunduğu için çıktıda "true" görmeyi bekleriz.


const sonuc2 = sayilara.some(function(sayi) {
    return sayi <3;
});

console.log(sonuc2); // Dizi içerisinde 3'ten küçük herhangi bir sayı olmadığı için çıktıda "false" görmeyi bekleriz. 

// every() metodu ile belirtilen bir koşulun dizideki tüm elemanlara uyup uymadığını kontrol ederiz. some metodunda olduğu gibi, Boolean yani true veya false olarak döner. True dönebilmesi için dizideki tüm elemanların fonksiyondaki koşula uyması gerekir.

const sayilari = [4,5,6];

const sonucu1 = sayilari.every(function(sayi) {
    return sayi > 3;
});

console.log(sonucu1); // Dizideki tüm sayılar 3'ten büyük olduğu için bu sonucun true dönmesini bekleriz.


const sonucu2 = sayilari.every(function(sayi) {
    return sayi > 5;
});

console.log(sonucu2); // Dizideki tüm sayılar 5'ten büyük olmadığı için sonucun false dönmesini bekleriz.


const sonucu3 = sayilari.every(function(sayi) {
    return sayi > 7;
});

console.log(sonucu3); // Dizideki hiçbir sayı 7'den büyük olmadığı için sonucun false dömmesini bekleriz.

// !!!filter() metodu bir dizi içerisindeki belirli bir koşulu sağlayan elemanlar ile yeni bir dizi oluşturmamıza dolayısıyla dizi elemanlarını filtrelememize yarıyor. Yeni oluşacak diziyi bir değişkende saklıyoruz. Orijinal dizi bozulmuyor.

const sayilarin = [1,2,3,4,5];

const filtrelenmisSayilar = sayilarin.filter(function(sayi) {
    return sayi > 3;
});

console.log(filtrelenmisSayilar); // Orijinal diziyi 3'ten büyük olan sayılar için filtrelediğimizde yeni oluşacak dizi [4,5] olacaktır.

console.log(sayilarin); // Orijinal dizi bozulmayacağından çıktıda [1,2,3,4,5] olarak görürüz.

// find() Bu metot belirtilen koşula uyum sağlayan dizi elemanını bulmamızı sağlar. Diğer metotların aksine find metodu elemanın kendisini döner. Koşulu sağlayan birden fazla eleman varsa, bulduğu ilk elemanı döner. Koşulu sağlayan bir eleman bulamazsa undefined döner.

const sayilarini = [4,5,6,7];

const bulunacakEleman1 = sayilarini.find(function(sayi) {
    return sayi === 5;
});
console.log(bulunacakEleman1); // Dizi içerisinde 5 eleman olarak bulunduğu için çıktıda elemanın kendisini yani 5 görmeyi bekleriz.


const bulunacakEleman2 = sayilarini.find(function(sayi) {
    return sayi > 5;
});
console.log(bulunacakEleman2); // Dizi içerisinde 5'ten büyük birden fazla eleman olduğu için koşula uyan ilk elemanı yani 6'yı görmeyi bekleriz.


const bulunacakEleman3 = sayilarini.find(function(sayi) {
    return sayi < 3;
});
console.log(bulunacakEleman3); // Dizi içerisinde 3'ten küçük bir eleman olmadığı için çıktıda undefined görmeyi bekleriz.


//sort() Bu metot, dizi içerisindeki elemanları sıralamaya yarar.Orijinal dizi sıralanmış şekilde döner. (Yani dizi mutate eder.)Eğer parametre olarak bir fonksiyon verilmezse dizi elemanları string'e çevrilir ve UTF-16 değerlerine göre sıralanır. Artan veya azalan olarak sıralamak için farklı bir yol izlenmelidir.

// Varsayılan haliyle (parametre vermeden) sıralamak yapmak istediğimizde:
const sayilarinin = [3,5,2,10,4];

sayilarinin.sort();
console.log(sayilarinin); // Çıktı olarak [10, 2, 3, 4, 5] alırız.(Sayıların string halleri UTF-16 değerlerine göre sıralandıkları için)

const sayilarda = [3,5,2,10,4];

sayilarda.sort(function(a,b) {
    return b-a;
});
console.log(sayilarda); // Çıktı olarak [10, 5, 4, 3, 2] alırız.

//reduce() Bu metot dizimizi yalnızca bir değere indirger. Parantez içerisine parametre olarak bir fonksiyon ve accumulator'ün (toplayıcının) başlangıç değeri girilir. Bu metot orijinal diziyi değiştirmez. (Mutate etmez.) Tam olarak ne yaptığını anlamak için örnekleri inceleyelim.
const sayilardir = [10,20,30];

// Dizi içindeki sayıları toplayarak indirgeyecek bir fonksiyon yazalım:
function indirgeyici (akumulator, sayi) {
    return akumulator + sayi;
}


const sonuca1 = sayilardir.reduce(indirgeyici,0); // Bu fonksiyonu ve toplamaya 0'dan başlayacağımızı belirten 0 sayısını metodumuza parametre olarak girelim ve sonucu bir değişkende tutalım:

console.log(sonuca1); //0 + 10 + 20 + 30 = 60 olacağından çıktı olarak 60 bekleriz.


// Eğer akümülatorümüzü 0 yerine 5'den başlatsaydık çıkabilecek sonucu görelim:

const sonuca2 = sayilardir.reduce(indirgeyici, 5);

console.log(sonuca2); // 5 + 10 + 20 + 30 = 65 olacağından çıktı olarak 65 bekleriz.

/********************** dizi icinde dizi olusturma **************/
const piknikSepetim = [
    ["elma",3],
    ["muz",5],
    ["ekmek", 2]
];

const ilkEleman    = piknikSepetim[0];  // ["elma",3]
const ikinciEleman = piknikSepetim[1] // ["muz",5]
const ucuncuEleman = piknikSepetim[2] // ["ekmek", 2]

const kacElma = piknikSepetim[0][1]; // 3

let kalemlik = new Array();

// Aynı metotla kalemlik dizisi içerisinde yeni diziler oluşturabiliriz:

kalemlik[0] = new Array("Silgi", 2 ,"mavi");
kalemlik[1] = new Array("Kalem", 3, "kırmızı");
kalemlik[2] = new Array("Cetvel", 1, "siyah");

console.log(kalemlik); // Çıktı olarak [["Silgi", 2, "mavi"], ["kalem", 3, "kırmızı"], ["Cetvel", 1, "siyah"]] şeklinde 3 elemanlı bir dizi döner.

//Bu dizi içerisindeki silgiyi görüntülemek istersek:
console.log(kalemlik[0][0]);// Kalemlik dizisinin ilk elemanının birinci elemanı döner yani "silgi" dönmesini bekleriz.


// Kalemlik içerisindeki silgilerin rengini görüntülemek istersek:
console.log(kalemlik[0][2]); // renk kalemlik dizisinin ilk elemanının üçüncü elemanı olduğundan "mavi" döner.


/**** sorular ****/

// 1 - Uygun dizi metotlarını kullanarak  yukarıda verilen dizinin elemanları içinde 10'dan büyük olan elemanların 5'er katından oluşan yeni bir dizi oluşturun. (sonuç [55, 75, 85] olmalı.)

let diziBesKat = [2,5,8,11,15,17];

let ondanBuyuk = diziBesKat.filter(function(onluk){
    return onluk > 8
}) 

console.log(ondanBuyuk);

let beserKati = ondanBuyuk.map(function(beserKat){
    return beserKat *= 5
})

console.log(beserKati);



// 2 - Uygun dizi metotlarını kullanarak, asagidaki dizi için altindaki şartları sağlayan myFunction fonksiyonunu yazın.
// Elemanların arasında 5'ten büyük olan olan bir eleman varsa konsola "Beşten büyük bir eleman mevcut." yoksa "5'ten büyük eleman mevcut değil." yazdır.

let dizi = [3,6,9,14,16];

function myFunction (){
    let bestenBuyuk = dizi.some(function(dizici) {
        return dizici > 5;
    });
    console.log(bestenBuyuk);
    (bestenBuyuk == true) ? console.log("Beşten büyük bir eleman mevcut.") : console.log("5'ten büyük eleman mevcut değil.");
}

myFunction(dizi);

// 3 - Uygun dizi metodunu kullanarak asagida verilen dizinin elemanlarının çarpımının sonucunu (24) veren bir fonksiyon yazınız.

let arrayFold = [2,3,4];

function toplamCarpim (iki, uc,) {
    return iki * uc;
}
const carpimSonuc = arrayFold.reduce(toplamCarpim,1);

console.log(carpimSonuc);